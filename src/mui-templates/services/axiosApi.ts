import axios from "axios";
import { SERVER_URL } from "../Constants/envConfig";

const axiosApi = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Access-Control-Max-Age": "3600",
    "Content-type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods":
      "GET, HEAD, OPTIONS, POST, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  },
});

export default axiosApi;
