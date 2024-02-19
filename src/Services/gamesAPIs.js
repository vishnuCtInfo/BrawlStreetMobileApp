
import { message as toast } from "antd";
import api from "./apiconfig";


const get_all_games = "/games/get_all_games/";
const create_game = "/games/create_game/"

// JSON get methods
export const API_games_getAllgames = async () => {
    try {
        const { data } = await api.get(get_all_games);
        if (data?.success) {
            // toast.success(data?.message);
            return data;
        } else {
            // toast.error(data?.message);
            return false;
        }
    } catch (error) {
        toast.error('server internal error')
        throw error
    }
}

// JSON post methods
export const API_games_createGame = async (payload) => {
    try {
        const { data } = await api.post(create_game, payload);
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