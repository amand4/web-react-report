import React, { useCallback, useState, useEffect } from "react";
import { debounce } from "lodash";
import api from "../../services/api";
import TableContainer from "../ListaLaudo/components/TableContainer";

const TableWrapper = () => {
  const [search, setsearch] = useState("");
  const [searchData, setsearchData] = useState([]);
  const [list, setList] = React.useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get("/users/4/reports");
      setList(response.data);
    }
    loadData();
  }, []);

  const changeSearchData = (text) => {
    setsearchData(list.filter((item) => item.name.includes(text)));
  };

  const debounceLoadData = useCallback(debounce(changeSearchData, 500), []);

  const handleSearch = (text) => {
    setsearch(text);
    debounceLoadData(text);
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          name="search"
          className="round"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="      Digite o número da REP"
        />
        <input type="submit" className="corner" value="" />
      </div>

      <TableContainer data={search ? searchData : list} />
    </div>
  );
};

export default TableWrapper;
