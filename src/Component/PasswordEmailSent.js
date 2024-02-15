import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IsAuthnaticated } from '../Utils/Auth';
import { message as MESSAGE } from "antd";
import axios from 'axios';
export const configJSON = require("../Component/Config");

function PasswordEmailSent() {
    const navigate = useNavigate()
    const [otp, setOTP] = useState();
    const [loading, setLoading] = useState(false);
    const [otpError, setOtpError] = useState('');


    const sendOTP = async () => {
        setOtpError('')
        if (!otp) {
            setOtpError('please enter vailed otp');
            return
        }
        try {
            setLoading(true);
            const formData = new FormData;
            const email = IsAuthnaticated()?.activeUserEmail;
            formData.append('email', email);
            formData.append('otp', otp);

            const { data } = await axios.post(configJSON?.baseUrl + configJSON?.check_otp, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (data?.success) {
                MESSAGE.success('otp verified')
                sessionStorage.setItem('verifiedOTP', otp);
                navigate('/set/new/password');
            }

        } catch (error) {
            console.log(error);
            if (error?.response?.data?.message) {
                MESSAGE.error(error?.response?.data?.message)
                setOtpError(error?.response?.data?.message)
                return;
            }
            MESSAGE.error('server internal error');

        } finally {
            setLoading(false);
        }
    }


    const sendMail = async () => {
        const email = IsAuthnaticated()?.activeUserEmail;
        if (!email) {
            navigate('/login')
            return;
        }

        const regExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

        //so danguars methods :)
        if (!regExp.test(email)) {
            MESSAGE.error("Don't change email.");
            sessionStorage.clear();
            localStorage.clear();
            navigate('/login');
            return;
        }

        setLoading(true);
        try {
            const { data } = await axios.post(configJSON.baseUrl + configJSON.forget_password, { email });
            console.log('res. data: ', data);
            if (data?.success) {
                MESSAGE.success(data?.message)
                navigate("/password/email/sent");
                return
            }
            MESSAGE.error(data?.message)
            return
        } catch (error) {
            console.log(error);
            MESSAGE.error("server internal error")
        } finally {
            setLoading(false)
        }
    }


    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <span onClick={() => navigate(-1)} className="ct_mob_head pt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.0608 4.06076L4.06077 22.0608L1.93945 19.9395L19.9395 1.93944L22.0608 4.06076Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.93921 4.06076L19.9392 22.0608L22.0605 19.9395L4.06053 1.93944L1.93921 4.06076Z" fill="white" />
                            </svg>
                        </span>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">EMAIL SENT</h4>

                    </div>


                    <div className="ct_white_bg pt-28 ct_pb_100">
                        <div className="px-15">
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">OTP</p>
                                <input type="text" placeholder='Enter here OTP' value={otp} onChange={(e) => setOTP(e?.target?.value)} className="ct_select_option form-control w-100" />
                                <span className='text-danger' style={{ width: '80%' }}>{otpError}</span>
                            </div>
                        </div>
                        <div className="px-15">
                            <p className="mb-30 ct_fs_14 ct_black_clr ">We just sent you an email with everything you need to set your new password. Sometimes we get put in the junk folder - check for us there if you don’t see anything straight away.</p>
                            <div className="pb-20">
                                <a href="javascript:void(0)" onClick={sendMail} className="ct_blue_text ct_fs_14 ct_fw_700 text-center d-block">
                                    {loading &&
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    } RESEND VERIFICATION EMAIL</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ct_grey_bg_clr ct_fixed_botom">
                    <button onClick={sendOTP} className="ct_button_blue ct_light_blue_btn" disabled={loading} >
                        {loading &&
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        } SENT OTP
                    </button>
                </div>
            </div>
        </>
    )
}

export default PasswordEmailSent