import React from 'react'
import { useNavigate } from 'react-router-dom'
import paypal_icon from "../img/paypal_icon.png"
import back_btn from "../img/back_btn.png"
import add from "../img/add.png"
function PaymentMethod() {
    const navigate = useNavigate()
    const HandleSetting = () => {
        navigate("/setting")
    }
    const HandleAddPaymentMethod = () => {
        navigate("/add/payment/method")
    }
    const HandleEditPaypal = () => {
        navigate("/edit/paypal")
    }
    const HandleEditCard = () => {
        navigate("/edit/card")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandleSetting()} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">PAYMENT METHODS</h4>
                        <a onClick={() => HandleAddPaymentMethod()} className="ct_plus_icon">
                            <img src={add} alt="img" />
                        </a>
                    </div>
                    <div className="ct_white_bg pt-28  ct_h-100">
                        <div className="d-flex align-items-center justify-content-between pb-15 ct_border_btm px-15">
                            <div className="d-flex align-items-center gap-3">
                                <div className="ct_setting_icon_bg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3 5.33333V18.6667H21V5.33333H3ZM0 2V22H24V2H0Z" fill="#050505" />
                                        <path d="M3 8H21V11H3V8Z" fill="#050505" />
                                        <path d="M4.5 14.5C4.5 13.3954 5.39543 12.5 6.5 12.5C7.60457 12.5 8.5 13.3954 8.5 14.5C8.5 15.6046 7.60457 16.5 6.5 16.5C5.39543 16.5 4.5 15.6046 4.5 14.5Z" fill="#050505" />
                                        <path d="M8 14.5C8 13.3954 8.89543 12.5 10 12.5C11.1046 12.5 12 13.3954 12 14.5C12 15.6046 11.1046 16.5 10 16.5C8.89543 16.5 8 15.6046 8 14.5Z" fill="#050505" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="ct_fs_14 ct_fw_600 mb-1">•••• 5839</h4>
                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">VISA</p>
                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">John Bartley</p>
                                </div>
                            </div>
                            <div>
                                <a onClick={() => HandleEditCard()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 21L18 12L9 3" stroke="#E1E1E1" stroke-width="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between pt-15 pb-15 ct_border_btm px-15">
                            <div className="d-flex align-items-center gap-3">
                                <div className="ct_setting_icon_bg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3 5.33333V18.6667H21V5.33333H3ZM0 2V22H24V2H0Z" fill="#050505" />
                                        <path d="M3 8H21V11H3V8Z" fill="#050505" />
                                        <path d="M4.5 14.5C4.5 13.3954 5.39543 12.5 6.5 12.5C7.60457 12.5 8.5 13.3954 8.5 14.5C8.5 15.6046 7.60457 16.5 6.5 16.5C5.39543 16.5 4.5 15.6046 4.5 14.5Z" fill="#050505" />
                                        <path d="M8 14.5C8 13.3954 8.89543 12.5 10 12.5C11.1046 12.5 12 13.3954 12 14.5C12 15.6046 11.1046 16.5 10 16.5C8.89543 16.5 8 15.6046 8 14.5Z" fill="#050505" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="ct_fs_14 ct_fw_600 mb-1">•••• 1324</h4>
                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">MasterCard</p>
                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">John Bartley</p>
                                </div>
                            </div>
                            <div>
                                <a onClick={() => HandleEditCard()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 21L18 12L9 3" stroke="#E1E1E1" stroke-width="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between pt-15 pb-15 ct_border_btm px-15">
                            <div className="d-flex align-items-center gap-3">
                                <div className="ct_setting_icon_bg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3 5.33333V18.6667H21V5.33333H3ZM0 2V22H24V2H0Z" fill="#050505" />
                                        <path d="M3 8H21V11H3V8Z" fill="#050505" />
                                        <path d="M4.5 14.5C4.5 13.3954 5.39543 12.5 6.5 12.5C7.60457 12.5 8.5 13.3954 8.5 14.5C8.5 15.6046 7.60457 16.5 6.5 16.5C5.39543 16.5 4.5 15.6046 4.5 14.5Z" fill="#050505" />
                                        <path d="M8 14.5C8 13.3954 8.89543 12.5 10 12.5C11.1046 12.5 12 13.3954 12 14.5C12 15.6046 11.1046 16.5 10 16.5C8.89543 16.5 8 15.6046 8 14.5Z" fill="#050505" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="ct_fs_14 ct_fw_600 mb-1">•••• 4559</h4>
                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">American Express</p>
                                    <p className="mb-0 ct_fs_13 ct_dark_grey_text">Susan Bartley</p>
                                </div>
                            </div>
                            <div>
                                <a onClick={() => HandleEditCard()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 21L18 12L9 3" stroke="#E1E1E1" stroke-width="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between pt-15 pb-15 ct_border_btm px-15">
                            <div className="d-flex align-items-center gap-3">
                                <div className="ct_setting_icon_bg">
                                    <img src={paypal_icon} alt="img" />
                                </div>
                                <div>
                                    <h4 className="ct_fs_14 ct_fw_600 mb-0">jonathanbartley88@gmail.com</h4>
                                </div>
                            </div>
                            <div>
                                <a onClick={() => HandleEditPaypal()} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 21L18 12L9 3" stroke="#E1E1E1" stroke-width="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentMethod