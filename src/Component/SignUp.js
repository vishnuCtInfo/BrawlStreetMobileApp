import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Country, State } from 'country-state-city';
import back_btn from "../img/back_btn.png"
import { message, message as MESSAGE } from "antd";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5"
import axios from 'axios'
import { IsAuthnaticated } from '../Utils/Auth';
import { Formik } from 'formik';
import { Schema_signup_form } from '../Services/Schema';
export const configJSON = require("../Component/Config");

function SignUp() {
    const navigate = useNavigate()
    const countryData = Country.getAllCountries();
    const stateData = State.getAllStates()
    const [seletedStates, setSelectedStates] = useState([])

    const [showPass, setShowPass] = useState(false);

    const HandleSplash = () => {
        navigate("/")
    }

    const onSubmitForm = async (values, { resetForm }) => {
        const payload = values;
        try {
            const { data } = await axios.post(configJSON.baseUrl + configJSON.signup_api, payload);
            if (data?.success) {
                MESSAGE.success(data?.message)
                navigate("/check/your/mail", { state: { 'email': payload?.email } });
                resetForm();
                return;
            }

            MESSAGE.error(data?.message)
            return;
        } catch (error) {
            console.log(error);
            MESSAGE.error('server internal error');
        }

    }

    useEffect(() => {
        if (IsAuthnaticated()) {
            navigate(-1);
        }
    }, [navigate])

    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                    <div className="ct_mob_head d-flex align-items-center mb-30">
                        <a onClick={() => HandleSplash()}>
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 ct_fw_700 mb-0">SIGN UP</h4>
                    </div>

                    <div className="ct_login_form  h-100">
                        {/* action={()=>navigate("/check/your/mail")} */}
                        <Formik
                            validationSchema={Schema_signup_form}
                            initialValues={{
                                email: window.location.search.split('=')[3],
                                password: '',
                                dob: '',
                                country: '',
                                state: '',
                                username: '',
                                reference: window.location.search.split('=')[1]
                            }}
                            onSubmit={(values, actions) => onSubmitForm(values, actions)}
                        >
                            {
                                ({ setFieldValue, setFieldError, values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => {

                                    const onSelectCountry = (val) => {
                                        setFieldValue("country", val);

                                        var isoCode;
                                        countryData.map((item) => {
                                            if (item?.name === val) {
                                                isoCode = item?.isoCode;
                                            }
                                        });
                                        var arr = [];
                                        stateData.map((item) => {
                                            isoCode == item?.countryCode &&
                                                arr.push(item?.name);
                                        });
                                        if (arr.length > 0)
                                            setSelectedStates(arr);
                                        else
                                            setSelectedStates(['N/A'])
                                    };

                                    // const checkPass = (val) => {
                                    //     setFieldValue('password', val);
                                    //     const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                                    //     if (val.test(passwordRegex)) {
                                    //         setFieldError('password', '');
                                    //     } else {
                                    //         setFieldError('password', 'insert number and character')
                                    //     }
                                    // }

                                    return (

                                        <form onSubmit={(e) => { e.preventDefault(); }} className="w-100">
                                            {/* email */}
                                            <div className="ct_form mb-16">
                                                <input className="ct_input form-control" onBlur={handleBlur} placeholder="Enter email address" required type="email" name='email' onChange={handleChange} value={values.email} />
                                                {/* <p className="ct_error_msg">Incorrect email address or password.</p> */}
                                                <span className="text-danger" style={{ fontSize: '80%' }}>
                                                    {touched.email && errors.email && errors.email}
                                                </span>

                                            </div>

                                            {/* date */}
                                            <div className="ct_form mb-16">
                                                <div className="position-relative">
                                                    {/* <input className="ct_input form-control" type="date" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" onChange={(e) => setDob(e.target.value)} value={dob} /> */}
                                                    <input required type="date" name="dob" id='dob' autoComplete="off" className="ct_input form-control" value={values?.dob} onChange={handleChange}
                                                        max={new Date().toISOString().split("T")[0]}
                                                    />
                                                </div>
                                                {/* <p className="ct_error_msg">Incorrect email address or password.</p> */}
                                                <span className="text-danger" style={{ fontSize: '80%' }}>
                                                    {touched.dob && errors.dob && errors.dob}
                                                </span>

                                            </div>

                                            {/* country */}
                                            <div className="ct_form mb-16">
                                                <select className='ct_input' onChange={(e) =>
                                                    onSelectCountry(e.target.value)
                                                }
                                                    onBlur={handleBlur}
                                                    value={values.country}
                                                >

                                                    <option className='text-dark' val="">{values.country || "Country"}</option>
                                                    {countryData.map((item, i) => (
                                                        <option key={i} className='text-dark' value={item.name} >{item.name}</option>
                                                    ))}
                                                </select>
                                                <span className="text-danger" style={{ fontSize: '80%' }}>
                                                    {touched?.country && errors?.country && (errors?.country)}
                                                </span>
                                            </div>

                                            {/* state */}
                                            <div className="ct_form mb-16">
                                                <select onChange={handleChange}
                                                    value={values.state}
                                                    name='state'
                                                    onBlur={handleBlur}
                                                    className='ct_input'>
                                                    <option className='text-dark' value="" >State</option>
                                                    {
                                                        seletedStates.map((item) => (
                                                            <option className='text-dark' itemue={item} >{item}</option>
                                                        ))
                                                    }
                                                </select>
                                                <span className="text-danger" style={{ fontSize: '80%' }}>
                                                    {touched?.state && errors?.state && (errors?.state)}
                                                </span>
                                            </div>

                                            {/* username */}
                                            <div className="ct_form mb-16">
                                                <input className="ct_input form-control" placeholder="Create username" required type="text"
                                                    name="username" id='username' onChange={handleChange} value={values.username} onBlur={handleBlur} />
                                                <span className="text-danger" style={{ fontSize: '80%' }}>
                                                    {touched.username && errors.username && errors.username}
                                                </span>

                                            </div>

                                            {/* password */}
                                            <div className="ct_form mb-16">
                                                <div className="position-relative">
                                                    <input pattern="[A-Za-z0-9]+" className="ct_input form-control" placeholder="Create password" type={showPass ? 'text' : 'password'}
                                                        name="password" id="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                                    {
                                                        showPass ?
                                                            <BsFillEyeSlashFill className="ct_show_eye" style={{ color: "white" }} onClick={() => setShowPass(!showPass)} />
                                                            :
                                                            <IoEyeSharp className="ct_show_eye" style={{ color: "white" }} onClick={() => setShowPass(!showPass)} />
                                                    }

                                                </div>
                                                <span className="text-danger" style={{ fontSize: '80%' }}>
                                                    {touched.password && errors.password && errors.password}
                                                </span>
                                            </div>

                                            {/* reference code */}
                                            <div className="ct_form mb-16 mt_15">
                                                <input value={values.reference} onChange={handleChange} onBlur={handleBlur} name='reference' className="ct_input form-control ct_fs_18" placeholder="Referral code" required="" type="text" />
                                                <span className="text-danger" style={{ fontSize: '80%' }}>
                                                    {touched.reference && errors.reference && errors.reference}
                                                </span>
                                            </div>

                                            {/* signup button */}
                                            <div className="text-center  mt-30">
                                                <button type='submit' className="ct_button_blue" onClick={handleSubmit} disabled={isSubmitting}>
                                                    {isSubmitting && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                                                    SIGN UP</button>
                                            </div>

                                            <div className="text-center mt_10">
                                                <p className="ct_fs_14 ct_grey_text">By signing up you agree to the <a className="ct_blue_text">terms & conditions.</a></p>
                                            </div>

                                            <div>
                                                <p className="text-white ct_fs_14">Already have an account? <a style={{ color: "#0d6efd" }} onClick={() => navigate("/login")}>Login</a></p>

                                            </div>
                                        </form>

                                    )
                                }
                            }

                        </Formik>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SignUp