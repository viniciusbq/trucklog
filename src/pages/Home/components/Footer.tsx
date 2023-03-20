import React from 'react';
import styles from '../Home.module.css';
import logoImg from '../../../assets/truck-log-logo.svg';

const Footer = () => {
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.footer + ' ' + styles.content}>
          <ul>
            <li>
              <a href="#">Benefícios</a>
            </li>
            <li>
              <a href="#">Dados</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">
                <img src={logoImg} alt="" />
              </a>
            </li>
            <li>
              <a href="#">Parceiros</a>
            </li>
            <li>
              <a href="#">Taxas</a>
            </li>
            <li>
              <a href="#">Contrate</a>
            </li>
          </ul>
          <hr />
          <p>
            2010 - 2022 <a href="#">Privacy - Terms</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
