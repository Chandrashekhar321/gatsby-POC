import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://20.114.244.229:1337/'
})

export default axiosInstance