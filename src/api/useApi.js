import axios from "axios";
import {loginUseStore} from "../store/loginUse.js";

const customApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})


customApi.interceptors.request.use( config =>{
    const LoginStore =loginUseStore()
    if (LoginStore.token){
        config.headers.Authorization = `Bearer ${LoginStore.token}`
    }
    return config;
})

export default customApi;