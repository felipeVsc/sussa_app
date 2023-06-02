
import React from 'react'

import '../../../../assets/styles/app.css'
import { DashboardContainerComponent } from '../../../components/dashboard-container';
import styles from './styles.module.css'
import { getFullName } from '../../../../shared/utils/getFullName';
import { useAuthentication } from '../../../context/authentication';
import { useNavigate } from 'react-router-dom';
import { Avatar, Card, List, Skeleton } from 'antd';
import {UserOutlined, RightOutlined, KeyOutlined, ArrowLeftOutlined} from '@ant-design/icons';


export const PrivacyPolicyScreen: React.FC = () => {
  const {profile} = useAuthentication();

  const navigate = useNavigate();
  if (!profile) {
    navigate('/app'); 
    return <></>
  };


  return (
    <DashboardContainerComponent>
        <main className={styles.content}>
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <ArrowLeftOutlined style={{fontSize: 24, marginRight: '1.2rem'}} onClick={() => navigate(-1)}/>

              <div className={styles.headerTextContent}>
                <h1 className={styles.studentName}>Política de Privacidade</h1>
              </div>
            </div>
          </header> 
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </main>
    </DashboardContainerComponent>
  );
};
