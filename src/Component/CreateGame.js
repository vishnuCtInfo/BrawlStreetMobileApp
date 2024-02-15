import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message, message as MESSAGE } from "antd";
import dark_close from '../img/dark_close.png'
import axios from 'axios'
export const configJSON = require("../Component/Config");

function CreateGame() {
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [game_type, setGame_type] = useState()
    const [entry_fee, setEntry_fee] = useState()
    const [start_date, setStart_date] = useState()
    const [start_time, setStart_time] = useState()
    const [duration, setDuration] = useState()
    const [hours, setHours] = useState()
    const [max_player_level, setMax_player_level] = useState()
    const [access_type, setAccess_type] = useState()
    const [date, setDate] = useState('');
    const [dateError, setDateError] = useState(null);
    const [isDataTrue, setIsDataTrue] = useState(false);
    const [selectedAccessType, setSelectedAccessType] = useState("public");
    const [selectedGameType2, setselectedGameType2] = useState("50/50");
    const handleButtonClick = (type) => {
        setSelectedAccessType(type);
    }

    // const handleButtonClick2 = (type) => {
    //     setSelectedAccessType2(type);
    //     console.log(selectedAccessType2, "selectedAccessType2")
    // }

    const handleChange = (name) => (event) => {
        setDateError(null);
        setDate(event.target.value);
    };

    // const handleDateChange = (e) => {
    //     const selectedDate = new Date(e.target.value);
    //     const today = new Date();
    //     today.setHours(0, 0, 0, 0);

    //     if (selectedDate > today) {
    //         // Selected date is greater than today, set an error
    //         setDateError("Selected date cannot be greater than today");
    //     } else {
    //         // Selected date is valid, update the state and clear the error
    //         setDateError(null);
    //         setDate(selectedDate.toISOString().split("T")[0]);
    //     }
    // };

    const HandleOpenGames = () => {
        navigate("/open/games")
    }
    const HandleCreateGameReview = () => {
        navigate("/create/game/review")
    }

    
    const HandleGameTypeButton = (val) => {
        if (val == "50/50") {
            setselectedGameType2(val)
        }
        else if (val == "TOP10") {
            setselectedGameType2(val)
        }
        else if (val == "20/80") {
            setselectedGameType2(val)
        }
    }


    const HandleSelectAccessType=(val)=>{
           if(val=='public'){
            setSelectedAccessType(val)
           }
           else if(val=='private')
           {
            setSelectedAccessType(val)
           }
    }
    const create_game = () => {
        const data = {
            name: name,
            game_type: selectedGameType2,
            access_type:selectedAccessType,
            entry_fee: entry_fee,
            start_date: date,
            start_time: start_time,
            duration: duration,
            hours: hours,
            max_player_level: max_player_level,

        };

        if (name && entry_fee && date && start_time && duration && hours && max_player_level && selectedAccessType && selectedGameType2) {
            let data;

                // Data for Public game
                data = {
                    name: name,
                    game_type: selectedGameType2,
                    access_type:selectedAccessType,
                    entry_fee: entry_fee,
                    start_date: date,
                    start_time: start_time,
                    duration: duration,
                    hours: hours,
                    max_player_level: max_player_level,

                };
          
                // Data for Private game
               



            // Now you can send the 'data' to your API
            axios({
                url: configJSON.baseUrl + configJSON.create_game,
                method: "post",
                data: data,
            }).then((res) => {
                if(res?.data?.success==true){
                    MESSAGE.success(res?.data?.message)
                    // setName("");
                    // setAccess_type("");
                    // setGame_type("")
                    // setEntry_fee("");
                    // setDate("");
                    // setStart_time("");
                    // setDuration("");
                    // setHours("");
                    // setMax_player_level("");
                    navigate("/create/game/review",{state:{'gameId':res?.data?.data?.id, 'gameData':res?.data?.data}});
                }
                else{
                    MESSAGE.error(res?.data?.message);
                }
               
            }).catch((error) => {
                console.log(error, "error");
                setName("");
                setGame_type("")
                setEntry_fee("");
                setAccess_type("");
                setDate("");
                setStart_time("");
                setDuration("");
                setHours("");
                setMax_player_level("");
            });
        } else {
            MESSAGE.error("Field can not be empty!");
        }

    }

    
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_mob_head d-flex align-items-center pb-30 px-15">
                    <a onClick={() => HandleOpenGames()} className="ct_close_modal">
                        <img src={dark_close} alt="img" className="ct_img_white" />
                    </a>
                    <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">CREATE GAME</h4>
                </div>
                {/* <form> */}
                <div className="ct_grey_bg_clr ct_game_search_input">
                    <input type="text" className="form-control ct_Oswald_ff" placeholder='Enter game name'onChange={(e) => setName(e.target.value)} value={name} />

                    {/* <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Enter game name</p>
                    <input type="text" className="ct_select_option ct_fw_600 text-dark" style={{ width: "100px" }} onChange={(e) => setName(e.target.value)} value={name} /> */}
                </div>
                <div className="ct_white_bg pt-28 ct_scroll_68">
                    <div className="px-15">
                        <div className="pb-20 ct_border_btm">
                            <p className="ct_fw_500 mb-2 ">Select the type of game you wanna play</p>
                            <div className="ct_type_border">
                                <button type='button' className={selectedGameType2 == "50/50" ? "active" : "unactive"} onClick={() => HandleGameTypeButton("50/50")}>50/50</button>
                                <button type='button' className={selectedGameType2 == "20/80" ? "active" : "unactive"} onClick={() => HandleGameTypeButton("20/80")}>20/80</button>
                                <button type='button' className={selectedGameType2 == "TOP10" ? "active" : "unactive"} onClick={() => HandleGameTypeButton("TOP10")}>TOP 10</button>
                            </div>
                                
                        </div>
                        <div className="pb-20 mt_20">
                            <p className="mb-0 ct_fw_400 ct_fs_13 mb-1"> Entry fee</p>
                            <input type="number" className="ct_select_option ct_fw_600 text-dark" placeholder='$0' onChange={(e) => setEntry_fee(e.target.value)} value={entry_fee} />
                        </div>
                    </div>
                    <div className="ct_border_top pt-23">
                        <div className="px-15">
                            <div className="d-flex gap-3 pb-20">
                                <div className="ct_col_50 ">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Start date</p>
                                    {/* <input type="date" className="ct_select_option form-control w-100" onChange={(e) => setStart_date(e.target.value)} value={start_date} /> */}
                                    <input required type="date" name="text" autoComplete="off" className="ct_select_option form-control w-100" value={date} onChange={handleChange("date")}
                                        min={new Date().toISOString().split("T")[0]}
                                    />
                                </div>
                                <div className="ct_col_50">
                                    <div className="d-flex align-items-center ">
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Start time</p>
                                        <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">EST</p>
                                    </div>
                                    <input type="time" className="ct_select_option form-control  w-100" onChange={(e) => setStart_time(e.target.value)} value={start_time} />
                                </div>
                            </div>
                            <div className="d-flex gap-3 pb-20">
                                <div className="ct_col_50 ">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Duration</p>
                                    <input type="number" className="ct_select_option form-control w-100" onChange={(e) => setDuration(e.target.value)} value={duration} />
                                </div>
                                <div className="ct_col_50">
                                    {/* <p className="mb-0 ct_fw_400">&nbsp;</p> */}
                                    {/* <select className="ct_select_option form-control w-100">
                                        <option>Hours</option>
                                        <option>Minute</option>
                                    </select> */}
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">hours</p>
                                    <input type="number" className="ct_select_option form-control w-100" onChange={(e) => setHours(e.target.value)} value={hours} />

                                </div>
                            </div>
                            <div className="d-flex gap-3 pb-20">
                                <div className="ct_col_50">
                                    <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Maximum player level</p>
                                    {/* <select className="ct_select_option form-control w-100">
                                        <option>50</option>
                                        <option>45</option>
                                    </select> */}
                                    <input type="number" className="ct_select_option form-control w-100" onChange={(e) => setMax_player_level(e.target.value)} value={max_player_level} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ct_border_top pt-23">
                        <div className="px-15">
                            <div className="pb-20">
                                <p className="ct_fw_400 ct_fs_13 mb-1">Select who can play the game</p>
                                <div className="ct_type_border_2">
                                    {/* <button type='button' className={isDataTrue == true ? " w-50" : "active w-50"} onClick={handleButtonClick} >Public</button>
                                    <button type='button' className={isDataTrue == true ? " active w-50" : "w-50"} onClick={handleButtonClick} >Private</button> */}
                                    <button
                                        type='button'
                                        className={selectedAccessType === "public" ? "active w-50" : "w-50"}
                                        onClick={() => HandleSelectAccessType("public")}
                                    >
                                        Public
                                    </button>
                                    <button
                                        type='button'
                                        className={selectedAccessType === "private" ? "active w-50" : "w-50"}
                                        onClick={() => HandleSelectAccessType("private")}
                                    >
                                        Private
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ct_grey_bg_clr d-flex align-items-center gap-3">
                    {/* onClick={() => HandleCreateGameReview()} */}
                    <a className="ct_button_blue ct_light_blue_btn " onClick={create_game}>CREATE GAME </a>
                </div>
                {/* </form> */}
            </div>
        </>
    )
}

export default CreateGame