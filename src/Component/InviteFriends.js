import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import man_1 from "../img/man_1.png"
import back_btn from "../img/back_btn.png"
import Polygon_2 from "../img/Polygon_2.png"
import green_circle from "../img/green_circle.png"
import octagonal from '../img/octagonal.png'
import corner6 from '../img/6_corner.png'
import corner10 from '../img/10_corner.png'
import corner8_red from '../img/8_corner_red.png'
import axios from 'axios'
import { message as MESSAGE } from "antd";
import { IsAuthnaticated } from '../Utils/Auth'
import Loading from '../CommonPages/Loading'
import { API_friends_getAll } from '../Services/frinedsAPI'
import { API_games_sendGameInvitations } from '../Services/gamesAPIs'

function InviteFriends() {
    const location = useLocation();
    const game_id = location?.state?.gameData?.game_id;
    const gameData = location?.state?.gameData;

    const navigate = useNavigate()
    const [allFriends, setAllFrineds] = useState([]);
    const [userList, setUserList] = useState([]);
    const [selectAll, setSelectAll] = useState(false)
    const [loader, setLoader] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);

    const HandleCreateGameReview = () => {
        navigate("/create/game/review", { state: { 'gameId': game_id, 'gameData': gameData } })
    }
    const HandleInvitedFriends = () => {
        navigate("/invited/friends", { state: { 'gameData': gameData } })
    }

    const getAllFriendList = async () => {
        setLoader(true);
        const user_email = sessionStorage.getItem('user_mail_id');
        if (!user_email) {
            console.log('sender id not found');
        }
        try {
            const data = await API_friends_getAll({user_email});
            if (data?.Success) {
                const frd = data?.friends.sort((a, b) => a.username.localeCompare(b.username))
                setAllFrineds(frd);
                return;
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoader(false);
        }
    }

    const handleUser = (email) => {
        const index = userList.indexOf(email);
        console.log(userList);

        if (userList.length <= 0) {
            userList.push(email);
            setUserList(userList);
            return;
        }

        if (index !== -1) {
            // Check if email exists in the array
            userList.splice(index, 1);
        } else {
            // Email doesn't exist, add it to the array
            userList.push(email);
        }

        setUserList([...userList]); // Use spread operator to create a new array reference
    };

    const addAllUsers = () => {
        setSelectAll(true)
        const data = allFriends.map((item) => item.email);
        setUserList(data);
    }
    const removeAllUsers = () => {
        setSelectAll(false)
        setUserList([]);
    }

    const sendInvitaions = async () => {
        if (userList?.length <= 0) {
            MESSAGE.error('first select user');
            return;
        }

        try {
            setBtnLoading(true);
            const { activeUserEmail } = IsAuthnaticated()
            const payload = {
                sender_email: activeUserEmail,
                receiver_emails: userList,
                game_id
            }
            
            console.log('payload is : ', payload);
            const data = await API_games_sendGameInvitations(payload);
            
            navigate("/invited/friends",{state:{'gameData':gameData}})

        } catch (error) {
            console.log(error);
            MESSAGE.error('server internal error');
        } finally {
            setBtnLoading(false);
        }
    }

    useEffect(() => {
        getAllFriendList()
        console.log(gameData)
    }, [navigate])




    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 ">
                    <div className="ct_mob_head d-flex align-items-center px-15 justify-content-between pb-2  ">
                        <span onClick={() => HandleCreateGameReview()} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </span>
                        <div>
                            <h4 className="text-white text-center text-center ct_fs_18 mb-0 ct_fw_600 ">INVITE FRIENDS</h4>
                            <p className="mb-0 ct_grey_text">St Louis October Brawl</p>
                        </div>
                        <div>
                            <a onClick={() => HandleInvitedFriends()} className="ct_blue_text ct_fw_600">SKIP</a>
                        </div>
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

                    {loader ?
                        <Loading />
                        :
                        <div className="ct_white_bg  ct_h-100  pt-12">
                            {selectAll ?
                                <span onClick={removeAllUsers} className="ct_fs_14 ct_blue_text ct_fw_700 px-15">REMOVE ALL</span>
                                :
                                <span onClick={addAllUsers} className="ct_fs_14 ct_blue_text ct_fw_700 px-15">SELECT ALL</span>

                            }
                            <div className="ct_scroll_68">

                                {
                                    allFriends?.length > 0 &&
                                    allFriends.map((item, key) => (
                                        <div key={key} className="d-flex align-items-center gap-3 py-12 ct_border_btm_e1e1e1 ct_border_top px-15">
                                            <div className="ct_line_h_0">
                                                {userList?.length > 0 ?
                                                    <input checked={userList.map(item => item).includes(item?.email)} onClick={(e) => handleUser(item.email)} type="checkbox" id="ct_keep_login" className="ct_checkbox_width1 bg-transparent " />
                                                    :
                                                    <input onClick={(e) => handleUser(item.email)} type="checkbox" id="ct_keep_login" className="ct_checkbox_width1 bg-transparent " />
                                                }
                                            </div>
                                            <div className="d-flex align-items-center gap-4">
                                                <div className="ct_ct_friends_img">
                                                    <img src={man_1} alt="img" />
                                                    <div className="ct_lavel_badge">
                                                        <img src={Polygon_2} alt="img" />
                                                        <h6>15</h6>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="ct_fs_18 ct_fw_700 mb-1">{item?.username}</h4>
                                                    <p className="ct_fs_12 ct_fw_500 mb-0 ct_dark_grey_text ">{item?.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="ct_grey_bg_clr ct_fixed_botom">
                                <button onClick={() => sendInvitaions()} className="ct_button_blue ct_light_blue_btn">
                                    {btnLoading &&
                                        <div className="spinner-border spinner-border-sm me-1" role="status">
                                        </div>
                                    }
                                    INVITE 5 FRIENDS</button>
                            </div>
                        </div>
                    }


                </div>
            </div>
        </>
    )
}

export default InviteFriends