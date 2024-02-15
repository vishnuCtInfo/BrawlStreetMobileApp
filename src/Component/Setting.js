import React from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNavigation from './BottomNavigation'

function Setting() {
    const navigate = useNavigate()
    const HandleAccount = () => {
        navigate("/account")
    }
    const HandlePaymentMethod = () => {
        navigate("/payment/method")
    }
    const HandleProfile = () => {
        navigate("/profile")
    }
    const HandleMygames = () => {
        navigate("/mygames")
    }
    const HandleOpenGames = () => {
        navigate("/open/games")
    }
    const HandleWatchlist = () => {
        navigate("/watchlist")
    }
    const HandleNavigationMore = () => {
        navigate("/navigation/more")
    }

    const HandleNotificationsMain = () => {
        navigate("/notification/main")
    }
    const HandleNotification = () => {
        navigate("/notification")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">SETTINGS</h4>
                    </div>
                    <div className="ct_white_bg pt-28  ct_h-100">
                        <div className="d-flex align-items-center justify-content-between pb-20 ct_border_btm px-15">
                            <div className="d-flex align-items-center gap-3">
                                <div className="ct_setting_icon_bg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M21 5H3V19H21V5ZM0 2V22H24V2H0Z" fill="#050505" />
                                        <path d="M11.5 9.5C11.5 10.8807 10.3807 12 9 12C7.61929 12 6.5 10.8807 6.5 9.5C6.5 8.11929 7.61929 7 9 7C10.3807 7 11.5 8.11929 11.5 9.5Z" fill="#050505" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.84887 14.4231C5.97662 13.4685 7.46249 13 9 13C10.5375 13 12.0234 13.4685 13.1511 14.4231C14.3027 15.3979 15 16.8169 15 18.5V19H12V18.5C12 17.6978 11.69 17.1168 11.2128 16.7129C10.7119 16.2889 9.94778 16 9 16C8.05222 16 7.2881 16.2889 6.78716 16.7129C6.31003 17.1168 6 17.6978 6 18.5V19H3V18.5C3 16.8169 3.69733 15.3979 4.84887 14.4231Z" fill="#050505" />
                                        <path d="M14 9H19V11H14V9Z" fill="#050505" />
                                        <path d="M16 13H19V15H16V13Z" fill="#050505" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="ct_Oswald_ff ct_fs_23 ct_fw_700 mb-1">PERSONAL INFO</h4>
                                    <p className="mb-0 ct_fs_13">Edit your personal information</p>
                                </div>
                            </div>
                            <div>
                                <a onClick={() => HandleProfile()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 21L18 12L9 3" stroke="#E1E1E1" stroke-width="3" />
                                    </svg>
                                </a>
                                
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between pt-20 pb-20 ct_border_btm px-15">
                            <div className="d-flex align-items-center gap-3">
                                <div className="ct_setting_icon_bg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M17 6C17 8.76142 14.7614 11 12 11C9.23858 11 7 8.76142 7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6Z" fill="#050505" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.5 19.5C3.5 16.4624 5.96243 14 9 14H15C18.0376 14 20.5 16.4624 20.5 19.5V23H17.5V19.5C17.5 18.1193 16.3807 17 15 17H9C7.61929 17 6.5 18.1193 6.5 19.5V23H3.5V19.5Z" fill="#050505" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="ct_Oswald_ff ct_fs_23 ct_fw_700 mb-1">ACCOUNT</h4>
                                    <p className="mb-0 ct_fs_13">Edit your log in information</p>
                                </div>
                            </div>
                            <div>
                                <a onClick={() => HandleAccount()} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 21L18 12L9 3" stroke="#E1E1E1" stroke-width="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between pt-20 pb-20 ct_border_btm px-15">
                            <div className="d-flex align-items-center gap-3">
                                <div className="ct_setting_icon_bg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.3538 7.80216C13.7545 6.88426 12.885 6.46423 12.0736 6.50253L12.0383 6.50419H12.0029C10.3737 6.50419 9.5 7.45644 9.5 8.50117C9.5 9.14883 9.73244 9.60219 10.0846 9.91096C10.4549 10.2356 11.0772 10.5004 11.9951 10.5004C13.4817 10.5004 14.858 10.9341 15.8857 11.8311C16.932 12.7443 17.5 14.0394 17.5 15.4951C17.5 18.6304 14.8232 20.481 12.0371 20.496C10.0484 20.5749 8.23289 19.5175 7.1328 17.8351L9.64371 16.1933C10.2436 17.1108 11.1211 17.5354 11.9334 17.4977L11.9682 17.4961H12.0029C13.6268 17.4961 14.5 16.5419 14.5 15.4951C14.5 14.8534 14.268 14.4012 13.913 14.0913C13.5396 13.7653 12.9134 13.5004 11.9951 13.5004C10.5083 13.5004 9.13296 13.0663 8.10689 12.1667C7.06271 11.2513 6.5 9.95502 6.5 8.50117C6.5 5.35604 9.19125 3.51951 11.9681 3.50429C13.9578 3.42395 15.7665 4.47837 16.8658 6.16208L14.3538 7.80216Z" fill="#050505" />
                                        <path d="M10.5 2H13.5V5H10.5V2Z" fill="#050505" />
                                        <path d="M10.5 19H13.5V22H10.5V19Z" fill="#050505" />
                                        <path d="M2 2H5V5H2V2Z" fill="#050505" />
                                        <path d="M19 19H22V22H19V19Z" fill="#050505" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="ct_Oswald_ff ct_fs_23 ct_fw_700 mb-1">PAYMENT METHODS</h4>
                                    <p className="mb-0 ct_fs_13">Add or change payments</p>
                                </div>
                            </div>
                            <div>
                                <a onClick={() => HandlePaymentMethod()} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 21L18 12L9 3" stroke="#E1E1E1" stroke-width="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between pt-20 pb-20 ct_border_btm px-15">
                            <div className="d-flex align-items-center gap-3">
                                <div className="ct_setting_icon_bg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 20H15C15 21.6569 13.6569 23 12 23C10.3431 23 9 21.6569 9 20Z" fill="#050505" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5 12.5L2 18V21H22V18L19 12.5V8.15868C19 7.38754 18.9483 6.61282 18.6893 5.88648C18.0707 4.15153 16.3485 1 12 1C7.65153 1 5.92933 4.15154 5.31071 5.88648C5.05173 6.61282 5 7.38754 5 8.15868V12.5ZM19 18L16.1679 13.7519C16.0584 13.5877 16 13.3946 16 13.1972V8.15868C16 7.48364 15.9462 7.12584 15.8635 6.89404C15.6436 6.27708 15.2634 5.5279 14.6707 4.96156C14.1472 4.46131 13.3613 4 12 4C10.6387 4 9.85278 4.46131 9.32929 4.96156C8.73663 5.5279 8.35644 6.27708 8.13646 6.89404C8.05381 7.12584 8 7.48364 8 8.15868V13.1972C8 13.3946 7.94156 13.5877 7.83205 13.7519L5 18H19Z" fill="#050505" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="ct_Oswald_ff ct_fs_23 ct_fw_700 mb-1">NOTIFICATIONS</h4>
                                    <p className="mb-0 ct_fs_13">Edit your notifications</p>
                                </div>
                            </div>
                            <div>
                                <a onClick={() => HandleNotification()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 21L18 12L9 3" stroke="#E1E1E1" stroke-width="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <BottomNavigation />

            </div>
        </>
    )
}

export default Setting