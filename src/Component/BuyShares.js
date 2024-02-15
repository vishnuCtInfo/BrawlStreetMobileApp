import React from 'react'
import { useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"

function BuyShares() {
    const navigate = useNavigate()
    const HandleStockDetail = () => {
        navigate("/stock/detail")
    }
    const HandleBuyOrderSucessfull = () => {
        navigate("/buy/order/successfull")
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
                            <h4 className="ct_blue_text text-center ct_fs_18 mb-0 ct_fw_700">BUY SHARES</h4>
                            <p className="mb-0  text-center text-white ct_fs_13">AMZN - Amazon.com, Inc.</p>
                        </div>
                        {/* <div className="ct_plus_icon">
                    <img src="img/add.png" alt="img">
                </div> */}
                    </div>
                    <div className="ct_white_bg px-15">
                        <div className="pt-23">
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Buy for game</p>
                                <input type="text" placeholder="November Deathmatch" className="ct_select_option form-control w-100" />
                            </div>
                            <div className="d-flex gap-3 pb-20">
                                <div className="ct_col_50 ">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Quantity</p>
                                    <input type="number" value="10" className="ct_select_option form-control w-100" />
                                </div>
                                <div className="ct_col_50">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">&nbsp;</p>
                                    <button type='button' className="d-flex align-items-center ct_select_option gap-2 w-auto" data-bs-toggle="modal" data-bs-target="#ct_report_popop">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M21 0H3V24H21V0ZM18 3H6V6H18V3ZM6 9.5C6 8.67157 6.67157 8 7.5 8C8.32843 8 9 8.67157 9 9.5C9 10.3284 8.32843 11 7.5 11C6.67157 11 6 10.3284 6 9.5ZM12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8ZM15 9.5C15 8.67157 15.6716 8 16.5 8C17.3284 8 18 8.67157 18 9.5C18 10.3284 17.3284 11 16.5 11C15.6716 11 15 10.3284 15 9.5ZM7.5 13C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16C8.32843 16 9 15.3284 9 14.5C9 13.6716 8.32843 13 7.5 13ZM10.5 14.5C10.5 13.6716 11.1716 13 12 13C12.8284 13 13.5 13.6716 13.5 14.5C13.5 15.3284 12.8284 16 12 16C11.1716 16 10.5 15.3284 10.5 14.5ZM7.5 18C6.67157 18 6 18.6716 6 19.5C6 20.3284 6.67157 21 7.5 21C8.32843 21 9 20.3284 9 19.5C9 18.6716 8.32843 18 7.5 18ZM10.5 19.5C10.5 18.6716 11.1716 18 12 18C12.8284 18 13.5 18.6716 13.5 19.5C13.5 20.3284 12.8284 21 12 21C11.1716 21 10.5 20.3284 10.5 19.5ZM16.5 13C15.6716 13 15 13.6716 15 14.5V19.5C15 20.3284 15.6716 21 16.5 21C17.3284 21 18 20.3284 18 19.5V14.5C18 13.6716 17.3284 13 16.5 13Z" fill="#1464F4" />
                                        </svg>
                                        <h3 className="ct_fs_13 ct_fw_700 text-start mb-0 ct_blue_text ">CALCULATE QUANTITY</h3>
                                    </button>
                                </div>
                            </div>
                            <div className="d-flex gap-3">
                                <div className="ct_col_50 ">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Order type</p>
                                    <select className="ct_select_option form-control w-100">
                                        <option>Instant</option>
                                        <option>Instant</option>
                                    </select>
                                </div>
                                <div className="ct_col_50">
                                    <p className="mb-0 ct_fw_400">Current price $</p>
                                    <input type="number" placeholder="102.00" className="ct_select_option form-control w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="pt-23">
                            <div>
                                <div className="ct_border_btm pb-12">
                                    <p className="mb-0 ct_fs_13">Order summary</p>
                                </div>
                                <table className="table mb-0 ct_table_padd">
                                    <tr className='ct_border_btm'>
                                        <td className="px-0 ct_fs_13">SUBTOTAL</td>
                                        <td className="px-0 ct_fs_13 ct_fw_700 text-end">$10,901.30</td>
                                    </tr>
                                    <tr className='ct_border_btm'>
                                        <td className="px-0 ct_fs_13">VIRTUAL TRADE FEES</td>
                                        <td className="px-0 ct_fs_13 ct_fw_700 text-end">$10</td>
                                    </tr>
                                </table>
                                <div className="pt-12 ct_border_top">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="px-0 ct_fs_18 ct_fw_700 mb-0">TOTAL BUY</p>
                                        <p className="px-0 ct_fs_18 ct_fw_700 text-end mb-0">$10,911.30</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between pt-15">
                                        <p className="px-0 ct_fs_13 ct_fw_500 mb-0 ct_grey_text_2">REMAINING FUNDS</p>
                                        <p className="px-0 ct_fs_13 ct_fw_600 text-end mb-0 ct_grey_text_2  ">$65,280.20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ct_grey_bg_clr ct_fixed_botom d-flex align-items-center gap-3">
                        <a onClick={() => HandleBuyOrderSucessfull()} className="ct_button_blue ct_lig t_blue_btn">CONTINUE</a>
                    </div>
                </div>
            </div>

            {/* Sort Popop Section S */}
            <div className="modal fade" id="ct_report_popop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header border-0 pb-0">
                            <h5 className="modal-title ct_fs_18 mb-0 ct_fw_700" id="exampleModalLabel">Calculate quantity</h5>
                            <button type='button' className="btn-close close" data-bs-dismiss="modal" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.939222 3.06077L16.9392 19.0608L19.0605 16.9395L3.06054 0.939448L0.939222 3.06077Z" fill="#050505" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.0608 3.06077L3.06077 19.0608L0.939453 16.9395L16.9395 0.939448L19.0608 3.06077Z" fill="#050505" />
                                </svg>
                            </button>
                        </div>
                        <div className="modal-body pt-20 px-0 pb-0">
                            <div className="px-15 mb-30">
                                <div className="d-flex gap-3 pb-2">
                                    <div className="ct_col_50 ">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Enter amount $</p>
                                        <input type="text" value="10,000.00" className="ct_select_option form-control w-100" />
                                    </div>
                                    <div className="ct_col_50">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Price/share $</p>
                                        <input type="number" value="150.48" className="ct_select_option form-control w-100" />
                                    </div>
                                </div>
                                <div className="ct_light_blue_bg mt-3 d-flex align-items-center justify-content-between ">
                                    <h4 className="mb-0 ct_fs_18 ct_fw_700">share quantity</h4>
                                    <h4 className="mb-0 ct_fs_18 ct_fw_700">53 <span className="ct_7C7D7E_text_clr">.39</span></h4>
                                </div>
                                <div className="pt-20">
                                    <p className="ct_7C7D7E_text_clr ct_fs_13 ct_fw_500 mb-0">NOTE: The calculated quantity does not include commisions, fees, or price fluctuations. It is intended as an estimate only.</p>
                                </div>
                            </div>
                            <div className="ct_grey_bg_clr d-flex align-items-center gap-3">
                                <button type='button' className="ct_button_blue ct_light_blue_btn">ENTER QUANTITY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyShares