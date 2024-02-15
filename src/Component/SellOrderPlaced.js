import React from 'react'
import { useNavigate } from 'react-router-dom'
import confirm from '../img/confirm.png'
function SellOrderPlaced() {
    const navigate = useNavigate()
    const HandleEditSellLimitOrder = () => {
        navigate("/edit/buy/limit/order")
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
                            <h4 className="ct_fs_29 text-center ct_green_text ">Sell order placed</h4>
                            <p className="ct_grey_text mt_15 ct_fs_18  ct_fw_400 text-center ct_dark_grey_text">
                                You have sucessfully bought <span className="ct_black_clr">15 AMZN</span> at <span className="ct_black_clr">$23,56</span> per share, for a total of <span className="ct_black_clr">$10,911.30</span>
                            </p>
                            <div className="ct_grey_bg_clr d-flex align-items-center gap-3 ct_fixed_botom">
                                <a onClick={() => HandleEditSellLimitOrder()} className="ct_button_blue ct_light_blue_btn">DONE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellOrderPlaced