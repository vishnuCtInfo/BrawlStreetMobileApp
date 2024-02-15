import React from 'react'
import { useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"
import add from "../img/add.png"
import man_1 from "../img/man_1.png"
import Polygon_2 from '../img/Polygon_2.png'
import green_circle from "../img/green_circle.png"
import octagonal from "../img/octagonal.png"
import corner6 from '../img/6_corner.png'
import corner10 from '../img/10_corner.png'
import corner8_red from "../img/8_corner_red.png"
import ticket from "../img/ticket.png"
function InviteGameDetail() {
    const navigate = useNavigate()
    const HandleOpenGames = () => {
        navigate("/open/games")
    }
    const HandleLevel1_9 = () => {
        navigate("/level/1_9")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 ">

                    <div className="ct_mob_head d-flex align-items-center mb-30 px-15">
                        <a onClick={() => HandleOpenGames()} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </a>

                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">ST LOUIS BRAWL</h4>
                        <div className="ct_plus_icon">
                            <img src={add} alt="img" />
                        </div>
                    </div>

                    <div className="px-15 mb-30">
                        <h1 className="ct_fs_45 ct_Oswald_ff text-white">St Louis Brawl</h1>
                        <div className="d-flex align-items-start gap-2 justify-content-between mt_20 ct_border_btm_light_grey py-12">
                            <div className="ct_short_icon d-flex align-items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.12875 4.62887L0.0273438 7.73027L1.09834 8.80127C1.34932 8.6122 1.66157 8.50013 2 8.50013C2.82843 8.50013 3.5 9.1717 3.5 10.0001C3.5 10.3386 3.38792 10.6508 3.19886 10.9018L4.26998 11.9729L7.37139 8.87151L6.73924 8.23937L7.7999 7.17871L8.43205 7.81085L11.9729 4.26998L10.9018 3.19888C10.6508 3.38801 10.3385 3.50013 10 3.50013C9.17157 3.50013 8.5 2.82855 8.5 2.00013C8.5 1.66163 8.61212 1.34933 8.80125 1.09832L7.73027 0.0273438L4.18941 3.56821L5.10393 4.48274L4.04327 5.5434L3.12875 4.62887ZM6.04535 7.54536L7.10601 6.48469L5.81044 5.18913L4.74978 6.24979L6.04535 7.54536Z" fill="#BCBDBD" />
                                </svg>
                                <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white ct_text_op_0_8 mb-0">ENTRY FEE</h6>
                            </div>
                            <div>
                                <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white ct_text_op_0_8">$100</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-2  justify-content-between  ct_border_btm_light_grey py-12">
                            <div className="ct_short_icon d-flex align-items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.2 2H6.8V5.80695L9.41128 7.31457L8.61128 8.70021L5.20635 6.73438H5.2V6.73071L5.19958 6.73047L5.2 6.72975V2Z" fill="#BCBDBD" />
                                </svg>
                                <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white ct_text_op_0_8 ">START DATE</h6>
                            </div>
                            <div>
                                <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white ct_text_op_0_8">23 Nov - 8:00am EST</h6>
                            </div>
                        </div>

                        <div className="d-flex align-items-start gap-2  justify-content-between  ct_border_btm_light_grey py-12">
                            <div className="ct_short_icon d-flex align-items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 10C8 10 7.5 9 6 9C4.5 9 4 10 4 10V9C4 7.89543 4.89543 7 6 7C7.10457 7 8 7.89543 8 9V10ZM2 12V9C2 6.79086 3.79086 5 6 5C8.20914 5 10 6.79086 10 9V12H2Z" fill="#BCBDBD" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 2H4V3C4 4.10457 4.89543 5 6 5C7.10457 5 8 4.10457 8 3V2ZM2 0V3C2 5.20914 3.79086 7 6 7C8.20914 7 10 5.20914 10 3V0H2Z" fill="#BCBDBD" />
                                </svg>
                                <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white ct_text_op_0_8">DURATION</h6>
                            </div>
                            <div>
                                <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white ct_text_op_0_8">4 days</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-2  justify-content-between  ct_border_btm_light_grey py-12">
                            <div className="ct_short_icon d-flex align-items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.32294 5.98283C8.78398 6.89607 7.96178 7.57493 6.99941 7.85667V10H7.99941C9.10398 10 9.99941 10.8954 9.99941 12H1.99941C1.99941 10.8954 2.89484 10 3.99941 10H4.99941V7.85666C4.037 7.57491 3.21476 6.896 2.67581 5.98269C1.17123 5.82099 -0.000302117 4.54695 5.84423e-08 2.99943L0.000390647 1H1.99941V0H9.99941V1H11.9997L12.0001 2.99943C12.0004 4.54741 10.8281 5.82173 9.32294 5.98283ZM1.50016 2H2.99972V5C1.7775 5 1.50016 4.2 1.50016 4.2V2ZM10.4997 2H9.00016V5C10.2224 5 10.4997 4.2 10.4997 4.2V2Z" fill="#AAAAAB" />
                                </svg>
                                <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white ct_text_op_0_8">POT</h6>
                            </div>
                            <div>
                                <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white ct_text_op_0_8">$600.00</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-2 justify-content-between  ct_border_btm_light_grey py-12">
                            <div className="ct_short_icon d-flex align-items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M8.5 3.5C8.5 4.88071 7.38071 6 6 6C4.61929 6 3.5 4.88071 3.5 3.5C3.5 2.11929 4.61929 1 6 1C7.38071 1 8.5 2.11929 8.5 3.5Z" fill="#AAAAAB" />
                                    <path d="M6.46887 7H5.53113C3.51384 7 1.81223 8.50215 1.56202 10.5039L1.5 11V12H10.5V11L10.438 10.5039C10.1878 8.50215 8.48616 7 6.46887 7Z" fill="#AAAAAB" />
                                </svg>
                                <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white ct_text_op_0_8">PLAYERS</h6>
                            </div>
                            <div>
                                <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white ct_text_op_0_8">16 (2 friends)</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-2  justify-content-between py-12">
                            <div className="ct_short_icon d-flex align-items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6 9L10 12V1.76616e-05L2 0V12L6 9ZM6.79028 3.23624L6.23544 2.14469C6.19052 2.05596 6.09949 2.00002 6 2.00002C5.90051 2.00002 5.80948 2.05596 5.76456 2.14469L5.20972 3.23446H4.26486C4.15841 3.23186 4.06125 3.29478 4.02009 3.39296C3.97894 3.49114 4.00222 3.6045 4.07873 3.67854L4.9463 4.53205L4.46565 5.63558C4.4222 5.73923 4.44983 5.85903 4.53429 5.93319C4.61874 6.00735 4.74114 6.0193 4.83835 5.96287L6 5.30963L7.16165 5.96465C7.25886 6.02107 7.38126 6.00913 7.46571 5.93496C7.55017 5.8608 7.5778 5.741 7.53435 5.63736L7.0537 4.53383L7.92127 3.68031C7.99778 3.60627 8.02106 3.49291 7.97991 3.39473C7.93875 3.29655 7.84159 3.23364 7.73514 3.23624H6.79028Z" fill="#AAAAAB" />
                                </svg>
                                <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white ct_text_op_0_8">MAX PLAYER LEVEL</h6>
                            </div>
                            <div>
                                <h6 className="ct_fs_13 mb-0 ct_fw_500 text-white ct_text_op_0_8">40</h6>
                            </div>
                        </div>
                    </div>
                    <div className="ct_white_bg ct_overflow_38">
                        <div className="px-15  py-12 d-flex align-items-center justify-content-between ct_border_btm">
                            <div className="d-flex align-items-center gap-4">
                                <div className="ct_ct_friends_img">
                                    <img src={man_1} alt="img" />
                                    <div className="ct_lavel_badge">
                                        <img src={Polygon_2} alt="img" />
                                        <h6>15</h6>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="ct_fs_18 ct_fw_700 mb-1">silverfrog195</h4>
                                    <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Arlene Steward</p>
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-0 ct_fs_12 d-flex gap-2 align-items-center ct_fw_600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.292894 7.70711L6 13.4142L15.7071 3.70711L14.2929 2.29289L6 10.5858L1.70711 6.29289L0.292894 7.70711Z" fill="#676869" />
                                </svg>FRIENDS</h6>
                            </div>
                        </div>
                        <div className="px-15  py-12 d-flex align-items-center justify-content-between ct_border_btm">
                            <div className="d-flex align-items-center gap-4">
                                <div className="ct_ct_friends_img">
                                    <img src={man_1} alt="img" />
                                    <div className="ct_lavel_badge">
                                        <img src={green_circle} alt="img" />
                                        <h6>2</h6>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="ct_fs_18 ct_fw_700 mb-1">bluebear234</h4>
                                    <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Ronald Hawkins</p>
                                </div>
                            </div>
                            {/* <div>
                     <h6 className="mb-0 ct_fs_12 d-flex gap-2 align-items-center ct_fw_600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                         <path fillRule="evenodd" clipRule="evenodd" d="M0.292894 7.70711L6 13.4142L15.7071 3.70711L14.2929 2.29289L6 10.5858L1.70711 6.29289L0.292894 7.70711Z" fill="#676869"/>
                         </svg>FRIENDS</h6>
                    </div> */}
                        </div>
                        <div className="px-15  py-12 d-flex align-items-center justify-content-between ct_border_btm">
                            <div className="d-flex align-items-center gap-4">
                                <div className="ct_ct_friends_img">
                                    <img src={man_1} alt="img" />
                                    <div className="ct_lavel_badge">
                                        <img src={octagonal} alt="img" />
                                        <h6>35</h6>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="ct_fs_18 ct_fw_700 mb-1">blueladybug463</h4>
                                    <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Evan Flores</p>
                                </div>
                            </div>
                            {/* <div>
                     <h6 className="mb-0 ct_fs_12 d-flex gap-2 align-items-center ct_fw_600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                         <path fillRule="evenodd" clipRule="evenodd" d="M0.292894 7.70711L6 13.4142L15.7071 3.70711L14.2929 2.29289L6 10.5858L1.70711 6.29289L0.292894 7.70711Z" fill="#676869"/>
                         </svg>FRIENDS</h6>
                    </div> */}
                        </div>
                        <div className="px-15  py-12 d-flex align-items-center justify-content-between ct_border_btm">
                            <div className="d-flex align-items-center gap-4">
                                <div className="ct_ct_friends_img">
                                    <img src={man_1} alt="img" />
                                    <div className="ct_lavel_badge">
                                        <img src={corner6} alt="img" />
                                        <h6>21</h6>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="ct_fs_18 ct_fw_700 mb-1">yellowsnake313</h4>
                                    <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Kathryn Mckinney</p>
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-0 ct_fs_12 d-flex gap-2 align-items-center ct_fw_600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.292894 7.70711L6 13.4142L15.7071 3.70711L14.2929 2.29289L6 10.5858L1.70711 6.29289L0.292894 7.70711Z" fill="#676869" />
                                </svg>FRIENDS</h6>
                            </div>
                        </div>
                        <div className="px-15  py-12 d-flex align-items-center justify-content-between ct_border_btm">
                            <div className="d-flex align-items-center gap-4">
                                <div className="ct_ct_friends_img">
                                    <img src={man_1} alt="img" />
                                    <div className="ct_lavel_badge">
                                        <img src={Polygon_2} alt="img" />
                                        <h6>12</h6>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="ct_fs_18 ct_fw_700 mb-1">redkoala509</h4>
                                    <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Dianne Robertson</p>
                                </div>
                            </div>
                            {/* <div>
                     <h6 className="mb-0 ct_fs_12 d-flex gap-2 align-items-center ct_fw_600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                         <path fillRule="evenodd" clipRule="evenodd" d="M0.292894 7.70711L6 13.4142L15.7071 3.70711L14.2929 2.29289L6 10.5858L1.70711 6.29289L0.292894 7.70711Z" fill="#676869"/>
                         </svg>FRIENDS</h6>
                    </div> */}
                        </div>
                        <div className="px-15  py-12 d-flex align-items-center justify-content-between ct_border_btm">
                            <div className="d-flex align-items-center gap-4">
                                <div className="ct_ct_friends_img">
                                    <img src={man_1} alt="img" />
                                    <div className="ct_lavel_badge">
                                        <img src={corner10} alt="img" />
                                        <h6>53</h6>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="ct_fs_18 ct_fw_700 mb-1">bigbear444</h4>
                                    <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Cody Cooper</p>
                                </div>
                            </div>
                            {/* <div>
                     <h6 className="mb-0 ct_fs_12 d-flex gap-2 align-items-center ct_fw_600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                         <path fillRule="evenodd" clipRule="evenodd" d="M0.292894 7.70711L6 13.4142L15.7071 3.70711L14.2929 2.29289L6 10.5858L1.70711 6.29289L0.292894 7.70711Z" fill="#676869"/>
                         </svg>FRIENDS</h6>
                    </div> */}
                        </div>
                        <div className="px-15  py-12 d-flex align-items-center justify-content-between ct_border_btm">
                            <div className="d-flex align-items-center gap-4">
                                <div className="ct_ct_friends_img">
                                    <img src={man_1} alt="img" />
                                    <div className="ct_lavel_badge">
                                        <img src={corner8_red} alt="img" />
                                        <h6>53</h6>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="ct_fs_18 ct_fw_700 mb-1">sadwolf227</h4>
                                    <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Aubrey Lane</p>
                                </div>
                            </div>
                            {/* <div>
                     <h6 className="mb-0 ct_fs_12 d-flex gap-2 align-items-center ct_fw_600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                         <path fillRule="evenodd" clipRule="evenodd" d="M0.292894 7.70711L6 13.4142L15.7071 3.70711L14.2929 2.29289L6 10.5858L1.70711 6.29289L0.292894 7.70711Z" fill="#676869"/>
                         </svg>FRIENDS</h6>
                    </div> */}
                        </div>
                        <div className="px-15  py-12 d-flex align-items-center justify-content-between ct_border_btm">
                            <div className="d-flex align-items-center gap-4">
                                <div className="ct_ct_friends_img">
                                    <img src={man_1} alt="img" />
                                    <div className="ct_lavel_badge">
                                        <img src={Polygon_2} alt="img" />
                                        <h6>12</h6>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="ct_fs_18 ct_fw_700 mb-1">whitefish664</h4>
                                    <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Theresa Black</p>
                                </div>
                            </div>
                            {/* <div>
                     <h6 className="mb-0 ct_fs_12 d-flex gap-2 align-items-center ct_fw_600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                         <path fillRule="evenodd" clipRule="evenodd" d="M0.292894 7.70711L6 13.4142L15.7071 3.70711L14.2929 2.29289L6 10.5858L1.70711 6.29289L0.292894 7.70711Z" fill="#676869"/>
                         </svg>FRIENDS</h6>
                    </div> */}
                        </div>
                        <div className="px-15  py-12 d-flex align-items-center justify-content-between ct_border_btm">
                            <div className="d-flex align-items-center gap-4">
                                <div className="ct_ct_friends_img">
                                    <img src={man_1} alt="img" />
                                    <div className="ct_lavel_badge">
                                        <img src={green_circle} alt="img" />
                                        <h6>4</h6>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="ct_fs_18 ct_fw_700 mb-1">brownfish258</h4>
                                    <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">Ralph Cooper</p>
                                </div>
                            </div>
                            {/* <div>
                      <h6 className="mb-0 ct_fs_12 d-flex gap-2 align-items-center ct_fw_600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.292894 7.70711L6 13.4142L15.7071 3.70711L14.2929 2.29289L6 10.5858L1.70711 6.29289L0.292894 7.70711Z" fill="#676869"/>
                          </svg>FRIENDS</h6>
                     </div> */}
                        </div>


                    </div>

                    <div className="ct_grey_bg_clr d-flex align-items-center gap-3 ct_fixed_botom">
                        <button type='button' className="ct_button_blue ct_light_blue_btn" data-bs-toggle="modal" data-bs-target="#join_game_modal">JOIN GAME</button>
                        <button type='button' className="ct_button_blue ct_transparent_btn  ct_red_text ct_grey_border_btn">DECLINE</button>

                    </div>



                </div>

                {/* join game modal S */}
                <div className="modal fade" id="join_game_modal" tabindex="-1" aria-labelledby="join_game_modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body py-24 px-3 pb-0">
                                <div className="w-100">
                                    <div className="text-center pb-15">
                                        <img src={ticket} alt="img" />
                                    </div>
                                    <h4 className="ct_fs_18 text-center ct_fw_700">Join St. Louis Brawl?</h4>
                                    <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">
                                        By joining this game you will be charged the entry fee of <span className="ct_black_clr">$100.00</span>
                                    </p>

                                </div>
                            </div>
                            <div className="modal-footer border-0 d-flex align-items-center gap-3 ct_flex_wrap_none pt-0">
                                <a onClick={() => HandleLevel1_9()} className="ct_button_blue ct_light_blue_btn ">JOIN GAME</a>
                                <button type='button' className="ct_button_blue ct_transparent_btn ct_blue_text" data-bs-dismiss="modal">CANCEL</button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* join game modal S */}
            </div>
        </>
    )
}

export default InviteGameDetail