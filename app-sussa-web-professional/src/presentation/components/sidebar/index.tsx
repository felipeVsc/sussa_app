import React from 'react';
import { Layout, Menu } from 'antd';
import SussaLogo from '../../../assets/images/logo-app.png';
import './Sidebar.css';
import { SidebarItems } from './data';
import { Link, useLocation } from 'react-router-dom';

export const SidebarComponent: React.FC = () => {
  const { pathname: currentRoute } = useLocation();

  const selectedKey = SidebarItems.findIndex(item => item.route === currentRoute);

  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      <img 
        src={
          SussaLogo
        }
        alt="Sussa logo"
      />
    <Menu mode="inline" selectedKeys={!isNaN(Number(selectedKey)) ? [String(selectedKey)] : []}>
      {
        SidebarItems.map((item, index) => {
          return (
            <Menu.Item key={index}>
              <Link to={item.route}>
                {item.name}
              </Link>
            </Menu.Item>
          )          
        })
      }
    </Menu>
    </Layout.Sider>
  );
}
