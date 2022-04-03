import React, { useEffect, useState } from "react";
import Table from "./Table";
import { useAuth } from "../../../hooks/AuthContext";

const TableContainer = function ({ data, handleDeleteReport }) {
  const { token } = useAuth();

  const [current, setcurrent] = useState(1);
  const [paginatedData, setpaginatedData] = useState([]);
  const itemsPerPage = 6;
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setcurrent(number);
    changePaginatedData(number);
  };

  const changePaginatedData = (index = current) => {
    pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    const indexOfLastTodo = index * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    setpaginatedData(data.slice(indexOfFirstTodo, indexOfLastTodo));
  };

  useEffect(() => {
    setcurrent(1);
    changePaginatedData(1);
  }, [data]);

  return (
    <>
      <Table
        data={paginatedData}
        token={token}
        handleDeleteReport={handleDeleteReport}
      />
      <div className="pagination">
        {pageNumbers.map((number) => (
          <span
            key={number}
            onClick={(e) => handleClick(number)}
            className={current ? "active" : ""}
          >
            {number}
          </span>
        ))}
      </div>
    </>
  );
};

export default TableContainer;
