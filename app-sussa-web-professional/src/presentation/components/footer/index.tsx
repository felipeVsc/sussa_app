import React from 'react';
import SussaLogoWhite from '../../../assets/images/logo-white.png';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.sussaFooter}>
      <img src={SussaLogoWhite} />
      <h2>Sussa - Suporte à Saúde Mental, 2023.</h2>
    </footer> 
  );
};
  
export default Footer;