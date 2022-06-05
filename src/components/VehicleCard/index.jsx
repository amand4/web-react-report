import React from "react";
import { ReactComponent as IconCaminhao } from "../../assets/caminhao.svg";
import { ReactComponent as IconCarro } from "../../assets/carro.svg";
import { ReactComponent as IconMoto } from "../../assets/moto.svg";
import { ReactComponent as IconReboque } from "../../assets/semireboque.svg";
import { ReactComponent as IconOutros } from "../../assets/outros.svg";

import "./styles.css";

export default function VehicleCard() {
  return (
    <div className="dash-container" style={{ paddingBottom: "30px" }}>
      <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <h2 className="title">Cadastrar novo laudo</h2>
      </div>
      <div className="optionsVehicle-container">
        <ul className="optionsVehicle-container-list">
          <li>
            {" "}
            <button className="btn-veiculo">
              <IconCarro fill="#fff" className="iconVeiculo" />
              Carro
            </button>{" "}
          </li>
          <li>
            {" "}
            <button className="btn-veiculo">
              <IconMoto fill="#fff" className="iconVeiculo" />
              Moto
            </button>{" "}
          </li>
          <li>
            {" "}
            <button className="btn-veiculo">
              <IconReboque fill="#fff" className="iconVeiculo" />
              Semireboque
            </button>{" "}
          </li>
          <li>
            {" "}
            <button className="btn-veiculo">
              <IconCaminhao fill="#fff" className="iconVeiculo" />
              Caminhão
            </button>{" "}
          </li>
          <li>
            {" "}
            <button className="btn-veiculo">
              <IconOutros fill="#fff" className="iconVeiculo" />
              Outros
            </button>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
