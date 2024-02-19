
import { message as toast } from "antd";
import api from "./apiconfig";


const login_api = "/accounts/login/";
const signup_api = "accounts/signup/"

// JSON post methods
export const API_user_login = async (payload) => {
    try {
        const { data } = await api.post(login_api, payload);
        if (data?.success) {
            toast.success(data?.message);
            return data;
        } else {
            toast.error(data?.message);
            return false;
        }
    } catch (error) {
        toast.error('server internal error')
        throw error
    }
}

export const API_user_signup = async (payload) => {
    try {
        const { data } = await api.post(signup_api, payload);
        if (data?.success) {
            toast.success(data?.message);
            return data;
        } else {
            toast.error(data?.message);
            return false;
        }
    } catch (error) {
        toast.error('server internal error')
        throw error
    }
}
