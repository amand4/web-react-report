import React from "react";
import SideMenu from "../../components/SideNav";
import Header from "../../components/Header";
import SeletorVeiculo from "../../components/SeletorVeiculo";
import ListaLaudo from "../../components/ListaLaudo";
import "./styles.css";

export default function Dashboard() {
  return (
    <div id="dashboard-main">
      <Header />
      <SideMenu />
      <SeletorVeiculo />
      <ListaLaudo />
    </div>
  );
}
