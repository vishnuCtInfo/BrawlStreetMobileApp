import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { message, message as MESSAGE } from "antd";
import axios from 'axios'
import { forgate_pass_email_get } from '../Utils/Auth';
export const configJSON = require("../Component/Config");

function EmailSent() {
    const navigate = useNavigate()
    const email = forgate_pass_email_get();

    const [loading, setloading] = useState(false)


    const resendMail = async () => {
        if (!email) {
            navigate('/email/sent')
            return;
        }
        try {
            setloading(true);
            const { data } = await axios.post(configJSON.baseUrl + configJSON.forget_password, { email });
            if (data?.success) {
                MESSAGE.success(data?.message)
                return
            }
            MESSAGE.error(data?.message)
            return
        } catch (error) {
            console.log(error);
            MESSAGE.error("server internal error")
        }finally{
            setloading(false);
        }
    }


    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                    <div className="ct_login_form ct_center_css ct_h-100 ct_px_15">
                        <form className="w-100">
                            <h4 className="ct_fs_32 text-white text-center ct_fw_700">Email sent!</h4>
                            <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">We just sent you an email with everything you need to log back in. Sometimes we get put in the junk folder - check for us there if you don’t see anything straight away.</p>

                            <div className="text-center mt-30">
                                <NavLink to="/login" className="ct_button_blue">Back to log in</NavLink>
                            </div>
                            <div className="text-center mt-30">
                                <button type='button' onClick={resendMail} className="ct_blue_text text-center ct_fw_600 ct_fs_14 border-0 btn btn-none" disabled={loading} >
                                    {loading &&
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    }
                                    RESEND VERIFICATION EMAIL</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailSent