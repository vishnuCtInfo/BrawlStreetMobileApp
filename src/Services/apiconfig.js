import axios from "axios";

const baseURL = "http://174.138.66.25:8000";

const api = axios.create({
    baseURL,
    headers:{
        'Content-Type':'application/json'
    }
});

export default api