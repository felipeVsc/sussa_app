import React, { useState } from 'react';
import styles from './styles.module.css';
import SussaLogo from '../../../../assets/images/logo-app.png';
import { Button, Input, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { domains, inputSchema } from './data';
import { IInputs } from './props';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthentication } from '../../../context/authentication';
import { toast } from 'react-toastify';
import axios from 'axios';

interface IProfessional {
  id: number;
  first_name: string;
  last_name: string;
  crp: string;
  status: string;
  email: string;
}

interface IToken {
  token: string;
  professional: IProfessional;
}

export const SignInScreen: React.FC = () => {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const DEFAULT_DOMAIN = domains[0];
  const [selectedDomain, setSelectedDomain] = useState<string>(DEFAULT_DOMAIN);
  const { handleSubmit, control, formState: { errors } } = useForm<IInputs>({
    resolver: yupResolver(inputSchema)
  });

  const navigate = useNavigate();
  
  const {authenticate} = useAuthentication();

  const axiosInstance = axios.create();


  async function makeRequest(dados: IInputs):Promise<IToken> {
    const url = 'http://134.209.119.236:8000/api/web/auth/';
    const headers = {
      'Content-Type': 'application/json'
    };
    const data = {
      username: dados.email + "@ic.ufal.br",
      password: dados.password
    };

    const response = await axiosInstance.post(url, data, { headers });
    return response.data;
  }

  async function handleAuth(data: IInputs) {
    try {
      const {professional} = await authenticate({
        username: `${data.email}${selectedDomain}`,
        password: data.password 
      });
      let response = await makeRequest(data);
      toast.success(`Bem vindo de volta, ${professional.firstName} ${professional.lastName}!`, {
        theme: 'colored'
      });      
      if (response.token) {
        setToken(response.token);
        localStorage.setItem("token", response.token);

        setUsername(response.professional.first_name);
        localStorage.setItem("@username", response.professional.first_name);

        navigate('/app');
      }
    } catch (error) {
      toast.error('Erro ao logar!', {
        theme: 'colored'
      });
    }

  }

  const selectAfter = (
    <Select defaultValue={DEFAULT_DOMAIN} onChange={domain => setSelectedDomain(domain)}>
      {domains.map(domain => <Select.Option key={domain} value={domain}>{domain}</Select.Option>)}
    </Select>
  );

  return (
   <div className={styles.signInContainer}>
      <div className={styles.contentContainer}>
        <img 
          src={
            SussaLogo
          }
          alt="Sussa logo"
        />
        <div className={styles.inputsContainer}>
          <Controller
            control={control}
            name='email'
            render={({
              field: {onChange, value, name}
            }) => (
              <Input 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.email ? 'E-mail é obrigatório!' : 'E-mail'}
                addonAfter={selectAfter} 
                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.email ? 'error' : undefined}
              /> 
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({
              field: {onChange, value, name}
            }) => (
              <Input.Password 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.email ? 'Senha é obrigatória!' : 'Senha'}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.password ? 'error' : undefined}
              />
            )}
          />
          <Button 
            type="primary" 
            size='large' 
            block 
            style={{marginTop: '2.4rem', backgroundColor: '#9279FE'}}
            onClick={handleSubmit(handleAuth)}
          >
            Entrar
          </Button>
        </div>
        <p className={styles.signUpText}>Não possui login? <Link to="/cadastrar"><b className={styles.linkText}>Cadastrar.</b></Link></p>
      </div>
      <div className={styles.bannerContainer} />
   </div> 
  );
};
