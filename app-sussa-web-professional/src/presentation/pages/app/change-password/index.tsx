import React, { useState } from 'react';
import '../../../../assets/styles/app.css'
import { DashboardContainerComponent } from '../../../components/dashboard-container';
import styles from './styles.module.css'
import { getFullName } from '../../../../shared/utils/getFullName';
import { useAuthentication } from '../../../context/authentication';
import { useNavigate } from 'react-router-dom';
import { Avatar, Card, List, Skeleton } from 'antd';
import {UserOutlined, RightOutlined, KeyOutlined,} from '@ant-design/icons';

import SussaLogo from '../../../../assets/images/logo-app.png';
import { Button, Input, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,ArrowLeftOutlined } from '@ant-design/icons';
import { domains, inputSchema } from './data';
import { IInputs } from './props';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

export const ChangePasswordScreen: React.FC = () => {
  const {profile} = useAuthentication();
  const DEFAULT_DOMAIN = domains[0];
  const [selectedDomain, setSelectedDomain] = useState<string>(DEFAULT_DOMAIN);
  const { handleSubmit, control, formState: { errors } } = useForm<IInputs>({
    resolver: yupResolver(inputSchema)
  });

  const navigate = useNavigate();
  if (!profile) {
    navigate('/app'); 
    return <></>
  };

  const data = [
    {
      action: () => navigate('/app/termos-de-uso'),
      title: 'Termos de Uso',
      icon: <UserOutlined />
    },
    {
      action: () => navigate('/app/politica-de-privacidade'),
      title: 'Política de Privacidade',
      icon: <KeyOutlined />
    }
  ];



  return (
    <DashboardContainerComponent>
        <main className={styles.content}>
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <ArrowLeftOutlined style={{fontSize: 24, marginRight: '1.2rem'}} onClick={() => navigate(-1)}/>

              <div className={styles.headerTextContent}>
                <h1 className={styles.studentName}>Troca de Senha</h1>
              </div>
            </div>
          </header> 
          <div className={styles.signInContainer}>
      <div className={styles.contentContainer} style={{marginLeft:'10%'}}>
        <div className={styles.inputsContainer}>
        <Controller
            control={control}
            name='password'
            render={({
              field: {onChange, value, name}
            }) => (
              <div><p style={{fontSize:'1.7em', margin:'0', marginTop:'10px'}}>Senha atual</p>
              <Input.Password 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.email ? 'Senha é obrigatória!' : 'Senha'}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.password ? 'error' : undefined}
              /></div>
            )}
          />
          <Controller
            control={control}
            name='password'
            render={({
              field: {onChange, value, name}
            }) => (
              <div><p style={{fontSize:'1.7em', margin:'0', marginTop:'10px'}}>Nova senha</p>
              <Input.Password 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.email ? 'Senha é obrigatória!' : 'Senha'}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.password ? 'error' : undefined}
              /></div>
            )}
          />

          <Controller
            control={control}
            name='confirmPassword'
            render={({
              field: {onChange, value, name}
            }) => (
              <div><p style={{fontSize:'1.7em', margin:'0', marginTop:'10px'}}>Confirmação da senha</p>
              <Input.Password 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.email ? 'Confirmação de senha é obrigatória!' : 'Confirmação de senha'}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.password ? 'error' : undefined}
              /></div>
            )}
          />
          <Button 
            type="primary" 
            size='large' 
            block 
            style={{marginTop: '2.4rem', backgroundColor: '#9279FE'}}
            //onClick={handleSubmit(handleSignUp)}
          >
            Atualizar
          </Button>
        </div>
      </div>
      <div className={styles.bannerContainer} />
   </div> 
        </main>
    </DashboardContainerComponent>
  );
};
