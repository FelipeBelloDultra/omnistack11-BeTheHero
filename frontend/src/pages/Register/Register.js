import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg';

const Register = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    const data = ({
      name,
      email,
      whatsapp,
      city,
      uf
    });

    try {
      const response = await api.post('ongs', data);
  
      alert(`Seu ID de acesso: ${response.data.id}`);   
      
      history.push('/');
    } catch (error) {
      alert(`Erro no cadastro: ${error}`) ;
    };
  }

  return (
    <div
      className="register-container"
    >
      <div
        className="content"
      >
        <section>
          <img
            src={logoImg}
            alt="Be The Hero" />

          <h1>Cadastre-se</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link
            className="back-link"
            to="/"
          >
            <FiArrowLeft
              size={16}
              color="#e02041" />
            Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Nome da ONG" />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email" placeholder="E-mail" />
          <input
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            placeholder="WhatsApp" />
          <div
            className="input-group"
          >
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder="Cidade" />
            <input
              value={uf}
              onChange={(event) => setUf(event.target.value)}
              placeholder="UF"
              style={{ width: 80 }} />
          </div>
          <button
            className="button"
            type="submit"
          >
            Cadastrar
            </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
