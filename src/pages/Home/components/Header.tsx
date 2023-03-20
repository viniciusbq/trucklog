import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Home.module.css';
import backgroundObjectImg from '../../../assets/bg-item1.svg';
import logoImg from '../../../assets/truck-log-logo.svg';
import UserLogado from '../../Login/userLogado';

const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.header + ' ' + styles.content}>
          <a href="/">
            <img src={logoImg} alt="Caminhão verde da TruckLog" />
          </a>
          <img
            className={styles.backgroundObject}
            src={backgroundObjectImg}
            alt=""
            aria-hidden
          />
          <nav className={styles['header-nav']}>
            <a href="#">Nossos Dados</a>
            <a href="#">Como funciona</a>
            <a href="#">Benefícios</a>
            <a href="#">FAQ</a>
          </nav>

          <UserLogado />
        </div>
      </header>
    </>
  );
};

export default Header;
