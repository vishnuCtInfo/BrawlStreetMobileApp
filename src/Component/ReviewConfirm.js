import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"
import axios from 'axios'
import { message as MESSAGE } from "antd";
export const configJSON = require("../Component/Config");
function ReviewConfirm() {
    const navigate = useNavigate()
    const location = useLocation();
    const card_ID = location?.state?.card_id;
    const [card, setCard] = useState();

    useEffect(() => {
        HandleCardIndexwise()
    }, [])

    const HandleCardIndexwise = async () => {
        try {
            const { data } = await axios.get(configJSON.baseUrl + configJSON.getAllCard_IndexWise + `/${card_ID}/`)
            if (data?.success)
                setCard(data?.data)
        } catch (error) {
            console.log(error)
        }
        // axios({
        //     url: configJSON.baseUrl + configJSON.getAllCard_IndexWise + `/${card_ID}/`,
        //     method: "get",
        // }).then((res) => {
        //     localStorage.setItem("data", res)
        // }).catch((error) => {
        //     console.log(error, "error")
        // });
    }

    const HandleAddFundsSucessfull = () => {
        navigate("/add/funds/sucessfull")
    }

    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <div className="">
                            <img src={back_btn} alt="img" onClick={() => navigate(-1)} />
                        </div>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">REVIEW & CONFIRM</h4>
                    </div>
                    <div className="ct_white_bg pt-28 px-15 ct_h-100">
                        <p className="ct_fs_14 ct_dark_grey_text">Review and confirm your information</p>
                        <div className="py-2 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">ADD FROM</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">Paypal joshsmith@email.com</p>
                        </div>
                        <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">FIRST NAME</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">Curtis</p>
                        </div>
                        <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">LAST NAME</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">Weaver</p>
                        </div>
                        <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">ADDRESS</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">31-22 56th Street, Broadway Blvd.</p>
                        </div>
                        <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">CITY</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">New York City</p>
                        </div>
                        <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">STATE</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">NY</p>
                        </div>
                        <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">ZIP CODE</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">10023</p>
                        </div>
                        <div className="py-2 pb-0 ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_18 ct_fw_700">TOTAL ADD</p>
                            <p className="mb-0 ct_fs_18 ct_fw_700">$100.00</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between pt-15">
                            <p className="px-0 ct_fs_13 ct_fw_500 mb-0 ct_grey_text_2">AVAILABLE AFTER ADD</p>
                            <p className="px-0 ct_fs_13 ct_fw_600 text-end mb-0 ct_grey_text_2">$28,740.80</p>
                        </div>
                    </div>
                    <div className="ct_grey_bg_clr ct_fixed_botom">
                        <a onClick={() => HandleAddFundsSucessfull()} className="ct_button_blue ct_light_blue_btn">CONFIRM & ADD</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewConfirm