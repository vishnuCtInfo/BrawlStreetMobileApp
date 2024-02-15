import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"
import _50 from "../img/50-50.png"
import axios from 'axios'
export const configJSON = require("../Component/Config");

function InviteToGame() {
    const navigate = useNavigate()
    const location = useLocation();
    const friend_email = location?.state?.email;
    const friend_username = location?.state?.username;
    const [games, setGames] = useState([]);
    const [gameIds, setGameIds] = useState([]);

    const getAllGames = async () => {
        try {
            const { data } = await axios.get(configJSON.baseUrl + configJSON.get_all_games)
            if (data?.success) {
                setGames(data?.data);
                return;
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    const HandleInvitationSent = () => {
        console.log(friend_email, friend_username)
        navigate("/invitation/sent", { state: { 'email': friend_email, 'username': friend_username } })
    }
    const HandleFriendsProfile = () => {
        navigate("/friends/profile")
    }

    const addGameId = (gameId) => {
        const find = gameIds.indexOf(gameId?.id)
        if (find === -1)
            gameIds.push(gameId?.id)
        else
            gameIds?.splice(find, 1)
        setGameIds([...gameIds]);
    }

    useEffect(() => {
        console.log(gameIds)
    })
    useEffect(() => {
        getAllGames();
    }, [navigate])

    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_game_card_bg ct_h_72 ct_pb_100 ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandleFriendsProfile()} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">INVITE TO GAME</h4>
                    </div>

                    <div className="ct_dark_grey_bg_clr ct_friend_search position-relative py-2 ">
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="ct_search_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9 14C11.7614 14 14 11.7614 14 9C14 6.23858 11.7614 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14ZM9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" fill="#7C7D7E" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.9392 22.0608L11.9392 14.0608L14.0605 11.9395L22.0605 19.9395L19.9392 22.0608Z" fill="#7C7D7E" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        {
                            games.length > 0 ?
                                games.map((item, key) => (
                                    <div key={key} className="d-flex gap-3 px-15 pt-15 pb-15 ct_border_btm">
                                        <div className="ct_line_h_50">
                                            <input type="checkbox" onClick={() => addGameId(item)} id="ct_keep_login" className="ct_checkbox_width1 bg-transparent " />
                                        </div>
                                        <div onClick={() => addGameId(item)} className="text-dark flex-1">
                                            <div className="ct_game_card p-0 border-0">
                                                <div className="ct_right_center_fixed">
                                                    <img src={_50} alt="img" />
                                                </div>
                                                <h1 className="ct_fs_29 ct_fw_900 ct_Oswald_ff mb-12">{item?.name}</h1>
                                                <div className="ct_flex_2 gap-0">
                                                    <div className="d-flex align-items-start gap-2 mb-12  w-50">
                                                        <div className="ct_short_icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.2 2H6.8V5.80695L9.41128 7.31457L8.61128 8.70021L5.20635 6.73438H5.2V6.73071L5.19958 6.73047L5.2 6.72975V2Z" fill="#7C7D7E" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">{item?.start_date} - {item?.start_time}</h6>
                                                            <p className="ct_fs_12 ct_grey_text mb-0">START TIME</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-start gap-2 mb-12 w-50">
                                                        <div className="ct_short_icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M8 10C8 10 7.5 9 6 9C4.5 9 4 10 4 10V9C4 7.89543 4.89543 7 6 7C7.10457 7 8 7.89543 8 9V10ZM2 12V9C2 6.79086 3.79086 5 6 5C8.20914 5 10 6.79086 10 9V12H2Z" fill="#7C7D7E" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M8 2H4V3C4 4.10457 4.89543 5 6 5C7.10457 5 8 4.10457 8 3V2ZM2 0V3C2 5.20914 3.79086 7 6 7C8.20914 7 10 5.20914 10 3V0H2Z" fill="#7C7D7E" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">{item?.hours} hours</h6>
                                                            <p className="ct_fs_12 ct_grey_text mb-0">DURATION</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ct_flex_2  mb-12 gap-0 ">
                                                    <div className="d-flex align-items-start gap-2  w-50">
                                                        <div className="ct_short_icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.12875 4.62887L0.0273438 7.73027L1.09834 8.80127C1.34932 8.6122 1.66157 8.50013 2 8.50013C2.82843 8.50013 3.5 9.1717 3.5 10.0001C3.5 10.3386 3.38792 10.6508 3.19886 10.9018L4.26998 11.9729L7.37139 8.87151L6.73924 8.23937L7.7999 7.17871L8.43205 7.81085L11.9729 4.26998L10.9018 3.19888C10.6508 3.38801 10.3385 3.50013 10 3.50013C9.17157 3.50013 8.5 2.82855 8.5 2.00013C8.5 1.66163 8.61212 1.34933 8.80125 1.09832L7.73027 0.0273438L4.18941 3.56821L5.10393 4.48274L4.04327 5.5434L3.12875 4.62887ZM6.04535 7.54536L7.10601 6.48469L5.81044 5.18913L4.74978 6.24979L6.04535 7.54536Z" fill="#7C7D7E" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">${item?.entry_fee}</h6>
                                                            <p className="ct_fs_12 ct_grey_text mb-0">ENTRY FEE</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-start gap-2 w-50">
                                                        <div className="ct_short_icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                <path d="M8.5 3.5C8.5 4.88071 7.38071 6 6 6C4.61929 6 3.5 4.88071 3.5 3.5C3.5 2.11929 4.61929 1 6 1C7.38071 1 8.5 2.11929 8.5 3.5Z" fill="#7C7D7E" />
                                                                <path d="M6.46887 7H5.53113C3.51384 7 1.81223 8.50215 1.56202 10.5039L1.5 11V12H10.5V11L10.438 10.5039C10.1878 8.50215 8.48616 7 6.46887 7Z" fill="#7C7D7E" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">59 (4 friends)</h6>
                                                            <p className="ct_fs_12 ct_grey_text mb-0">PLAYERS</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ct_flex_2 gap-0">
                                                    <div className="d-flex align-items-start gap-2 w-50">
                                                        <div className="ct_short_icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.12875 4.62887L0.0273438 7.73027L1.09834 8.80127C1.34932 8.6122 1.66157 8.50013 2 8.50013C2.82843 8.50013 3.5 9.1717 3.5 10.0001C3.5 10.3386 3.38792 10.6508 3.19886 10.9018L4.26998 11.9729L7.37139 8.87151L6.73924 8.23937L7.7999 7.17871L8.43205 7.81085L11.9729 4.26998L10.9018 3.19888C10.6508 3.38801 10.3385 3.50013 10 3.50013C9.17157 3.50013 8.5 2.82855 8.5 2.00013C8.5 1.66163 8.61212 1.34933 8.80125 1.09832L7.73027 0.0273438L4.18941 3.56821L5.10393 4.48274L4.04327 5.5434L3.12875 4.62887ZM6.04535 7.54536L7.10601 6.48469L5.81044 5.18913L4.74978 6.24979L6.04535 7.54536Z" fill="#7C7D7E" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$600.00</h6>
                                                            <p className="ct_fs_12 ct_grey_text mb-0">POT</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-start gap-2 w-50">
                                                        <div className="ct_short_icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                <path d="M8.5 3.5C8.5 4.88071 7.38071 6 6 6C4.61929 6 3.5 4.88071 3.5 3.5C3.5 2.11929 4.61929 1 6 1C7.38071 1 8.5 2.11929 8.5 3.5Z" fill="#7C7D7E" />
                                                                <path d="M6.46887 7H5.53113C3.51384 7 1.81223 8.50215 1.56202 10.5039L1.5 11V12H10.5V11L10.438 10.5039C10.1878 8.50215 8.48616 7 6.46887 7Z" fill="#7C7D7E" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">20</h6>
                                                            <p className="ct_fs_12 ct_grey_text mb-0">MAX LEVEL</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                :
                                <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_css">
                                    {/* empty page content s */}
                                    <div className="w-100 py-4">
                                        <div className="text-center mb-12">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M36 69C54.2254 69 69 54.2254 69 36C69 17.7746 54.2254 3 36 3C17.7746 3 3 17.7746 3 36C3 54.2254 17.7746 69 36 69ZM36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z" fill="#D8D8D8" />
                                                <path d="M42 25C42 28.3137 39.3137 31 36 31C32.6863 31 30 28.3137 30 25C30 21.6863 32.6863 19 36 19C39.3137 19 42 21.6863 42 25Z" fill="#D8D8D8" />
                                                <path d="M18 30C18 32.2091 19.7909 34 22 34C24.2091 34 26 32.2091 26 30C26 27.7909 24.2091 26 22 26C19.7909 26 18 27.7909 18 30Z" fill="#D8D8D8" />
                                                <path d="M46 30C46 32.2091 47.7909 34 50 34C52.2091 34 54 32.2091 54 30C54 27.7909 52.2091 26 50 26C47.7909 26 46 27.7909 46 30Z" fill="#D8D8D8" />
                                                <path d="M22 37C18.6863 37 16 39.2386 16 42V52H22V37Z" fill="#D8D8D8" />
                                                <path d="M50 37C53.3137 37 56 39.2386 56 42V52H50V37Z" fill="#D8D8D8" />
                                                <path d="M40 37H32C30.3431 37 29 38.3431 29 40V49V52H26V40C26 36.6863 28.6863 34 32 34H40C43.3137 34 46 36.6863 46 40V52H43V49V40C43 38.3431 41.6569 37 40 37Z" fill="#D8D8D8" />
                                            </svg>
                                        </div>
                                        <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">You have no BrawlStreet games
                                            at the moment.</p>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="ct_grey_bg_clr ct_fixed_botom">
                    <a onClick={() => HandleInvitationSent()} className="ct_button_blue ct_light_blue_btn">INVITE TO GAMES</a>
                </div>
            </div>
        </>
    )
}

export default InviteToGame