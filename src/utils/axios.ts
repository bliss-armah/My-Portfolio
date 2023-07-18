import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";
const user = getUserFromLocalStorage();

console.log(user.token);

export const customFetch = axios.create({
  baseURL: `http://localhost:3000/api/v1`,
  // headers: {},withCredentials: true,
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

