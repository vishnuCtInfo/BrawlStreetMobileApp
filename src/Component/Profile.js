import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import profile_pic from "../img/profile_pic.png"
import back_btn from "../img/back_btn.png"
import setting_profile_bg from "../img/setting-profile-bg.png"
import { Country, State } from 'country-state-city';
import { message as toast } from "antd";
import { API_user_getProfile, API_user_updateProfile } from '../Services/userApIs'
import { Formik } from 'formik'
import { Schema_user_profile_form } from '../Utils/Schema'


function Profile() {
    const countryData = Country.getAllCountries();
    const stateData = State.getAllStates()

    const [userState, setUserState] = useState({
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        region: '',
        postal_code: '',
        country: '',
        phone_number: '',
        birthday: '',
        federal_tax_classification: '',
        ssn_last_4_digits: '',
        image: ''
    });
    const [file, setFile] = useState(null);

    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        address: "",
        city: "",
        region: "",
        postal_code: "",
        country: "",
        phone_number: "",
        birthday: "",
        federal_tax_classification: "",
        ssn_last_4_digits: "",
        image: ''
    })


    const changeCountry = (e, setFieldValue) => {
        const selectedCountryName = e?.target?.value;
        const foundState = countryData.find(user => user.name === selectedCountryName)
        const allState = stateData?.filter((state) => state?.countryCode === foundState.isoCode);
        setFieldValue('country', selectedCountryName);
        setFieldValue('region', '');
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
        const blob = new Blob([e.target.files[0]], { type: e.target.files[0]?.type });
        setUserData({ ...userData, image: URL.createObjectURL(blob) })
        setFile(selectedFile);
    };

    const getProfile = async () => { 
        try {
            const data = await API_user_getProfile();
            setUserData(data?.data)
            const foundState = countryData.find(user => user.name === data?.data?.country)
            const allState = stateData?.filter((state) => state?.countryCode === foundState.isoCode);
            setUserState(allState)


        } catch (error) {
            console.log('server internal error: ', error);
        }
    }

    const OnUpdateProfile = async (values, actions) => {
        console.log(values)
        const formDataToSend = new FormData();
        if (file) {
            formDataToSend?.append('image', file);
        }
        for (const key in values) {
            if (key !== 'user' && key !== 'image')
                formDataToSend.append(key, values[key]);
        }
        try {
            await API_user_updateProfile(formDataToSend);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    useEffect(() => {
        getProfile();
    }, [])

    return (
        <>
            <Formik
                validationSchema={Schema_user_profile_form}
                initialValues={userData}
                onSubmit={(values, actions) => OnUpdateProfile(values, actions)}
                enableReinitialize
            >
                {
                    ({ values, errors, touched, isSubmitting, setFieldValue, handleSubmit, handleChange, handleBlur }) => (
                        <div className="ct_mobile_width">
                            <div className=" ">
                                <div className="ct_setting_profile_bg pb-40" style={{ backgroundImage: `url(${setting_profile_bg})` }}>
                                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15 ct_header_fixed">
                                        <NavLink to='/setting' className="ct_mob_head pt-0">
                                            <img src={back_btn} alt="img" />
                                        </NavLink>
                                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">PERSONAL INFO</h4>
                                    </div>

                                    <div class=" text-center position-relative" style={{ paddingTop: "124px" }}>
                                        <img className='rounded-circle ct_edit_img_102 text-white' src={values?.image !== '' ? values?.image : profile_pic} alt="URL_NOT_FOUND" />
                                        <div class="ct_plus_icon ct_profile_edit_icon" data-bs-toggle="modal" data-bs-target="#edit_profile">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5888 0.222752C16.7011 0.215222 17.7702 0.652509 18.5584 1.43733L18.5626 1.44147C19.3478 2.22946 19.7853 3.29869 19.7778 4.41108C19.7703 5.52017 19.3209 6.58036 18.5296 7.35702L7.8341 18.0525L2.37269 19.4532C1.8592 19.5849 1.31432 19.4358 0.939444 19.061C0.564571 18.6861 0.415379 18.1413 0.547011 17.6278L1.947 12.1662L12.6426 1.47064C13.4195 0.679433 14.4798 0.23026 15.5888 0.222752ZM16.4395 3.56109C16.2188 3.34238 15.92 3.22058 15.6092 3.22268C15.2973 3.22479 14.9993 3.35143 14.7813 3.57442L14.7693 3.58658L4.64909 13.7068L4.08238 15.9176L6.2934 15.3505L16.4137 5.23023L16.4263 5.21783C16.6492 5.00012 16.7757 4.70233 16.7779 4.39077C16.78 4.08018 16.6582 3.78159 16.4395 3.56109Z" fill="white" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9393 3.93934C11.5251 3.35355 12.4749 3.35355 13.0607 3.93934L16.0607 6.93934C16.6464 7.52513 16.6464 8.47487 16.0607 9.06066C15.4749 9.64645 14.5251 9.64645 13.9393 9.06066L10.9393 6.06066C10.3536 5.47487 10.3536 4.52513 10.9393 3.93934Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>

                                </div>

                                <div className="ct_white_bg pt-28  ct_pb_100 px-15">

                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">First name</p>
                                        <input type="text" className="ct_select_option form-control w-100"
                                            name='first_name' value={values?.first_name} onChange={handleChange} onBlur={handleBlur} />
                                        <span className='text-danger' style={{ fontSize: '80%' }}>{touched?.first_name && errors?.first_name && (errors?.first_name)}</span>
                                    </div>

                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Last name</p>
                                        <input type='text' className="ct_select_option form-control w-100"
                                            name='last_name' value={values?.last_name} onChange={handleChange} onBlur={handleBlur} />
                                        <span className='text-danger' style={{ fontSize: '80%' }}>{touched?.last_name && errors?.last_name && (errors?.last_name)}</span>
                                    </div>

                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Address</p>
                                        <input type="text" className="ct_select_option form-control w-100"
                                            name='address' value={values?.address} onChange={handleChange} onBlur={handleBlur} />
                                        <span className='text-danger' style={{ fontSize: '80%' }}>{touched?.address && errors?.address && (errors?.address)}</span>
                                    </div>

                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">City</p>
                                        <input type="text" className="ct_select_option form-control w-100"
                                            name='city' value={values?.city} onChange={handleChange} onBlur={handleBlur} />
                                        <span className='text-danger' style={{ fontSize: '80%' }}>{touched?.city && errors?.city && (errors?.city)}</span>
                                    </div>

                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Region</p>
                                        <select className="ct_select_option form-control w-100"
                                            name='region' value={values?.region} onChange={handleChange} onBlur={handleBlur} >
                                            <option value=''>Select Region</option>
                                            {values?.region === 'N/A' &&
                                                <option value='N/A'>N/A</option>
                                            }
                                            {userState &&
                                                userState.length > 0 &&
                                                userState?.map((item, key) => (
                                                    <option value={item?.name} key={key}>{item?.name}</option>
                                                ))
                                            }
                                        </select>
                                        <span className='text-danger' style={{ fontSize: '80%' }}>{touched?.region && errors?.region && (errors?.region)}</span>
                                    </div>
                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Postal code</p>
                                        <input type="number" className="ct_select_option form-control"
                                            name='postal_code' value={values?.postal_code} onChange={handleChange} onBlur={handleBlur} />
                                        <span className='text-danger' style={{ fontSize: '80%' }}>{touched?.postal_code && errors?.postal_code && (errors?.postal_code)}</span>
                                    </div>
                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Country</p>
                                        <select className="ct_select_option form-control w-100"
                                            name='country' value={values?.country} onChange={(e) => changeCountry(e, setFieldValue)} onBlur={handleBlur} >
                                            <option value=''>Select Country</option>
                                            {
                                                countryData?.map((item, key) => (
                                                    <option key={key} value={item.name} >{item.name}</option>
                                                ))
                                            }
                                        </select>
                                        <span className='text-danger' style={{ fontSize: '80%' }}>{touched?.country && errors?.country && (errors?.country)}</span>
                                    </div>
                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Phone number</p>
                                        <input type="text" className="ct_select_option form-control w-100"
                                            name='phone_number' value={values?.phone_number} onChange={handleChange} onBlur={handleBlur} />
                                        <span className='text-danger' style={{ fontSize: '80%' }}>{touched?.phone_number && errors?.phone_number && (errors?.phone_number)}</span>
                                    </div>
                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Birthday</p>
                                        <input type="date" data-val="true" data-val-date="The field EstPurchaseDate must be a date." id="EstPurchaseDate" className="ct_select_option form-control w-100"
                                            name='birthday' value={values?.birthday} onChange={handleChange} onBlur={handleBlur} />
                                        <span className='text-danger' style={{ fontSize: '80%' }}>{touched?.birthday && errors?.birthday && (errors?.birthday)}</span>
                                    </div>
                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Federal tax classification</p>
                                        <select className="ct_select_option form-control w-100"
                                            name='federal_tax_classification' value={values?.federal_tax_classification} onChange={handleChange} onBlur={handleBlur} >
                                            <option value="Limited Liability Corporation 1(LL..)">Limited Liability Corporation 1(LL..)</option>
                                            <option value="Limited Liability Corporation 2(LL..)">Limited Liability Corporation 2(LL..)</option>
                                            <option value="Limited Liability Corporation 3(LL..)">Limited Liability Corporation 3(LL..)</option>
                                        </select>
                                        <span className='text-danger' style={{ fontSize: '80%' }}>{touched?.federal_tax_classification && errors?.federal_tax_classification && (errors?.federal_tax_classification)}</span>
                                    </div>
                                    <div className="pb-20">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">SSN (last 4 digits)</p>
                                        <div className="position-relative">
                                            <input type="number" className="ct_select_option form-control w-100"
                                                name='ssn_last_4_digits' value={values?.ssn_last_4_digits} onChange={handleChange} onBlur={handleBlur} />
                                            <div className="ct_input_icon_right">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M10.5 6H13.5V9H10.5V6Z" fill="#AAAAAB" />
                                                    <path d="M10.5 11H13.5V18H10.5V11Z" fill="#AAAAAB" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#AAAAAB" />
                                                </svg>
                                            </div>
                                            <span className='text-danger' style={{ fontSize: '80%' }}>{touched?.ssn_last_4_digits && errors?.ssn_last_4_digits && (errors?.ssn_last_4_digits)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ct_grey_bg_clr ct_fixed_botom">
                                <button onClick={handleSubmit} type='button' className="ct_button_blue ct_light_blue_btn">
                                    {isSubmitting &&
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    }SAVE</button>
                            </div>
                        </div>

                    )
                }
            </Formik>


            <div class="modal fade" id="edit_profile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog " role="document">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <h5 class="modal-title ct_fs_18 ct_fw_700" id="exampleModalLabel">Profile picture</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.939222 3.06077L16.9392 19.0608L19.0605 16.9395L3.06054 0.939448L0.939222 3.06077Z" fill="#050505" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0608 3.06077L3.06077 19.0608L0.939453 16.9395L16.9395 0.939448L19.0608 3.06077Z" fill="#050505" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div class="modal-body  border-0 pt-0">
                            <div>
                                <div class="ct_grey_bg_clr py-3">
                                    <h4 class="mb-0 ct_fs_12 ct_fw_600 ct_grey_text_2">PROFILE IMAGE</h4>
                                </div>
                                <div class="d-flex align-items-center gap-3">
                                    <div class="position-relative py-12 " style={{ width: "fit-content" }}>
                                        <img className='rounded-circle ct_edit_img_102' src={userData?.image ? userData?.image : profile_pic} alt="img" />
                                        <div class=" ct_profile_edit_icon ct_verify_icon" data-bs-toggle="modal" data-bs-target="#edit_profile">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                <circle cx="11" cy="11" r="10" fill="#00A64B" stroke="white" stroke-width="2" />
                                                <path d="M15 8L10 14.5L7 11.5" stroke="white" stroke-width="2" />
                                            </svg>
                                        </div>
                                    </div>



                                    <label htmlFor="ct_img_upload1" className="ct_fs_14 ct_blue_text ct_fw_700 mb-0" style={{ cursor: 'pointer' }}>
                                        Change Image
                                    </label>
                                    <input
                                        type="file"
                                        id="ct_img_upload1"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                    />
                                    {/* <h4 class="ct_fs_14 ct_blue_text ct_fw_700 mb-0">CHANGE PHOTO</h4> */}
                                </div>
                            </div>
                            <div>
                                <div class="ct_grey_bg_clr py-3">
                                    <h4 class="mb-0 ct_fs_12 ct_fw_600 ct_grey_text_2">AVATARS</h4>
                                </div>

                                <div class="d-flex align-items-center gap-2  flex-wrap pt-3">

                                    <div class="ct_avatar_img ct_avatar_blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="40" viewBox="0 0 27 40" fill="none">
                                            <path d="M5.83333 10.8333H20.8333C22.672 10.8278 24.1612 9.33867 24.1667 7.5V0.833333C24.1667 0.373096 23.7936 0 23.3333 0H20C19.5398 0 19.1667 0.373096 19.1667 0.833333V2.5C19.1667 2.96024 18.7936 3.33333 18.3333 3.33333H16.6667C16.2064 3.33333 15.8333 2.96024 15.8333 2.5V0.833333C15.8333 0.373096 15.4602 0 15 0H11.6667C11.2064 0 10.8333 0.373096 10.8333 0.833333V2.5C10.8333 2.96024 10.4602 3.33333 10 3.33333H8.33333C7.8731 3.33333 7.5 2.96024 7.5 2.5V0.833333C7.5 0.373096 7.1269 0 6.66667 0H3.33333C2.8731 0 2.5 0.373096 2.5 0.833333V7.5C2.50549 9.33867 3.99466 10.8278 5.83333 10.8333Z" fill="white" />
                                            <path d="M5.34759 31.6664H21.1809C21.4622 31.6668 21.7248 31.5252 21.879 31.29C22.0333 31.0547 22.0585 30.7575 21.9459 30.4997C20.0193 25.853 18.7893 20.0147 20.0326 15.428C20.1659 14.9268 20.0582 14.3921 19.7414 13.9815C19.4245 13.5709 18.9346 13.3312 18.4159 13.333H8.10593C7.58654 13.3325 7.09662 13.5742 6.78092 13.9866C6.46522 14.3991 6.35985 14.9351 6.49593 15.4364C7.73926 20.023 6.50926 25.8614 4.58259 30.508C4.47375 30.765 4.50077 31.0594 4.65457 31.2923C4.80836 31.5251 5.06852 31.6656 5.34759 31.6664Z" fill="white" />
                                            <path d="M20.7603 34.167H5.76034C2.92462 34.1672 0.499799 36.2066 0.0136748 39.0003C-0.0312538 39.2476 0.0357527 39.502 0.196632 39.6951C0.357512 39.8881 0.595706 39.9999 0.847008 40.0003H25.682C25.9331 39.9993 26.1709 39.8874 26.3317 39.6945C26.4924 39.5016 26.5597 39.2475 26.5153 39.0003C26.0287 36.2035 23.5992 34.1631 20.7603 34.167Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div class="ct_avatar_img ct_avatar_green">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="38" viewBox="0 0 44 38" fill="none">
                                            <path d="M44.0008 17.1828C44.0008 14.0498 41.1217 12.4098 38.2732 12.4098C36.3511 12.3514 34.5495 11.4594 33.3379 9.966C32.9255 9.33327 32.8283 8.54556 33.0745 7.83152C33.1228 7.67222 33.251 7.54983 33.4124 7.50887C34.6572 7.20092 35.7005 6.35499 36.259 5.20065C36.9423 3.71766 36.9423 2.00992 36.259 0.52694C36.0969 0.203345 35.7656 -0.000709548 35.4037 1.85413e-06C33.8121 0.0702615 32.3861 1.00479 31.6865 2.43614C31.0878 3.69816 30.9989 5.14244 31.4383 6.46836C31.4721 6.57476 31.4674 6.68966 31.4249 6.79292C30.8006 8.16947 30.923 9.7696 31.7495 11.0352C33.3179 13.0541 35.7116 14.2601 38.2675 14.319C39.5886 14.319 42.0859 14.9165 42.0859 17.1828C42.0985 18.0197 41.7458 18.8207 41.1198 19.3764C40.9509 19.5285 40.9133 19.779 41.0301 19.974C41.1869 20.2377 41.3278 20.5106 41.452 20.7911C41.5117 20.9286 41.6326 21.0299 41.7784 21.0644C41.9242 21.099 42.0778 21.0628 42.1928 20.9668C43.3431 20.0488 44.0094 18.6544 44.0008 17.1828Z" fill="white" />
                                            <path d="M15.5938 27.7112C15.5619 27.5354 15.4332 27.3927 15.2616 27.3427C14.1015 27.048 12.914 26.874 11.7181 26.8234C11.5746 26.8133 11.4342 26.8688 11.3363 26.9743C10.2118 28.179 8.67871 29.9335 8.67871 30.5387C8.97239 31.643 9.4598 32.6863 10.1182 33.6202C10.3774 34.0399 10.9137 34.193 11.3554 33.9734L12.0599 33.6202C12.3087 33.4966 12.4913 33.2708 12.5601 33.0016C12.7141 32.4269 13.0225 31.9053 13.4517 31.4933C14.0543 31.0179 14.7224 30.6321 15.4354 30.3478C15.5885 30.2782 15.6936 30.1331 15.7122 29.966C15.7295 29.8087 15.7384 29.6507 15.7389 29.4925C15.7455 28.8955 15.6969 28.2992 15.5938 27.7112Z" fill="white" />
                                            <path d="M41.1367 28.638L41.11 28.5845C41.0387 28.4384 40.898 28.3386 40.7365 28.3197C40.575 28.3007 40.415 28.3653 40.3119 28.491C39.6944 29.2285 38.9992 29.8974 38.2385 30.4861C37.9293 30.7286 37.6658 30.9424 37.4214 31.1276C37.2888 31.2329 37.2216 31.4005 37.2447 31.5683C37.2679 31.7361 37.3779 31.8792 37.534 31.9447C38.2579 32.2115 38.8599 32.7327 39.2275 33.411C39.6327 34.2474 39.7541 35.1932 39.5731 36.1049C39.5227 36.3833 39.5984 36.6696 39.7798 36.8868C39.9612 37.1039 40.2295 37.2294 40.5124 37.2294H42.2307C42.6967 37.2293 43.0945 36.8928 43.1719 36.4332L43.9356 31.8798C43.9708 31.6697 43.8625 31.4617 43.6702 31.3701C42.5454 30.7665 41.6538 29.8051 41.1367 28.638Z" fill="white" />
                                            <path d="M34.8469 30.7095L34.866 30.6962C34.971 30.6179 35.3948 30.2971 37.0577 28.9874C38.8567 27.8762 40.0171 25.9731 40.1812 23.8651C39.976 20.7244 37.6159 18.1483 34.5052 17.6697C31.8843 16.9864 29.5705 15.4394 27.9375 13.2786C26.4585 11.1602 24.1096 9.81414 21.5341 9.60909C21.0988 9.57282 20.6349 9.55372 20.1366 9.55372C14.9359 9.54609 10.6994 12.8872 6.24143 16.0068C6.0995 16.1062 5.91487 16.1208 5.75905 16.0451C5.60323 15.9694 5.50067 15.8151 5.49111 15.6421C5.47077 15.236 5.42357 14.8316 5.34983 14.4317C4.74293 12.3898 3.12902 10.8033 1.07705 10.2315C0.877883 10.1556 0.652507 10.2209 0.524827 10.3916C0.397148 10.5623 0.398118 10.7969 0.527205 10.9665C1.50247 12.1164 1.90656 13.6451 1.6269 15.1267C1.17251 17.0511 -0.158196 19.3403 0.0155406 20.2815C0.0461972 20.4417 0.0928893 20.5984 0.154912 20.7492C0.190721 20.8408 0.164676 20.945 0.0899992 21.0089C0.0899992 21.0089 0.0899993 27.6911 1.0446 28.6457C1.99919 29.6003 4.86299 27.6911 5.81759 26.7365C6.27616 26.2519 6.65506 25.6977 6.94019 25.0946C7.02085 24.931 7.18737 24.8274 7.36976 24.8273H7.76496C10.7953 24.6331 13.8357 24.9909 16.7382 25.8831C16.7802 25.9038 16.8205 25.9281 16.8585 25.9556C17.0019 26.0545 17.1149 26.1913 17.1849 26.3508C17.5411 27.3599 17.6992 28.4282 17.6508 29.4972C17.4731 31.6508 16.8901 33.7515 15.9325 35.6887L15.9191 35.7231C15.8905 35.8032 15.8638 35.8834 15.837 35.9598C15.735 36.2518 15.7807 36.5751 15.9597 36.8273C16.1387 37.0796 16.4289 37.2294 16.7382 37.2294H17.6661C18.0126 37.2294 18.3319 37.0416 18.5004 36.7388L22.8629 28.8843C22.9467 28.7319 23.1071 28.6375 23.281 28.638H27.2197C27.3591 28.6386 27.4918 28.578 27.5826 28.4721C27.6734 28.3663 27.7131 28.2259 27.6912 28.0882C27.6015 27.5002 27.5003 27.1011 27.4774 26.9656C27.4694 26.9347 27.4586 26.9047 27.445 26.8759C27.022 25.9289 26.8078 24.9021 26.8168 23.8651C26.8168 23.3378 27.2442 22.9105 27.7714 22.9105C28.2986 22.9105 28.726 23.3378 28.726 23.8651C28.7244 24.6845 28.8996 25.4946 29.2396 26.2401C29.2508 26.262 29.2597 26.2851 29.2663 26.3088C30.0515 29.4448 29.9776 32.7343 29.0525 35.8319L29.0372 35.8834L28.9971 36.0744C28.9346 36.3568 29.0036 36.6524 29.1847 36.8781C29.3658 37.1037 29.6395 37.235 29.9288 37.2351H32.7182C33.1718 37.2352 33.5629 36.916 33.6537 36.4715L33.9935 34.7723V34.7398L34.4269 31.3892C34.4608 31.1121 34.6143 30.8638 34.8469 30.7095Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div class="ct_avatar_img ct_avatar_red">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="40" viewBox="0 0 42 40" fill="none">
                                            <path d="M33.4749 24.0372C33.4749 16.927 27.7109 11.1631 20.6007 11.1631C13.4905 11.1631 7.72656 16.927 7.72656 24.0372V31.7617C7.72656 32.7098 8.49509 33.4783 9.44312 33.4783C10.3911 33.4783 11.1597 32.7098 11.1597 31.7617V27.4704C11.1597 25.1003 13.081 23.179 15.4511 23.179H21.459C22.407 23.179 23.1756 23.9475 23.1756 24.8955C23.1756 25.8435 22.407 26.6121 21.459 26.6121C17.6669 26.6121 14.5928 29.6862 14.5928 33.4783V39.1429C14.5932 39.4202 14.7274 39.6802 14.9533 39.8409C15.1791 40.0017 15.4688 40.0435 15.7309 39.9531L33.5933 33.7735C34.339 33.514 34.9304 32.9359 35.2068 32.1962C35.4832 31.4566 35.4159 30.6323 35.0232 29.9473C33.9736 28.1571 33.4378 26.1122 33.4749 24.0372Z" fill="white" />
                                            <path d="M12.0912 11.1464C12.4701 10.8965 12.589 10.3947 12.3624 10.0014L8.6495 3.5712C8.53193 3.36974 8.33743 3.2248 8.11076 3.16975C7.88409 3.11471 7.64478 3.15429 7.44791 3.27938C4.28878 5.35332 1.74721 8.2406 0.0907572 11.6373C-0.110196 12.0391 0.0327849 12.528 0.418619 12.7582L6.25491 16.248C6.65825 16.4897 7.18103 16.3619 7.42731 15.9613C8.60987 14.0336 10.2021 12.3897 12.0912 11.1464Z" fill="white" />
                                            <path d="M23.0398 8.78765C24.5972 9.03138 26.1078 9.51367 27.5183 10.2175C27.9249 10.418 28.4174 10.2677 28.6427 9.87423L31.4853 4.94944C31.7083 4.5623 31.5971 4.06878 31.2295 3.81479C28.855 2.17842 26.1727 1.04193 23.3454 0.474379C23.0928 0.422827 22.8305 0.48751 22.6308 0.650553C22.4312 0.813595 22.3154 1.05773 22.3154 1.31549V7.93796C22.3145 8.36101 22.6219 8.72166 23.0398 8.78765Z" fill="white" />
                                            <path d="M13.9309 9.28522C14.1428 9.65272 14.5914 9.81028 14.9866 9.65599C16.5224 9.05255 18.1452 8.69959 19.793 8.61061C20.2488 8.58596 20.6056 8.20882 20.6049 7.75233V0.886115C20.6056 0.430254 20.2498 0.0533656 19.7947 0.0278379C19.4943 0.0123889 19.1922 0.000373029 18.8883 0.000373029C16.0511 -0.016365 13.2388 0.53034 10.6145 1.60878C10.3855 1.70408 10.2089 1.89383 10.1302 2.12913C10.0516 2.36442 10.0786 2.62224 10.2043 2.83612L13.9309 9.28522Z" fill="white" />
                                            <path d="M39.8646 15.5929C39.7836 15.3477 39.5964 15.152 39.3551 15.0601C39.1137 14.9682 38.8437 14.9899 38.6201 15.1191L35.2454 17.0657C34.8729 17.2803 34.7166 17.7374 34.8798 18.1351C35.4676 19.5595 35.8391 21.0639 35.9818 22.5982C36.1223 23.9081 37.2289 24.9006 38.5463 24.8984C39.2648 24.8986 39.9511 24.6008 40.4418 24.076C40.9324 23.5512 41.1834 22.8463 41.1349 22.1295C40.9894 19.9057 40.5626 17.7093 39.8646 15.5929Z" fill="white" />
                                            <path d="M30.2639 11.9636C31.4482 12.9073 32.486 14.0214 33.3434 15.2696C33.5964 15.6394 34.0914 15.7523 34.4797 15.5288L38.1738 13.3969C38.5691 13.1714 38.7197 12.6766 38.5171 12.2691C37.3786 9.98213 35.8635 7.90297 34.0351 6.11869C33.8455 5.93379 33.581 5.84684 33.3186 5.88308C33.0562 5.91932 32.8253 6.07469 32.6928 6.30408L30.0545 10.865C29.8433 11.2326 29.9323 11.6993 30.2639 11.9636Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div class="ct_avatar_img ct_avatar_yellow ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3514 20.6823L36.936 29.8586C37.3242 30.1212 37.5834 30.525 37.6533 30.9759C37.7232 31.4268 37.5976 31.8855 37.3058 32.2452C33.3736 37.1517 27.2843 40.0188 20.8359 39.9999C11.0788 40.0005 2.62841 33.4999 0.502551 24.3581C-1.62331 15.2163 3.14494 5.88276 11.9759 1.89969C20.8069 -2.08339 31.3345 0.351207 37.3075 7.75781C37.5986 8.11758 37.7235 8.57605 37.6534 9.02658C37.5832 9.47711 37.3239 9.88043 36.936 10.1427L23.3514 19.319C23.1203 19.4751 22.9827 19.7294 22.9827 20.0007C22.9827 20.272 23.1203 20.5263 23.3514 20.6823ZM13.0235 10.8344C13.0235 12.6752 14.578 14.1676 16.4956 14.1676C17.4164 14.1676 18.2996 13.8164 18.9507 13.1913C19.6019 12.5662 19.9677 11.7184 19.9677 10.8344C19.9677 8.99348 18.4132 7.50115 16.4956 7.50115C14.578 7.50115 13.0235 8.99348 13.0235 10.8344Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div class="ct_avatar_img ct_avatar_orange">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="31" viewBox="0 0 48 31" fill="none">
                                            <path d="M34.26 0.089666C33.7413 -0.0858387 33.1683 0.0356106 32.7654 0.406407C32.3625 0.777204 32.194 1.33827 32.326 1.86967L33.09 4.94567C33.4869 6.75038 32.9878 8.63568 31.75 10.0077C31.4746 10.3199 31.0345 10.4289 30.6452 10.2812C30.256 10.1335 29.9989 9.76003 30 9.34367V2.46567C30.0015 1.89682 29.6807 1.3762 29.1719 1.1218C28.6631 0.867408 28.0542 0.923141 27.6 1.26567L24.664 3.46567H23.332L20.4 1.26567C19.9451 0.926386 19.3378 0.872441 18.8303 1.12623C18.3227 1.38001 18.0015 1.89819 18 2.46567V9.34167C18.0002 9.75766 17.7429 10.1304 17.3538 10.2775C16.9647 10.4247 16.5252 10.3157 16.25 10.0037C15.0142 8.63223 14.5159 6.74879 14.912 4.94567L15.674 1.87767C15.8126 1.34499 15.6483 0.77921 15.246 0.4036C14.8436 0.0279911 14.2679 -0.0971103 13.746 0.077666C5.4 2.86767 0 8.90367 0 15.4657C0.206736 20.3648 2.81196 24.8482 6.966 27.4537C7.53926 27.8647 8.32147 27.8208 8.84511 27.3482C9.36876 26.8755 9.49234 26.1019 9.142 25.4897C9.03 25.2897 8.924 25.0897 8.826 24.8897C7.69 22.4357 8.026 20.1917 9.026 19.7197C10.026 19.2477 11.898 20.4177 13.05 22.7857C13.2589 23.2162 13.7435 23.4383 14.206 23.3157C14.6683 23.1933 14.9792 22.7608 14.948 22.2837C14.858 20.9017 15.282 19.7497 15.968 19.5417C17.098 19.1997 17.78 20.2377 20.512 25.2397C21.246 26.5817 22.112 28.1537 23.138 29.9657C23.3156 30.279 23.6479 30.4726 24.008 30.4726C24.3681 30.4726 24.7004 30.279 24.878 29.9657C25.896 28.1817 26.746 26.6257 27.478 25.2897C30.19 20.3217 30.922 19.1897 32.064 19.5457C32.74 19.7457 33.164 20.9017 33.064 22.2837C33.0328 22.7608 33.3437 23.1933 33.806 23.3157C34.2689 23.4434 34.7567 23.2198 34.962 22.7857C36.112 20.4237 38.008 19.2777 38.962 19.7117C39.962 20.1917 40.304 22.4357 39.162 24.8857C39.064 25.0977 38.962 25.2977 38.848 25.4857C38.4994 26.0974 38.6233 26.8693 39.1458 27.3413C39.6682 27.8133 40.4487 27.8584 41.022 27.4497C45.18 24.8483 47.79 20.3659 48 15.4657C48 8.90367 42.6 2.86567 34.26 0.089666Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div class="ct_avatar_img ct_avatar_pink">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36" viewBox="0 0 40 36" fill="none">
                                            <path d="M38.3117 20.6017C38.1471 20.4444 38.054 20.2268 38.054 19.9992C38.054 19.7716 38.1471 19.5539 38.3117 19.3967C39.391 18.3691 40.0013 16.9436 40 15.4533C40 12.4417 36.3633 10 32.7267 10C31.1791 10.2805 29.7381 10.9797 28.56 12.0217C28.3941 12.1461 28.162 12.1296 28.0154 11.983C27.8688 11.8363 27.8523 11.6042 27.9767 11.4383C29.0191 10.2603 29.7188 8.81931 30 7.27167C30 3.63667 27.5567 3.17888e-06 24.545 3.17888e-06C23.0552 -0.00160734 21.6301 0.608802 20.6033 1.68834C20.4461 1.85341 20.228 1.94684 20 1.94684C19.772 1.94684 19.5539 1.85341 19.3967 1.68834C18.3699 0.608802 16.9448 -0.00160734 15.455 3.17888e-06C12.4417 3.17888e-06 10 3.63667 10 7.27167C10.2807 8.81913 10.9799 10.2602 12.0217 11.4383C12.1461 11.6042 12.1296 11.8363 11.983 11.983C11.8363 12.1296 11.6042 12.1461 11.4383 12.0217C10.2602 10.9797 8.81918 10.2805 7.27167 10C3.63667 10 2.0176e-06 12.4417 2.0176e-06 15.4533C-0.00128062 16.9436 0.609039 18.3691 1.68834 19.3967C1.85288 19.5539 1.94596 19.7716 1.94596 19.9992C1.94596 20.2268 1.85288 20.4444 1.68834 20.6017C0.609878 21.6285 -0.000367392 23.0526 2.0176e-06 24.5417C2.0176e-06 27.5517 3.63667 29.995 7.27333 29.995C9.49833 29.995 13.7733 28.2917 16.745 26.97C17.0023 26.8577 17.2988 26.8825 17.5339 27.036C17.769 27.1894 17.911 27.4509 17.9117 27.7317V33.3283C17.9117 34.4789 18.8444 35.4117 19.995 35.4117C21.1456 35.4117 22.0783 34.4789 22.0783 33.3283V27.7367C22.079 27.4559 22.221 27.1944 22.4561 27.041C22.6912 26.8875 22.9877 26.8627 23.245 26.975C26.2217 28.2967 30.4917 30 32.7167 30C36.3633 30 40 27.5567 40 24.5417C40.0004 23.0526 39.3901 21.6285 38.3117 20.6017Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div class="ct_avatar_img ct_avatar_bringle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3341 0.205245L36.5113 5.76877C36.8654 5.8969 37.1034 6.23057 37.1093 6.6071C37.1153 6.98362 36.8878 7.32461 36.5379 7.46383L20.3457 13.974C20.1279 14.0608 19.8852 14.0608 19.6674 13.974L3.47014 7.46383C3.12127 7.32461 2.89407 6.98503 2.8985 6.60943C2.90293 6.23384 3.13809 5.89971 3.49014 5.76877C8.16697 4.05204 18.6123 0.218579 18.6123 0.218579C19.4962 -0.0682356 20.4474 -0.0728956 21.3341 0.205245ZM18.1826 7.27228C18.1826 8.27655 18.9967 9.09067 20.001 9.09067C20.4834 9.09111 20.9462 8.89968 21.2873 8.55857C21.6284 8.21745 21.8198 7.75468 21.8194 7.27228C21.8194 6.268 21.0053 5.45388 20.001 5.45388C18.9967 5.45388 18.1826 6.268 18.1826 7.27228Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9343 16.0654L38.7532 9.30352C39.0333 9.19132 39.3509 9.2253 39.601 9.39424C39.851 9.56318 40.0011 9.8451 40.0016 10.1469V30.9909C39.999 31.8237 39.5047 32.5762 38.7415 32.9093C38.7415 32.9093 26.6244 38.1895 22.6243 39.9196C22.3446 40.0398 22.0232 40.011 21.7693 39.8431C21.5154 39.6751 21.3631 39.3906 21.3643 39.0862V16.9088C21.3641 16.5376 21.5898 16.2037 21.9343 16.0654ZM25.4566 30.7042C25.4566 31.7085 26.2707 32.5226 27.275 32.5226C27.7574 32.5231 28.2202 32.3316 28.5613 31.9905C28.9024 31.6494 29.0938 31.1866 29.0934 30.7042C29.0934 29.7 28.2793 28.8858 27.275 28.8858C26.2707 28.8858 25.4566 29.7 25.4566 30.7042ZM30.9095 26.1674C29.9072 26.1674 29.0939 25.3563 29.0912 24.354C29.0884 23.3517 29.8973 22.5362 30.8996 22.5307C31.9019 22.5252 32.7196 23.3318 32.7279 24.334C32.7323 24.819 32.5427 25.2857 32.2011 25.63C31.8596 25.9744 31.3945 26.1679 30.9095 26.1674ZM32.8675 18.6816C33.1489 19.3611 33.812 19.8041 34.5474 19.8041V19.7958C35.5485 19.7958 36.3612 18.9868 36.3658 17.9857C36.3658 17.2503 35.9228 16.5872 35.2433 16.3058C34.5638 16.0243 33.7817 16.1799 33.2616 16.6999C32.7416 17.22 32.586 18.0021 32.8675 18.6816Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0673 16.0652L1.24838 9.30334C0.968233 9.19026 0.650201 9.22386 0.399866 9.39297C0.149532 9.56209 -0.000342551 9.8446 5.87943e-07 10.1467V30.9907C-0.000125366 31.8259 0.494616 32.5818 1.26004 32.9158C1.26004 32.9158 13.3821 38.196 17.3773 39.9261C17.6569 40.0463 17.9784 40.0175 18.2323 39.8496C18.4862 39.6816 18.6384 39.3971 18.6373 39.0927V16.9086C18.6365 16.5377 18.4111 16.2042 18.0673 16.0652ZM6.36282 22.522C5.35855 22.522 4.54443 21.7079 4.54443 20.7036C4.54443 19.6994 5.35855 18.8852 6.36282 18.8852C7.36709 18.8852 8.18122 19.6994 8.18122 20.7036C8.18122 21.7079 7.36709 22.522 6.36282 22.522ZM10.0003 28.8855C10.0003 29.8898 10.8145 30.7039 11.8187 30.7039C12.3011 30.7043 12.7639 30.5129 13.105 30.1718C13.4461 29.8307 13.6376 29.3679 13.6371 28.8855C13.6371 27.8812 12.823 27.0671 11.8187 27.0671C10.8145 27.0671 10.0003 27.8812 10.0003 28.8855Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div class="ct_avatar_img ct_avatar_dark_pink">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
                                            <path d="M35 25.833C34.4661 25.833 33.954 26.0452 33.5767 26.423L30.865 29.133C29.8508 30.1473 28.3015 30.399 27.0183 29.758L20.2217 26.3613C19.528 26.0134 18.7627 25.8325 17.9867 25.833H3.33333C1.49238 25.833 0 27.3254 0 29.1663C0 31.0073 1.49238 32.4997 3.33333 32.4997H35C36.841 32.4997 38.3333 31.0073 38.3333 29.1663C38.3333 27.3254 36.841 25.833 35 25.833Z" fill="white" />
                                            <path d="M4.16634 35C3.7061 35 3.33301 35.3731 3.33301 35.8333V36.6667C3.33301 38.5076 4.82539 40 6.66634 40H31.6663C33.5073 40 34.9997 38.5076 34.9997 36.6667V35.8333C34.9997 35.3731 34.6266 35 34.1663 35H4.16634Z" fill="white" />
                                            <path d="M3.33333 17.5C3.33333 17.5 0 18.1667 0 20C0 21.8333 1.5 22.5 3.33333 22.5C3.9871 22.5042 4.6335 22.3618 5.225 22.0833C5.58365 21.9052 6.01827 22.0074 6.26 22.3267C7.13389 23.511 8.5285 24.1971 10 24.1667C11.5247 24.3194 13.0061 23.6032 13.8333 22.3133C13.9058 22.195 14.0326 22.1208 14.1712 22.1154C14.3098 22.11 14.442 22.1743 14.5233 22.2867C15.7007 23.5926 17.4124 24.2856 19.1667 24.1667C20.9209 24.2859 22.6328 23.5928 23.81 22.2867C23.8922 22.1751 24.0244 22.1115 24.1629 22.1168C24.3014 22.1221 24.4283 22.1957 24.5017 22.3133C25.3281 23.6033 26.809 24.3196 28.3333 24.1667C29.8032 24.1986 31.197 23.5151 32.0717 22.3333C32.3136 22.0132 32.7493 21.911 33.1083 22.09C33.6998 22.3686 34.3462 22.511 35 22.5067C36.8417 22.5067 38.3333 21.84 38.3333 20.0067C38.3333 18.1733 35 17.5067 35 17.5067L3.33333 17.5Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.7495 14.7402C34.5918 14.9064 34.3728 15.0003 34.1437 15H4.19206C3.96272 15.0004 3.74337 14.9062 3.58568 14.7397C3.42798 14.5731 3.34589 14.349 3.35873 14.12C3.8154 5.83333 10.7187 0 19.1671 0C27.6154 0 34.5187 5.83333 34.9771 14.1217C34.9894 14.3504 34.9071 14.5741 34.7495 14.7402ZM9.16667 8.33333C9.16667 9.25381 9.91286 10 10.8333 10C11.7538 10 12.5 9.25381 12.5 8.33333C12.5 7.41286 11.7538 6.66667 10.8333 6.66667C9.91286 6.66667 9.16667 7.41286 9.16667 8.33333ZM15 6.66667C14.0795 6.66667 13.3333 5.92047 13.3333 5C13.3333 4.07953 14.0795 3.33333 15 3.33333C15.9205 3.33333 16.6667 4.07953 16.6667 5C16.6667 5.44203 16.4911 5.86595 16.1785 6.17851C15.866 6.49107 15.442 6.66667 15 6.66667ZM17.5 8.33333C17.5 9.25381 18.2462 10 19.1667 10C20.0871 10 20.8333 9.25381 20.8333 8.33333C20.8333 7.41286 20.0871 6.66667 19.1667 6.66667C18.2462 6.66667 17.5 7.41286 17.5 8.33333ZM23.3333 6.66667C22.4129 6.66667 21.6667 5.92047 21.6667 5C21.6667 4.07953 22.4129 3.33333 23.3333 3.33333C24.2538 3.33333 25 4.07953 25 5C25 5.44203 24.8244 5.86595 24.5118 6.17851C24.1993 6.49107 23.7754 6.66667 23.3333 6.66667ZM25.8333 8.33333C25.8333 9.25381 26.5795 10 27.5 10C28.4205 10 29.1667 9.25381 29.1667 8.33333C29.1667 7.41286 28.4205 6.66667 27.5 6.66667C26.5795 6.66667 25.8333 7.41286 25.8333 8.33333Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div class="ct_avatar_img ct_avatar_dark_blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="37" viewBox="0 0 44 37" fill="none">
                                            <path d="M43.7236 11.4644C43.4917 11.227 43.1538 11.126 42.8296 11.1972C41.1088 11.5744 39.3527 11.7678 37.5909 11.774H35.5531C35.3861 11.7735 35.2309 11.8602 35.1437 12.0027C34.5625 12.9548 34.3409 14.0833 34.5189 15.1844C34.8268 16.4426 35.6697 17.5032 36.8258 18.0873C36.9174 18.1369 37.0228 18.1551 37.1257 18.1392C38.9663 17.9547 40.7558 17.4258 42.4009 16.5801C43.174 15.2829 43.7061 13.8565 43.9716 12.3699C44.052 12.0455 43.958 11.7026 43.7236 11.4644Z" fill="white" />
                                            <path d="M39.4246 22.4338C39.6536 22.2064 39.7532 21.8792 39.6898 21.5627C39.6263 21.2463 39.4083 20.9828 39.1093 20.8612C36.805 20.0853 34.7308 18.7465 33.0747 16.9663C31.5944 14.7228 33.2669 11.6334 33.6687 10.9452C33.7234 10.8584 33.8042 10.7911 33.8994 10.7529C36.2708 9.82788 38.4887 8.54975 40.4781 6.96185C42.4005 5.0394 42.4005 1.19448 41.4393 1.19448H33.4919C33.3563 1.19465 33.2271 1.13737 33.1362 1.03684C32.3699 0.0608769 31.0387 -0.270133 29.9046 0.233256C28.7818 0.794613 28.9702 1.35597 29.3278 1.727C29.436 1.84067 29.4812 2.00027 29.4489 2.15379C29.4171 2.30787 29.3125 2.4369 29.1683 2.49983C26.546 3.62062 23.7662 3.90707 21.2593 5.0394C17.0933 6.92148 16.7896 9.46105 13.456 10.0089C10.0555 10.5783 7.03853 12.5205 5.11256 15.3803H5.0991V15.3649C4.46045 16.1294 3.51535 16.571 2.51917 16.5703H0.529425C0.282805 16.5701 0.0764268 16.7574 0.0526562 17.0028C-0.0742259 18.2832 -0.197263 21.9801 2.57492 22.3127C2.81005 22.3418 2.98927 22.5373 2.99786 22.7741C3.12172 26.4347 4.84911 29.8558 7.72133 32.1287C7.81133 32.1989 7.87281 32.2993 7.89435 32.4113L8.60374 35.9813C8.69511 36.4289 9.0889 36.7504 9.54574 36.7503H14.4172H14.4288V36.7388L14.4115 30.0275C14.411 29.7539 14.527 29.4931 14.7306 29.3104C15.884 28.2712 16.5118 26.7703 16.4416 25.2194C16.4485 23.6664 15.824 22.1773 14.7114 21.0938C14.3313 20.7222 14.3244 20.1128 14.696 19.7327C15.0676 19.3526 15.677 19.3457 16.0571 19.7174C17.5441 21.1609 18.3803 23.147 18.3737 25.2194C18.374 25.5908 18.3515 25.9619 18.3064 26.3306C18.2861 26.4881 18.3452 26.6454 18.4642 26.7506C18.5832 26.8557 18.7466 26.895 18.9004 26.8554C19.9865 26.576 21.0455 26.2003 22.0648 25.7327C23.2948 25.2043 24.3699 24.3713 25.1888 23.3123C25.3311 23.1233 25.314 22.8586 25.1484 22.6895C24.2836 21.8615 23.6252 20.8422 23.2259 19.7135C23.0794 19.2028 23.3746 18.67 23.8853 18.5235C24.396 18.377 24.9288 18.6722 25.0753 19.1829C25.1407 19.404 26.6133 23.8372 35.2278 25.1598H35.2682C35.6527 25.1867 35.9891 25.2002 36.2294 25.2079C36.4948 25.2157 36.7515 25.1134 36.9388 24.9253L39.4246 22.4338Z" fill="white" />
                                            <path d="M22.853 27.4905C21.3274 28.2093 19.7102 28.7151 18.0469 28.9939C17.9154 29.0132 17.7979 29.0862 17.7224 29.1956C17.6469 29.305 17.6203 29.4408 17.6489 29.5706L19.1581 36.0089C19.2599 36.4437 19.6477 36.7511 20.0943 36.751H24.7755C25.0786 36.7507 25.3638 36.6075 25.5451 36.3646C25.7264 36.1216 25.7824 35.8074 25.6963 35.5168L24.489 31.4392C24.4426 31.279 24.4818 31.1062 24.5928 30.9817C25.5398 29.925 26.0628 28.5557 26.0616 27.1368C26.0616 26.8369 26.0616 26.56 26.0347 26.3255C26.0202 26.1467 25.9073 25.9909 25.742 25.9214C25.5766 25.8518 25.3863 25.8802 25.2484 25.9948C24.5215 26.5997 23.7156 27.1029 22.853 27.4905Z" fill="white" />
                                        </svg>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer mt-0 ct_grey_bg_clr">
                            <button type="button" class="ct_button_blue ct_light_blue_btn">DONE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile