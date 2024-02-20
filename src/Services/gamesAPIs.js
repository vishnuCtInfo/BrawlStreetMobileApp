
import { message as toast } from "antd";
import api from "./apiconfig";
import {
    _BACKEND_GAMES_CREATE_GAME,
    _BACKEND_GAMES_GET_ALL_GAMES,
    _BACKEND_GAMES_GET_GAME_PENDING_INVITATIONS,
    _BACKEND_GAMES_SEND_GAME_MULTIPLE_INVITATIONS
} from "./API_Routes";


// JSON get methods
export const API_games_pendingGamesInvitations = async (userEmail) => {
    try {
        const { data } = await api.get(_BACKEND_GAMES_GET_GAME_PENDING_INVITATIONS + userEmail);
        return data;
    } catch (error) {
        toast.error('server internal error')
        throw error
    }
}

export const API_games_getAllgames = async () => {
    try {
        const { data } = await api.get(_BACKEND_GAMES_GET_ALL_GAMES);
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
        const { data } = await api.post(_BACKEND_GAMES_CREATE_GAME, payload);
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
export const API_games_sendGameInvitations = async (payload) => {
    try {
        const data = await api.post(_BACKEND_GAMES_SEND_GAME_MULTIPLE_INVITATIONS, payload);
        toast.success('Successfully send');
        return data;
    } catch (error) {
        toast.error('server internal error')
        console.log(error)
        return false;
    }
}