import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import eye from "../img/eye.png"
import back_btn from "../img/back_btn.png"
import axios from 'axios'
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5"
import { IsAuthnaticated, SetIsAuthnaticated } from '../Utils/Auth';
import { Formik } from 'formik';
import { Schema_login_form } from '../Utils/Schema';
import { API_user_login } from '../Services/userApIs';
function Login() {
    const [isEye, setIsEye] = useState(false)
    const [type, setType] = useState("password")
    const navigate = useNavigate()
    const [keepLogin, setKeepLogin] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showError, setShowError] = useState(false);


    const HandleForgotPassword = () => {
        navigate("/forgot/password")
    }
    const HandleSplash = () => {
        navigate("/")
    }
    const onSubmitForm = async (payload, { resetForm }) => {
        try { const data = await API_user_login(payload);
            console.log(data)
            if (data?.success) {
                navigate("/onboarding6");
                resetForm();
                SetIsAuthnaticated({keepLogin, data})
                return;
            }
            setShowError(true);
            return;

        } catch (error) {
            console.log(error);
        }
    }

    const handleEye = () => {
        var chtype = type == "text" ? "password" : "text"
        setType(chtype);
        setIsEye(!isEye)
    }

    useEffect(() => {
        if (IsAuthnaticated()) {
            navigate(-1);
        }
    }, [navigate])

    const getUserIP = async()=>{
        try {
            const {data} = await axios.get('https://geolocation-db.com/json/');
            console.log(data?.IPv4);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getUserIP();
    },[])
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 px-15">
                    <a onClick={() => HandleSplash()} className="ct_mob_head">
                        <img src={back_btn} alt="img" />
                    </a>
                    <Formik
                        validationSchema={Schema_login_form}
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values, actions) => onSubmitForm(values, actions)}

                    >
                        {
                            ({ values, handleBlur, handleSubmit, errors, touched, handleChange, isSubmitting }) => (

                                <div className="ct_login_form ct_center_css ct_postion_center">
                                    <form onSubmit={(e) => { e.preventDefault() }} className="w-100">
                                        <h4 className="ct_fs_32 text-white text-center mb-30 ct_fw_700">Log in</h4>
                                        <div className="ct_form mb-16">
                                            <input className="ct_input form-control" value={values?.email} onChange={handleChange} onBlur={handleBlur} name='email' id="email" placeholder="Email" />
                                            {/* <p className="ct_error_msg">Incorrect email address or email.</p> */}

                                            <span className="text-danger" style={{ fontSize: '80%' }}>
                                                {touched?.email && errors?.email && (errors?.email)}
                                            </span>
                                            {/* <span className="ct_input-border"></span> */}
                                        </div>
                                        <div className="ct_form mb-16">
                                            <div className="position-relative">
                                                <input value={values?.password} onChange={handleChange} onBlur={handleBlur} name='password' id="password" className="ct_input form-control" placeholder="Password" required type={showPass ? 'text' : 'password'} />
                                                {
                                                    showPass ?
                                                        <BsFillEyeSlashFill className="fa-solid ct_show_eye" style={{ color: "white" }} onClick={() => setShowPass(!showPass)} />
                                                        :
                                                        <IoEyeSharp className="fa-solid ct_show_eye" style={{ color: "white" }} onClick={() => setShowPass(!showPass)} />
                                                }
                                            </div>
                                            <span className="text-danger" style={{ fontSize: '80%' }}>
                                                {touched?.password && errors?.password && (errors?.password)}
                                            </span>
                                            {
                                                showError &&
                                                <p className="text-danger" style={{ fontSize: '80%' }}>Incorrect email address or password.</p>
                                            }
                                        </div>
                                        <div className="d-flex align-items-center mt-30 gap-2 mb-24">
                                            <input onClick={() => setKeepLogin(!keepLogin)} checked={keepLogin} type="checkbox" id="ct_keep_login" className="ct_checkbox_width" />
                                            <label htmlFor="ct_keep_login" className="text-white ct_fs_14">Keep me logged in</label>
                                        </div>
                                        <div className="text-center mb-30">
                                            {/* onClick={()=>navigate("/onboarding6")} */}
                                            <button type='submit' className="ct_button_blue" onClick={handleSubmit} disabled={isSubmitting}>
                                                {isSubmitting && 
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                }
                                                LOG IN</button>
                                        </div>
                                        <div className="text-center">
                                            <a onClick={() => HandleForgotPassword()} className="ct_blue_text text-center ct_fw_600 ct_fs_14">FORGOT PASSWORD?</a>
                                        </div>
                                        <div>
                                            <p className="text-white ct_fs_14">Don't have an account? <a style={{ color: "#0d6efd" }} onClick={() => navigate("/signup")}>Sign up</a></p>

                                        </div>

                                    </form>
                                </div>
                            )
                        }
                    </Formik>

                </div>
            </div>
        </>
    )
}

export default Login