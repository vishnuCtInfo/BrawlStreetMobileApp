import React from 'react'
import { useNavigate } from 'react-router-dom'
import profile_pic from "../img/profile_pic.png"
import man_1 from "../img/man_1.png"
import corner6 from "../img/6_corner.png"
import octagonal from "../img/octagonal.png"
import Polygon_2 from "../img/Polygon_2.png"
import green_circle from "../img/green_circle.png"
import corner10 from "../img/10_corner.png"
function YouLost() {
    const navigate = useNavigate()

    const HandleMyGamesDetail = () => {
        navigate("/mygames/detail")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_grey_bg_clr p-0 ct_h-100 ">

                    <div className="ct_mob_head d-flex align-items-center pb-30 px-15 bg-transparent">
                        <span onClick={() => HandleMyGamesDetail()} className=" pt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M8.12188 11.9997L16.2034 3.9182L14.082 1.79688L3.87924 11.9997L14.082 22.2025L16.2034 20.0811L8.12188 11.9997Z"
                                    fill="#050505" />
                            </svg>
                        </span>

                        <div className="flex-1">
                            <h4 className=" text-center ct_fs_18 mb-0 ct_fw_600">WALLSTREET DEATHMATCH</h4>
                        </div>
                    </div>
                    <div className="px-15  pt-4">
                        <h2 className="ct_fs_35 ct_Oswald_ff ct_fw_700 text-center">YOU LOST THIS GAME,
                            GOOD LUCK NEXT TIME!</h2>
                        <div className="text-center position-relative pt-28">
                            <img src={profile_pic} alt="img" className="ct_img_96 ct_border_10" />
                            <div className="ct_my_profile_badge">
                                <h6 className="ct_level_num">5</h6>
                            </div>
                        </div>
                        <div className="position-relative">
                            <div className="ct_progress_bar progress mt-5">
                                <div className="progress-bar" style={{ width: "70%" }}>26</div>
                            </div>
                            <div className="ct_lavel_badge ct_level_end_position">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="44" viewBox="0 0 42 44"
                                        fill="none">
                                        <g filter="url(#filter0_i_5877_139)">
                                            <path d="M21 0L41.7846 11V33L21 44L0.215391 33V11L21 0Z" fill="#9671FF" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_i_5877_139" x="0.21582" y="0" width="41.5684" height="44"
                                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                    result="shape" />
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="-2" />
                                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                <feColorMatrix type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5877_139" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                                <h6>7</h6>
                            </div>
                        </div>
                        <div>
                            <p className="mb-0 ct_fs_13 ct_fw_700 ct_7C7D7E_text_clr pt-15">Need to win <span
                                className="ct_black_clr">12</span> more games to reach the next level.</p>
                        </div>
                        <div className="pt-4 pb-4">
                            <div className="py-2 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">

                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M0.875977 3.46484L10.5352 0.876653L13.1234 10.5359L3.46417 13.1241L0.875977 3.46484ZM3.32547 4.87906L5.25732 4.36142L5.77496 6.29327L3.8431 6.81091L3.32547 4.87906ZM9.12102 3.32614L7.18917 3.84378L7.70681 5.77563L9.63866 5.25799L9.12102 3.32614ZM4.36074 8.74276L6.29259 8.22512L6.81023 10.157L4.87838 10.6746L4.36074 8.74276ZM10.1563 7.18985L8.22445 7.70748L8.74208 9.63934L10.6739 9.1217L10.1563 7.18985Z"
                                            fill="#AAAAAB" />
                                    </svg>

                                    <p className="mb-0 ct_fs_13 ct_fw_400 ct_7C7D7E_text_clr d-flex align-items-center gap-2">
                                        GAME TYPE</p>
                                </div>
                                <p className="mb-0 ct_fs_13 ct_fw_700">20/80</p>
                            </div>
                            <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                        fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4 2H8V6H12V11H8H4H0V5H4V2Z"
                                            fill="#FF3F4A" />
                                    </svg>
                                    <p className="mb-0 ct_fs_13 ct_fw_400 ct_red_text">POSITION</p>
                                </div>


                                <p className="mb-0 ct_fs_13 ct_fw_700">5th</p>
                            </div>
                            <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                        fill="none">
                                        <path
                                            d="M3 3C3 1.34315 4.34315 0 6 0C7.65685 0 9 1.34315 9 3V4H7V3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3V4H3V3Z"
                                            fill="#AAAAAB" />
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M12 3H0V6H6H12V3ZM12 7H9V8H8V7H4V8H3V7H0V12H12V7Z" fill="#AAAAAB" />
                                    </svg>
                                    <p className="mb-0 ct_fs_13 ct_fw_400 ct_7C7D7E_text_clr">PORTFOLIO VALUE</p>
                                </div>

                                <p className="mb-0 ct_fs_13 ct_fw_700">$398,000.80</p>
                            </div>
                            <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                        fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M6.00005 2H12.0001V8H10.0001V5.41421L6.00005 9.41421L4.00003 7.41419L1.50694 9.90713L0.0927734 8.49287L4.00008 4.58581L6.00005 6.58579L8.58584 4H6.00005V2Z"
                                            fill="#16C766" />
                                    </svg>
                                    <p className="mb-0 ct_fs_13 ct_fw_400 ct_green_text">GAIN</p>
                                </div>

                                <p className="mb-0 ct_fs_13 ct_fw_700">+24.6%</p>
                            </div>
                            <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                        fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z"
                                            fill="#AAAAAB" />
                                    </svg>
                                    <p className="mb-0 ct_fs_13 ct_fw_400 ct_7C7D7E_text_clr">PRIZE</p>
                                </div>

                                <p className="mb-0 ct_fs_13 ct_fw_700">$600.00</p>
                            </div>
                            <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                        fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M3.12875 4.62887L0.0273438 7.73027L1.09834 8.80127C1.34932 8.6122 1.66157 8.50013 2 8.50013C2.82843 8.50013 3.5 9.1717 3.5 10.0001C3.5 10.3386 3.38792 10.6508 3.19886 10.9018L4.26998 11.9729L7.37139 8.87151L6.73924 8.23937L7.7999 7.17871L8.43205 7.81085L11.9729 4.26998L10.9018 3.19888C10.6508 3.38801 10.3385 3.50013 10 3.50013C9.17157 3.50013 8.5 2.82855 8.5 2.00013C8.5 1.66163 8.61212 1.34933 8.80125 1.09832L7.73027 0.0273438L4.18941 3.56821L5.10393 4.48274L4.04327 5.5434L3.12875 4.62887ZM6.04535 7.54536L7.10601 6.48469L5.81044 5.18913L4.74978 6.24979L6.04535 7.54536Z"
                                            fill="#AAAAAB" />
                                    </svg>
                                    <p className="mb-0 ct_fs_13 ct_fw_400 ct_7C7D7E_text_clr">ENTRY FEE</p>
                                </div>

                                <p className="mb-0 ct_fs_13 ct_fw_700">$100.00</p>
                            </div>
                            <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                        fill="none">
                                        <path
                                            d="M8.5 3.5C8.5 4.88071 7.38071 6 6 6C4.61929 6 3.5 4.88071 3.5 3.5C3.5 2.11929 4.61929 1 6 1C7.38071 1 8.5 2.11929 8.5 3.5Z"
                                            fill="#AAAAAB" />
                                        <path
                                            d="M6.46887 7H5.53113C3.51384 7 1.81223 8.50215 1.56202 10.5039L1.5 11V12H10.5V11L10.438 10.5039C10.1878 8.50215 8.48616 7 6.46887 7Z"
                                            fill="#AAAAAB" />
                                    </svg>
                                    <p className="mb-0 ct_fs_13 ct_fw_400 ct_7C7D7E_text_clr">PLAYERS</p>
                                </div>

                                <p className="mb-0 ct_fs_13 ct_fw_700">16</p>
                            </div>
                            <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                        fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M6 9L10 12V1.76616e-05L2 0V12L6 9ZM6.79028 3.23624L6.23544 2.14469C6.19052 2.05596 6.09949 2.00002 6 2.00002C5.90051 2.00002 5.80948 2.05596 5.76456 2.14469L5.20972 3.23446H4.26486C4.15841 3.23186 4.06125 3.29478 4.02009 3.39296C3.97894 3.49114 4.00222 3.6045 4.07873 3.67854L4.9463 4.53205L4.46565 5.63558C4.4222 5.73923 4.44983 5.85903 4.53429 5.93319C4.61874 6.00735 4.74114 6.0193 4.83835 5.96287L6 5.30963L7.16165 5.96465C7.25886 6.02107 7.38126 6.00913 7.46571 5.93496C7.55017 5.8608 7.5778 5.741 7.53435 5.63736L7.0537 4.53383L7.92127 3.68031C7.99778 3.60627 8.02106 3.49291 7.97991 3.39473C7.93875 3.29655 7.84159 3.23364 7.73514 3.23624H6.79028Z"
                                            fill="#AAAAAB" />
                                    </svg>
                                    <p className="mb-0 ct_fs_13 ct_fw_400 ct_7C7D7E_text_clr">MAX PLAYER LEVEL</p>
                                </div>
                                <p className="mb-0 ct_fs_13 ct_fw_700">40</p>
                            </div>
                            <div className="py-2  d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                        fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.2 2H6.8V5.80695L9.41128 7.31457L8.61128 8.70021L5.20635 6.73438H5.2V6.73071L5.19958 6.73047L5.2 6.72975V2Z"
                                            fill="#AAAAAB" />
                                    </svg>
                                    <p className="mb-0 ct_fs_13 ct_fw_400 ct_7C7D7E_text_clr">ENDED ON</p>
                                </div>

                                <p className="mb-0 ct_fs_13 ct_fw_700">Nov 23 - 12:30pm</p>
                            </div>
                        </div>

                    </div>
                    <div>
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
                                        <div className="d-flex align-items-center gap-3">
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
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">20.2%</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-3">
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
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">14.0%</h4>
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
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="ct_stylis_num">
                                                <span className="ct_red_text">3</span>
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
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">20.2%</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="ct_stylis_num">
                                                <span className="ct_red_text">4</span>
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
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">14.0%</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="ct_stylis_num">
                                                <span className="ct_red_text">5</span>
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
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        <h4 className="ct_fs_14 ct_fw_700 ct_red_text mb-0">4.2%</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="ct_stylis_num">
                                                <span className="ct_red_text">6</span>
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
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">9.0%</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="ct_stylis_num">
                                                <span className="ct_red_text">7</span>
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
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        <h4 className="ct_fs_14 ct_fw_700 ct_red_text mb-0">8.6%</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-3">
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
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        <h4 className="ct_fs_14 ct_fw_700 ct_red_text mb-0">4.2%</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-3">
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
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">9.0%</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-3">
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
                                        </div>

                                    </td>
                                    <td className="text-end">
                                        <h4 className="ct_fs_14 ct_fw_700 ct_red_text mb-0">8.6%</h4>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>




                </div>
            </div>
        </>
    )
}

export default YouLost