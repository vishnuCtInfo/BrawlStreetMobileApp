import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import profile_pic from "../img/profile_pic.png"
import back_btn from "../img/back_btn.png"
import setting_profile_bg from "../img/setting-profile-bg.png"
import { Country, State } from 'country-state-city';
import { IsAuthnaticated } from '../Utils/Auth'
import axios from 'axios'
import { message as MESSAGE } from "antd";

export const configJSON = require("../Component/Config");


function Profile() {
    const navigate = useNavigate()
    const countryData = Country.getAllCountries();
    const stateData = State.getAllStates()

    const [userState, setUserState] = useState([]);
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
        image:''
    })


    const changeCountry = (e) => {
        const selectedCountryName = e.target.options[e.target.selectedIndex].text;
        setUserData({ ...userData, country: selectedCountryName })

        const foundState = countryData.find(user => user.name === selectedCountryName)
        const allState = stateData?.filter((state) => state?.countryCode === foundState.isoCode);
        setUserState(allState)
    }


    const handleFileChange = (e) => {
        const selectedFile = e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
        const blob = new Blob([e.target.files[0]], { type: e.target.files[0]?.type });
        setUserData({...userData, image: URL.createObjectURL(blob)})
        setFile(selectedFile);
    };

    const handleSubmit = async () => {
        const formDataToSend = new FormData();
        if (file) {
            formDataToSend?.append('image', file);
        }

        for (const key in userData) {
            if (key !== 'user' && key !== 'image')
                formDataToSend.append(key, userData[key]);
        }

        try {
            const { userId } = IsAuthnaticated();
            const { data } = await axios.put(
                `${configJSON?.baseUrl}${configJSON?.update_user_profile}${userId}/`,
                formDataToSend,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            if (data?.success) {
                MESSAGE.success(data?.message)
                getProfile();
            } else {
                MESSAGE.error(data?.message)
            }
        } catch (error) {
            console.error('Error sending data:', error);
            MESSAGE.error('server internal error')
        }
    };

    const getProfile = async () => {
        try {
            const { userId } = IsAuthnaticated();
            const { data } = await axios.get(configJSON.baseUrl + configJSON.get_user_profile + userId + '/');

            setUserData(data?.data)
            const foundState = countryData.find(user => user.name === data?.data?.country)
            const allState = stateData?.filter((state) => state?.countryCode === foundState.isoCode);
            setUserState(allState)


        } catch (error) {
            console.log('server internal error: ', error);
        }
    }

    useState(() => {
        getProfile();
    }, [])

    useEffect(() => {
        console.log(file)
    })
    
    return (
        <>
            <div className="ct_mobile_width">
                <div className=" ">
                    <div className="ct_setting_profile_bg pb-40" style={{ backgroundImage: `url(${setting_profile_bg})` }}>
                        <div className="ct_mob_head d-flex align-items-center pb-12 px-15 ct_header_fixed">
                            <NavLink to='/setting' className="ct_mob_head pt-0">
                                <img src={back_btn} alt="img" />
                            </NavLink>
                            <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">PERSONAL INFO</h4>
                        </div>
                        <div className="text-center position-relative" style={{ paddingTop: "124px" }}>
                            <img className='rounded-circle ct_edit_img_102' src={userData?.image ? userData?.image : profile_pic} alt="img" />
                            <label htmlFor="ct_img_upload1" className="ct_plus_icon ct_profile_edit_icon" data-bs-toggle="modal" data-bs-target="#edit_profile">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5888 0.222752C16.7011 0.215222 17.7702 0.652509 18.5584 1.43733L18.5626 1.44147C19.3478 2.22946 19.7853 3.29869 19.7778 4.41108C19.7703 5.52017 19.3209 6.58036 18.5296 7.35702L7.8341 18.0525L2.37269 19.4532C1.8592 19.5849 1.31432 19.4358 0.939444 19.061C0.564571 18.6861 0.415379 18.1413 0.547011 17.6278L1.947 12.1662L12.6426 1.47064C13.4195 0.679433 14.4798 0.23026 15.5888 0.222752ZM16.4395 3.56109C16.2188 3.34238 15.92 3.22058 15.6092 3.22268C15.2973 3.22479 14.9993 3.35143 14.7813 3.57442L14.7693 3.58658L4.64909 13.7068L4.08238 15.9176L6.2934 15.3505L16.4137 5.23023L16.4263 5.21783C16.6492 5.00012 16.7757 4.70233 16.7779 4.39077C16.78 4.08018 16.6582 3.78159 16.4395 3.56109Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.9393 3.93934C11.5251 3.35355 12.4749 3.35355 13.0607 3.93934L16.0607 6.93934C16.6464 7.52513 16.6464 8.47487 16.0607 9.06066C15.4749 9.64645 14.5251 9.64645 13.9393 9.06066L10.9393 6.06066C10.3536 5.47487 10.3536 4.52513 10.9393 3.93934Z" fill="white" />
                                </svg>
                                <input type='file' className='d-none' id='ct_img_upload1' onChange={handleFileChange} />

                            </label>
                        </div>
                    </div>

                    <div className="ct_white_bg pt-28  ct_pb_100 px-15">
                        <div className="pb-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">First name</p>
                            <input onChange={(e) => setUserData({ ...userData, first_name: e.target.value })} type="text" value={userData.first_name} className="ct_select_option form-control w-100" />
                        </div>
                        <div className="pb-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Last name</p>
                            <input type='text' onChange={(e) => setUserData({ ...userData, last_name: e.target.value })} value={userData.last_name} className="ct_select_option form-control w-100" />
                        </div>
                        <div className="pb-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Address</p>
                            <input type="text" onChange={(e) => setUserData({ ...userData, address: e.target.value })} value={userData.address} className="ct_select_option form-control w-100" />
                        </div>
                        <div className="pb-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">City</p>
                            <input type="text" onChange={(e) => setUserData({ ...userData, city: e.target.value })} value={userData.city} className="ct_select_option form-control w-100" />
                        </div>
                        <div className="pb-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Region</p>
                            <select onChange={(e) => setUserData({ ...userData, region: e?.target?.options[e?.target?.selectedIndex]?.text })} value={userData.region} className="ct_select_option form-control w-100">
                                {userState &&
                                    userState.length > 0 &&
                                    userState?.map((item, key) => (
                                        <option value={item?.name} key={key}>{item?.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="pb-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Postal code</p>
                            <input type="number" onChange={(e) => setUserData({ ...userData, postal_code: e.target.value })} value={userData.postal_code} className="ct_select_option form-control" />
                        </div>
                        <div className="pb-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Country</p>
                            <select onChange={(e) => changeCountry(e)} value={userData.country} className="ct_select_option form-control w-100">
                                {
                                    countryData?.map((item, key) => (
                                        <option key={key} value={item.name} >{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="pb-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Phone number</p>
                            <input type="text" onChange={(e) => setUserData({ ...userData, phone_number: e.target.value })} value={userData.phone_number} className="ct_select_option form-control w-100" />
                        </div>
                        <div className="pb-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Birthday</p>
                            <input type="date" onChange={(e) => setUserData({ ...userData, birthday: e.target.value })} value={userData.birthday} data-val="true" data-val-date="The field EstPurchaseDate must be a date." id="EstPurchaseDate" name="EstPurchaseDate" className="ct_select_option form-control w-100" />
                        </div>
                        <div className="pb-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Federal tax classification</p>
                            <select onChange={(e) => setUserData({ ...userData, federal_tax_classification: e?.target?.options[e?.target?.selectedIndex]?.text })} value={userData.federal_tax_classification} className="ct_select_option form-control w-100">
                                <option value="Limited Liability Corporation 1">Limited Liability Corporation 1(LL..)</option>
                                <option value="Limited Liability Corporation 2">Limited Liability Corporation 2(LL..)</option>
                                <option value="Limited Liability Corporation 3">Limited Liability Corporation 3(LL..)</option>
                            </select>
                        </div>
                        <div className="pb-20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">SSN (last 4 digits)</p>
                            <div className="position-relative">
                                <input type="number" onChange={(e) => setUserData({ ...userData, ssn_last_4_digits: e.target.value })} value={userData.ssn_last_4_digits} className="ct_select_option form-control w-100" />
                                <div className="ct_input_icon_right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M10.5 6H13.5V9H10.5V6Z" fill="#AAAAAB" />
                                        <path d="M10.5 11H13.5V18H10.5V11Z" fill="#AAAAAB" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#AAAAAB" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ct_grey_bg_clr ct_fixed_botom">
                    <button onClick={handleSubmit} type='button' className="ct_button_blue ct_light_blue_btn">SAVE</button>
                </div>
            </div>
        </>
    )
}

export default Profile