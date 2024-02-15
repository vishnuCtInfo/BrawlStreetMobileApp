import React, { useEffect, useState } from 'react'
import paypal_icon from "../img/paypal_icon.png"
import { useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"
import axios from 'axios'
import { message, message as MESSAGE } from "antd";
export const configJSON = require("../Component/Config");

function AddFunds() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [selectedCardId, setSelectedCardId] = useState();
    const [amount, setAmount] = useState()

    const HandleWallet = () => {
        navigate("/wallet")
    }
    const HandleAddPaymentMethod = () => {
        navigate("/add/payment/method")
    }
    const HandleReviewConfirm = () => {
        if(!selectedCardId){
            return MESSAGE.error('first select card')
        }
        if(amount<=0 ||  !amount){
            return MESSAGE.error('insert vailed amount')
        }
        navigate("/review/confirme", { state: { "card_id": selectedCardId, "amount": amount } })
    }


    useEffect(() => {
        onHandlegetAllCard()
    }, [])

    const onHandlegetAllCard = () => {
        axios({
            url: configJSON.baseUrl + configJSON.get_all_card,
            method: "get",
        }).then((res) => {
            setData(res?.data?.data)
        })
            .catch((error) => {
                console.log(error, "error")
            })
    }

    const handleRadioChange = (cardId) => {
        setSelectedCardId(cardId);
    }

    const deleteCardById = (val) => {
        axios({
            url: configJSON.baseUrl + configJSON.deleteCard + `/${val}/`,
            method: "delete",
        }).then((res) => {
            if (res?.data?.success == true) {
                MESSAGE.success(res?.data?.message)
                onHandlegetAllCard()
            }
            else {
                MESSAGE.error(res?.data?.message)
            }
        })
            .catch((error) => {
                console.log(error, 'error')
            })
    }

    return (
        <>
            <div className="ct_mobile_width">
                <div className=" ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandleWallet()}>
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">ADD FUNDS</h4>
                    </div>
                    <div className="ct_white_bg pt-28 px-15">
                        <p className="ct_fs_14 ct_dark_grey_text mb-1">Select method</p>

                        {data.map((ob, i) => (
                            <div className="py-2  ct_border_top d-flex align-items-center">
                                <div>
                                    <input
                                        type="radio"
                                        name="option"
                                        value={ob.id}
                                        checked={selectedCardId === ob.id}
                                        onChange={() => handleRadioChange(ob.id)}
                                    />
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="ct_setting_icon_bg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3 5.33333V18.6667H21V5.33333H3ZM0 2V22H24V2H0Z" fill="#050505" />
                                            <path d="M3 8H21V11H3V8Z" fill="#050505" />
                                            <path d="M4.5 14.5C4.5 13.3954 5.39543 12.5 6.5 12.5C7.60457 12.5 8.5 13.3954 8.5 14.5C8.5 15.6046 7.60457 16.5 6.5 16.5C5.39543 16.5 4.5 15.6046 4.5 14.5Z" fill="#050505" />
                                            <path d="M8 14.5C8 13.3954 8.89543 12.5 10 12.5C11.1046 12.5 12 13.3954 12 14.5C12 15.6046 11.1046 16.5 10 16.5C8.89543 16.5 8 15.6046 8 14.5Z" fill="#050505" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="ct_fs_14 ct_fw_700 mb-0">Card •••• {ob.credit_card.slice(-4)}</h4>
                                        <p className="mb-0 ct_fs_13 ct_7C7D7E_text_clr">Transfer: 1-2 bussiness days</p>
                                    </div>
                                    {/* <button className="btn btn-secondary mr-2" onClick={() => deleteCardById(ob.id)}>
                                        Delete
                                    </button> */}
                                    <a data-bs-toggle="modal" data-bs-target="#ct_delete_confirm"> <button className="btn btn-secondary mr-2" >
                                        Delete
                                    </button> </a>


                                    <div className="modal fade" id="ct_delete_confirm" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header border-0 pb-0">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body border-0 pt-3 pb-0">
                                                    <h4>Are you sure you want to delete this card?</h4>
                                                </div>
                                                <div className="modal-footer justify-content-center border-0 pt-2">
                                                    <button type="button" className="ct_custom_btn  ct_green_btn  ct_close_btn" data-bs-dismiss="modal" onClick={() => deleteCardById(ob.id)} style={{ backgroundColor: "red", color: "white" }}>delete card</button>
                                                    <button type="button" className="ct_custom_btn  ct_green_btn" data-bs-dismiss="modal" style={{ color: "white" }}>back</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* <div className="py-2  ct_border_top d-flex align-items-center">
                            <div>
                                <label className="radio-button">
                                    <input type="radio" name="option" value="option1" />
                                    <div className="radio-circle"></div>
                                </label>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="ct_setting_icon_bg">
                                    <img src={paypal_icon} alt="img" />
                                </div>
                                <div>
                                    <h4 className="ct_fs_14 ct_fw_700 mb-0">joshsmith@email.com </h4>
                                    <p className="mb-0 ct_fs_13 ct_7C7D7E_text_clr">Transfer: 7 - 10 bussiness days</p>
                                </div>
                            </div>
                        </div> */}

                        <div className="py-2 ct_border_btm ct_border_top">
                            <a onClick={() => HandleAddPaymentMethod()} className="ct_blue_text ct_fw_600 ct_fs_14 mb-0">ADD NEW PAYMENT METHOD</a>
                        </div>

                        <div className="pt-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Deposit amount</p>
                            <input onChange={(e)=>setAmount(e.target.value)} type="number" value={amount} className="ct_select_option form-control" />
                        </div>
                    </div>
                    <div className="ct_grey_bg_clr ct_fixed_botom">
                        <a onClick={() => HandleReviewConfirm()} className="ct_button_blue ct_light_blue_btn">CONTINUE</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddFunds