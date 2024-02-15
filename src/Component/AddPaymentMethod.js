import React from 'react'
import { useNavigate } from 'react-router-dom'
import paypal_icon from "../img/paypal_icon.png"
import back_btn from "../img/back_btn.png"
function AddPaymentMethod() {
    const navigate = useNavigate()
    const HandlePaymentMethod = () => {
        navigate("/payment/method")
    }

    const HandleAddPaypal = () => {
        navigate("/add/paypal")
    }
    const HandleAddCart = () => {
        navigate("/add/cart")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div>
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandlePaymentMethod()} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">ADD PAYMENT METHOD</h4>
                    </div>
                    <div className="ct_white_bg pt-15 h-100">
                        <div className="px-15">
                            <div className="d-flex align-items-center gap-2">
                                <div className="w-50">
                                    <a onClick={() => HandleAddCart()} className="ct_outline_box ct_outline_active">
                                        <div className="ct_setting_icon_bg mx-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M3 5.33333V18.6667H21V5.33333H3ZM0 2V22H24V2H0Z" fill="#050505" />
                                                <path d="M3 8H21V11H3V8Z" fill="#050505" />
                                                <path d="M4.5 14.5C4.5 13.3954 5.39543 12.5 6.5 12.5C7.60457 12.5 8.5 13.3954 8.5 14.5C8.5 15.6046 7.60457 16.5 6.5 16.5C5.39543 16.5 4.5 15.6046 4.5 14.5Z" fill="#050505" />
                                                <path d="M8 14.5C8 13.3954 8.89543 12.5 10 12.5C11.1046 12.5 12 13.3954 12 14.5C12 15.6046 11.1046 16.5 10 16.5C8.89543 16.5 8 15.6046 8 14.5Z" fill="#050505" />
                                            </svg>
                                        </div>
                                        <h4 className="ct_fs_14 ct_fw_600 mb-0 mt-2 ct_blue_text text-center">Credit/Debit card</h4>
                                    </a>
                                </div>
                                <div className="w-50">
                                    <a onClick={() => HandleAddPaypal()} className="ct_outline_box">
                                        <div className="ct_setting_icon_bg mx-auto">
                                            <img src={paypal_icon} alt="icon" />
                                        </div>
                                        <h4 className="ct_fs_14 ct_fw_600 mb-0 mt-2 text-center">Paypal</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPaymentMethod