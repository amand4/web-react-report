import React from "react";
import { ReactComponent as IconDownload } from "../../../assets/download.svg";
import { ReactComponent as IconDelete } from "../../../assets/erase.svg";
import { ReactComponent as IconEdit } from "../../../assets/edit.svg";
import { ReactComponent as IconLaudo } from "../../../assets/laudo.svg";

const index = ({ data }) => {
  const headers = ["", "Rep", "Oficio", "Cidade", "Orgão Solicitante", "Ação"];

  return (
    <div>
      <table className="styled-table">
        <thead thead="true" className="corner-left">
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((report, index) => (
            <tr key={index}>
              <td>
                <IconLaudo />
              </td>
              <td> {report.rep}</td>
              <td>{report.office}</td>
              <td>{report.city_id}</td>
              <td>{report.type_inquiry_id}</td>
              <td>
                <div className="action-group">
                  <button className="btn-action edit">
                    <IconEdit fill="#70AFE4" />
                  </button>
                  <button className="btn-action download">
                    <a
                      href={`http://api.tcc.1hp.racing/v1/reports/doc/${report.id}`}
                    >
                      <IconDownload fill="#C4C4C4" />
                    </a>
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
