
import React from 'react'

import '../../../../assets/styles/app.css'
import { DashboardContainerComponent } from '../../../components/dashboard-container';
import styles from './styles.module.css'
import { getFullName } from '../../../../shared/utils/getFullName';
import { useAuthentication } from '../../../context/authentication';
import { useNavigate } from 'react-router-dom';
import { Avatar, Card, List, Skeleton } from 'antd';
import {UserOutlined, RightOutlined, KeyOutlined, ArrowLeftOutlined} from '@ant-design/icons';


export const AboutTheApp: React.FC = () => {
  const {profile} = useAuthentication();

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
                <h1 className={styles.studentName}>Sobre o App</h1>
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
                      description="Lorem ipsum dolor sit amet..."
                    />
                  </Skeleton>
              </List.Item>
            )}
          />
        </main>
    </DashboardContainerComponent>
  );
};
