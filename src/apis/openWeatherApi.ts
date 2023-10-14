import axios from "axios";
const BASE_URL = "/weatherApi";
export default axios.create({
  baseURL: BASE_URL, // 使用代理的基础URL，Vite会将其重写并代理到第三方API
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
