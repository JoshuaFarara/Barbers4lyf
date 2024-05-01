import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

interface ImportMetaEnv {
    VITE_API_URL: string;
}
  
declare const importMeta: {
    env: ImportMetaEnv;
};

const api = axios.create({
    baseURL: importMeta.env.VITE_API_URL 
});
  
api.interceptors.request.use(
    (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    },
    (error) => {
    return Promise.reject(error);
    }
);
    
export default api;