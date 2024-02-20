
import { message as toast } from "antd";
import api from "./apiconfig";
import {
    _BACKEND_CARD_ADD,
    _BACKEND_CARD_DELETE,
    _BACKEND_GET_ALL_CARD,
    _BACKEND_GET_CARD_BY_INDEX
} from "./API_Routes";


// JSON post methods
export const API_card_getById = async (id) => {
    try {
        const { data } = await api.get(_BACKEND_GET_CARD_BY_INDEX + `/${id}/`);
        if (data?.success) {
            return data;
        } else {
            toast.error(data?.message);
            return false;
        }
    } catch (error) {
        toast.error('server internal error')
        console.log(error)
        return false;
    }
}

export const API_card_getAllCards = async () => {
    try {
        const { data } = await api.get(_BACKEND_GET_ALL_CARD);
        if (data?.success) {
            return data;
        } else {
            toast.error(data?.message);
            return false;
        }
    } catch (error) {
        toast.error('server internal error')
        console.log(error)
        return false;
    }
}

// JSON post methods
export const API_card_add = async (payload) => {
    try {
        const { data } = await api.post(_BACKEND_CARD_ADD, payload);
        if (data?.success) {
            toast.success(data?.message);
            return data;
        } else {
            toast.error(data?.message);
            return false;
        }
    } catch (error) {
        toast.error('server internal error')
        console.log(error)
        return false;
    }
}

// JSON delete methods
export const API_card_delete = async (id) => {
    try {
        const { data } = await api.delete(_BACKEND_CARD_DELETE + `/${id}/`);
        if (data?.success) {
            toast.success(data?.message);
            return data;
        } else {
            toast.error(data?.message);
            return false;
        }
    } catch (error) {
        toast.error('server internal error')
        console.log(error)
        return false;
    }
}

