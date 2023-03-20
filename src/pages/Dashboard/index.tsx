import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Header from '../Home/components/Header';
import Footer from '../Home/components/Footer';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface UserProps {
  name: string;
}
const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setUsers(data))
      .catch((error) => '');
  }, []);

  const handleSearch = () => {
    const filteredUsers = users.filter(
      (user) => user.username.toLowerCase() === searchTerm.toLowerCase()
    );
    setUsers(filteredUsers);
  };

  return (
    <>
      <Header />
      <h1 className={styles.title}>Dashboard</h1>
      <h4 className={styles.lkl}>
        Fique por dentro de tudo e de todos que usam o TruckLog
      </h4>
      <div className={styles.search_bar}>
        <input
          className={styles.search}
          type="text"
          placeholder="Pesquise pelo User"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className={styles.btn_search} onClick={handleSearch}>
          Pesquisar
        </button>
      </div>
      <div className={styles.container}>
        {users.map((user) => {
          return (
            <div className={styles.card} key={user.username}>
              <h2 className={styles.nome}>{user.name}</h2>
              <div className={styles.name_email}>
                <p className={styles.username}>@{user.username}</p>
                <p className={styles.email}>{user.email}</p>
              </div>
              <p className={styles.company}>Empresa: {user.company.name}</p>
              <p className={styles.company_bs}>{user.company.bs}</p>
              <p className={styles.frase}>"{user.company.catchPhrase}"</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Users;
