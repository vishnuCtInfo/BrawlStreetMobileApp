import React from 'react'
import { useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"
import open_games from "../img/open_games.png"
function AddToWatchList() {
    const navigate = useNavigate()
    const HandleWatchlist = () => {
        navigate("/watchlist")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandleWatchlist()} >
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">ADD TO WATCHLIST</h4>
                    </div>
                    <div className="ct_white_bg ct_h-100">
                        <div className="ct_dark_grey_bg_clr ct_friend_search position-relative py-2 ">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="ct_search_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9 14C11.7614 14 14 11.7614 14 9C14 6.23858 11.7614 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14ZM9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" fill="#7C7D7E"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9392 22.0608L11.9392 14.0608L14.0605 11.9395L22.0605 19.9395L19.9392 22.0608Z" fill="#7C7D7E"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <table className="table ct_winning_table">
                                <thead className="px-15">
                                    <tr>
                                        <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr">SYMBOL</th>
                                        <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr">LAST PRICE $</th>
                                        <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="ct_h_59">
                                            <h4 className="ct_fw_700 ct_black_clr ct_fs_14 mb-0">GOOGLE</h4>
                                            <p className="mb-0 ct_fs_11 ct_7C7D7E_text_clr">Alphabet, Inc.</p>
                                        </td>
                                        <td className="ct_h_59">40.50</td>
                                        <td className="ct_h_59">
                                            <button type='button' className="ct_button_blue ct_light_blue_btn ct_fs_11 p-1 h-auto ct_small_btn px-2 ct_accepted_light_op">Accept</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ct_h_59">
                                            <h4 className="ct_fw_700 ct_black_clr ct_fs_14 mb-0">GGCO</h4>
                                            <p className="mb-0 ct_fs_11 ct_7C7D7E_text_clr">Gogo Company</p>
                                        </td>
                                        <td className="ct_h_59">53.29</td>
                                        <td className="ct_h_59">
                                            <button type='button' className="ct_button_blue ct_light_blue_btn ct_fs_11 p-1 h-auto ct_small_btn d-flex align-items-center gap-2 px-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M7 15L7 1L9 1L9 15L7 15Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1 7L15 7V9L1 9V7Z" fill="white" />
                                                </svg>Add</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* <!-- empty page content s --> */}

                        {/* <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_css h-100">
                            <div className="w-100 ">
                                <div className="text-center mb-12">
                                    <img src={open_games} alt="">
                                </div>
                                <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">You don’t have any game <br> invitations </p>
                            </div>
                        </div>  */}

                        {/* <!-- empty content E --> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddToWatchList