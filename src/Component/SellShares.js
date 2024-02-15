import React from 'react'
import { useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"
import add from "../img/add.png"
function SellShares() {
    const navigate = useNavigate()
    const HandleStockDetail = () => {
        navigate("/stock/detail")
    }
    const HandleSellSharesSucessfull = () => {
        navigate("/sell/shares/sucessfull")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className=" ct_h-100 ">

                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandleStockDetail()} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </a>

                        <div className="flex-1">
                            <h4 className="ct_green_text text-center ct_fs_18 mb-0 ct_fw_600">SELL SHARES</h4>
                            <p className="mb-0  text-center text-white ct_fs_13">AMZN - Amazon.com, Inc.</p>
                        </div>

                        {/* <div className="ct_plus_icon">
                    <img src={add} alt="img"/>
                </div>  */}
                    </div>
                    <div className="ct_white_bg px-15 ct_pb_100">
                        <div className="pt-23">
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Buy for game</p>
                                <input type="text" placeholder="November Deathmatch" className="ct_select_option form-control w-100" />
                            </div>
                            <div className="d-flex gap-3 pb-20">
                                <div className="ct_col_50 ">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Quantity</p>
                                    <input type="number" value="10" className="ct_select_option form-control w-100" />
                                </div>
                                <div className="ct_col_50">
                                    <p className="mb-0 ct_fw_400 ct_7C7D7E_text_clr">Current price $</p>
                                    <input type="number" placeholder="102.00" className="ct_select_option form-control w-100" />
                                </div>
                            </div>
                            <div className="d-flex gap-3">
                                <div className="ct_col_50 ">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr ">Order type</p>
                                    <select className="ct_select_option form-control w-100">
                                        <option>Instant</option>
                                        <option>Instant</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="pt-23">
                            <div>
                                <div className="ct_border_btm pb-2">
                                    <p className="mb-0 ct_fs_13 ct_7C7D7E_text_clr ct_fw_500">Order summary</p>
                                </div>
                                <table className="table mb-0 ct_table_padd">
                                    <tr className='ct_border_btm'>
                                        <td className="px-0 ct_fs_13 ct_7C7D7E_text_clr ct_fw_500">SUBTOTAL</td>
                                        <td className="px-0 ct_fs_13 ct_fw_700 text-end">$10,901.30</td>
                                    </tr>
                                    <tr className='ct_border_btm'>
                                        <td className="px-0 ct_fs_13 ct_7C7D7E_text_clr ct_fw_500">VIRTUAL TRADE FEES</td>
                                        <td className="px-0 ct_fs_13 ct_fw_700 text-end">$10</td>
                                    </tr>
                                </table>
                                <div className="pt-12 ct_border_top ">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="px-0 ct_fs_18 ct_fw_700 mb-0">TOTAL SELL</p>
                                        <p className="px-0 ct_fs_18 ct_fw_700 text-end mb-0">$10,911.30</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between pt-15">
                                        <p className="px-0 ct_fs_13 ct_fw_500 mb-0 ct_grey_text_2">FUNDS AFTER SELLS</p>
                                        <p className="px-0 ct_fs_13 ct_fw_600 text-end mb-0 ct_grey_text_2  ">$75,280.20</p>
                                    </div>
                                </div>
                                <div className="ct_grey_bg_clr pb-3 mt_20 ct_border_radius_10" style={{ boxShadow: "none" }}>
                                    <p className="ct_fs_13 ct_7C7D7E_text_clr mb-2 ct_border_btm pb-2">You own this stock in 2 other games</p>
                                    <div className="">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p className="px-0 ct_fs_13 ct_fw_500 mb-0">MANHATTAN BRAWL</p>
                                            <p className="px-0 ct_fs_13 ct_fw_700 text-end mb-0">24 shares</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between pt-2">
                                            <p className="px-0 ct_fs_13 ct_fw_500 mb-0  mb-0">ST LOUIS DEATHMATCH</p>
                                            <p className="px-0 ct_fs_13 ct_fw_700 text-end mb-0  mb-0  ">12 shares</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ct_grey_bg_clr ct_fixed_botom d-flex align-items-center gap-3">
                        <a onClick={() => HandleSellSharesSucessfull()} className="ct_button_blue ct_light_blue_btn">CONTINUE</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellShares