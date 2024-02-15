import axios from 'axios'
import React, { useState } from 'react'
import { Country } from "country-state-city";
import { useNavigate } from 'react-router-dom'
import { message, message as MESSAGE } from "antd";
export const configJSON = require("../Component/Config");
function AddCart() {
    const countryData = Country.getAllCountries()
    const [credit_card, setCredit_card] = useState()
    const [expiration_date, setExpiration_date] = useState()
    const [cvv, setCvv] = useState()
    const [first_name, setFirst_name] = useState()
    const [last_name, setLast_name] = useState()
    const [country, setCountry] = useState(countryData)
    const [singleCountry, setSingleCountry] = useState("")
    const [zip_code, setZip_code] = useState()
    const [seletedStates, setSelectedStates] = useState([])

    const navigate = useNavigate()
    const handleAddpaymentMethod = () => {
        navigate("/add/payment/method")
    }

    const onHandleAddCard = (e) => {
        e.preventDefault();

        if (credit_card && expiration_date && cvv && first_name && last_name && country && zip_code) {
            const selectedCountry = country.find(item => item.name === singleCountry);
            const data = {
                payment_info: {
                    credit_card: credit_card,
                    expiration_date: expiration_date,
                    cvv: cvv
                },
                bill_info: {
                    first_name: first_name,
                    last_name: last_name,
                    country: selectedCountry?.name || "",
                    zip_code: zip_code
                }
            };

            axios({
                url: configJSON.baseUrl + configJSON.addCardDetails,
                method: "post",
                data: data,
            }).then((res) => {
                if (res?.data?.success == true) {
                    MESSAGE.success(res?.data?.message);
                    setCredit_card("");
                    setExpiration_date("");
                    setCvv("");
                    setFirst_name("");
                    setLast_name("");
                    setSingleCountry("");
                    setZip_code("");
                    navigate("/add/funds")
                } else {
                    MESSAGE.error(res?.data?.message);
                }
            })
                .catch((error) => {
                    setCredit_card("");
                    setExpiration_date("");
                    setCvv("");
                    setFirst_name("");
                    setLast_name("");
                    setSingleCountry("");
                    setZip_code("");
                });
        } else {
            MESSAGE.error("Field can not be empty!");
        }
    };

    const HandleState = (e) => {
        const selectedCountryName = country[e?.target?.value]?.name;
        setSingleCountry(selectedCountryName);
    };
    return (
        <>
            <div className="ct_mobile_width">
                <div className=" ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => handleAddpaymentMethod()} className="ct_mob_head pt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.0608 4.06076L4.06077 22.0608L1.93945 19.9395L19.9395 1.93944L22.0608 4.06076Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.93921 4.06076L19.9392 22.0608L22.0605 19.9395L4.06053 1.93944L1.93921 4.06076Z" fill="white" />
                            </svg>
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">ADD CARD</h4>
                    </div>
                    <div className="ct_white_bg pt-28 ct_pb_100">
                        <div className="px-15">
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Credit card</p>
                                <input type="number" className="ct_select_option form-control w-100" onChange={(e) => setCredit_card(e.target.value)} value={credit_card} />
                            </div>
                            <div className="d-flex gap-3 pb-20">
                                <div className="ct_col_50 ">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Exp. date</p>
                                    <input type="text" className="ct_select_option form-control w-100" onChange={(e) => setExpiration_date(e.target.value)} value={expiration_date} />
                                </div>
                                <div className="ct_col_50">
                                    <p className="mb-0 ct_fw_400  ct_fs_13 mb-1 ct_7C7D7E_text_clr">CVV</p>

                                    <div className="position-relative">
                                        <input type="number" className="ct_select_option form-control w-100" onChange={(e) => setCvv(e.target.value)} value={cvv} />
                                        <div className="ct_input_icon_right">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M10.5 6H13.5V9H10.5V6Z" fill="#AAAAAB" />
                                                <path d="M10.5 11H13.5V18H10.5V11Z" fill="#AAAAAB" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#AAAAAB" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex gap-3 pb-20">
                                <div className="ct_col_50 ">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">First name</p>
                                    <input type="text" className="ct_select_option form-control w-100" onChange={(e) => setFirst_name(e.target.value)} value={first_name} />
                                </div>
                                <div className="ct_col_50">
                                    <p className="mb-0 ct_fw_400  ct_fs_13 mb-1 ct_7C7D7E_text_clr">Last name</p>
                                    <input type="text" className="ct_select_option form-control w-100" onChange={(e) => setLast_name(e.target.value)} value={last_name} />
                                </div>
                            </div>
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Country</p>
                                <select className="ct_select_option form-control w-100 ct_appeareance_auto" onClick={(e) => HandleState(e)}>
                                    <option >Country</option>
                                    {country.map((item, i) => (
                                        <option value={i} >{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="d-flex gap-3">
                                <div className="ct_col_50 ">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Zip code</p>
                                    <input type="number" className="ct_select_option form-control w-100" onChange={(e) => setZip_code(e.target.value)} value={zip_code} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ct_grey_bg_clr ct_fixed_botom">
                    <button type='button' className="ct_button_blue ct_light_blue_btn" onClick={(e) => onHandleAddCard(e)}>SAVE</button>
                </div>
            </div></>
    )
}

export default AddCart