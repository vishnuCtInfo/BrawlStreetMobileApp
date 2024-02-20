import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import dark_close from '../img/dark_close.png'
import { Formik } from 'formik';
import { Shcema_create_game_form } from '../Utils/Schema'
import DatePicker from 'react-datepicker';
import { ConvertFullDateTime } from '../Utils/TimeConverter';
function CreateGame() {

    const location = useLocation();
    const navigate = useNavigate()

    const gameData = location?.state?.gameData;
    const [selectedTime, setSelectedTime] = useState( new Date());

    const handleTimeChange = (time, cb) => {
        setSelectedTime(time);
        const formattedTime = time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
        cb({ target: { name: 'start_time', value: formattedTime } });
    };

    const HandleOnSubmit = (data, { resetForm }) => {
        const time_zone = Intl.DateTimeFormat()?.resolvedOptions()?.timeZone;
        data = {...data, time_zone}
        navigate("/create/game/review", { state: { 'gameData': data } });
    }

    useEffect(()=>{
        if(gameData){
            setSelectedTime(ConvertFullDateTime(gameData.start_time))
        }
    },[])

    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_mob_head d-flex align-items-center pb-30 px-15">
                    <NavLink to='/open/games' className="ct_close_modal">
                        <img src={dark_close} alt="img" className="ct_img_white" />
                    </NavLink>
                    <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">CREATE GAME</h4>
                </div>

                <Formik
                    initialValues={gameData ? {...gameData}:{
                        name: '',
                        game_type: '50/50',
                        access_type: 'public',
                        entry_fee: '',
                        start_date: new Date().toISOString().split("T")[0],
                        start_time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
                        duration: '',
                        hours: '1',
                        max_player_level: '1',
                    }}
 
                    validationSchema={Shcema_create_game_form}
                    onSubmit={(values, actions) => HandleOnSubmit(values, actions)}
                >
                    {
                        ({ errors, values, touched, handleBlur, handleSubmit, handleChange }) => (
                            <form onSubmit={(e) => { e.preventDefault() }}>
                                {errors && console.log(errors[Object?.keys(errors)[0]])}
                                {errors && console.log(values)}
                                <div className="ct_grey_bg_clr ct_game_search_input">

                                    <input type="text" className="form-control ct_Oswald_ff" placeholder='Enter game name'
                                        onChange={handleChange} value={values?.name} name='name' onBlur={handleBlur}
                                    />

                                    {
                                        /* <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Enter game name</p>
                                        <input type="text" className="ct_select_option ct_fw_600 text-dark" style={{ width: "100px" }} onChange={(e) => setName(e.target.value)} value={name} /> */
                                    }
                                </div>

                                <div className="ct_white_bg pt-28 ct_scroll_68">
                                    <div className="px-15">
                                        <div className="pb-20 ct_border_btm">
                                            <p className="ct_fw_500 mb-2 ">Select the type of game you wanna play</p>
                                            <div className="ct_type_border">
                                                <button type='button' className={values?.game_type == "50/50" ? "active" : "unactive"}
                                                    onClick={handleChange} value='50/50' name='game_type' onBlur={handleBlur}
                                                >50/50</button>

                                                <button type='button' className={values?.game_type == "20/80" ? "active" : "unactive"}
                                                    onClick={handleChange} value='20/80' name='game_type' onBlur={handleBlur}
                                                >20/80</button>

                                                <button type='button' className={values?.game_type == "TOP10" ? "active" : "unactive"}
                                                    onClick={handleChange} value='TOP10' name='game_type' onBlur={handleBlur}
                                                >TOP 10</button>

                                            </div>

                                        </div>
                                        <div className="pb-20 mt_20">
                                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1"> Entry fee</p>
                                            <input type="number" className="ct_select_option ct_fw_600 text-dark" placeholder='$0'
                                                name='entry_fee' onChange={handleChange} onBlur={handleBlur} value={values?.entry_fee} />
                                        </div>
                                    </div>
                                    <div className="ct_border_top pt-23">
                                        <div className="px-15">
                                            <div className="d-flex gap-3 pb-20">
                                                <div className="ct_col_50 ">
                                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Start date</p>
                                                    <input required type="date" autoComplete="off" className="ct_select_option form-control w-100"
                                                        min={new Date().toISOString().split("T")[0]}
                                                        name='start_date' onChange={handleChange} onBlur={handleBlur} value={values?.start_date} />
                                                </div>

                                                <div className="ct_col_50">
                                                    <div className="d-flex align-items-center ">
                                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Start time</p>
                                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">EST</p>
                                                    </div>
                                                    <DatePicker
                                                        autoComplete='off'
                                                        selected={selectedTime}
                                                        name='start_time'
                                                        onChange={(time) => handleTimeChange(time, handleChange)}
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeIntervals={5}
                                                        dateFormat="h:mm aa"
                                                        timeCaption="Time"
                                                        placeholderText="Select Time" // Placeholder text
                                                        className="ct_select_option form-control w-100"
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex gap-3 pb-20">
                                                <div className="ct_col_50 ">
                                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Duration</p>
                                                    <input type="number" min={1} className="ct_select_option form-control w-100"
                                                        name='duration' onChange={handleChange} onBlur={handleBlur} value={values?.duration} />
                                                </div>
                                                <div className="ct_col_50">
                                                    <p className="mb-0 ct_fw_400">&nbsp;</p>
                                                    <select className="ct_select_option form-control w-100"
                                                        name='hours' onChange={handleChange} onBlur={handleBlur} value={values?.hours}
                                                    >
                                                        <option value='1'>Hours</option>
                                                        <option value='0'>Minute</option>
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="d-flex gap-3 pb-20">
                                                <div className="ct_col_50">
                                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Maximum player level</p>
                                                    <select className="ct_select_option form-control w-100"
                                                        name='max_player_level' onChange={handleChange} onBlur={handleBlur} value={values?.max_player_level}
                                                    >
                                                        {Array(50)?.fill(0).map((_, key) =>
                                                            <option value={key + 1} key={key}>{(key < 9) ? '0' + (key + 1) : key + 1}</option>
                                                        )}
                                                    </select>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ct_border_top pt-23">
                                        <div className="px-15">
                                            <div className="pb-20">
                                                <p className="ct_fw_400 ct_fs_13 mb-1">Select who can play the game</p>
                                                <div className="ct_type_border_2">
                                                    <button
                                                        type='button'
                                                        className={values?.access_type === "public" ? "active w-50" : "w-50"}
                                                        onClick={handleChange}
                                                        name='access_type'
                                                        value='public'
                                                    >
                                                        Public
                                                    </button>
                                                    <button
                                                        type='button'
                                                        className={values?.access_type === "private" ? "active w-50" : "w-50"}
                                                        onClick={handleChange}
                                                        name='access_type'
                                                        value='private'
                                                    >
                                                        Private
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="ct_grey_bg_clr d-flex align-items-center gap-3">
                                    <button type='submit' className="ct_button_blue ct_light_blue_btn " onClick={handleSubmit}>CREATE GAME </button>
                                </div>
                            </form>
                        )
                    }
                </Formik>



            </div>
        </>
    )
}

export default CreateGame