import React from 'react'
import { useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"

function EditCard() {
    const navigate = useNavigate()
    const HandlePaymentMethod = () => {
        navigate("/payment/method")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className=" ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandlePaymentMethod()} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">EDIT CARD</h4>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21 7H3V4H21V7Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16 7H8V19H16V7ZM5 4H19V22H5V4Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 3H10V4H14V3ZM8 1H16V7H8V1Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className="ct_white_bg pt-28 ct_pb_100">
                        <div className="px-15">
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Credit card</p>
                                <input type="number" value="2348492012935839" className="ct_select_option form-control w-100" />
                            </div>
                            <div className="d-flex gap-3 pb-20">
                                <div className="ct_col_50 ">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Exo. date</p>
                                    <input type="text" value="12/10" className="ct_select_option form-control w-100" />
                                </div>
                                <div className="ct_col_50">
                                    <p className="mb-0 ct_fw_400  ct_fs_13 mb-1 ct_7C7D7E_text_clr">CVV</p>
                                    <div className="position-relative">
                                        <input type="number" value="987" className="ct_select_option form-control w-100" />
                                        <div className="ct_input_icon_right">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M10.5 6H13.5V9H10.5V6Z" fill="#AAAAAB" />
                                                <path d="M10.5 11H13.5V18H10.5V11Z" fill="#AAAAAB" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#AAAAAB" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex gap-3 pb-20">
                                <div className="ct_col_50 ">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">First name</p>
                                    <input type="text" value="John" className="ct_select_option form-control w-100" />
                                </div>
                                <div className="ct_col_50">
                                    <p className="mb-0 ct_fw_400  ct_fs_13 mb-1 ct_7C7D7E_text_clr">Last name</p>
                                    <input type="text" value="Bartley" className="ct_select_option form-control w-100" />
                                </div>
                            </div>
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Country</p>
                                <select className="ct_select_option form-control w-100">
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option value="">India</option>
                                </select>
                            </div>
                            <div className="d-flex gap-3">
                                <div className="ct_col_50 ">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Zip code</p>
                                    <input type="number" value="172638" className="ct_select_option form-control w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ct_grey_bg_clr ct_fixed_botom">
                    <button type='button' className="ct_button_blue ct_light_blue_btn">SAVE</button>
                </div>
            </div>
        </>
    )
}

export default EditCard