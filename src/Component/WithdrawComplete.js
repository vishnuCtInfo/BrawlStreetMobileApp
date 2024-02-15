import React from 'react'
import { useNavigate } from 'react-router-dom'

function WithdrawComplete() {
const navigate = useNavigate()
const HandleWallet = () => {
    navigate("/wallet")
}

return (
    <>
    <div className="ct_mobile_width">
        <div className=" h-100 px-15">
            <div className="ct_login_form ct_center_css ct_h-100 ct_px_15">
                <form  className="w-100">
                    <h4 className="ct_fs_32 ct_green_text text-center ct_fw_700">Withdraw complete</h4>
                    <p className="ct_dark_grey_text mt_15 ct_fs_18 ct_lh_20 ct_fw_400 text-center px-15">You have sucessfully withdrawn <span className="ct_black_clr">$100.00</span> from your wallet. </p>
                    <div className=" ct_grey_bg_clr ct_fixed_botom mt-30 ">
                        <a onClick={()=>HandleWallet()} className="ct_button_blue ct_light_blue_btn">BACK TO WALLET</a>
                    </div>
                </form>

            </div>
        </div>
    </div>
    </>
  )
}

export default WithdrawComplete