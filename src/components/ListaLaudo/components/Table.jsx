import React from "react";

import api from "../../../services/api";
import { ReactComponent as IconDownload } from "../../../assets/download.svg";
import { ReactComponent as IconDelete } from "../../../assets/erase.svg";
import { ReactComponent as IconEdit } from "../../../assets/edit.svg";
import { ReactComponent as IconLaudo } from "../../../assets/laudo.svg";

const index = ({ data }) => {
  const headers = ["", "Rep", "Oficio", "Cidade", "Orgão Solicitante", "Ação"];

  const handlerGenerateDocument = async (id) => {
    const response = await api.get(`/reports/doc/${id}`, {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjQ0MTgxNzU1fQ.KNNc9EdJiTXaKwSpKRb-3SDpMuMchVZAVHtdSFV6vvQ",
      },
    });

    if (response.status === 200) {
      console.log("doc gerado");
    }
    if (response.status === 401) {
      console.log("Não foi possivel gerar o doc");
    }
  };

  return (
    <div>
      <table className="styled-table">
        <thead thead className="corner-left">
          <tr>
            {headers.map((el, index) => (
              <th key={index}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el}>
              <td>
                {" "}
                <IconLaudo />
              </td>
              <td> {el.rep}</td>
              <td>{el.office}</td>
              <td>{el.city_id}</td>
              <td>{el.type_inquiry_id}</td>
              <td>
                <div className="action-group">
                  <button className="btn-action edit">
                    <IconEdit fill="#70AFE4" />
                  </button>

                  <button
                    onClick={() => handlerGenerateDocument(el.id)}
                    className="btn-action download"
                  >
                    {" "}
                    <IconDownload fill="#C4C4C4" />
                  </button>
                  <button className="btn-action delete">
                    <IconDelete fill="#DC3545" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default index;
