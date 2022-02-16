import React, { useEffect } from "react";
import "./styles.css";
import api from "../../services/api";
import TableWrapper from "../TableWrapper";

// const user = localStorage.getItem('user')

export default function ListaLaudo() {
  const [reports, setReports] = React.useState([]);

  useEffect(() => {
    async function loadReports() {
      const response = await api.get("/users/4/reports");
      setReports(response.data);
    }
    loadReports();
  }, []);

  return (
    <div className="dash-container" style={{ paddingBottom: "30px" }}>
      <h2 className="title">Laudos</h2>
      <TableWrapper />
    </div>
  );
}
