import axios from "axios";
const token = localStorage.getItem("token");

const API = axios.create({
    baseURL:" http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
        "Authorization": token
    },
});

export default API;