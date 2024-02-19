import axios from 'axios'
import React, { useState } from 'react'
import { Country } from "country-state-city";
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik';
import { Schema_card_add } from '../Utils/Schema';
import { API_card_add } from '../Services/cardAPIs';

function AddCart() {
    const countryData = Country.getAllCountries()
    const navigate = useNavigate();

    const handleOnSubmit = async(payload, { resetForm }) => {
        console.log(payload)
        try {
            const data = await API_card_add(payload)
            if(data?.success){
                navigate('/add/funds')
            }
        } catch (error) {
            console.log(error);
        }

    }

    
    return (
        <Formik
            initialValues={{
                payment_info: {
                    credit_card: '',
                    expiration_date: '',
                    cvv: ''
                },
                bill_info: {
                    first_name: '',
                    last_name: '',
                    country: '',
                    zip_code: ''
                }
            }}
            validationSchema={Schema_card_add}
            onSubmit={(values, actions) => handleOnSubmit(values, actions)}
        >

            {
                ({ values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit }) => (
                    <div className="ct_mobile_width">
                        <div className=" ct_h-100 ">
                            <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                                <span onClick={() => navigate(-1)} className="ct_mob_head pt-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M22.0608 4.06076L4.06077 22.0608L1.93945 19.9395L19.9395 1.93944L22.0608 4.06076Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.93921 4.06076L19.9392 22.0608L22.0605 19.9395L4.06053 1.93944L1.93921 4.06076Z" fill="white" />
                                    </svg>
                                </span>
                                <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">ADD CARD</h4>
                            </div>
                            <div className="ct_white_bg pt-28 ct_pb_100">
                                <div className="px-15">
                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Credit card</p>
                                        <input type="number" className="ct_select_option form-control w-100"
                                            name='payment_info.credit_card' onChange={handleChange} onBlur={handleBlur} value={values?.payment_info?.credit_card} />
                                           <span className='text-danger' style={{fontSize:'80%'}} >{touched?.payment_info?.credit_card && errors?.payment_info?.credit_card && (errors?.payment_info?.credit_card)}</span>
                                        </div>
                                    <div className="d-flex gap-3 pb-20">
                                        <div className="ct_col_50 ">
                                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Exp. date</p>
                                            <input type="text" className="ct_select_option form-control w-100"
                                                name='payment_info.expiration_date' onChange={handleChange} onBlur={handleBlur} value={values?.payment_info?.expiration_date} />
                                               <span className='text-danger' style={{fontSize:'80%'}} >{touched?.payment_info?.expiration_date && errors?.payment_info?.expiration_date && (errors?.payment_info?.expiration_date)}</span>
                                        </div>
                                        <div className="ct_col_50">
                                            <p className="mb-0 ct_fw_400  ct_fs_13 mb-1 ct_7C7D7E_text_clr">CVV</p>

                                            <div className="position-relative">
                                                <input type="number" className="ct_select_option form-control w-100"
                                                    name='payment_info.cvv' onChange={handleChange} onBlur={handleBlur} value={values?.payment_info?.cvv} />
                                                <div className="ct_input_icon_right">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M10.5 6H13.5V9H10.5V6Z" fill="#AAAAAB" />
                                                        <path d="M10.5 11H13.5V18H10.5V11Z" fill="#AAAAAB" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#AAAAAB" />
                                                    </svg>
                                                </div>
                                                <span className='text-danger' style={{fontSize:'80%'}} >{touched?.payment_info?.cvv && errors?.payment_info?.cvv && (errors?.payment_info?.cvv)}</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3 pb-20">
                                        <div className="ct_col_50 ">
                                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">First name</p>
                                            <input type="text" className="ct_select_option form-control w-100"
                                                name='bill_info.first_name' onChange={handleChange} onBlur={handleBlur} value={values?.bill_info?.first_name} />
                                        <span className='text-danger' style={{fontSize:'80%'}} >{touched?.bill_info?.first_name && errors?.bill_info?.first_name && (errors?.bill_info?.first_name)}</span>
                                         </div>
                                        <div className="ct_col_50">
                                            <p className="mb-0 ct_fw_400  ct_fs_13 mb-1 ct_7C7D7E_text_clr">Last name</p>
                                            <input type="text" className="ct_select_option form-control w-100"
                                                name='bill_info.last_name' onChange={handleChange} onBlur={handleBlur} value={values?.bill_info?.last_name} />
                                       
                                       <span className='text-danger' style={{fontSize:'80%'}} >{touched?.bill_info?.last_name && errors?.bill_info?.last_name && (errors?.bill_info?.last_name)}</span>
                                        </div>
                                    </div>
                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Country</p>
                                        <select className="ct_select_option form-control w-100 ct_appeareance_auto"
                                            name='bill_info.country' onChange={handleChange} onBlur={handleBlur} value={values?.bill_info?.country}>
                                            <option value='' >{'Select Country'}</option>
                                            {countryData.map((item, i) => (
                                                <option value={i} >{item.name}</option>
                                            ))}
                                        </select>        
                                        <span className='text-danger' style={{fontSize:'80%'}} >{touched?.bill_info?.country && errors?.bill_info?.country && (errors?.bill_info?.country)}</span>
                                       
                                    </div>
                                    <div className="d-flex gap-3">
                                        <div className="ct_col_50 ">
                                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Zip code</p>
                                            <input type="number" className="ct_select_option form-control w-100"
                                                name='bill_info.zip_code' onChange={handleChange} onBlur={handleBlur} value={values?.bill_info?.zip_code} />
                                                <span className='text-danger' style={{fontSize:'80%'}} >{touched?.bill_info?.zip_code && errors?.bill_info?.zip_code && (errors?.bill_info?.zip_code)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ct_grey_bg_clr ct_fixed_botom">
                            <button type='button' className="ct_button_blue ct_light_blue_btn" onClick={handleSubmit}> 
                            {isSubmitting && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                                                   SAVE</button>
                        </div>
                    </div>
                )
            }
        </Formik>
    )
}

export default AddCart