import React, { useState } from 'react';
import styles from './styles.module.css';
import { Button, Input, Select } from 'antd';
import {  useNavigate} from 'react-router-dom';
import { domains, inputSchema } from './data';
import { IInputs } from './props';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import '../../../../assets/styles/app.css'
import { DashboardContainerComponent } from '../../../components/dashboard-container';
import {UserOutlined, RightOutlined, KeyOutlined, ArrowLeftOutlined} from '@ant-design/icons';
import '../../../../assets/styles/app.css'

import { useAuthentication } from '../../../context/authentication';



export const AccountDataScreen: React.FC = () => {
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
                <h1 className={styles.studentName}>Dados Cadastrais</h1>
              </div>
            </div>
          </header> 
      <div className={styles.signInContainer}>
        <div className={styles.contentContainer} style={{marginLeft:'10%'}}>
          <div className={styles.inputsContainer} >
          
          <Controller
            control={control}
            name='firstName'
            render={({
              field: {onChange, value, name}
            }) => (
              <div><p style={{fontSize:'1.7em', margin:'0', marginTop:'10px'}}>Nome</p>
              <Input 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.firstName ? 'Nome é obrigatório!' : 'Nome'}
                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.firstName ? 'error' : undefined}
              /> </div>
            )}
          />
          <Controller
            control={control}
            name='lastName'
            render={({
              field: {onChange, value, name}
            }) => (
              <div><p style={{fontSize:'1.7em', margin:'0', marginTop:'10px'}}>Sobrenome</p>
              <Input 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.lastName ? 'Sobrenome é obrigatório!' : 'Sobrenome'}
                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.lastName ? 'error' : undefined}
              /></div> 
            )}
          />
          <Controller
            control={control}
            name='email'
            render={({
              field: {onChange, value, name}
            }) => (
              <div><p style={{fontSize:'1.7em', margin:'0', marginTop:'10px'}}>E-mail</p>
              <Input 
                onChange={onChange}
                value={value}
                //addonAfter={selectAfter} 
                name={name}
                placeholder={errors.email ? 'E-mail é obrigatório!' : 'E-mail'}
                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.email ? 'error' : undefined}
              /> </div>
            )}
          />
          <Controller
            control={control}
            name='phone'
            render={({
              field: {onChange, value, name}
            }) => (
              <div><p style={{fontSize:'1.7em', margin:'0', marginTop:'10px'}}>Celular</p>
              <Input 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.phone ? 'Celular é obrigatório!' : 'Celular'}
                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.phone ? 'error' : undefined}
              /> </div>
            )}
          />
          
          <Controller
            control={control}
            name='crp'
            render={({
              field: {onChange, value, name}
            }) => (
              <div><p style={{fontSize:'1.7em', margin:'0', marginTop:'10px'}}>CRP</p>
              <Input 
                onChange={onChange}
                value={value}
                name={name}
                placeholder={errors.crp ? 'CRP é obrigatório!' : 'CRP'}

                size='large'
                style={{marginTop: '1.6rem', width: '30rem'}}
                status={errors.crp ? 'error' : undefined}
              /> </div>
            )}
          />
          

          <Button 
            type="primary" 
            size='large' 
            block 
            style={{marginTop: '2.4rem', backgroundColor: '#9279FE'}}
          >
            Atualizar
          </Button>
        </div>
      </div>
    </div>
    </main>
    </DashboardContainerComponent>
  );
};
