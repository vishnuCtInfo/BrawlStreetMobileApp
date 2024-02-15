
Object.defineProperty(exports, "__esModule", {
    value: true,
});


// sessionStorage.setItem('user_mail_id', email);
// sessionStorage.setItem('access_token',res?.data?.access_token)
// sessionStorage.setItem('user_id',res?.data?.user_id)

// export const baseUrl = "http://138.197.50.31/mobile/"
// export const baseUrl = "http://192.168.1.60:8000/"
export const baseUrl = "http://174.138.66.25:8000/"

export const login_api = "accounts/login/"
export const signup_api = "accounts/signup/"  

export const addCardDetails = "payments/add-card/"
export const get_all_card = "payments/get-all-cards/"
// export const delete_card="card-details"
export const getAllCard_IndexWise = "payments/card-details"
export const deleteCard = "payments/card-details"
// export const resetPassword = "accounts/reset-password"

export const get_all_games = "games/get_all_games/" 
export const create_game = "games/create_game/"
export const get_all_friends="friends/get-all-friends/"
export const friend_send_Invitation = "friends/send-invitation/"
export const friends_get_all_users = "friends/get-all-users/" //get req
export const friends_search_by_email = "friends/search-users/?query=" //get req
export const get_requested_friend_requests = "friends/get_requested_friend_requests?user_email=" //vishnu123@mailinator.com
// export const pending_friends_request = "friends/get-pending-requests/?user_email=" //get vishnu123@mailinator.com
export const friend_req_acc_rej = "friends/handle-invitation/";
export const send_email_invitation = 'referral/send-email-invitation/';
export const friends_get_all_friends_list = 'friends/get-all-friends/'

export const get_pending_invites = "referral/get-pending-invites"
export const get_joined_invites = "referral/get-joined-invites"
export const update_user_profile = "profiles/update_user_profile/" //send put data with url 'id/'
export const get_user_profile = 'profiles/get_user_profile/' //get with url 'id/'

export const send_game_invitations = 'games/send_multiple_game_invitations/' // post game id with multiple users email 

export const send_feedback = "accounts/send-feedback/"
export const forget_password = "accounts/forget-password/"
export const check_otp = 'accounts/check-otp/'
export const reset_password = 'accounts/reset-password/'
//working pending from backend-site
export const get_pending_game_invitations = "games/get_pending_game_invitations/?receiver_email=" //get method send reciever email_id



