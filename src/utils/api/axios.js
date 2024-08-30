import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://roomify-backend.vercel.app/" || "http://localhost:3000/",
});
export default axiosInstance;
