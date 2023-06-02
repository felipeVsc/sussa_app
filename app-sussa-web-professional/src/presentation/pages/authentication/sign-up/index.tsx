import React, { useState } from 'react';
import styles from './styles.module.css';
import SussaLogo from '../../../../assets/images/logo-app.png';
import { Button, Input, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,ArrowLeftOutlined } from '@ant-design/icons';
import {  useNavigate  } from 'react-router-dom';
import { domains, inputSchema } from './data';
import { IInputs } from './props';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';


interface cadastroRetorno {
  id: number;
  email: string;
  user_type: string;
}

export const SignUpScreen: React.FC = () => {
  const DEFAULT_DOMAIN = domains[0];
  const [selectedDomain, setSelectedDomain] = useState<string>(DEFAULT_DOMAIN);
  const { handleSubmit, control, formState: { errors } } = useForm<IInputs>({
    resolver: yupResolver(inputSchema)
  });

  const navigate = useNavigate();

  async function realizarRequisicao(dados: IInputs):Promise<cadastroRetorno> {  
    let data = JSON.stringify({
      "email": dados.email + "@ic.ufal.br",
      "password": dados.password,
      "first_name": dados.firstName,
      "last_name": dados.lastName,
      "phone": dados.phone,
      "crp": dados.crp,
      "description": "teste professional",
      "role": "teste role"
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/api/professional/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    return axiosHttpClient.request(config)
    .then((response) => {
      return response.data;
    })
  }


  async function handleSignUp(data: IInputs) {
    if (data.confirmPassword !== data.password) {
      toast.error('Senhas não coincidem!', {
        theme: 'colored'
      });
      return;
    }
    try {
      const response = await realizarRequisicao(data);
      toast.success(`Bem vindo ao SUSSA!`, {
        theme: 'colored'
      });      
      if (response.id) {
        navigate('/login')
      }
    } catch (error) {
      toast.error('Erro ao cadastrar!', {
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
          <ArrowLeftOutlined style={{fontSize: 24}} onClick={() => navigate('/login')}/>
          <Controller
            control={control}
            name='firstName'
            render={({
              field: {onChange, value, name}
            }) => (
              <Input 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.firstName ? 'Nome é obrigatório!' : 'Nome'}
                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.firstName ? 'error' : undefined}
              /> 
            )}
          />
          <Controller
            control={control}
            name='lastName'
            render={({
              field: {onChange, value, name}
            }) => (
              <Input 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.lastName ? 'Sobrenome é obrigatório!' : 'Sobrenome'}
                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.lastName ? 'error' : undefined}
              /> 
            )}
          />
          <Controller
            control={control}
            name='email'
            render={({
              field: {onChange, value, name}
            }) => (
              <Input 
                onChange={onChange}
                value={value}
                addonAfter={selectAfter} 
                name={name}
                placeholder={errors.email ? 'E-mail é obrigatório!' : 'E-mail'}
                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.email ? 'error' : undefined}
              /> 
            )}
          />
          <Controller
            control={control}
            name='phone'
            render={({
              field: {onChange, value, name}
            }) => (
              <Input 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.phone ? 'Celular é obrigatório!' : 'Celular'}
                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.phone ? 'error' : undefined}
              /> 
            )}
          />
          <Controller
            control={control}
            name='crp'
            render={({
              field: {onChange, value, name}
            }) => (
              <Input 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.crp ? 'CRP é obrigatório!' : 'CRP'}

                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.crp ? 'error' : undefined}
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

          <Controller
            control={control}
            name='confirmPassword'
            render={({
              field: {onChange, value, name}
            }) => (
              <Input.Password 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.email ? 'Confirmação de senha é obrigatória!' : 'Confirmação de senha'}
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
            onClick={handleSubmit(handleSignUp)}
          >
            Cadastrar
          </Button>
        </div>
      </div>
      <div className={styles.bannerContainer} />
   </div> 
  );
};
