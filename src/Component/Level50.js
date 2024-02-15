import React from 'react'
import { useNavigate } from 'react-router-dom'
import profile_pic from "../img/profile_pic.png"
import corner10 from "../img/10_corner.png"
import BottomNavigation from './BottomNavigation'
function Level50() {
    const navigate = useNavigate()
    const HandleInsufficientFunds = () => {
        navigate("/insufficient/fund")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_profile_gradient_bg_clr ct_level_light_yellow_bg_clr pt-5 ct_pb_100">
                    <div className=" text-center">
                        <div className=" position-relative">
                            <img src={profile_pic} alt="img" className="ct_img_96" />
                            <div className="ct_my_profile_badge" data-bs-toggle="modal" data-bs-target="#edit_profile">
                                <img src={corner10} alt="img" />
                                <h6>50</h6>
                            </div>
                        </div>
                        <h4 className="ct_fs_27 ct_fw_700 text-white mt-4">jimhopper76</h4>
                        <p className="ct_yellow_text_clr ct_fw_900 ct_fs_14 ct_letter_space_5 pb-20 mb-0"><i className="ct_fw_900">LEVEL NAME</i></p>
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" width="167" height="1" viewBox="0 0 167 1" fill="none">
                                <g opacity="0.2">
                                    <line opacity="0.7" x1="4.37114e-08" y1="0.5" x2="167" y2="0.500015" stroke="white" />
                                </g>
                            </svg>
                        </div>
                        <div className="d-flex align-items-center gap-4 justify-content-center mt_20">
                            <div className="ct_follower_count">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M11 4C11 5.65685 9.65685 7 8 7C6.34315 7 5 5.65685 5 4C5 2.34315 6.34315 1 8 1C9.65685 1 11 2.34315 11 4Z" fill="white" />
                                        <path d="M10 11H6C4.89543 11 4 11.8954 4 13V15H2V13C2 10.7909 3.79086 9 6 9H10C12.2091 9 14 10.7909 14 13V15H12V13C12 11.8954 11.1046 11 10 11Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="mb-0 d-flex align-items-center"><span className="text-white ct_fw_700 ct_fs_18 me-1">82</span> <span className="ct_fs_11 text-white ct_fw_500">FRIENDS</span></h3>
                                </div>
                            </div>
                            <div className="ct_follower_count">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.59829 3.5C3.48012 4.42626 2 6.54028 2 9C2 9.51795 2.06563 10.0206 2.18903 10.5L4.08394 9.81908C4.02892 9.55468 4 9.28072 4 9C4 7.37567 4.9682 5.97747 6.35898 5.35103L5.59829 3.5Z" fill="#F9F9F9" />
                                        <path d="M14 9C14 6.54028 12.5199 4.42626 10.4017 3.5L9.64102 5.35103C11.0318 5.97747 12 7.37567 12 9C12 9.3453 11.9562 9.68038 11.874 10L13.848 10.3478C13.9475 9.91459 14 9.46343 14 9Z" fill="#F9F9F9" />
                                        <path d="M8 15C9.30618 15 10.5149 14.5826 11.5 13.874L10.2851 12.2834C9.63734 12.7351 8.84961 13 8 13C7.22794 13 6.50697 12.7813 5.89568 12.4024L4.5 13.874C5.48512 14.5826 6.69382 15 8 15Z" fill="#F9F9F9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8 5C8.55228 5 9 4.55228 9 4C9 3.44772 8.55228 3 8 3C7.44772 3 7 3.44772 7 4C7 4.55228 7.44772 5 8 5ZM8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4 13C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13ZM4 15C5.65685 15 7 13.6569 7 12C7 10.3431 5.65685 9 4 9C2.34315 9 1 10.3431 1 12C1 13.6569 2.34315 15 4 15Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="mb-0  d-flex align-items-center"><span className="text-white ct_fw_700 ct_fs_18 me-1">20</span> <span className="ct_fs_11 text-white ct_fw_500">REFERRALS</span></h3>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 ">
                            <div className="d-flex align-items-center justify-content-between px-15 gap-2 pt-28">
                                <div className="ct_portfolio_main  w-50 mb-2">
                                    <div className="d-flex gap-2">
                                        <div className="w-50">
                                            <div className="ct_light_black_bg">
                                                <h3 className="mb-2 ct_blue_text ct_fw_700 ct_fs_29 text-start">23</h3>
                                                <p className="mb-0 text-white ct_fs_11 text-start">ACTIVE
                                                    GAMES</p>
                                            </div>
                                        </div>
                                        <div className="w-50">
                                            <div className="ct_light_black_bg ">
                                                <h3 className="mb-2 ct_red_text ct_fw_700 text-start ct_fs_29">4</h3>
                                                <p className="mb-0  text-white ct_fs_11 text-start">ENDING
                                                    SOON</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="ct_portfolio_main  w-50 mb-2">
                                    <div className="ct_light_black_bg d-flex gap-2">
                                        <div className="w-50">
                                            <h3 className="mb-2 ct_green_text ct_fs_29 ct_fw_700 text-start">15</h3>
                                            <p className="mb-0 text-white ct_fs_11 ct_letter_space_0 text-start">WINS UNTIL NEXT LEVEL</p>
                                        </div>

                                        <div className="ct_circle_progress_bar progress w-50 ct_green_round_progress">
                                            <span className="title timer" data-from="0" data-to="85" data-speed="1800">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.501 23L10.501 3L13.501 3L13.501 23L10.501 23Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0009 5.12065L5.86155 11.26L3.74023 9.13867L12.0009 0.878013L20.2616 9.13867L18.1402 11.26L12.0009 5.12065Z" fill="white" />
                                                </svg>
                                            </span>
                                            <div className="overlay"></div>
                                            <div className="left"></div>
                                            <div className="right"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-15 gap-2">
                                <div className="ct_portfolio_main  w-50 mb-2">
                                    <div className="ct_light_black_bg d-flex align-items-center gap-2 py-12 mb-2">
                                        <h3 className="mb-0 text-white ct_fs_18 ct_fw_700 text-start">18</h3>
                                        <p className="mb-0 text-white ct_fs_11 ct_letter_space_0 text-start">UPCOMING GAMES</p>
                                    </div>
                                    <div className="ct_light_black_bg d-flex align-items-center gap-2 py-12">
                                        <h3 className="mb-0 text-white ct_fs_18 ct_fw_700 text-start">46</h3>
                                        <p className="mb-0 text-white ct_fs_11 ct_letter_space_0 text-start">GAMES WON</p>
                                    </div>
                                </div>
                                <div className="ct_portfolio_main  w-50 mb-2">
                                    <div className="ct_light_black_bg d-flex gap-2 py-12">
                                        <div className="w-50">
                                            <h3 className="mb-2 ct_dark_yellow_text ct_fs_29 ct_fw_700 text-start">73%</h3>
                                            <p className="mb-0 text-white ct_fs_11 ct_letter_space_0 text-start">WINNING RATIO</p>
                                        </div>

                                        <div className="ct_circle_progress_bar progress w-50 ct_yellow_round_progress">
                                            <span className="title timer" data-from="0" data-to="85" data-speed="1800">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.4747 12C16.4901 13.4037 15.0969 14.4202 13.5 14.8168V20H16C17.6569 20 19 21.3431 19 23H5C5 21.3431 6.34315 20 8 20H10.5V14.8168C8.90308 14.4202 7.50991 13.4037 6.52527 12H4.99906C3.3422 12 2 10.6569 2 9V3H5V1H19V3H22V9C22 10.6569 20.6578 12 19.0009 12H17.4747ZM4 8.33333V5H6V10C4 10 4 8.33333 4 8.33333ZM20 8.33333V5H18V10C20 10 20 8.33333 20 8.33333Z" fill="#F9B300" />
                                                </svg>
                                            </span>
                                            <div className="overlay"></div>
                                            <div className="left"></div>
                                            <div className="right"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-15 gap-2">
                                <div className="ct_portfolio_main  w-50 mb-2">
                                    <div className="ct_light_black_bg py-22">
                                        <h3 className="mb-2 ct_green_text ct_fw_700 text-start  ct_fs_29">$13,780.00</h3>
                                        <p className="mb-0 text-white ct_fs_11 text-start">WALLET</p>
                                    </div>
                                </div>
                                <div className="ct_portfolio_main  w-50 mb-2">
                                    <div className="ct_light_black_bg py-22">
                                        <h3 className="mb-2 text-white ct_fw_700  ct_fs_29 text-start">$7,650.50</h3>
                                        <p className="mb-0  text-white ct_fs_11 text-start">TOTAL WINS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-15 gap-2  pb-30">
                                <div className="ct_portfolio_main  w-50 mb-2">
                                    <div className="ct_light_black_bg py-22">
                                        <h3 className="mb-2 text-white ct_fw_700  ct_fs_29 text-start">$280.00</h3>
                                        <p className="mb-0 text-white ct_fs_11 text-start">REFERRALS EARNED</p>
                                    </div>
                                </div>
                                <div className="ct_portfolio_main  w-50 mb-2">
                                    <div className="ct_light_black_bg py-22">
                                        <h3 className="mb-2 text-white ct_fw_700  ct_fs_29 text-start">43</h3>
                                        <p className="mb-0  text-white ct_fs_11 text-start">STOCKS IN WATCHLIST</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Clear all notifications?l S */}
                <div className="modal fade" id="clear_notification" tabindex="-1" aria-labelledby="join_game_modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body py-24 px-3 pb-0">
                                <div className="w-100">
                                    <div className="text-center pb-15">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                            <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z" fill="#54A3FF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M69 36C69 54.2254 54.2254 69 36 69C17.7746 69 3 54.2254 3 36C3 17.7746 17.7746 3 36 3C54.2254 3 69 17.7746 69 36ZM72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36ZM45.7544 26.5174C44.6629 21.6943 40.2058 18.51 35.4297 19.0627C30.6498 19.6158 27.0009 24.0444 27 29L24 28.9994C24.0012 22.5635 28.7496 16.8156 35.0848 16.0825C41.4238 15.349 47.2598 19.5777 48.6804 25.8552C50.0996 32.1265 46.6764 38.5117 40.6737 40.6728C39.6458 41.0429 38.9881 41.4139 38.5859 41.8299C38.2392 42.1886 37.9987 42.6648 37.9992 43.4995V50.0002H34.9992V43.501C34.9985 41.9617 35.4921 40.7137 36.4292 39.7446C37.3109 38.8327 38.487 38.2716 39.6574 37.8502C44.2016 36.2142 46.8473 31.3467 45.7544 26.5174ZM35 53H38V56H35V53Z" fill="#1464F4" />
                                        </svg>
                                    </div>
                                    <h4 className="ct_fs_18 text-center ct_fw_700 mb-0">Clear all notifications?</h4>
                                    <p className="ct_grey_text mt-2 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">
                                        This is an irreversible action, you will not be able to recover your notifications.
                                    </p>

                                </div>
                            </div>
                            <div className="modal-footer border-0 d-flex align-items-center gap-3 ct_flex_wrap_none pt-0">
                                <a onClick={() => HandleInsufficientFunds()} className="ct_button_blue ct_light_blue_btn ">CONFIRM</a>
                                <button type='button' className="ct_button_blue ct_transparent_btn ct_blue_text" data-bs-dismiss="modal">CANCEL</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Clear all notifications? S */}
                <BottomNavigation />
            </div>

        </>
    )
}

export default Level50