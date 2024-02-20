import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import add from "../img/add.png"
import _50 from "../img/50-50.png"
import BottomNavigation from './BottomNavigation'
import calculateEndDateAndRemainingDays from '../Utils/LeftDaysCaclulation'
import { API_games_getAllgames } from '../Services/gamesAPIs'

function MyGames() {

    const navigate = useNavigate();
    const [games, setGames] = useState([]);

    const HandleMyGamesDetail = (game) => {
        navigate("/mygames/detail",{state:{'gameData': game}})
    }
    const HandleCreateGame = () => {
        navigate("/create/game")
    }


    const getAllGames = async () => {
        try {
            const data = await API_games_getAllgames();
            if (data?.success) {
                setGames(data?.data);
                return;
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllGames();
    }, [navigate])


    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center pb-30 px-15">
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">MY GAMES</h4>
                        <a onClick={() => HandleCreateGame()} className="ct_plus_icon ct_create_game_popup">
                            <img src={add} alt="img" />
                        </a>
                    </div>

                    <div className="ct_open_game_tab">
                        <ul className="nav nav-tabs">
                            <li className="nav-item ct_w_33">
                                <a className="nav-link active" data-bs-toggle="tab" href="#Active">Active</a>
                            </li>
                            <li className="nav-item ct_w_33">
                                <a className="nav-link position-relative" data-bs-toggle="tab" href="#Upcoming">
                                    Upcoming</a>
                            </li>
                            <li className="nav-item ct_w_33">
                                <a className="nav-link position-relative" data-bs-toggle="tab" href="#History">History</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane container active" id="Active">
                                <div className="ct_game_card_bg ct_h_72 ct_pb_100 ">
                                    <div className="ct_dark_grey_bg_clr ct_friend_search position-relative py-2 ">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <div className="ct_search_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9 14C11.7614 14 14 11.7614 14 9C14 6.23858 11.7614 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14ZM9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" fill="#7C7D7E" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M19.9392 22.0608L11.9392 14.0608L14.0605 11.9395L22.0605 19.9395L19.9392 22.0608Z" fill="#7C7D7E" />
                                            </svg>
                                        </div>
                                    </div>
                                    {
                                        games?.length > 0 &&
                                        games?.map((item, key) => (
                                            <a key={key} onClick={() => HandleMyGamesDetail(item)} className="text-dark">
                                                <div className="ct_game_card">
                                                    <div className="ct_right_center_fixed">
                                                        <img src={_50} alt="img" />
                                                    </div>
                                                    <h1 className="ct_fs_29 ct_fw_900 ct_Oswald_ff mb-12">{item?.name}</h1>
                                                    <div className="ct_flex_2">
                                                        <div className="d-flex align-items-start gap-2 mb-12 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 10C8 10 7.5 9 6 9C4.5 9 4 10 4 10V9C4 7.89543 4.89543 7 6 7C7.10457 7 8 7.89543 8 9V10ZM2 12V9C2 6.79086 3.79086 5 6 5C8.20914 5 10 6.79086 10 9V12H2Z" fill="#7C7D7E" />
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 2H4V3C4 4.10457 4.89543 5 6 5C7.10457 5 8 4.10457 8 3V2ZM2 0V3C2 5.20914 3.79086 7 6 7C8.20914 7 10 5.20914 10 3V0H2Z" fill="#7C7D7E" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">{calculateEndDateAndRemainingDays(item?.start_date,item?.duration).remainingDays} days</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">TIME LEFT</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.00005 2H12.0001V8H10.0001V5.41421L6.00005 9.41421L4.00003 7.41419L1.50694 9.90713L0.0927734 8.49287L4.00008 4.58581L6.00005 6.58579L8.58584 4H6.00005V2Z" fill="#16C766" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ct_green_text">+24.6%</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">GAIN</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ct_flex_2 ">
                                                        <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#7C7D7E" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$600.00</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">POT</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 2H8V6H12V11H8H4H0V5H4V2Z" fill="#FFA800" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_yellow_text_clr ">3rd</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">POSITION</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        ))
                                    }
                                    {/* 
                                    <a onClick={() => HandleMyGamesDetail()} className="text-dark">
                                        <div className="ct_game_card">
                                            <div className="ct_right_center_fixed">
                                                <img src={_50} alt="img" />
                                            </div>
                                            <h1 className="ct_fs_29 ct_fw_900 ct_Oswald_ff mb-12">St Louis Brawl</h1>
                                            <div className="ct_flex_2">
                                                <div className="d-flex align-items-start gap-2 mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 10C8 10 7.5 9 6 9C4.5 9 4 10 4 10V9C4 7.89543 4.89543 7 6 7C7.10457 7 8 7.89543 8 9V10ZM2 12V9C2 6.79086 3.79086 5 6 5C8.20914 5 10 6.79086 10 9V12H2Z" fill="#7C7D7E" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 2H4V3C4 4.10457 4.89543 5 6 5C7.10457 5 8 4.10457 8 3V2ZM2 0V3C2 5.20914 3.79086 7 6 7C8.20914 7 10 5.20914 10 3V0H2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">2 days</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">TIME LEFT</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.00005 10.2002H12.0001V4.2002H10.0001V6.78598L6.00005 2.78598L4.00003 4.786L1.50694 2.29307L0.0927734 3.70732L4.00008 7.61439L6.00005 5.61441L8.58584 8.2002H6.00005V10.2002Z" fill="#FF3F4A" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ct_red_text">-4.2%</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">LOSS</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_flex_2 ">
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$600.00</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POT</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4 2H8V6H12V11H8H4H0V5H4V2Z" fill="#FF3F4A" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_red_text ">18th</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POSITION</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a onClick={() => HandleMyGamesDetail()} className="text-dark">
                                        <div className="ct_game_card">
                                            <div className="ct_right_center_fixed">
                                                <img src={_50} alt="img" />
                                            </div>
                                            <h1 className="ct_fs_29 ct_fw_900 ct_Oswald_ff mb-12">2019 November Game</h1>
                                            <div className="ct_flex_2">
                                                <div className="d-flex align-items-start gap-2 mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 10C8 10 7.5 9 6 9C4.5 9 4 10 4 10V9C4 7.89543 4.89543 7 6 7C7.10457 7 8 7.89543 8 9V10ZM2 12V9C2 6.79086 3.79086 5 6 5C8.20914 5 10 6.79086 10 9V12H2Z" fill="#7C7D7E" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 2H4V3C4 4.10457 4.89543 5 6 5C7.10457 5 8 4.10457 8 3V2ZM2 0V3C2 5.20914 3.79086 7 6 7C8.20914 7 10 5.20914 10 3V0H2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">2 days</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">TIME LEFT</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.00005 2H12.0001V8H10.0001V5.41421L6.00005 9.41421L4.00003 7.41419L1.50694 9.90713L0.0927734 8.49287L4.00008 4.58581L6.00005 6.58579L8.58584 4H6.00005V2Z" fill="#16C766" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ct_green_text">+24.6%</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">GAIN</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_flex_2 ">
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$600.00</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POT</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4 2H8V6H12V11H8H4H0V5H4V2Z" fill="#FFA800" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_yellow_text_clr ">3rd</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POSITION</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a onClick={() => HandleMyGamesDetail()} className="text-dark">
                                        <div className="ct_game_card">
                                            <div className="ct_right_center_fixed">
                                                <img src={_50} alt="img" />
                                            </div>
                                            <h1 className="ct_fs_29 ct_fw_900 ct_Oswald_ff mb-12">Really Long Game Name He..</h1>
                                            <div className="ct_flex_2">
                                                <div className="d-flex align-items-start gap-2 mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 10C8 10 7.5 9 6 9C4.5 9 4 10 4 10V9C4 7.89543 4.89543 7 6 7C7.10457 7 8 7.89543 8 9V10ZM2 12V9C2 6.79086 3.79086 5 6 5C8.20914 5 10 6.79086 10 9V12H2Z" fill="#7C7D7E" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 2H4V3C4 4.10457 4.89543 5 6 5C7.10457 5 8 4.10457 8 3V2ZM2 0V3C2 5.20914 3.79086 7 6 7C8.20914 7 10 5.20914 10 3V0H2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">2 days</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">TIME LEFT</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.00005 2H12.0001V8H10.0001V5.41421L6.00005 9.41421L4.00003 7.41419L1.50694 9.90713L0.0927734 8.49287L4.00008 4.58581L6.00005 6.58579L8.58584 4H6.00005V2Z" fill="#16C766" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ct_green_text">+24.6%</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">GAIN</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_flex_2 ">
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$600.00</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POT</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4 2H8V6H12V11H8H4H0V5H4V2Z" fill="#FFA800" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_yellow_text_clr ">3rd</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POSITION</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a> */}

                                </div>

                                {/* empty page content s */}
                                {
                                    games?.length<1 &&
                                    <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_css">
                                        <div className="w-100">
                                            <div className="text-center mb-12">
                                                <img src="img/my-games-home_icon.png" alt="" />
                                            </div>
                                            <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">You don’t have any active games</p>
                                        </div>
                                    </div>
                                }

                            </div>
                            <div className="tab-pane container fade" id="Upcoming">
                                <div className="ct_dark_grey_bg_clr ct_friend_search position-relative py-2 ">
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <div className="ct_search_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9 14C11.7614 14 14 11.7614 14 9C14 6.23858 11.7614 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14ZM9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" fill="#7C7D7E" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.9392 22.0608L11.9392 14.0608L14.0605 11.9395L22.0605 19.9395L19.9392 22.0608Z" fill="#7C7D7E" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ct_game_card_bg ct_pb_100">
                                    <a onClick={() => HandleMyGamesDetail()} className="text-dark">
                                        <div className="ct_game_card">
                                            <div className="ct_right_center_fixed">
                                                <img src={_50} alt="img" />
                                            </div>
                                            <h1 className="ct_fs_29 ct_fw_900 ct_Oswald_ff mb-12">Wallstreet Deathmatch</h1>
                                            <div className="ct_flex_2">
                                                <div className="d-flex align-items-start gap-2 mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.2 2H6.8V5.80695L9.41128 7.31457L8.61128 8.70021L5.20635 6.73438H5.2V6.73071L5.19958 6.73047L5.2 6.72975V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">Nov 23 - 8:00am</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">START TIME</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 10C8 10 7.5 9 6 9C4.5 9 4 10 4 10V9C4 7.89543 4.89543 7 6 7C7.10457 7 8 7.89543 8 9V10ZM2 12V9C2 6.79086 3.79086 5 6 5C8.20914 5 10 6.79086 10 9V12H2Z" fill="#7C7D7E" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 2H4V3C4 4.10457 4.89543 5 6 5C7.10457 5 8 4.10457 8 3V2ZM2 0V3C2 5.20914 3.79086 7 6 7C8.20914 7 10 5.20914 10 3V0H2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">6 hours</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">DURATION</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_flex_2 ">
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.12875 4.62887L0.0273438 7.73027L1.09834 8.80127C1.34932 8.6122 1.66157 8.50013 2 8.50013C2.82843 8.50013 3.5 9.1717 3.5 10.0001C3.5 10.3386 3.38792 10.6508 3.19886 10.9018L4.26998 11.9729L7.37139 8.87151L6.73924 8.23937L7.7999 7.17871L8.43205 7.81085L11.9729 4.26998L10.9018 3.19888C10.6508 3.38801 10.3385 3.50013 10 3.50013C9.17157 3.50013 8.5 2.82855 8.5 2.00013C8.5 1.66163 8.61212 1.34933 8.80125 1.09832L7.73027 0.0273438L4.18941 3.56821L5.10393 4.48274L4.04327 5.5434L3.12875 4.62887ZM6.04535 7.54536L7.10601 6.48469L5.81044 5.18913L4.74978 6.24979L6.04535 7.54536Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$100.00</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">ENTRY FEE</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path d="M8.5 3.5C8.5 4.88071 7.38071 6 6 6C4.61929 6 3.5 4.88071 3.5 3.5C3.5 2.11929 4.61929 1 6 1C7.38071 1 8.5 2.11929 8.5 3.5Z" fill="#7C7D7E" />
                                                            <path d="M6.46887 7H5.53113C3.51384 7 1.81223 8.50215 1.56202 10.5039L1.5 11V12H10.5V11L10.438 10.5039C10.1878 8.50215 8.48616 7 6.46887 7Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">59 (4 friends)</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">PLAYERS</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_flex_2">
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$600.00</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POT</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 9L10 12V1.76616e-05L2 0V12L6 9ZM6.79028 3.23624L6.23544 2.14469C6.19052 2.05596 6.09949 2.00002 6 2.00002C5.90051 2.00002 5.80948 2.05596 5.76456 2.14469L5.20972 3.23446H4.26486C4.15841 3.23186 4.06125 3.29478 4.02009 3.39296C3.97894 3.49114 4.00222 3.6045 4.07873 3.67854L4.9463 4.53205L4.46565 5.63558C4.4222 5.73923 4.44983 5.85903 4.53429 5.93319C4.61874 6.00735 4.74114 6.0193 4.83835 5.96287L6 5.30963L7.16165 5.96465C7.25886 6.02107 7.38126 6.00913 7.46571 5.93496C7.55017 5.8608 7.5778 5.741 7.53435 5.63736L7.0537 4.53383L7.92127 3.68031C7.99778 3.60627 8.02106 3.49291 7.97991 3.39473C7.93875 3.29655 7.84159 3.23364 7.73514 3.23624H6.79028Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">20</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">MAX LEVEL</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a onClick={() => HandleMyGamesDetail()} className="text-dark">
                                        <div className="ct_game_card">
                                            <div className="ct_right_center_fixed">
                                                <img src={_50} alt="img" />
                                            </div>
                                            <h1 className="ct_fs_29 ct_fw_900 ct_Oswald_ff mb-12">Christmas Day Trading</h1>
                                            <div className="ct_flex_2">
                                                <div className="d-flex align-items-start gap-2 mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.2 2H6.8V5.80695L9.41128 7.31457L8.61128 8.70021L5.20635 6.73438H5.2V6.73071L5.19958 6.73047L5.2 6.72975V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">Dec 25 - 8:00am</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">START TIME</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 10C8 10 7.5 9 6 9C4.5 9 4 10 4 10V9C4 7.89543 4.89543 7 6 7C7.10457 7 8 7.89543 8 9V10ZM2 12V9C2 6.79086 3.79086 5 6 5C8.20914 5 10 6.79086 10 9V12H2Z" fill="#7C7D7E" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 2H4V3C4 4.10457 4.89543 5 6 5C7.10457 5 8 4.10457 8 3V2ZM2 0V3C2 5.20914 3.79086 7 6 7C8.20914 7 10 5.20914 10 3V0H2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">6 hours</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">DURATION</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_flex_2 ">
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.12875 4.62887L0.0273438 7.73027L1.09834 8.80127C1.34932 8.6122 1.66157 8.50013 2 8.50013C2.82843 8.50013 3.5 9.1717 3.5 10.0001C3.5 10.3386 3.38792 10.6508 3.19886 10.9018L4.26998 11.9729L7.37139 8.87151L6.73924 8.23937L7.7999 7.17871L8.43205 7.81085L11.9729 4.26998L10.9018 3.19888C10.6508 3.38801 10.3385 3.50013 10 3.50013C9.17157 3.50013 8.5 2.82855 8.5 2.00013C8.5 1.66163 8.61212 1.34933 8.80125 1.09832L7.73027 0.0273438L4.18941 3.56821L5.10393 4.48274L4.04327 5.5434L3.12875 4.62887ZM6.04535 7.54536L7.10601 6.48469L5.81044 5.18913L4.74978 6.24979L6.04535 7.54536Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$100.00</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">ENTRY FEE</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path d="M8.5 3.5C8.5 4.88071 7.38071 6 6 6C4.61929 6 3.5 4.88071 3.5 3.5C3.5 2.11929 4.61929 1 6 1C7.38071 1 8.5 2.11929 8.5 3.5Z" fill="#7C7D7E" />
                                                            <path d="M6.46887 7H5.53113C3.51384 7 1.81223 8.50215 1.56202 10.5039L1.5 11V12H10.5V11L10.438 10.5039C10.1878 8.50215 8.48616 7 6.46887 7Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">59 (4 friends)</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">PLAYERS</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_flex_2">
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$600.00</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POT</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 9L10 12V1.76616e-05L2 0V12L6 9ZM6.79028 3.23624L6.23544 2.14469C6.19052 2.05596 6.09949 2.00002 6 2.00002C5.90051 2.00002 5.80948 2.05596 5.76456 2.14469L5.20972 3.23446H4.26486C4.15841 3.23186 4.06125 3.29478 4.02009 3.39296C3.97894 3.49114 4.00222 3.6045 4.07873 3.67854L4.9463 4.53205L4.46565 5.63558C4.4222 5.73923 4.44983 5.85903 4.53429 5.93319C4.61874 6.00735 4.74114 6.0193 4.83835 5.96287L6 5.30963L7.16165 5.96465C7.25886 6.02107 7.38126 6.00913 7.46571 5.93496C7.55017 5.8608 7.5778 5.741 7.53435 5.63736L7.0537 4.53383L7.92127 3.68031C7.99778 3.60627 8.02106 3.49291 7.97991 3.39473C7.93875 3.29655 7.84159 3.23364 7.73514 3.23624H6.79028Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">20</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">MAX LEVEL</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a onClick={() => HandleMyGamesDetail()} className="text-dark">
                                        <div className="ct_game_card">
                                            <div className="ct_right_center_fixed">
                                                <img src={_50} alt="img" />
                                            </div>
                                            <h1 className="ct_fs_29 ct_fw_900 ct_Oswald_ff mb-12">November Hustle</h1>
                                            <div className="ct_flex_2">
                                                <div className="d-flex align-items-start gap-2 mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.2 2H6.8V5.80695L9.41128 7.31457L8.61128 8.70021L5.20635 6.73438H5.2V6.73071L5.19958 6.73047L5.2 6.72975V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">Nov 26 - 8:00am</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">START TIME</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 10C8 10 7.5 9 6 9C4.5 9 4 10 4 10V9C4 7.89543 4.89543 7 6 7C7.10457 7 8 7.89543 8 9V10ZM2 12V9C2 6.79086 3.79086 5 6 5C8.20914 5 10 6.79086 10 9V12H2Z" fill="#7C7D7E" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 2H4V3C4 4.10457 4.89543 5 6 5C7.10457 5 8 4.10457 8 3V2ZM2 0V3C2 5.20914 3.79086 7 6 7C8.20914 7 10 5.20914 10 3V0H2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">6 hours</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">DURATION</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_flex_2 ">
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.12875 4.62887L0.0273438 7.73027L1.09834 8.80127C1.34932 8.6122 1.66157 8.50013 2 8.50013C2.82843 8.50013 3.5 9.1717 3.5 10.0001C3.5 10.3386 3.38792 10.6508 3.19886 10.9018L4.26998 11.9729L7.37139 8.87151L6.73924 8.23937L7.7999 7.17871L8.43205 7.81085L11.9729 4.26998L10.9018 3.19888C10.6508 3.38801 10.3385 3.50013 10 3.50013C9.17157 3.50013 8.5 2.82855 8.5 2.00013C8.5 1.66163 8.61212 1.34933 8.80125 1.09832L7.73027 0.0273438L4.18941 3.56821L5.10393 4.48274L4.04327 5.5434L3.12875 4.62887ZM6.04535 7.54536L7.10601 6.48469L5.81044 5.18913L4.74978 6.24979L6.04535 7.54536Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$100.00</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">ENTRY FEE</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path d="M8.5 3.5C8.5 4.88071 7.38071 6 6 6C4.61929 6 3.5 4.88071 3.5 3.5C3.5 2.11929 4.61929 1 6 1C7.38071 1 8.5 2.11929 8.5 3.5Z" fill="#7C7D7E" />
                                                            <path d="M6.46887 7H5.53113C3.51384 7 1.81223 8.50215 1.56202 10.5039L1.5 11V12H10.5V11L10.438 10.5039C10.1878 8.50215 8.48616 7 6.46887 7Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">59 (4 friends)</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">PLAYERS</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_flex_2">
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$600.00</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POT</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 9L10 12V1.76616e-05L2 0V12L6 9ZM6.79028 3.23624L6.23544 2.14469C6.19052 2.05596 6.09949 2.00002 6 2.00002C5.90051 2.00002 5.80948 2.05596 5.76456 2.14469L5.20972 3.23446H4.26486C4.15841 3.23186 4.06125 3.29478 4.02009 3.39296C3.97894 3.49114 4.00222 3.6045 4.07873 3.67854L4.9463 4.53205L4.46565 5.63558C4.4222 5.73923 4.44983 5.85903 4.53429 5.93319C4.61874 6.00735 4.74114 6.0193 4.83835 5.96287L6 5.30963L7.16165 5.96465C7.25886 6.02107 7.38126 6.00913 7.46571 5.93496C7.55017 5.8608 7.5778 5.741 7.53435 5.63736L7.0537 4.53383L7.92127 3.68031C7.99778 3.60627 8.02106 3.49291 7.97991 3.39473C7.93875 3.29655 7.84159 3.23364 7.73514 3.23624H6.79028Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">20</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">MAX LEVEL</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                </div>


                                {/* <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_css">
                            <div className="w-100">
                                <div className="text-center mb-12">
                                    <img src="img/my-games-home_icon.png" alt="">
                                </div>
                                <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">You don’t have any upcoming games</p>
                            </div>
                        </div> */}
                            </div>
                            <div className="tab-pane container fade" id="History">
                                <div className="ct_game_card_bg ct_h_72 ct_pb_100">
                                    <div className="ct_dark_grey_bg_clr ct_friend_search position-relative py-2 ">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <div className="ct_search_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9 14C11.7614 14 14 11.7614 14 9C14 6.23858 11.7614 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14ZM9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" fill="#7C7D7E" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M19.9392 22.0608L11.9392 14.0608L14.0605 11.9395L22.0605 19.9395L19.9392 22.0608Z" fill="#7C7D7E" />
                                            </svg>
                                        </div>
                                    </div>
                                    <a onClick={() => HandleMyGamesDetail()} className="text-dark">
                                        <div className="ct_game_card">
                                            <span className="ct_yellow_badge">WON</span>
                                            <div className="ct_right_center_fixed">
                                                <img src={_50} alt="img" />
                                            </div>
                                            <h1 className="ct_fs_29 ct_fw_900 ct_Oswald_ff mb-12">Wallstreet Deathmatch</h1>
                                            <div className="ct_flex_2">
                                                <div className="d-flex align-items-start gap-2 mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.2 2H6.8V5.80695L9.41128 7.31457L8.61128 8.70021L5.20635 6.73438H5.2V6.73071L5.19958 6.73047L5.2 6.72975V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">Nov 23 - 8:00am</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">ENDED</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.00005 2H12.0001V8H10.0001V5.41421L6.00005 9.41421L4.00003 7.41419L1.50694 9.90713L0.0927734 8.49287L4.00008 4.58581L6.00005 6.58579L8.58584 4H6.00005V2Z" fill="#16C766" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ct_green_text">+12.8%</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">GAIN</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_flex_2 ">
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$600.00</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POT</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4 2H8V6H12V11H8H4H0V5H4V2Z" fill="#FFA800" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_yellow_text_clr ">5th</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POSITION</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a onClick={() => HandleMyGamesDetail()} className="text-dark">
                                        <div className="ct_game_card">
                                            <span className="ct_red_badge">LOST</span>
                                            <div className="ct_right_center_fixed">
                                                <img src={_50} alt="img" />
                                            </div>
                                            <h1 className="ct_fs_29 ct_fw_900 ct_Oswald_ff mb-12">Halloween Trading</h1>
                                            <div className="ct_flex_2">
                                                <div className="d-flex align-items-start gap-2 mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.2 2H6.8V5.80695L9.41128 7.31457L8.61128 8.70021L5.20635 6.73438H5.2V6.73071L5.19958 6.73047L5.2 6.72975V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">Oct 31 - 7:02pm</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">ENDED</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.00005 2H12.0001V8H10.0001V5.41421L6.00005 9.41421L4.00003 7.41419L1.50694 9.90713L0.0927734 8.49287L4.00008 4.58581L6.00005 6.58579L8.58584 4H6.00005V2Z" fill="#16C766" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ct_green_text">+1.2%</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">GAIN</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_flex_2 ">
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$1,200.00</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POT</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4 2H8V6H12V11H8H4H0V5H4V2Z" fill="#FF3F4A" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_red_text ">24th</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POSITION</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a onClick={() => HandleMyGamesDetail()} className="text-dark">
                                        <div className="ct_game_card">
                                            <span className="ct_yellow_badge">WON</span>
                                            <div className="ct_right_center_fixed">
                                                <img src={_50} alt="img" />
                                            </div>
                                            <h1 className="ct_fs_29 ct_fw_900 ct_Oswald_ff mb-12">October Brawl</h1>
                                            <div className="ct_flex_2">
                                                <div className="d-flex align-items-start gap-2 mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.2 2H6.8V5.80695L9.41128 7.31457L8.61128 8.70021L5.20635 6.73438H5.2V6.73071L5.19958 6.73047L5.2 6.72975V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">Oct 23 - 8:00am</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">ENDED</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.00005 2H12.0001V8H10.0001V5.41421L6.00005 9.41421L4.00003 7.41419L1.50694 9.90713L0.0927734 8.49287L4.00008 4.58581L6.00005 6.58579L8.58584 4H6.00005V2Z" fill="#16C766" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ct_green_text">+95.2%</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">GAIN</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_flex_2 ">
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#7C7D7E" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$600.00</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POT</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                    <div className="ct_short_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4 2H8V6H12V11H8H4H0V5H4V2Z" fill="#FFA800" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_yellow_text_clr ">1st</h6>
                                                        <p className="ct_fs_12 ct_grey_text mb-0">POSITION</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                {/* <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_css">
                            <div className="w-100">
                                <div className="text-center mb-12">
                                    <img src="img/my-games-home_icon.png" alt="">
                                </div>
                                <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">You don’t have any past games</p>
                            </div>
                        </div> */}
                            </div>
                        </div>
                    </div>

                    <BottomNavigation data="mygames" />

                </div>
            </div>
        </>
    )
}

export default MyGames