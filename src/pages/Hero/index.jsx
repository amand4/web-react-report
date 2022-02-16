import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';
import logo from '../../assets/Logo.svg';

export default function Hero({ history }) {
  function handleClick() {
    history.push('/login');
  }

  return (
    <div className="container hero text-center">
      <img src={logo} id="logo" alt="Logo" />
      <div  className="content">
        <h1 className="title-hero">Exame de Identificação Veicular</h1>
        <p className="subtitle-hero">
          Para iniciar o Exame de Identificação
          <br />
          Veícular crie uma conta ou   acesse sua
          <br />
          conta ja criada :  
        </p>
        <Button className="btnyel" type="submit" onClick={handleClick}>Entrar</Button>

      </div>
    </div>
  );
}
