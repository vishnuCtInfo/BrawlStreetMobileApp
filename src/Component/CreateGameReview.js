import React, {  useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"
import { API_games_createGame } from '../Services/gamesAPIs';
import { Convert12H } from '../Utils/TimeConverter';

function CreateGameReview() {
    const navigate = useNavigate();
    const location = useLocation();
    const gameData = location?.state?.gameData;
    const [loading, setLoading] = useState(false);

    const HandleInviteFriends = () => {
        navigate("/invite/friends", { state: { 'gameId': '', 'gameData': gameData } })
    }
    const HandleCreateGame = () => {
        navigate("/create/game", { state: { 'gameData': gameData } })
    }

    const create_game = async () => {
        if (gameData) {
            setLoading(true)
            try {
                const res = await API_games_createGame(gameData);
                // console.log(res)
                if (res) {
                    navigate("/invite/friends", { state: { 'gameData': res } })
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

    }

console.log(gameData)
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center pb-30 px-15">
                        <a onClick={() => HandleCreateGame()} className="">
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">REVIEW & CONFIRM</h4>
                    </div>
                    <div className="ct_white_bg pt-28 px-15 ct_h-100">
                        <p className="ct_fs_14 ct_dark_grey_text">Review and confirm your new game</p>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">NAME</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">{gameData?.name}</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">TYPE GAME</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">{gameData?.game_type}</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">ENTRY FEE</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">{gameData?.entry_fee}</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">START DATE</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">{gameData?.start_date}</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">START TIME</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">{Convert12H(gameData?.start_time)}</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">TIMEZONE</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">
                                {/* Eastern Time (EST) */}
                                {gameData?.time_zone}
                            </p>
                        </div>

                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">DURATION</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">{gameData?.duration} {gameData?.hours == 1 ? 'Hours' : 'Minutes'}</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">MAXIMUM PLAYER LEVEL</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">{gameData?.max_player_level}</p>
                        </div>
                        <div className="py-12 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                            <p className="mb-0 ct_fs_13 ct_fw_400">CAN PLAY THE GAME</p>
                            <p className="mb-0 ct_fs_13 ct_fw_700">{gameData?.access_type}</p>
                        </div>
                        <div className="py-12">
                            <p className="mb-0 ct_fs_13 ct_fw_400"><span>NOTE: </span>The entry fee of ${gameData?.entry_fee} will be deducted from your account. This fee will be returned to you if other players will not be joining the game.</p>
                        </div>
                    </div>
                    <div className="ct_grey_bg_clr ct_fixed_botom">
                        <button onClick={create_game} className="ct_button_blue ct_light_blue_btn">
                            {loading &&
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            }CONTINUE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateGameReview