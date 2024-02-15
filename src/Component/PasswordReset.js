import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5"
import { message as MESSAGE } from "antd";
import axios from 'axios';
import {  forgate_pass_email_get } from '../Utils/Auth';
import { Formik } from 'formik';
import { Schema_forgate_password_form } from '../Services/Schema';
export const configJSON = require("../Component/Config");

function PasswordReset() {
    const navigate = useNavigate()

    const [loading, setloading] = useState(false)
    const [otp, setOtp] = useState();
    const [otpError, setOtpError] = useState('');
    const [showForm, setShowForm] = useState(false); //here change
    const [showPass1, setShowPass1] = useState(false);
    const [showPass2, setShowPass2] = useState(false);


    const sendOTP = async (e) => {
        e.preventDefault();
        setOtpError('')
        if (!otp) {
            setOtpError('please enter vailed otp');
            return
        }
        try {
            setloading(true);
            const formData = new FormData;
            const email = forgate_pass_email_get();
            formData.append('email', email);
            formData.append('otp', otp);

            const { data } = await axios.post(configJSON?.baseUrl + configJSON?.check_otp, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (data?.success) {
                MESSAGE.success('otp verified')
                setShowForm(true)
                sessionStorage.setItem('verifiedOTP', otp);
            }

        } catch (error) {
            console.log(error);
            if (error?.response?.data?.message) {
                MESSAGE.error(error?.response?.data?.message)
                return;
            }
            MESSAGE.error('server internal error');

        } finally {
            setloading(false);
        }
    }

    const changePass = async (values, {resetForm}) => {
        try {
            const payload = { new_password:values?.password, email:forgate_pass_email_get(), otp: sessionStorage.getItem('verifiedOTP')}
            const {data} = await axios.put(configJSON?.baseUrl+configJSON?.reset_password,payload)
            if(data?.success){
                MESSAGE?.success(data?.message)
                navigate('/password/sucessfull');
                sessionStorage.clear();
                return
            }
            console.log(data);
        } catch (error) {
            console.log(error)
            if(error?.response?.data?.message){
                MESSAGE?.error(error?.response?.data?.message)
                return;
            }
            MESSAGE?.error('server internal error');
        }
    }

    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                    <div className="ct_login_form ct_center_css ct_h-100">
                        {!showForm &&
                            <form className='w-100' onSubmit={sendOTP}>
                                <h4 className="ct_fs_32 text-white text-center mb-30 ct_fw_700">OTP VERIFICATION</h4>
                                <div className="ct_form mb-16">
                                    <div className="position-relative">
                                        <input onChange={(e) => setOtp(e?.target?.value)} className="ct_input form-control" placeholder="Enter OTP" type="text" max='8' min='8' required="" />
                                        <p className="text-danger">{otpError}</p>
                                    </div>
                                </div>
                                <div className="text-center pt-30 mt-30">
                                    <button type='submit' className="ct_button_blue" disabled={loading} >
                                        {loading &&
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        }
                                        SAVE PASSWORD</button>
                                </div>
                            </form>
                        }
                        {/* password form */}
                        {showForm &&
                            <Formik
                                validationSchema={Schema_forgate_password_form}
                                initialValues={{
                                    password: '',
                                    cpassword: '',
                                }}
                                onSubmit={(values, actions)=>changePass(values,actions)}
                            >
                                {
                                    ({ touched, isSubmitting, values, errors, handleBlur, handleChange, handleSubmit }) => (

                                        <form className="w-100" onSubmit={(e) => { e.preventDefault(); }}>
                                            <h4 className="ct_fs_32 text-white text-center mb-30 ct_fw_700">Set new password</h4>
                                            <div className="ct_form mb-16">
                                                <div className="position-relative">
                                                    <input onChange={handleChange} onBlur={handleBlur} name='password' className="ct_input form-control"
                                                        placeholder="Enter new password" type={showPass1 ? 'text' : 'password'} value={values?.password} required="" />
                                                    {
                                                        showPass1 ?
                                                            <BsFillEyeSlashFill className="ct_show_eye" onClick={() => setShowPass1(!showPass1)} />
                                                            :
                                                            <IoEyeSharp className="ct_show_eye" onClick={() => setShowPass1(!showPass1)} />
                                                    }
                                                </div>
                                                <p className="text-danger" style={{width:'80%'}}>
                                                    {errors?.password && touched?.password && (errors?.password)}
                                                </p>
                                                <span className="ct_input-border"></span>
                                            </div>

                                            <div className="ct_form mb-16">
                                                <div className="position-relative">
                                                    <input onChange={handleChange} onBlur={handleBlur} name='cpassword' className="ct_input form-control"
                                                        placeholder="Re-enter new password" value={values?.cpassword} type={showPass2 ? 'text' : 'password'} required="" />
                                                    {
                                                        showPass2 ?
                                                            <BsFillEyeSlashFill className="ct_show_eye" onClick={() => setShowPass2(!showPass2)} />
                                                            :
                                                            <IoEyeSharp className="ct_show_eye" onClick={() => setShowPass2(!showPass2)} />
                                                    }
                                                </div>
                                                
                                                <p className="text-danger" style={{width:'80%'}}>
                                                    {errors?.cpassword && touched?.cpassword && (errors?.cpassword)}
                                                </p>
                                                 <p className="ct_error_msg">Incorrect email address or password.</p>
                                                <span className="ct_input-border"></span>
                                            </div>


                                            <div className="text-center pt-30 mt-30">
                                                <button type='submit' onClick={handleSubmit} className="ct_button_blue" disabled={isSubmitting} >
                                                    {isSubmitting &&
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    } SAVE PASSWORD</button>
                                            </div>
                                        </form>
                                    )
                                }
                            </Formik>
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default PasswordReset