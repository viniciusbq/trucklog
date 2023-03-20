import React from 'react';
import { useState, useEffect } from 'react';
import styles from './index.module.css';
import Botao from './Button/index';
import Cadastrar from './Cadastrar';
import Header from '../Home/components/Header';
import Footer from '../Home/components/Footer';
import logoImg from './assets/truck-log-logo.svg';

interface User {
  nome: string;
  email: string;
  senha: string;
}

let userValid: User = {
  email: '',
  nome: '',
  senha: '',
};

const Logar: React.FC = () => {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => setShowElement(true);

  const handleMostrarCadastro = () => {
    setMostrarCadastro(true);
  };

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setUsers(data))
      .catch((error) => '');
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (email === '') {
      window.alert('Digite um E-mail!');
    } else if (password === '') {
      window.alert('Digite uma senha!');
    } else {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].senha === password) {
          console.log('login válido');
          userValid = {
            nome: users[i].nome,
            email: users[i].email,
            senha: users[i].senha,
          };
          //const token = jwt.sign({email: data[i].email}, SECRET, {expiresIn: 300});
          let token =
            Math.random()
              .toString(16)
              .substring(2) +
            Math.random()
              .toString(16)
              .substring(2);
          localStorage.setItem('token', token);
          localStorage.setItem('userLogado', JSON.stringify(userValid));
          window.location.href = '/';
          break;
        } else {
          console.log('Email ou senha inválidos');
        }
      }
    }
  };

  return (
    <div className={styles.body}>
      <a href="/">
        <img
          src={logoImg}
          className={styles.imagem}
          alt="Caminhão verde da TruckLog"
        />
      </a>
      {mostrarCadastro ? (
        <Cadastrar />
      ) : (
        <div className={styles.container}>
          <div>
            <img
              src="https://raw.githubusercontent.com/viniciusbq/trucklog/main/login/assets/truck.png"
              alt="TruckLog"
              className={styles.img_truck}
            />
          </div>
          <div className={styles.login_form}>
            <h1 className={styles.title}>Login</h1>
            <h3 className={styles.subtitle}>Insira seus dados de acesso:</h3>

            <form onSubmit={handleSubmit}>
              <div className={styles.dados}>
                <input
                  type="email"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  data-testid="email"
                />
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  name="password"
                  data-testid="password"
                />
              </div>
              <div className={styles.btn_par}>
                <input
                  type="submit"
                  className={styles.btn}
                  value={'Entrar'}
                  data-testid="submit-button"
                />
              </div>
            </form>
            <Botao handleMostrarCadastro={handleMostrarCadastro} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Logar;
