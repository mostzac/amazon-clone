import axios from "axios";

const instance = axios.create({
    // The API URL
  baseURL: "...",
});

export default instance;
