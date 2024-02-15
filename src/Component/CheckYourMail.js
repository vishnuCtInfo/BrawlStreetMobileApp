import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function CheckYourMail() {
    const navigate = useNavigate()
    const location = useLocation();
    const email = location.state?.email;
    const HandleLogin = () => {
        navigate("/login")
    }
    const HandleVerificationEmail = () => {
        navigate("/varification/email")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                    <div className="ct_login_form ct_center_css ct_h-100 ct_px_15">
                        <form className="w-100">
                            <h4 className="ct_fs_32 text-white text-center ct_fw_700">Check your email</h4>
                            <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">We’ve sent you a confirmation email to the email address you provided:</p>
                            <h5 className="text-center text-white mt_20 mb_20 ct_fw_500 ct_fs_14">{email??'example@gmail.com'}</h5>
                            <p className="ct_grey_text mt_10 ct_fs_14 ct_lh_20 ct_fw_400 text-center">Please check and confirm your email before you can use the app.</p>
                            <div className="text-center mt-30">
                                <a onClick={() => HandleLogin()} className="ct_button_blue">BACK TO LOG IN</a>
                            </div>
                            <div className="text-center mt-30">
                                <a onClick={() => HandleVerificationEmail()} className="ct_blue_text text-center ct_fw_600 ct_fs_14">RESEND VERIFICATION EMAIL</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckYourMail