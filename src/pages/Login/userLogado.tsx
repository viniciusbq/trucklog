import React, { useState, useEffect, useCallback } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import styles from './userLogado.module.css';
interface User {
  nome: string;
  email: string;
  senha: string;
}

interface LoginProps {
  userLogado?: User | null;
}

const UserLogado: React.FC<LoginProps> = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userLogadoData = localStorage.getItem('userLogado');
    if (userLogadoData) {
      setUser(JSON.parse(userLogadoData));
    }
  }, []);
  console.log(user);

  const verificarLogin = useCallback(() => {
    if (user != null) {
      window.location.href = '/dashboard';
    } else {
      window.location.href = '/login';
    }
  }, [user]);

  function deslogar(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    document.location.href = '/';
  }
  return (
    <>
      {user != null ? (
        <Dropdown>
          <Dropdown.Toggle className={styles.btn} id="dropdown-user">
            {user.nome}
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles.menu}>
            <Dropdown.Item className={styles.menu} href="/dashboard">
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item className={styles.menu} onClick={deslogar}>
              Sair
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Button
          variant="success"
          className={styles.btn}
          id="login-btn"
          onClick={verificarLogin}
        >
          Entrar
        </Button>
      )}
    </>
  );
};

export default UserLogado;
