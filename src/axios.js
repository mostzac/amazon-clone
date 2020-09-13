import axios from "axios";

const instance = axios.create({
  // The API URL
  baseURL: "http://localhost:5001/clone-d73b5/us-central1/api/",
});

export default instance;
