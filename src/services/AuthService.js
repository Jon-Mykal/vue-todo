import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://localhost:6001/api/auth",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    register(userCreds) {
        return apiClient.post("/register", userCreds);
    },
    login(userCreds) {
        return apiClient.post("/login", userCreds);
    }
}