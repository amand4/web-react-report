import React from "react";
import { ReactComponent as IconCaminhao } from "../../assets/caminhao.svg";
import { ReactComponent as IconCarro } from "../../assets/carro.svg";
import { ReactComponent as IconMoto } from "../../assets/moto.svg";
import { ReactComponent as IconReboque } from "../../assets/semireboque.svg";
import { ReactComponent as IconOutros } from "../../assets/outros.svg";

import "./styles.css";

export default function New() {
  return (
    <div className="dash-container" style={{ paddingBottom: "30px" }}>
      <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <h2 className="title">Cadastrar novo laudo</h2>
      </div>

      <a href="./form">
        <button className="btn-veiculo">
          <IconCarro fill="#3EC5CC" className="iconVeiculo" />
          <br />
          Carro
        </button>
      </a>
      <a href="./form">
        {" "}
        <button className="btn-veiculo">
          <IconMoto fill="#3EC5CC" className="iconVeiculo" />
          <br />
          Moto
        </button>
      </a>
      <a href="./form">
        {" "}
        <button className="btn-veiculo">
          <IconReboque fill="#3EC5CC" className="iconVeiculo" />
          <br />
          Semireboque
        </button>
      </a>
      <a href="./form">
        {" "}
        <button className="btn-veiculo">
          <IconCaminhao fill="#3EC5CC" className="iconVeiculo" /> <br />
          Caminhão
        </button>
      </a>
      <a href="./form">
        {" "}
        <button className="btn-veiculo">
          <IconOutros fill="#3EC5CC" className="iconVeiculo" /> <br />
          Outros
        </button>
      </a>
    </div>
  );
}
