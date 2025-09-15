import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/document.js";

export const loginUseStore = defineStore("loginUse", {
    state: () => ({
        token: localStorage.getItem("token") || null,
    }),
    getters: {
        isAuthenticated: state => !!state.token,
    },

    actions: {
        async login(payload) {
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API_URL}/Accounts/login`,
                    payload
                );

                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                    this.token = response.data.token;
                    router.push("/");
                } else {
                    router.push("/login");
                }
            } catch (error) {
                console.error("Login xatosi:", error);
                router.push("/login");
            }
        },
        logout() {
            this.token = null
            localStorage.removeItem("token");
            router.push("/login");
        }
    },
});
