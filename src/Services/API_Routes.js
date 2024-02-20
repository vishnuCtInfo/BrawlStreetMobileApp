

export const _BACKEND_BASE_URL = "http://174.138.66.25:8000";

//USER ROUTES

export const _BACKEND_USER_LOGIN = "/accounts/login/";
export const _BACKEND_USER_SIGNUP = "/accounts/signup/";
export const _BACKEND_USER_PROFILE_UPDATE = '/profiles/update-profile/'
export const _BACKEND_USER_PROFILE_GET = '/profiles/update-profile/'
export const _BACKEND_USER_FORGOT_PASSWORD = "/accounts/forget-password/";
export const _BACKEND_USER_RESET_PASSWORD = 'accounts/reset-password/'
export const _BACKEND_USER_SEND_FEEDBACK = "/accounts/send-feedback/";
export const _BACKEND_USER_PENDING_REFERRAL_INVITATIONS = "/referral/get-pending-invites";
export const _BACKEND_USER_JOINED_REFFERRAL_INVITATIONS = "/referral/get-joined-invites";

export const _BACKEND_REFFERAL_SEND_EMAIL_INVITATION = '/referral/send-email-invitation/';



// CARD ROUTES
export const _BACKEND_CARD_ADD = "/payments/add-card/";
export const _BACKEND_CARD_DELETE = "/payments/card-details"
export const _BACKEND_GET_ALL_CARD = "/payments/get-all-cards/"
export const _BACKEND_GET_CARD_BY_INDEX = "/payments/card-details"


// FRIENDS HANDLING ROUTES
export const _BACKEND_FRIENDS_GET_ALL_FRIENDS="/friends/get-all-friends/"
export const _BACKEND_FRIENDS_GET_ALL_USERS = "/friends/get-all-users/" 
export const _BACKEND_FRIENDS_SENT_FRIENDS_REQUEST = "/friends/send-invitation/"
export const _BACKEND_FRIENDS_SORT_FRIENDS_BY_USERNAME = "/friends/search-users/?query="
export const _BACKEND_FRIENDS_GET_ALL_FRIENDS_REQUEST_BY_USEREMAIL = "/friends/get_requested_friend_requests?user_email="
export const _BACKEND_FRIENDS_REQUEST_ACCEPT_REJECT = "/friends/handle-invitation/"

//ALL GAMES ROUTES
export const _BACKEND_GAMES_GET_ALL_GAMES = "/games/get_all_games/";
export const _BACKEND_GAMES_CREATE_GAME = "/games/create_game/";
export const _BACKEND_GAMES_SEND_GAME_MULTIPLE_INVITATIONS = '/games/send_multiple_game_invitations/'
export const _BACKEND_GAMES_GET_GAME_PENDING_INVITATIONS = "/games/get_pending_game_invitations/?receiver_email="