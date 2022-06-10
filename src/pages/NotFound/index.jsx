import React from "react";
import "./styles.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import imgNotFound from "../../assets/404.png";

export default function NotFound() {
  const history = useHistory();
  function handleClick() {
    history.push("/dashboard");
  }
  return (
    <div className="container-404 text-center ">
      <h2>Oops, página não encontrada!!</h2>
      <img src={imgNotFound} alt="404" className="img404" />
      <Button className="btn-404" onClick={handleClick}>
        Voltar
      </Button>
    </div>
  );
}
