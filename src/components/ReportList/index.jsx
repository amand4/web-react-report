import React, { useEffect, useState } from "react";
import "./styles.css";
import api from "../../services/api";
import TableWrapper from "../TableWrapper";
import { useAuth } from "../../hooks/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export default function ReportList() {
  const { user, token } = useAuth();
  const [reports, setReports] = useState([]);

  const handleDeleteReport = async (id) => {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, apagar laudo",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await api.delete(`/users/${user.id}/reports/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status == 200) {
          Swal.fire(
            "Deletado!",
            "O laudo foi delatado com sucesso!",
            "success"
          );

          loadReports();
        } else {
          toast.error("Erro ao deletar o laudo, contate o adminstrador!");
        }
      }
    });
  };

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    const response = await api.get(`/users/${user.id}/reports`);
    if (response.status == 200) {
      setReports(response.data);
    }
  };

  return (
    <div className="dash-container">
      <h2 className="title">Laudos</h2>
      <TableWrapper list={reports} handleDeleteReport={handleDeleteReport} />
    </div>
  );
}
