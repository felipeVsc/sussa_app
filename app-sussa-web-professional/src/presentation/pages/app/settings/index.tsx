
import React from 'react'

import '../../../../assets/styles/app.css'
import { DashboardContainerComponent } from '../../../components/dashboard-container';
import styles from './styles.module.css'
import { getFullName } from '../../../../shared/utils/getFullName';
import { useAuthentication } from '../../../context/authentication';
import { useNavigate } from 'react-router-dom';
import { Avatar, Card, List, Skeleton } from 'antd';
import {UserOutlined, RightOutlined, KeyOutlined, InfoCircleOutlined} from '@ant-design/icons';


export const Settings: React.FC = () => {
  const {profile} = useAuthentication();

  const navigate = useNavigate();
  if (!profile) {
    navigate('/app'); 
    return <></>
  };

  const data = [
    {
      action: () => navigate('/app/dados-cadastrais'),
      title: 'Dados Cadastrais',
      icon: <UserOutlined />
    },
    {
      action: () => navigate('/app/trocar-senha'),
      title: 'Troca de Senha',
      icon: <KeyOutlined />
    },
    {
      action: () => navigate('/app/sobre-o-app'),
      title: 'Sobre o App',
      icon: <InfoCircleOutlined />
    }
  ];



  return (
    <DashboardContainerComponent>
        <main className={styles.content}>
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <img className={styles.profilePhoto} src={profile?.professional.photo || `https://ui-avatars.com/api/?background=FFD79C&name=${getFullName(profile?.professional)}`} alt="" />
              <div className={styles.headerTextContent}>
                <h1 className={styles.studentName}>{getFullName(profile?.professional)}</h1>
              </div>
            </div>
          </header> 
          <List
            itemLayout="horizontal"
            dataSource={data}
            style={{
              width: '100%',
              marginTop: '2.4rem'
            }}
            renderItem={(item) => (
              <List.Item
                actions={[<RightOutlined />]}
                onClick={item.action}
                style={{backgroundColor: '#fff', padding: '1.6rem', cursor: 'pointer'}}
              >
                  <Skeleton avatar title={false} loading={false} active>
                    <List.Item.Meta
                      avatar={item.icon}
                      title={<p style={{margin: 0}}>{item.title}</p>}
                    />
                  </Skeleton>
              </List.Item>
            )}
          />
        </main>
    </DashboardContainerComponent>
  );
};
