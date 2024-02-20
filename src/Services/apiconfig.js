import axios from "axios";
import { _BACKEND_BASE_URL } from "./API_Routes";

const baseURL = _BACKEND_BASE_URL;

const api = axios.create({
    baseURL,
    headers:{
        'Content-Type':'application/json'
    }
});

export default api