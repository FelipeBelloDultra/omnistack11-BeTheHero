import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

const Logon = () => {
  const history = useHistory();

  const [id, setId] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      
      history.push('/profile');
    } catch (error) {
      alert('ID incorreto, tente novamente!!!');
      setId('');
    };
  };

  return (
    <div
      className="logon-container"
    >
      <section
        className="form"
      >
        <img
          src={logoImg}
          alt="Be The Hero"
        />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            value={id}
            onChange={(event) => setId(event.target.value)}
            placeholder="Sua ID" />
          <button
            className="button"
            type="submit"
          >
            Entrar
          </button>
          <Link
            className="back-link"
            to="/register"
          >
            <FiLogIn
              size={16}
              color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};

export default Logon;
