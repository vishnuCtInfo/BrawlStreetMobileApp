import React from 'react'
import back_btn from "../img/back_btn.png"
import { useNavigate } from 'react-router-dom'

function BuyOrderSuccessfull() {
    const navigate = useNavigate()
    const HandleBuyShares = () => {
        navigate("/buy/shares")
    }

    const HandleBuyOrderPlaced = () => {
        navigate("/buy/order/placed")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandleBuyShares()} >
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">REVIEW & CONFIRM</h4>
                    </div>
                    <div className="ct_white_bg pt-28 px-15 ct_h-100">
                        <p className="ct_fs_14 ct_dark_grey_text">Review and confirm your order</p>
                        <div className="py-2 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">STOCK</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">AMZN</p>
                        </div>
                        <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">GAME</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">November Deathmatch</p>
                        </div>
                        <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">QUANTITY</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">10</p>
                        </div>
                        <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">PRICE / SHARE</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">$43.52</p>
                        </div>
                        <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">SUBTOTAL</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">$10,901.30</p>
                        </div>
                        <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">VIRTUAL TRADE FEES</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">$10.00</p>
                        </div>
                        <div className="py-2  ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_18 ct_fw_700">TOTAL BUY</p>
                            <p className="mb-0 ct_fs_18 ct_fw_700">$10,911.30</p>
                        </div>
                    </div>
                    <div className="ct_grey_bg_clr ct_fixed_botom">
                        <a onClick={() => HandleBuyOrderPlaced()} className="ct_button_blue ct_light_blue_btn">BUY SHARES</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyOrderSuccessfull