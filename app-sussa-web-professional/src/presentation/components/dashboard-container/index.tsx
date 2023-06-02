import React from 'react';
import { SidebarComponent } from '../sidebar';
import { IDashboardContainerComponentProps } from './props';
import styles from './styles.module.css';

export const DashboardContainerComponent: React.FC<IDashboardContainerComponentProps> = ({children}) => {
  return <div className={styles.dashboardContainer}>
    <SidebarComponent />
    {children}
  </div>;
}
