import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";
const user = getUserFromLocalStorage();


export const customFetch = axios.create({
  baseURL: `https://portfolio-ix0m.onrender.com/api/v1/`,
});

customFetch.interceptors.request.use(
  (config) => {
    
    if (user) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

