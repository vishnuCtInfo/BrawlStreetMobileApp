
import { message as toast } from "antd";
import api from "./apiconfig";
import {
    _BACKEND_FRIENDS_GET_ALL_FRIENDS,
    _BACKEND_FRIENDS_GET_ALL_FRIENDS_REQUEST_BY_USEREMAIL,
    _BACKEND_FRIENDS_GET_ALL_USERS,
    _BACKEND_FRIENDS_REQUEST_ACCEPT_REJECT,
    _BACKEND_FRIENDS_SENT_FRIENDS_REQUEST,
    _BACKEND_FRIENDS_SORT_FRIENDS_BY_USERNAME
} from "./API_Routes";

// JSON get methods
export const API_friends_getAllFriendsRequest = async (username) => {
    try {
        const { data } = await api.get(_BACKEND_FRIENDS_GET_ALL_FRIENDS_REQUEST_BY_USEREMAIL + username);
        if (data?.Success) {
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
export const API_friends_searchByEmail = async (username) => {
    try {
        const { data } = await api.get(_BACKEND_FRIENDS_SORT_FRIENDS_BY_USERNAME + username);
        return data;
    } catch (error) {
        toast.error('server internal error')
        throw error
    }
}
export const API_friends_getAllUsers = async () => {
    try {
        const { data } = await api.get(_BACKEND_FRIENDS_GET_ALL_USERS);
        if (data?.Success) {
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

// JSON post methods
export const API_friends_friendRequestAcceptReject = async (payload) => {
    try {
        const { data } = await api.post(_BACKEND_FRIENDS_REQUEST_ACCEPT_REJECT, payload);
        if (data?.Success) {
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

//if user not exsiting proper response is pending
export const API_friends_sendFrinedRequest = async (payload) => {
    try {
        const { data } = await api.post(_BACKEND_FRIENDS_SENT_FRIENDS_REQUEST, payload);
        if (data?.Success) {
            toast.success(data?.message);
            return data;
        } else {
            toast.error(data?.message || data?.error);
            return false;
        }
    } catch (error) {
        toast.error('server internal error')
        throw error
    }
}
export const API_friends_getAll = async (payload) => {
    try {
        const { data } = await api.post(_BACKEND_FRIENDS_GET_ALL_FRIENDS, payload);
        if (data?.Success) {
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