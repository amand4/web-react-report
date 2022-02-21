import React, { useEffect } from "react";
import "./styles.css";
import api from "../../services/api";
import TableWrapper from "../TableWrapper";
import { useAuth } from "../../hooks/AuthContext";

export default function ListaLaudo() {
  const { user, token } = useAuth();

  const [reports, setReports] = React.useState([]);
  useEffect(() => {
    async function loadReports() {
      const response = await api.get(`/users/${user.id}/reports`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReports(response.data);
    }
    loadReports();
  }, []);

  return (
    <div className="dash-container" style={{ paddingBottom: "40px" }}>
      <h2 className="title">Laudos</h2>
      <TableWrapper list={reports} />
    </div>
  );
}
