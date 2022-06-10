import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";
import logo from "../../assets/Logo.svg";
import { useHistory } from "react-router-dom";

export default function Welcome() {
  const history = useHistory();

  function handleClick() {
    history.push("/login");
  }

  return (
    <div className=" hero text-center">
      <div className="content">
        <img src={logo} id="logo" alt="Logo" />

        <h1 className="title-hero">Exame de Identificação Veicular</h1>
        <p className="subtitle-hero">
          Para acessar os Exames de Identificação Veículares acesse sua conta:
        </p>
        <Button className="btnyel" type="submit" onClick={handleClick}>
          Entrar
        </Button>
      </div>
    </div>
  );
}
