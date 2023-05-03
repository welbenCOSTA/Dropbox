import axios from "axios";

const api = axios.create({
  baseURL: "https://welben-dropbox-backend.herokuapp.com"
});

export default api;
