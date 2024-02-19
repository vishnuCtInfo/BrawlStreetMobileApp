import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { message as MESSAGE } from "antd";
import back_btn from "../img/back_btn.png"
import axios from 'axios'
import { forgate_pass_email_set, server_live_url, server_local_url } from '../Utils/Auth';
export const configJSON = require("../Component/Config");
function ForgotPassword() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [forgotPage, setForgotPage] = useState(server_live_url+'/password/reset?token=');
    const sendMail = async (e) => {
        e.preventDefault();
        setError('');
        if (!email) {
            setError('* email is required')
            return;
        }

        const regExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

        if (!regExp.test(email)) {
            setError('* enter only email address.');
            return;
        }
        setLoading(true);
        
        try {
            forgate_pass_email_set(email);
            const { data } = await axios.post(configJSON.baseUrl + configJSON.forget_password, { email, url_link:forgotPage });
            console.log('res. data: ', data);
            if (data?.success) {
                MESSAGE.success(data?.message)
                navigate("/email/sent")
                return
            }
            setError(data?.message)
            MESSAGE.error(data?.message)
            return
        } catch (error) {
            console.log(error);
            MESSAGE.error("server internal error")
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        const pageAddress = window?.location?.href.includes('localhost')
        if(pageAddress){
            setForgotPage(server_local_url+'/password/reset?token=');
        }
    },[])

    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 px-15">
                    <NavLink to='/login' className="ct_mob_head pb-30">
                        <img src={back_btn} alt="img" />
                    </NavLink>
                    <div className="ct_login_form ct_center_css  ct_px_15 ct_postion_center">
                        <form onSubmit={sendMail} className="w-100">
                            <h4 className="ct_fs_32 text-white text-center ct_fw_700">Forgot password</h4>
                            <p className="ct_grey_text mt_15  ct_fs_14 ct_lh_20 ct_fw_400 text-center">Enter the email address that you use for BrawlsStreet updates and we’ll send you an email with your account details.</p>

                            <div className="ct_form mb-16 mt-30">
                                <input className="ct_input form-control" placeholder="Email" required="" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                <p className="text-danger" style={{ fontSize: '80%' }}>
                                    {/* Incorrect email address or password. */}
                                    {error}
                                </p>
                                <span className="ct_input-border"></span>
                            </div>
                            <div className="text-center mt-30">
                                {/* onClick={()=>navigate("/email/sent")} */}
                                <button type='submit' className="ct_button_blue" disabled={loading} >
                                    {loading &&
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    }
                                    SEND EMAIL</button>
                            </div>

                            <div className="text-center mt-30">
                                <a className="ct_blue_text text-center ct_fw_600 ct_fs_14">NEED HELP?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword