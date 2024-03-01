
import { message as toast } from "antd";
import api from "./apiconfig";
import { IsAuthnaticated } from "../Utils/Auth";
import {
    _BACKEND_REFFERAL_SEND_EMAIL_INVITATION,
    _BACKEND_USER_FORGOT_PASSWORD,
    _BACKEND_USER_JOINED_REFFERRAL_INVITATIONS,
    _BACKEND_USER_LOGIN,
    _BACKEND_USER_PENDING_REFERRAL_INVITATIONS,
    _BACKEND_USER_PROFILE_GET,
    _BACKEND_USER_PROFILE_UPDATE,
    _BACKEND_USER_SEND_FEEDBACK,
    _BACKEND_USER_SIGNUP
} from "./API_Routes";


//JSON GET methods

export const API_user_logout = async () => {
    try {
        const { data } = await api.get(_BACKEND_USER_PENDING_REFERRAL_INVITATIONS);
        return data;
    } catch (error) {
        console.log(error)
        toast.error('server internal error')
        throw error
    }
}

export const API_user_refferal_pending = async () => {
    try {
        const { data } = await api.get(_BACKEND_USER_PENDING_REFERRAL_INVITATIONS);
        return data;
    } catch (error) {
        console.log(error)
        toast.error('server internal error')
        throw error
    }
}
export const API_user_refferal_joined = async () => {
    try {
        const { data } = await api.get(_BACKEND_USER_JOINED_REFFERRAL_INVITATIONS);
        return data;
    } catch (error) {
        console.log(error)
        toast.error('server internal error')
        throw error
    }
}
export const API_user_getProfile = async () => {
    const { accessToken } = IsAuthnaticated()
    try {
        const { data } = await api.get(_BACKEND_USER_PROFILE_GET, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
        });
        if (data?.success) {
            // toast.success(data?.message);
            return data;
        } else {
            toast.error(data?.message);
            return false;
        }
    } catch (error) {
        console.log(error)
        toast.error('server internal error')
        throw error
    }
}

// JSON post methods
export const API_user_fogotPassword = async (payload) => {
    try {
        const { data } = await api.post(_BACKEND_USER_FORGOT_PASSWORD, payload);
        if (data?.success)
            toast.success(data?.message);
        else
            toast.error(data?.message);
        return data;
    } catch (error) {
        toast.error('server internal error')
        throw error
    }
}
export const API_user_sendFeedback = async (payload) => {
    try {
        const { data } = await api.post(_BACKEND_USER_SEND_FEEDBACK, payload);
        if (data?.Success)
            toast.success(data?.message);
        else
            toast.error(data?.message);
        return data;
    } catch (error) {
        toast.error('server internal error')
        throw error
    }
}
export const API_user_sendMailInvitaion = async (payload) => {
    try {
        const { data } = await api.post(_BACKEND_REFFERAL_SEND_EMAIL_INVITATION, payload);
        toast.success(data?.message);
        return data;
    } catch (error) {
        toast.error('server internal error')
        throw error
    }
}
export const API_user_login = async (payload) => {
    try {
        const { data } = await api.post(_BACKEND_USER_LOGIN, payload);
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
        const { data } = await api.post(_BACKEND_USER_SIGNUP, payload);
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
export const API_user_emailInvitation = async (payload) => {
    try {
        const { data } = await api.post(_BACKEND_REFFERAL_SEND_EMAIL_INVITATION, payload);
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



//JSON PUT methods
export const API_user_setNewPassword = async (payload) => {
    const { accessToken } = IsAuthnaticated()
    try {
        const { data } = await api.put(_BACKEND_USER_FORGOT_PASSWORD, payload);
        if (data?.success) {
            toast.success(data?.message);
            return data;
        } else {
            toast.error(data?.message);
            return false;
        }
    } catch (error) {
        console.log(error)
        toast.error('server internal error')
        throw error
    }
}
export const API_user_updateProfile = async (formdata) => {
    const { accessToken } = IsAuthnaticated()
    try {
        const { data } = await api.put(_BACKEND_USER_PROFILE_UPDATE, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + accessToken
            },
        });
        if (data?.success) {
            toast.success(data?.message || 'Update Successfully');
            return data;
        } else {
            toast.error(data?.message);
            return false;
        }
    } catch (error) {
        console.log(error)
        toast.error('server internal error')
        throw error
    }
}


