import React, { useEffect } from "react";
import "./styles.css";
import api from "../../services/api";
import TableWrapper from "../TableWrapper";
import { useAuth } from "../../hooks/AuthContext";

export default function ListaLaudo() {
  const { user, token } = useAuth();

  const [reports, setReports] = React.useState([]);

  const handleDeleteReport = async (id) => {
    const response = await api.delete(`/users/${user.id}/reports/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status == 200) {
      updateReport();
      console.log("deu noa");
    } else {
      console.log("deu ruim");
    }
  };

  async function updateReport() {
    const response = await api.get(`/users/${user.id}/reports`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      setReports(response.data);
    }
  }
  useEffect(() => {
    async function loadReports() {
      const response = await api.get(`/users/${user.id}/reports`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status == 200) {
        setReports(response.data);
      }
    }
    loadReports();
  }, []);

  return (
    <div className="dash-container" style={{ paddingBottom: "40px" }}>
      <h2 className="title">Laudos</h2>
      <TableWrapper list={reports} handleDeleteReport={handleDeleteReport} />
    </div>
  );
}
