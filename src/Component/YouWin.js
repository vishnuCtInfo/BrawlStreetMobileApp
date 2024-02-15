import React from 'react'
import { useNavigate } from 'react-router-dom'
import corner6 from "../img/6_corner.png"
import profile_pic from "../img/profile_pic.png"
import man_1 from "../img/man_1.png"
import octagonal from "../img/octagonal.png"
import Polygon_2 from "../img/Polygon_2.png"
import green_circle from "../img/green_circle.png"
import corner10 from "../img/10_corner.png"
import youwon from '../img/you_won_bg.svg'
function YouWin() {
    const navigate = useNavigate()
    const HandleMyGamesDetail = () => {
        navigate("/mygames/detail")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_grey_bg_clr p-0 ct_h-100 ">

                    <div className="ct_win_gredient_bg" style={{ backgroundImage: `url(${youwon})` }}>
                        <div className="ct_mob_head d-flex align-items-center bg-transparent pb-30 px-15">
                            <span onClick={() => HandleMyGamesDetail()} className="pt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.12188 11.9997L16.2034 3.9182L14.082 1.79688L3.87924 11.9997L14.082 22.2025L16.2034 20.0811L8.12188 11.9997Z" fill="#050505" />
                                </svg>
                            </span>
                            <div className="flex-1">
                                <h4 className=" text-center ct_fs_18 mb-0 ct_fw_600">WALLSTREET DEATHMATCH</h4>
                            </div>
                        </div>
                        <div className="px-15  pt-4">
                            <h2 className="ct_fs_35 ct_Oswald_ff ct_fw_700 text-center">CONGRATULATIONS
                                YOU WON!</h2>
                            <div className="text-center position-relative pt-28">
                                <img src={profile_pic} alt="img" className="ct_img_96 ct_border_10" />
                                <div className="ct_my_profile_badge">
                                    <h6 className="ct_level_num">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="52" viewBox="0 0 44 52" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16 3H0V11C0 18.732 6.26801 25 14 25H16V3ZM13 6H3V11C3 16.5228 7.47715 21 13 21V6Z" fill="#FFB800" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M28 3H44V11C44 18.732 37.732 25 30 25H28V3ZM31 6H41V11C41 16.5228 36.5228 21 31 21V6Z" fill="#FFB800" />
                                            <path d="M25.5996 30H18.181C18.181 48 16 48 16 48H28C28 48 25.5996 48 25.5996 30Z" fill="#FFB800" />
                                            <path d="M31 48H13C10.7909 48 9 49.7909 9 52H35C35 49.7909 33.2091 48 31 48Z" fill="#FFB800" />
                                            <path d="M38 0C34.0262 12.1233 39.222 24.923 25.5 32H18.3871C4.96774 25 9.97381 12.1233 6 0H38Z" fill="#FFB800" />
                                            <rect x="26.0811" y="4" width="7.78949" height="1" rx="0.5" fill="#FFDA7A" />
                                            <rect x="26.0811" y="6.5" width="7.42415" height="1" rx="0.5" fill="#FFDA7A" />
                                            <rect x="25.9688" y="11.5" width="7.13635" height="1" rx="0.5" fill="#FFDA7A" />
                                            <rect x="25.5166" y="16.5" width="7.08388" height="1" rx="0.5" fill="#FFDA7A" />
                                            <rect x="24.4922" y="21.5" width="6.95356" height="1" rx="0.5" fill="#FFDA7A" />
                                            <rect x="23" y="26.5" width="5.68636" height="1" rx="0.5" fill="#FFDA7A" />
                                            <rect x="26.0244" y="9" width="7.29476" height="1" rx="0.5" fill="#FFDA7A" />
                                            <rect x="25.7041" y="14" width="7.18691" height="1" rx="0.5" fill="#FFDA7A" />
                                            <path d="M25.4619 19.5C25.4619 19.2239 25.6858 19 25.9619 19H31.6264C31.9026 19 32.1264 19.2239 32.1264 19.5C32.1264 19.7761 31.9026 20 31.6264 20H25.9619C25.6858 20 25.4619 19.7761 25.4619 19.5Z" fill="#FFDA7A" />
                                            <rect x="23.6426" y="24" width="6.75364" height="1" rx="0.5" fill="#FFDA7A" />
                                        </svg>
                                    </h6>
                                </div>
                            </div>
                            <div className="position-relative">
                                <div className="ct_progress_bar progress mt-5">
                                    <div className="progress-bar" style={{ width: "70%" }}>26</div>
                                </div>
                                <div className="ct_lavel_badge ct_level_end_position">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="44" viewBox="0 0 42 44" fill="none">
                                            <g filter="url(#filter0_i_5877_139)">
                                                <path d="M21 0L41.7846 11V33L21 44L0.215391 33V11L21 0Z" fill="#9671FF" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_i_5877_139" x="0.21582" y="0" width="41.5684" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="-2" />
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5877_139" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h6>7</h6>
                                </div>
                            </div>
                            <div>
                                <p className="mb-0 ct_fs_13 ct_fw_700 ct_7C7D7E_text_clr pt-15">Need to win <span className="ct_black_clr">12</span> more games to reach the next level.</p>
                            </div>
                            <div className="mt-30">
                                <button className="ct_button_blue ct_light_blue_btn d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 4.5C22 6.433 20.433 8 18.5 8C16.567 8 15 6.433 15 4.5C15 2.567 16.567 1 18.5 1C20.433 1 22 2.567 22 4.5Z" fill="white"></path>
                                        <path d="M22 19.5C22 21.433 20.433 23 18.5 23C16.567 23 15 21.433 15 19.5C15 17.567 16.567 16 18.5 16C20.433 16 22 17.567 22 19.5Z" fill="white"></path>
                                        <path d="M9 12C9 13.933 7.433 15.5 5.5 15.5C3.567 15.5 2 13.933 2 12C2 10.067 3.567 8.5 5.5 8.5C7.433 8.5 9 10.067 9 12Z" fill="white"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.1243 5.58231L6.12365 13.0824L4.87439 10.9169L17.875 3.41683L19.1243 5.58231Z" fill="white"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.8752 20.5837L4.87516 13.0837L6.12447 10.9182L19.1245 18.4182L17.8752 20.5837Z" fill="white"></path>
                                    </svg>
                                    SHARE THE NEWS</button>
                            </div>
                            <div className="pt-4 pb-4">
                                <div className="py-2 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">

                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M3 3C3 1.34315 4.34315 0 6 0C7.65685 0 9 1.34315 9 3V4H7V3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3V4H3V3Z" fill="#AAAAAB" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 3H0V6H6H12V3ZM12 7H9V8H8V7H4V8H3V7H0V12H12V7Z" fill="#AAAAAB" />
                                        </svg>

                                        <p className="mb-0 ct_fs_13 ct_fw_400 ct_7C7D7E_text_clr d-flex align-items-center gap-2">
                                            PORTFOLIO VALUE</p>
                                    </div>
                                    <p className="mb-0 ct_fs_13 ct_fw_700">$398,000.80</p>
                                </div>
                                <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#AAAAAB" />
                                        </svg>
                                        <p className="mb-0 ct_fs_13 ct_fw_400 ct_red_text">PRIZE</p>
                                    </div>


                                    <p className="mb-0 ct_fs_13 ct_fw_700">$600.00</p>
                                </div>
                                <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M8.5 3.5C8.5 4.88071 7.38071 6 6 6C4.61929 6 3.5 4.88071 3.5 3.5C3.5 2.11929 4.61929 1 6 1C7.38071 1 8.5 2.11929 8.5 3.5Z" fill="#AAAAAB" />
                                            <path d="M6.46887 7H5.53113C3.51384 7 1.81223 8.50215 1.56202 10.5039L1.5 11V12H10.5V11L10.438 10.5039C10.1878 8.50215 8.48616 7 6.46887 7Z" fill="#AAAAAB" />
                                        </svg>
                                        <p className="mb-0 ct_fs_13 ct_fw_400 ct_7C7D7E_text_clr">PLAYERS</p>
                                    </div>

                                    <p className="mb-0 ct_fs_13 ct_fw_700">16</p>
                                </div>
                                <div className="py-2   d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.2 2H6.8V5.80695L9.41128 7.31457L8.61128 8.70021L5.20635 6.73438H5.2V6.73071L5.19958 6.73047L5.2 6.72975V2Z" fill="#AAAAAB" />
                                        </svg>
                                        <p className="mb-0 ct_fs_13 ct_fw_400 ct_7C7D7E_text_clr">ENDED ON</p>
                                    </div>

                                    <p className="mb-0 ct_fs_13 ct_fw_700">Nov 23 - 12:30pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
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

export default YouWin