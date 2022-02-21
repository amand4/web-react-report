import { useState, useEffect } from "react";

const useTable = (statements, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const range = calculateRange(statements, rowsPerPage);
    setTableRange([...range]);

    const slice = sliceData(statements, page, rowsPerPage);
    setSlice([...slice]);
  }, [statements, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
};

export default useTable;
