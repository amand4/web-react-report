import React, { useState } from "react";
import TableContainer from "../ReportList/components/TableContainer";

const TableWrapper = ({ list, handleDeleteReport }) => {
  const [search, setsearch] = useState("");
  const [searchData, setsearchData] = useState(list);

  const handleSearch = (text) => {
    setsearch(text.trim());
    setsearchData(
      list.filter((item) => {
        const repConverted = String(item.rep);
        if (repConverted.includes(text.trim())) return item;
      })
    );
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          name="search"
          className="round"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Digite o número da REP"
        />
        <input type="submit" className="corner" value="" />
      </div>

      <TableContainer
        data={search ? searchData : list}
        handleDeleteReport={handleDeleteReport}
      />
    </div>
  );
};

export default TableWrapper;
