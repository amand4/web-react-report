import axios from "axios";

const api = axios.create({
  baseURL: "http://api.tcc.1hp.racing/v1",
});

export default api;
