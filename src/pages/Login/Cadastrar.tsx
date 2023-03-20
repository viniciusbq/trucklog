import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

interface User {
  nome: string;
  email: string;
  senha: string;
}
var user = {
  nome: '',
  email: '',
  senha: '',
};
const Cadastrar: React.FC = () => {
  const [emailTxt, setEmailTxt] = useState<string>('');
  const [passwordTxt, setPasswordTxt] = useState<string>('');
  const [nameTxt, setNameTxt] = useState<string>('');

  const patternEmailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const patternPassRgx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const user: User = {
      nome: nameTxt.trim(),
      email: emailTxt.trim(),
      senha: passwordTxt.trim(),
    };

    if (user.nome !== '') {
      if (patternEmailRgx.test(user.email)) {
        if (patternPassRgx.test(user.senha)) {
          fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => {
              if (response.ok) {
                alert('Cadastrado!');
                window.location.href = '../../index.html';
              } else {
                alert('Erro ao cadastrar usuário');
              }
            })
            .catch((error) => {
              console.error(error);
              alert('Erro ao cadastrar usuário');
            });
        } else {
          alert('Digite uma senha válida');
        }
      } else {
        alert('Digite um E-mail válido');
      }
    } else {
      alert('Digite um nome');
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <img
            src="https://raw.githubusercontent.com/viniciusbq/trucklog/main/login/assets/truck.png"
            alt="TruckLog"
            className={styles.img_truck}
          />
        </div>
        <div className={styles.login_form}>
          <h1 className={styles.title}>Crie sua conta</h1>
          <h3 className={styles.subtitle}>Insira os dados necessários:</h3>

          <form onSubmit={handleSubmit}>
            <div className={styles.dados}>
              <input
                type="text"
                placeholder="Nome completo"
                name="name"
                id="name"
                data-testid="Nome"
                onChange={(e) => setNameTxt(e.target.value)}
                required
              />
              <i className="fa-solid fa-envelope"></i>

              <input
                type="email"
                placeholder="E-mail"
                name="email"
                data-testid="E-mail"
                onChange={(e) => setEmailTxt(e.target.value)}
                id="email"
                required
              />
              <i className="fa-solid fa-envelope"></i>

              <input
                type="password"
                placeholder="Senha"
                onChange={(e) => setPasswordTxt(e.target.value)}
                name="password"
                id="password"
                data-testid="Senha"
                required
              />
            </div>

            <div className={styles.btn_par}>
              <p className={styles.paragrafo}>
                <a className="form-link" href="/login">
                  Já possui conta?
                </a>
              </p>

              <input
                type="submit"
                className={styles.btn}
                value={'Cadastrar'}
                data-testid="submit-button"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cadastrar;
