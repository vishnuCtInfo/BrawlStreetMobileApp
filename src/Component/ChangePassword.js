import React, { useState } from 'react'
import back_btn from "../img/back_btn.png"
import { NavLink, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { Schema_reset_password_form } from '../Utils/Schema'
import { IoEyeSharp } from 'react-icons/io5'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { IsAuthnaticated } from '../Utils/Auth'

function ChangePassword() {
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)
    const [showPass1, setShowPass1] = useState(false)
    const [showPass2, setShowPass2] = useState(false)

    const changePassword = async (values, { resetForm }) => {
        const payload  = {email:IsAuthnaticated()?.activeUserEmail, access_token: IsAuthnaticated()?.accessToken, current_password:values?.password, new_password:values?.npassword}
        console.log(payload)
        try {

        } catch (error) {

        }
    }

    return (
        <Formik
            validationSchema={Schema_reset_password_form}
            initialValues={{
                password: '', npassword: '', cpassword: ''
            }}
            onSubmit={(values, actions) => changePassword(values, actions)}
        >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
            
                <div className="ct_mobile_width">
                    <div className=" ct_h-100 ">
                        <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                            <span onClick={() => navigate(-1)} className="ct_mob_head pt-0">
                                <img src={back_btn} alt="img" />
                            </span>
                            <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">CHANGE PASSWORD</h4>
                        </div>
                        <div className="ct_white_bg pt-28 ct_pb_100">
                            <div className="px-15">
                                <div className="pb-20">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Current password</p>
                                    <div className="position-relative">
                                        <input type={showPass ? 'text' : 'password'} className="ct_select_option form-control w-100 ct_new_pass_hide"
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
                                <div className="pb-20">
                                    <NavLink to='/forgot/password2' className="ct_blue_text ct_fs_14 ct_fw_700">FORGOT PASSWORD?</NavLink>
                                </div>

                                <div className="pb-20">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">New password</p>
                                    <div className="position-relative">
                                        <input type={showPass1 ? 'text' : 'password'} className="ct_select_option form-control w-100 ct_new_pass_hide"
                                            value={values?.npassword} name="npassword" onChange={handleChange} onBlur={handleBlur} />
                                        {
                                            showPass1 ?
                                                <BsFillEyeSlashFill className="ct_show_eye" onClick={() => setShowPass1(!showPass1)} />
                                                :
                                                <IoEyeSharp className="ct_show_eye" onClick={() => setShowPass1(!showPass1)} />
                                        }
                                    </div>
                                    <p className='text-danger' width={{ width: '80%' }} >
                                        {touched?.npassword && errors.npassword && (errors?.npassword)}
                                    </p>
                                </div>
                                <div className="pb-1">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1 ct_7C7D7E_text_clr">Confirm new password</p>
                                    <div className="position-relative">
                                        <input type={showPass2 ? 'text' : 'password'} className="ct_select_option form-control w-100 ct_new_pass_hide"
                                            value={values?.cpassword} name="cpassword" onChange={handleChange} onBlur={handleBlur} />
                                        {
                                            showPass1 ?
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
                        <button onClick={handleSubmit} type='button' className="ct_button_blue ct_light_blue_btn">
                            {isSubmitting &&
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            }
                            CHANGE PASSWORD</button>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default ChangePassword