import React from 'react'
import { useNavigate } from 'react-router-dom'
import warning from "../img/warning.png"

function InsufficientFunds() {
    const navigate = useNavigate()
    const HandleAddFunds = () => {
        navigate("/add/funds")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="h-100 px-15">
                    <div className="ct_login_form ct_center_css ct_h-100">
                        <div className="w-100">
                            <div className="text-center mb-12">
                                <img src={warning} alt="" />
                            </div>
                            <h4 className="ct_fs_29 text-center ct_red_text ct_fw_700">Insufficient Funds</h4>
                            <p className="ct_grey_text mt_15 ct_fs_18  ct_fw_400 text-center ct_dark_grey_text">You don’t have sufficient funds to join this game. To join this game requires a minimum of $1,000.00</p>
                            <div className="ct_grey_bg_clr d-flex align-items-center gap-3 ct_fixed_botom">
                                <a onClick={() => HandleAddFunds()} className="ct_button_blue ct_light_blue_btn">ADD FUNDS</a>
                                <button type='button' className="ct_button_blue ct_transparent_btn ct_blue_text ">CANCEL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InsufficientFunds