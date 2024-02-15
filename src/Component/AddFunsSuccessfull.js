import React from 'react'
import { useNavigate } from 'react-router-dom'
import confirm from "../img/confirm.png"
function AddFundsSuccessfull() {
    const navigate = useNavigate()
    const HandleWallet = () => {
        navigate("/wallet")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="h-100 px-15">
                    <div className="ct_login_form ct_center_css ct_h-100">
                        <div className="w-100">
                            <div className="text-center mb-12">
                                <img src={confirm} alt="img" />
                            </div>
                            <h4 className="ct_fs_29 text-center ct_green_text ">Transaction complete</h4>
                            <p className="ct_grey_text mt_15 ct_fs_18  ct_fw_400 text-center ct_dark_grey_text">
                                You have sucessfully added <span className="ct_black_clr">$100.00</span> to your wallet.
                            </p>
                            <div className="ct_grey_bg_clr d-flex align-items-center gap-3 ct_fixed_botom">
                                <a onClick={() => HandleWallet()} className="ct_button_blue ct_light_blue_btn">BACK TO WALLET</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddFundsSuccessfull