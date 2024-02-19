
import { message as toast } from "antd";
import api from "./apiconfig";


const add_card = "/payments/add-card/";
const card_delete = "/payments/card-details"

// JSON post methods
export const API_card_add = async (payload) => {
    try {
        const { data } = await api.post(add_card, payload);
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
        const { data } = await api.delete(card_delete+`/${id}/`);
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

