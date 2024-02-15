import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"
import man_1 from "../img/man_1.png"
import _50 from "../img/50-50.png"
import octagonal from "../img/octagonal.png"
import Polygon_2 from "../img/Polygon_2.png"
import green_circle from "../img/green_circle.png"
import corner10 from '../img/10_corner.png'
import corner6 from '../img/6_corner.png'
import calculateEndDateAndRemainingDays from '../Utils/LeftDaysCaclulation'
function MyGamesDetail() {
    const location = useLocation();
    const gameData = location?.state?.gameData;
    const navigate = useNavigate()
    const HandleMygames = () => {
        navigate("/mygames")
    }
    const HandleYouWin = () => {
        navigate("/youwin")
    }
    const HandleYouLost = () => {
        navigate("/youlost")
    }
    const HandleStockDetail = () => {
        navigate("/stock/detail")
    }
    

    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg  ">

                    <div className="ct_mob_head d-flex align-items-center pb-30 px-15">
                        <a onClick={() => HandleMygames()} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">ST LOUIS BRAWL</h4>
                        {/* <div className="ct_plus_icon">
                    <img src="img/add.png" alt="img"/>
                </div> */}
                    </div>
                    <div className="ct_open_game_tab">
                        <ul className="nav nav-tabs ct_border_btm_light_grey">
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#Overview">Overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link position-relative" data-bs-toggle="tab" href="#Portfolio">Portfolio</a>
                            </li>
                        </ul>
                        <div className="tab-content pt-4">

                            {/* overview */}
                            <div className="tab-pane container active" id="Overview">
                                {/* game details */}
                                <div className="px-15 mb-0 position-relative">
                                    <img src={_50} alt="img" className="ct_50_img_position" />
                                    <h1 className="ct_fs_45 ct_Oswald_ff text-white">{gameData?.name}</h1>
                                    <div className="d-flex align-items-start gap-2 justify-content-between mt_20 ct_border_btm_light_grey py-12">
                                        <div className="ct_short_icon d-flex align-items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4 2H8V6H12V11H8H4H0V5H4V2Z" fill="#FFA800" />
                                            </svg>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 ct_yellow_text_clr  mb-0">WINNING POSITION</h6>
                                        </div>
                                        <div>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 ct_yellow_text_clr">3rd</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start gap-2  justify-content-between  ct_border_btm_light_grey py-12">
                                        <div className="ct_short_icon d-flex align-items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#AAAAAB" />
                                            </svg>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white ">PORTFOLIO VALUE</h6>
                                        </div>
                                        <div>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white">$398,000.80</h6>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start gap-2  justify-content-between  ct_border_btm_light_grey py-12">
                                        <div className="ct_short_icon d-flex align-items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.00005 2H12.0001V8H10.0001V5.41421L6.00005 9.41421L4.00003 7.41419L1.50694 9.90713L0.0927734 8.49287L4.00008 4.58581L6.00005 6.58579L8.58584 4H6.00005V2Z" fill="#16C766" />
                                            </svg>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 ct_green_text">GAIN</h6>
                                        </div>
                                        <div>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 ct_green_text">+24.6%</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start gap-2  justify-content-between  ct_border_btm_light_grey py-12">
                                        <div className="ct_short_icon d-flex align-items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302176 4.54695 0 2.99943L0.000390588 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#AAAAAB" />
                                            </svg>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white">PRIZE</h6>
                                        </div>
                                        <div>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white">$600.00</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start gap-2 justify-content-between  ct_border_btm_light_grey py-12">
                                        <div className="ct_short_icon d-flex align-items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.12875 4.62887L0.0273438 7.73027L1.09834 8.80127C1.34932 8.6122 1.66157 8.50013 2 8.50013C2.82843 8.50013 3.5 9.1717 3.5 10.0001C3.5 10.3386 3.38792 10.6508 3.19886 10.9018L4.26998 11.9729L7.37139 8.87151L6.73924 8.23937L7.7999 7.17871L8.43205 7.81085L11.9729 4.26998L10.9018 3.19888C10.6508 3.38801 10.3385 3.50013 10 3.50013C9.17157 3.50013 8.5 2.82855 8.5 2.00013C8.5 1.66163 8.61212 1.34933 8.80125 1.09832L7.73027 0.0273438L4.18941 3.56821L5.10393 4.48274L4.04327 5.5434L3.12875 4.62887ZM6.04535 7.54536L7.10601 6.48469L5.81044 5.18913L4.74978 6.24979L6.04535 7.54536Z" fill="#AAAAAB" />
                                            </svg>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white">ENTRY FEE</h6>
                                        </div>
                                        <div>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white">${gameData?.entry_fee}</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start gap-2  justify-content-between py-12 ct_border_btm_light_grey">
                                        <div className="ct_short_icon d-flex align-items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8 10C8 10 7.5 9 6 9C4.5 9 4 10 4 10V9C4 7.89543 4.89543 7 6 7C7.10457 7 8 7.89543 8 9V10ZM2 12V9C2 6.79086 3.79086 5 6 5C8.20914 5 10 6.79086 10 9V12H2Z" fill="#AAAAAB" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8 2H4V3C4 4.10457 4.89543 5 6 5C7.10457 5 8 4.10457 8 3V2ZM2 0V3C2 5.20914 3.79086 7 6 7C8.20914 7 10 5.20914 10 3V0H2Z" fill="#AAAAAB" />
                                            </svg>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white">GAME ENDING</h6>
                                        </div>
                                        <div>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white">{calculateEndDateAndRemainingDays(gameData?.start_date, gameData?.duration).remainingDays} days left</h6>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start gap-2  justify-content-between py-12 ct_border_btm_light_grey">
                                        <div className="ct_short_icon d-flex align-items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M8.5 3.5C8.5 4.88071 7.38071 6 6 6C4.61929 6 3.5 4.88071 3.5 3.5C3.5 2.11929 4.61929 1 6 1C7.38071 1 8.5 2.11929 8.5 3.5Z" fill="#AAAAAB" />
                                                <path d="M6.46887 7H5.53113C3.51384 7 1.81223 8.50215 1.56202 10.5039L1.5 11V12H10.5V11L10.438 10.5039C10.1878 8.50215 8.48616 7 6.46887 7Z" fill="#AAAAAB" />
                                            </svg>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white">PLAYERS</h6>
                                        </div>
                                        <div>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white">16</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start gap-2  justify-content-between py-12">
                                        <div className="ct_short_icon d-flex align-items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 9L10 12V1.76616e-05L2 0V12L6 9ZM6.79028 3.23624L6.23544 2.14469C6.19052 2.05596 6.09949 2.00002 6 2.00002C5.90051 2.00002 5.80948 2.05596 5.76456 2.14469L5.20972 3.23446H4.26486C4.15841 3.23186 4.06125 3.29478 4.02009 3.39296C3.97894 3.49114 4.00222 3.6045 4.07873 3.67854L4.9463 4.53205L4.46565 5.63558C4.4222 5.73923 4.44983 5.85903 4.53429 5.93319C4.61874 6.00735 4.74114 6.0193 4.83835 5.96287L6 5.30963L7.16165 5.96465C7.25886 6.02107 7.38126 6.00913 7.46571 5.93496C7.55017 5.8608 7.5778 5.741 7.53435 5.63736L7.0537 4.53383L7.92127 3.68031C7.99778 3.60627 8.02106 3.49291 7.97991 3.39473C7.93875 3.29655 7.84159 3.23364 7.73514 3.23624H6.79028Z" fill="#AAAAAB" />
                                            </svg>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white">MAX PLAYER LEVEL</h6>
                                        </div>
                                        <div>
                                            <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white">{gameData?.max_player_level}</h6>
                                        </div>
                                    </div>
                                </div>

                                {/* players list */}
                                <div className="ct_white_bg ct_overflow_32 ">
                                    <table className="table ct_winning_table mb-0">
                                        <thead>
                                            <tr>
                                                <th className="ct_fs_12 ct_grey_text">WINNING</th>
                                                <th className="text-end ct_fs_12 ct_grey_text">GAIN/LOSS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a onClick={() => HandleYouWin()} className="d-flex align-items-center gap-3 ct_black_clr">
                                                        <div className="ct_stylis_num">
                                                            <span className="ct_yellow_text_clr">1</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="ct_ct_friends_img">
                                                                <img src={man_1} alt="img" />
                                                                <div className="ct_lavel_badge">
                                                                    <img src={corner6} alt="img" />
                                                                    <h6>20</h6>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="ct_fs_14 ct_fw_700 mb-0">brownfish258</h4>
                                                            </div>
                                                        </div>
                                                    </a>

                                                </td>
                                                <td className="text-end">
                                                    <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">20.2%</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a onClick={() => HandleYouWin()} className="d-flex align-items-center gap-3 ct_black_clr">
                                                        <div className="ct_stylis_num">
                                                            <span className="ct_yellow_text_clr">2</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="ct_ct_friends_img">
                                                                <img src={man_1} alt="img" />
                                                                <div className="ct_lavel_badge">
                                                                    <img src={octagonal} alt="img" />
                                                                    <h6>35</h6>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="ct_fs_14 ct_fw_700 mb-0">brownfish258</h4>
                                                            </div>
                                                        </div>
                                                    </a>

                                                </td>
                                                <td className="text-end">
                                                    <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">14.0%</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a onClick={() => HandleYouWin()} className="d-flex align-items-center gap-3 ct_black_clr">
                                                        <div className="ct_stylis_num">
                                                            <span className="ct_yellow_text_clr">3</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="ct_ct_friends_img">
                                                                <img src={man_1} alt="img" />
                                                                <div className="ct_lavel_badge">
                                                                    <img src={Polygon_2} alt="img" />
                                                                    <h6>11</h6>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="ct_fs_14 ct_fw_700 mb-0 ct_blue_text">purpleleopard757</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td className="text-end">
                                                    <h4 className="ct_fs_14 ct_fw_700 ct_red_text mb-0">4.2%</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a onClick={() => HandleYouWin()} className="d-flex align-items-center gap-3 ct_black_clr">
                                                        <div className="ct_stylis_num">
                                                            <span className="ct_yellow_text_clr">4</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="ct_ct_friends_img">
                                                                <img src={man_1} alt="img" />
                                                                <div className="ct_lavel_badge">
                                                                    <img src={green_circle} alt="img" />
                                                                    <h6>5</h6>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="ct_fs_14 ct_fw_700 mb-0">smallladybug803</h4>
                                                            </div>
                                                        </div>
                                                    </a>

                                                </td>
                                                <td className="text-end">
                                                    <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">9.0%</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a onClick={() => HandleYouWin()} className="d-flex align-items-center gap-3 ct_black_clr">
                                                        <div className="ct_stylis_num">
                                                            <span className="ct_yellow_text_clr">5</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="ct_ct_friends_img">
                                                                <img src={man_1} alt="img" />
                                                                <div className="ct_lavel_badge">
                                                                    <img src={corner10} alt="img" />
                                                                    <h6>35</h6>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="ct_fs_14 ct_fw_700 mb-0">silverduck204</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td className="text-end">
                                                    <h4 className="ct_fs_14 ct_fw_700 ct_red_text mb-0">8.6%</h4>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                    <table className="table ct_winning_table mb-0">
                                        <thead>
                                            <tr>
                                                <th className="ct_fs_12 ct_grey_text">LOSING</th>
                                                <th className="text-end ct_fs_12 ct_grey_text">GAIN/LOSS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a onClick={() => HandleYouLost()} className="d-flex align-items-center gap-3 ct_black_clr">
                                                        <div className="ct_stylis_num">
                                                            <span className="ct_red_text">6</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="ct_ct_friends_img">
                                                                <img src={man_1} alt="img" />
                                                                <div className="ct_lavel_badge">
                                                                    <img src={corner6} alt="img" />
                                                                    <h6>20</h6>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="ct_fs_14 ct_fw_700 mb-0">brownfish258</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td className="text-end">
                                                    <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">20.2%</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a onClick={() => HandleYouLost()} className="d-flex align-items-center gap-3 ct_black_clr">
                                                        <div className="ct_stylis_num">
                                                            <span className="ct_red_text">7</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="ct_ct_friends_img">
                                                                <img src={man_1} alt="img" />
                                                                <div className="ct_lavel_badge">
                                                                    <img src={octagonal} alt="img" />
                                                                    <h6>35</h6>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="ct_fs_14 ct_fw_700 mb-0">brownfish258</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td className="text-end">
                                                    <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">14.0%</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a onClick={() => HandleYouLost()} className="d-flex align-items-center gap-3 ct_black_clr">
                                                        <div className="ct_stylis_num">
                                                            <span className="ct_red_text">8</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="ct_ct_friends_img">
                                                                <img src={man_1} alt="img" />
                                                                <div className="ct_lavel_badge">
                                                                    <img src={Polygon_2} alt="img" />
                                                                    <h6>11</h6>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="ct_fs_14 ct_fw_700 mb-0 ct_blue_text">purpleleopard757</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td className="text-end">
                                                    <h4 className="ct_fs_14 ct_fw_700 ct_red_text mb-0">4.2%</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a onClick={() => HandleYouLost()} className="d-flex align-items-center gap-3 ct_black_clr">
                                                        <div className="ct_stylis_num">
                                                            <span className="ct_red_text">9</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="ct_ct_friends_img">
                                                                <img src={man_1} alt="img" />
                                                                <div className="ct_lavel_badge">
                                                                    <img src={green_circle} alt="img" />
                                                                    <h6>5</h6>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="ct_fs_14 ct_fw_700 mb-0">smallladybug803</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td className="text-end">
                                                    <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">9.0%</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a onClick={() => HandleYouLost()} className="d-flex align-items-center gap-3 ct_black_clr">
                                                        <div className="ct_stylis_num">
                                                            <span className="ct_red_text">10</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="ct_ct_friends_img">
                                                                <img src={man_1} alt="img" />
                                                                <div className="ct_lavel_badge">
                                                                    <img src={corner10} alt="img" />
                                                                    <h6>35</h6>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="ct_fs_14 ct_fw_700 mb-0">silverduck204</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td className="text-end">
                                                    <h4 className="ct_fs_14 ct_fw_700 ct_red_text mb-0">8.6%</h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/*                             
                             <div className="px-15  py-12 d-flex align-items-center justify-content-between ct_border_btm">
                                 <div className="d-flex align-items-center gap-4">
                                      <div className="ct_ct_friends_img">
                                          <img src={man_1} alt="img"/>
                                          <div className="ct_lavel_badge">
                                              <img src={green_circle} alt="img"/>
                                              <h6>4</h6>
                                          </div>
                                      </div>
                                      <div>
                                          <h4 className="ct_fs_18 ct_fw_700 mb-1">brownfish258</h4>
                                          <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Ralph Cooper</p>
                                      </div>
                                 </div>
                                
                              </div> */}
                                </div>
                            </div>

                            {/* portfolio */}
                            <div className="tab-pane container fade " id="Portfolio">
                                <div className="ct_portfolio_main px-15 mb-2">
                                    <div className="ct_light_black_bg">
                                        <h3 className="mb-2 ct_green_text ct_fw_700 text-center ct_fs_29">$398,000.80</h3>
                                        <p className="mb-0 text-center text-white ct_fs_11">PORTFOLIO VALUE</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between px-15 gap-2 pb-15">
                                    <div className="ct_portfolio_main  mb-2 ct_w_33">
                                        <div className="ct_light_black_bg">
                                            <h3 className="mb-2 text-white ct_fs_13 ct_fw_700 ">$130,000.80</h3>
                                            <p className="mb-0 text-white ct_fs_11">AVAILABLE TO INVEST</p>
                                        </div>
                                    </div>
                                    <div className="ct_portfolio_main  mb-2 ct_w_33">
                                        <div className="ct_light_black_bg">
                                            <h3 className="mb-2 text-white ct_fs_13 ct_fw_700 ">$8,000.80</h3>
                                            <p className="mb-0 text-white ct_fs_11">PENDING LIMIT ORDERS</p>
                                        </div>
                                    </div>
                                    <div className="ct_portfolio_main mb-2 ct_w_33">
                                        <div className="ct_light_black_bg">
                                            <h3 className="mb-2 text-white ct_fs_13 ct_fw_700 ">$260,000.80</h3>
                                            <p className="mb-0 text-white ct_fs_11">TOTAL INVESTED</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ct_white_bg pt-12 " style={{ paddingBottom: "67px" }}>
                                    <div>
                                        <h4 className="px-15 ct_fs_14 ct_7C7D7E_text_clr ct_fw_600">5 Stocks owned</h4>
                                        <div className="d-flex ">
                                            <div className="ct_table_shadow">
                                                <table className="table ct_winning_table ct_w_176">
                                                    <thead className="px-15">
                                                        <tr>
                                                            <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr">STOCK</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="ct_h_59">
                                                                <h4 className="ct_fs_14 mb-1">DOW J</h4>
                                                                <p className="mb-0 ct_fs_11">Dow Jones industry</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="ct_h_59">
                                                                <h4 className="ct_fs_14 mb-1">AAPL</h4>
                                                                <p className="mb-0 ct_fs_11">Appl, Inc</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="ct_h_59">
                                                                <h4 className="ct_fs_14 mb-1">NFLX</h4>
                                                                <p className="mb-0 ct_fs_11">Netflix, Inc.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="ct_h_59">
                                                                <h4 className="ct_fs_14 mb-1">NIKE</h4>
                                                                <p className="mb-0 ct_fs_11">Nike, Inc.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="ct_h_59">
                                                                <h4 className="ct_fs_14 mb-1">FB</h4>
                                                                <p className="mb-0 ct_fs_11">Facebook, Inc</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table ct_winning_table">
                                                    <thead className="px-15">
                                                        <tr>
                                                            <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr">SHARES</th>
                                                            <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr">LAST PRICE $</th>
                                                            <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr">TOTAL VALUE $</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="ct_h_59">40</td>
                                                            <td className="ct_h_59">112.00</td>
                                                            <td className="ct_h_59">2,489.29</td>
                                                        </tr>
                                                        <tr>

                                                            <td className="ct_h_59">40</td>
                                                            <td className="ct_h_59">112.00</td>
                                                            <td className="ct_h_59">2,489.29</td>
                                                        </tr>
                                                        <tr>

                                                            <td className="ct_h_59">40</td>
                                                            <td className="ct_h_59">112.00</td>
                                                            <td className="ct_h_59">2,489.29</td>
                                                        </tr>
                                                        <tr>

                                                            <td className="ct_h_59">40</td>
                                                            <td className="ct_h_59">112.00</td>
                                                            <td className="ct_h_59">2,489.29</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="ct_h_59">40</td>
                                                            <td className="ct_h_59">112.00</td>
                                                            <td className="ct_h_59">2,489.29</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="px-15 ct_fs_14 ct_7C7D7E_text_clr ct_fw_600">2 Limit orders</h4>
                                        <div className="d-flex ">
                                            <div className="ct_table_shadow">
                                                <table className="table ct_winning_table ct_w_176">
                                                    <thead className="px-15">
                                                        <tr>
                                                            <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr">STOCK</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="ct_h_59">
                                                                <h4 className="ct_fs_14 mb-1">GOOGLE</h4>
                                                                <p className="mb-0 ct_fs_11">Alphabet, Inc</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="ct_h_59">
                                                                <h4 className="ct_fs_14 mb-1">NFLX</h4>
                                                                <p className="mb-0 ct_fs_11">Netflix, Inc.</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table ct_winning_table">
                                                    <thead className="px-15">
                                                        <tr>
                                                            <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr">TYPE</th>
                                                            <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr">PRICE</th>
                                                            <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr">SHARES</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="ct_h_59">BUY</td>
                                                            <td className="ct_h_59">1,500.00</td>
                                                            <td className="ct_h_59">20</td>
                                                        </tr>
                                                        <tr>

                                                            <td className="ct_h_59">SELL</td>
                                                            <td className="ct_h_59">1,500.00</td>
                                                            <td className="ct_h_59">20</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ct_grey_bg_clr ct_fixed_botom">
                                    <a onClick={() => HandleStockDetail()} className="ct_button_blue ct_light_blue_btn">BUY NEW STOCK</a>
                                </div>


                                {/* empty page content s */}

                                {/* <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_css">
                            <div className="w-100">
                                <div className="text-center mb-12">
                                    <img src="img/open_games.png" alt="">
                                </div>
                                <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">You don’t have any game <br> invitations </p>
                            </div>
                        </div> */}

                                {/* empty content E */}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default MyGamesDetail