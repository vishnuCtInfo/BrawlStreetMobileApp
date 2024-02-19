import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import eye_view from "../img/eye_view.png"
import { Formik } from 'formik'
import { Schema_forgate_password_form } from '../Utils/Schema'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { IoEyeSharp } from 'react-icons/io5'
import { IsAuthnaticated } from '../Utils/Auth'
import { message as MESSAGE } from "antd";
import axios from 'axios';
export const configJSON = require("../Component/Config");

function SetNewPassword() {
    const navigate = useNavigate()
    const [showPass1, setShowPass1] = useState(false)
    const [showPass2, setShowPass2] = useState(false)

    const HandleForgotPassword2 = () => {
        navigate("/forgot/password2")
    }
    const HandlePasswordUpdate = () => {
        navigate("/password/updated")
    }


    const changePassword = async (values, { resetForm }) => {
        try {
            const payload = { new_password: values?.password, email: IsAuthnaticated()?.activeUserEmail, otp: sessionStorage.getItem('verifiedOTP') }
            const { data } = await axios.put(configJSON?.baseUrl + configJSON?.reset_password, payload)
            if (data?.success) {
                MESSAGE?.success(data?.message)
                navigate('/password/updated');
                sessionStorage.clear();
                localStorage.clear();
                return
            }
            console.log(data);
        } catch (error) {
            console.log(error)
            if (error?.response?.data?.message) {
                MESSAGE?.error(error?.response?.data?.message)
                return;
            }
            MESSAGE?.error('server internal error');
        }
    }

    return (
        <>
            <Formik
                validationSchema={Schema_forgate_password_form}
                initialValues={{ password: '', cpassword: '' }}
                onSubmit={(values, actions) => changePassword(values, actions)}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                    <div className="ct_mobile_width">
                        <div className="ct_login_bg ">
                            <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                                <a onClick={() => HandleForgotPassword2()} className="ct_mob_head pt-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M22.0608 4.06076L4.06077 22.0608L1.93945 19.9395L19.9395 1.93944L22.0608 4.06076Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.93921 4.06076L19.9392 22.0608L22.0605 19.9395L4.06053 1.93944L1.93921 4.06076Z" fill="white" />
                                    </svg> </a>
                                <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">SET NEW PASSWORD</h4>
                            </div>
                            <div className="ct_white_bg pt-28 ct_pb_100">
                                <div className="px-15">

                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Enter new password</p>
                                        <div className="position-relative">
                                            <input type={showPass1 ? 'text' : 'password'} className="ct_select_option form-control w-100 ct_new_pass_hide"
                                                value={values?.password} name="password" onChange={handleChange} onBlur={handleBlur} />
                                            {
                                                showPass1 ?
                                                    <BsFillEyeSlashFill className="ct_show_eye" onClick={() => setShowPass1(!showPass1)} />
                                                    :
                                                    <IoEyeSharp className="ct_show_eye" onClick={() => setShowPass1(!showPass1)} />
                                            }
                                        </div>
                                        <p className='text-danger' width={{ width: '80%' }} >
                                            {touched?.password && errors.password && (errors?.password)}
                                        </p>
                                    </div>

                                    <div className="pb-1">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Re-enter new password</p>
                                        <div className="position-relative">
                                            <input type={showPass2 ? 'text' : 'password'} className="ct_select_option form-control w-100 ct_con_pass_hide"
                                                value={values?.cpassword} name="cpassword" onChange={handleChange} onBlur={handleBlur} />
                                            {
                                                showPass2 ?
                                                    <BsFillEyeSlashFill className="ct_show_eye" onClick={() => setShowPass2(!showPass2)} />
                                                    :
                                                    <IoEyeSharp className="ct_show_eye" onClick={() => setShowPass2(!showPass2)} />
                                            }
                                        </div>
                                        <p className='text-danger' width={{ width: '80%' }} >
                                            {touched?.cpassword && errors.cpassword && (errors?.cpassword)}
                                        </p>
                                    </div>
                                    <p className="mb-0 ct_fs_13 ct_7C7D7E_text_clr">Password must be a minimum of 8 characters with at least one one uppercase, one lowercase and one number.</p>
                                </div>
                            </div>
                        </div>
                        <div className="ct_grey_bg_clr ct_fixed_botom">
                            <button onClick={handleSubmit} className="ct_button_blue ct_light_blue_btn"> 
                            {isSubmitting &&
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            }
                                SET NEW PASSWORD</button>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default SetNewPassword