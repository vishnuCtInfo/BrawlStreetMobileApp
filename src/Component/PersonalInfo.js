import React from 'react'
import { useNavigate } from 'react-router-dom'

function PersonalInfo() {
    const navigate = useNavigate()
    const HandleWithdrawl = () => {
        navigate("/withdrawl")
    }
    const HandleWithdrawReviewConfirm = () => {
        navigate("/withdrawl/review/confirm")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandleWithdrawl()} className="ct_mob_head pt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.0608 4.06076L4.06077 22.0608L1.93945 19.9395L19.9395 1.93944L22.0608 4.06076Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.93921 4.06076L19.9392 22.0608L22.0605 19.9395L4.06053 1.93944L1.93921 4.06076Z" fill="white" />
                            </svg>
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">PERSONAL INFO</h4>
                    </div>
                    <div className="ct_white_bg pt-28 ct_pb_100">
                        <div className="px-15">
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">First name</p>
                                <input type="text" value="Curtis" className="ct_select_option form-control w-100" />
                            </div>
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Last name</p>
                                <input type="text" value="Weaver" className="ct_select_option form-control w-100" />
                            </div>
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Address</p>
                                <input type="text" value="31-22 56th Street, Broadway Blvd." className="ct_select_option form-control w-100" />
                            </div>
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">City</p>
                                <input type="text" value="New York City" className="ct_select_option form-control w-100" />
                            </div>
                            <div className="d-flex gap-3 pb-20">
                                <div className="ct_col_50 ">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">State</p>
                                    <select className="ct_select_option form-control w-100">
                                        <option value="">NY</option>
                                        <option value="">NY</option>
                                    </select>
                                </div>
                                <div className="ct_col_50">
                                    <p className="mb-0 ct_fw_400  ct_fs_13 mb-1 ct_7C7D7E_text_clr">ZIP code</p>
                                    <input type="number" value="10023" className="ct_select_option form-control w-100" />
                                </div>
                            </div>
                            <div className="pb-15">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Social Security Number</p>
                                <input type="number" value="400654456" className="ct_select_option form-control w-100" />
                            </div>
                            <div className="pb-15">
                                <p className="ct_fs_14 ct_fw_700 mb-0 ct_blue_text">WHY WE NEED THIS?</p>
                            </div>
                            <div className="ct_pink_bg d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 10H6V20H18V10ZM3 7V23H21V7H3Z" fill="#FFA800" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10 6V8H7V6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V8H14V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6Z" fill="#FFA800" />
                                    <path d="M10.5 13.5H13.5V16.5H10.5V13.5Z" fill="#FFA800" />
                                </svg>
                                <p className="mb-0 ct_fw_600 ct_fs_14">All your personal information is secure.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ct_grey_bg_clr ct_fixed_botom">
                    <a onClick={() => HandleWithdrawReviewConfirm()} className="ct_button_blue ct_light_blue_btn">CONTINUE</a>
                </div>
            </div>
        </>
    )
}

export default PersonalInfo