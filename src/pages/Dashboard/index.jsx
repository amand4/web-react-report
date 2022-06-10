import React from "react";
import SideMenu from "../../components/SideNav";
import Header from "../../components/Header";
import VehicleCard from "../../components/VehicleCard";
import ReportList from "../../components/ReportList";
import "./styles.css";

export default function Dashboard() {
  return (
    <div id="dashboard-main">
      <Header />
      <SideMenu />
        <VehicleCard />
        <ReportList />
    </div>
  );
}
