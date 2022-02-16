import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/v1",
});

axios.defaults.headers.common = {
  Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjQ0MTgxNzU1fQ.KNNc9EdJiTXaKwSpKRb-3SDpMuMchVZAVHtdSFV6vvQ`,
};

export default api;
