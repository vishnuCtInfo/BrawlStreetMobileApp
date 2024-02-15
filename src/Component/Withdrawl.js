import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import paypal_icon from "../img/paypal_icon.png"
import back_btn from "../img/back_btn.png"
function Withdrawl() {
    const navigate = useNavigate()
    // const HandleWallet = () => {
    //     navigate("/wallet")
    // }

    return (
        <>
            <div className="ct_mobile_width">
                <div className=" ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <span onClick={() => navigate(-1)} >
                            <img src={back_btn} alt="img" />
                        </span>
                        <div className="flex-1">
                            <h4 className="text-white text-center text-center ct_fs_18 mb-0 ct_fw_600">WITHDRAW</h4>
                            <p className="mb-0 ct_fs_13 text-center text-white">
                                Available <span className="ct_green_text">$28,640.80</span>
                            </p>
                        </div>
                    </div>
                    <div className="ct_white_bg pt-28 px-15">
                        <p className="ct_fs_14 ct_dark_grey_text mb-3">Withdraw method</p>
                        <div className="py-2  ct_border_top d-flex align-items-center">
                            <div>
                                <label className="radio-button">
                                    <input type="radio" name="option" value="option1" />
                                    <div className="radio-circle"></div>
                                </label>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="ct_setting_icon_bg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M21 4H3V20H21V4ZM0 1V23H24V1H0Z" fill="#050505" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.93737 9.71359C9.59159 9.22877 9.06648 8.97881 8.54256 9.00144C8.52818 9.00206 8.51379 9.00238 8.49939 9.00238C7.45161 9.00238 7 9.64619 7 10.0012C7 10.3572 7.45165 11.0013 8.49939 11.0013C10.2108 11.0013 12 12.1451 12 13.9988C12 15.8441 10.2266 16.9881 8.52083 16.9976C7.29513 17.043 6.14784 16.4499 5.43313 15.4478L7.06142 14.2864C7.4072 14.7713 7.9323 15.0212 8.45623 14.9986C8.47061 14.998 8.485 14.9977 8.49939 14.9977C9.54827 14.9977 10 14.3526 10 13.9988C10 13.6458 9.54918 13.0013 8.49939 13.0013C6.78593 13.0013 5 11.8546 5 10.0012C5 8.15452 6.77349 7.01194 8.47796 7.00244C9.70366 6.95699 10.851 7.55018 11.5657 8.55227L9.93737 9.71359Z" fill="#050505" />
                                        <path d="M7.5 6H9.5V8H7.5V6Z" fill="#050505" />
                                        <path d="M7.5 16H9.5V18H7.5V16Z" fill="#050505" />
                                        <path d="M14 9H17V11H14V9Z" fill="#050505" />
                                        <path d="M14 13H19V15H14V13Z" fill="#050505" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="ct_fs_14 ct_fw_700 mb-0">By check •••• XX000123</h4>
                                    <p className="mb-0 ct_fs_13 ct_7C7D7E_text_clr">Transfer: 1-2 bussiness days</p>
                                </div>
                            </div>
                        </div>

                        <div className="py-2  ct_border_top d-flex align-items-center">
                            <div>
                                <label className="radio-button">
                                    <input type="radio" name="option" value="option1" />
                                    <div className="radio-circle"></div>
                                </label>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="ct_setting_icon_bg">
                                    <img src={paypal_icon} alt="img" />
                                </div>
                                <div>
                                    <h4 className="ct_fs_14 ct_fw_700 mb-0">joshsmith@email.com </h4>
                                    <p className="mb-0 ct_fs_13 ct_7C7D7E_text_clr">Transfer: 7 - 10 bussiness days</p>
                                </div>
                            </div>
                        </div>


                        <div className="pt-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Amount to withdraw</p>
                            <input type="number" value="$100.00" className="ct_select_option form-control" />
                        </div>
                    </div>
                    <div className="ct_grey_bg_clr ct_fixed_botom">
                        <NavLink to="/personal/info" className="ct_button_blue ct_light_blue_btn">CONTINUE</NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Withdrawl