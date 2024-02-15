import React from 'react'
import back_btn from "../img/back_btn.png"
import { NavLink, useNavigate } from 'react-router-dom'
import { IsAuthnaticated } from '../Utils/Auth'
function Account() {
    const navigate = useNavigate()
    const handleChangePassword = () => {
        // navigate("/change/password")
        navigate("/friends/profile")
    }
    return (
        <div>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <span onClick={() => navigate(-1)} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </span>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">ACCOUNT</h4>
                    </div>
                    <div className="ct_white_bg pt-28  ct_h-100 px-15">
                        <div className="pb-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Username</p>
                            <input type="text" value={IsAuthnaticated()?.username} readOnly={true} className="ct_select_option form-control w-100" />
                        </div>
                        <div className="pb-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Password</p>
                            <input type="password" value="12345678" readOnly={true} className="ct_select_option form-control w-100" />
                        </div>
                        <div className="pb-20">
                            <NavLink to="/change/password" className="ct_blue_text ct_fs_14 ct_fw_700">CHANGE PASSWORD</NavLink>
                        </div>
                        <div className="pt-2">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Email</p>
                            <div className="position-relative">
                                <input type="email" value={IsAuthnaticated()?.activeUserEmail} className="ct_select_option form-control w-100" />
                                
                                {/* if email is wrong then show this icon S*/}
                                {/* <div className="ct_wrong_email_error">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11 20H14V23H11V20Z" fill="#FA6D1E"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.9085 7.27952C15.5022 5.48389 13.8523 4.32129 12.1075 4.52319C10.3591 4.72552 9.00035 6.24222 9 8.09102L6 8.09046C6.00062 4.76134 8.45884 1.92538 11.7627 1.54307C15.0703 1.16032 18.0991 3.36729 18.8346 6.61735C19.5687 9.86121 17.8006 13.1775 14.6743 14.303C14.2834 14.4437 13.9994 14.8319 13.9996 15.2922V18.0002H10.9996L10.9996 15.2938C10.9991 13.5959 12.0507 12.0591 13.6581 11.4804C15.3258 10.8799 16.3163 9.08134 15.9085 7.27952Z" fill="#FA6D1E"/>
                          </svg>
                        </div> */}
                                {/* if email is wrong then show this icon S*/}
                            </div>
                        </div>
                        {/* email vefication text S */}

                        {/* <div className="pt-15">
                    <p className="mb-0 ct_fs_13">Please check your email address, we’ve sent you an email to confirm that this email address belongs to you. </p>
                </div>
                <div className="pt-20">
                    <p className="ct_fw_600 ct_fs_14 ct_blue_text">RESEND VERIFICATION EMAIL</p>
                </div> */}
                        {/* email vefication text S */}

                        <div className="ct_border_top pt-2 mt-30">
                            <a href="javascript:void(0)" className="ct_red_text ct_fs_14 ct_fw_700">CANCEL MY ACCOUNT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account