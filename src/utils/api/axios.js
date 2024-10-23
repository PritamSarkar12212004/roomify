import axios from "axios";
const axiosInstance = axios.create({
  baseURL:"https://roomify-backend.vercel.app",
});
export default axiosInstance;
