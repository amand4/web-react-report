import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import TableContainer from "../ListaLaudo/components/TableContainer";

const TableWrapper = ({ list, handleDeleteReport }) => {
  const [search, setsearch] = useState("");
  const [searchData, setsearchData] = useState([]);

  const changeSearchData = (text) => {
    setsearchData(list.filter((item) => item.rep.includes(text)));
  };

  const debounceLoadData = useCallback(debounce(changeSearchData, 500), []);

  const handleSearch = (text) => {
    setsearch(text);
    debounceLoadData(text);
  };

  return (
    <div>
      {/* <div className="search">
        <input
          type="text"
          name="search"
          className="round"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Digite o número da REP"
        />
        <input type="submit" className="corner" value="" />
      </div> */}

      <TableContainer
        data={search ? searchData : list}
        handleDeleteReport={handleDeleteReport}
      />
    </div>
  );
};

export default TableWrapper;
