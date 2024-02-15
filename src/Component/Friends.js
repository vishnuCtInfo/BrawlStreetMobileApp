import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import add from "../img/add.png"
import green_circle from "../img/green_circle.png"
import man_1 from "../img/man_1.png"
import Polygon_2 from '../img/Polygon_2.png'
import octagonal from "../img/octagonal.png"
import corner6 from '../img/6_corner.png'
import BottomNavigation from './BottomNavigation'
import axios from 'axios'
import { message as MESSAGE } from "antd";
export const configJSON = require("../Component/Config");

function Friends() {

  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [frinedsList, setFriendsList] = useState([]);
  const [allFriends, setAllFrineds] = useState([]);
  const [search, setSearch] = useState([]);


  const HandleFriendsProfile = (value) => {
    navigate("/friends/profile",{state:{'email':value?.email, 'username':value?.username}})
  }


  const getAllFriendList = async () => {
    const user_email = sessionStorage.getItem('user_mail_id');
    if (!user_email) {
      console.log('sender id not found');
    }
    // console.log({ user_email })
    try {
      const { data } = await axios.post(configJSON?.baseUrl + configJSON?.friends_get_all_friends_list, { user_email });
      // console.log(data);
      if (data?.Success) {
        const frd = data?.friends.sort((a, b) => a.username.localeCompare(b.username))
        setAllFrineds(frd);
        setFriendsList(frd);
        return;
      }
    } catch (error) {
      console.log(error);
    }
    // finally {
    //   const data = [
    //     {username: 'baba'},
    //     { username: 'bablu' },
    //     { username: 'bunty' },
    //     { username: 'dada' },
    //     { username: 'imran' },
    //     { username: 'kumar' },
    //     { username: 'mohan' },
    //     { username: 'raj' },
    //     { username: 'ram' },
    //     { username: 'sachin' }
    //   ]
    //   setFriendsList(data);
    //   setAllFrineds(data);
    // }
  }

  const getAllFriendRequests = async () => {
    const user_email = sessionStorage.getItem('user_mail_id');
    if (!user_email) {
      console.log('sender id not found');
    }
    try {
      const { data } = await axios.get(configJSON?.baseUrl + configJSON?.get_requested_friend_requests + user_email);
      // console.log(data);
      if (data?.Success) {
        setRequests(data?.received_friend_requests);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }


  const handleFreidnRequest = async (payload) => {
    try {
      const { data } = await axios.post(configJSON?.baseUrl + configJSON?.friend_req_acc_rej, payload);
      // console.log(data);
      if (data?.Success) {
        MESSAGE.success(data?.message);
        getAllFriendList();
      }
    } catch (error) {
      MESSAGE.error('server internal error');
      console.log(error);
    }
  }

  const AcceptFirendRequest = async ({ req, key }) => {
    requests?.splice(key, 1);
    setRequests([...requests]);
    handleFreidnRequest({ ...req, accept: true })
  }

  const CancleFirendRequest = async ({ req, key }) => {
    requests?.splice(key, 1);
    setRequests([...requests]);
    handleFreidnRequest({ ...req, accept: false })
  }

  useEffect(() => {
    if (search) {
      const fdata = allFriends?.filter((data) => data.username.includes(search))
      setFriendsList(fdata);
    } else {
      setFriendsList(allFriends);
    }
  }, [search])

  useEffect(() => {
    getAllFriendList();
    getAllFriendRequests();
  }, [navigate]);

  return (
    <>
      <div className="ct_mobile_width">
        <div className="ct_login_bg">
          <div className="ct_mob_head d-flex align-items-center pb-30 px-15">
            <h4
              className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600"
            >
              FRIENDS
            </h4>
            <NavLink to='/add/friends' className="ct_plus_icon ct_create_game_popup">
              <img src={add} alt="img" />
            </NavLink>
          </div>
          <div className="ct_overflow_hidden">
            <div className="ct_open_game_tab">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" data-bs-toggle="tab" href="#Open"
                  >All friends</a
                  >
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link position-relative"
                    data-bs-toggle="tab"
                    href="#Invitations"
                  >
                    {requests?.length > 0 &&
                      <span
                        className="ct_notification_badge ct_invitation_badge"
                        style={{ left: "13px" }}
                      >{requests?.length}</span
                      >
                    }
                    Friends requests</a
                  >
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane container active" id="Open">
                  <div className="ct_white_bg">
                    <div
                      className="ct_dark_grey_bg_clr ct_friend_search position-relative py-2 ct_border_btm"
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search friends"
                        onChange={(e) => setSearch(e?.target?.value)}
                        value={search}
                      />
                      <div className="ct_search_icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9 14C11.7614 14 14 11.7614 14 9C14 6.23858 11.7614 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14ZM9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                            fill="#7C7D7E"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.9392 22.0608L11.9392 14.0608L14.0605 11.9395L22.0605 19.9395L19.9392 22.0608Z"
                            fill="#7C7D7E"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="pt-3">
                      {
                        frinedsList?.length > 0 ?
                          frinedsList?.map((frd, key) => (

                            <div key={key} className="d-flex gap-3">

                              {
                                key > 0 ?
                                  <>
                                    {
                                      (frinedsList[key - 1]?.username[0]?.toUpperCase() !== frd?.username[0]?.toUpperCase()) ?

                                        <div className="px-15" style={{ width: '32px' }}>
                                          <span className="ct_filter_text"> {frd?.username[0]?.toUpperCase()}</span>
                                        </div>
                                        :
                                        <div className="px-15" style={{ width: '32px' }}>
                                          <span className="ct_filter_text"></span>
                                        </div>
                                    }
                                  </>
                                  :
                                  <div className="px-15" style={{ width: '32px' }}>
                                    <span className="ct_filter_text"> {frd?.username[0]?.toUpperCase()}</span>
                                  </div>

                              }
                              <div className="flex-1">

                                <a onClick={() => HandleFriendsProfile(frd)}
                                  className="d-flex align-items-center gap-3 pb-3 ct_black_clr ct_border_btm"
                                >
                                  <div className="ct_ct_friends_img">
                                    <img src={man_1} alt="img" />
                                    <div className="ct_lavel_badge">
                                      <img src={green_circle} alt="img" />
                                      <h6>4</h6>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="ct_fs_14 ct_fw_500 mb-1">
                                      {frd?.username}
                                    </h4>
                                    <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                                      {frd?.email}
                                    </p>
                                  </div>
                                </a>
                                {/* <a onClick={() => HandleFriendsProfile()}
                                  className="d-flex align-items-center gap-3 py-3 ct_border_btm ct_black_clr"
                                >
                                  <div className="ct_ct_friends_img">
                                    <img src={man_1} alt="img" />
                                    <div className="ct_lavel_badge">
                                      <img src={Polygon_2} alt="img" />
                                      <h6>12</h6>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="ct_fs_14 ct_fw_500 mb-1">Amiles90</h4>
                                    <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                                      Angel Miles
                                    </p>
                                  </div>
                                </a>
                                <a onClick={() => HandleFriendsProfile()}
                                  className="d-flex align-items-center gap-3 py-3 ct_border_btm ct_black_clr"
                                >
                                  <div className="ct_ct_friends_img">
                                    <img src={man_1} alt="img" />
                                    <div className="ct_lavel_badge">
                                      <img src={green_circle} alt="img" />
                                      <h6>2</h6>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="ct_fs_14 ct_fw_500 mb-0">aa53annie</h4>
                                    <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                                      Annie Russell
                                    </p>
                                  </div>
                                </a>
                                <a onClick={() => HandleFriendsProfile()}
                                  className="d-flex align-items-center gap-3 py-3 ct_border_btm ct_black_clr"
                                >
                                  <div className="ct_ct_friends_img">
                                    <img src={man_1} alt="img" />
                                    <div className="ct_lavel_badge">
                                      <img src={corner6} alt="img" />
                                      <h6>26</h6>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="ct_fs_14 ct_fw_500 mb-0">Astella888R</h4>
                                    <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                                      Stella Russell
                                    </p>
                                  </div>
                                </a> */}
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
                              <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">You have no BrawlStreet friends
                                at the moment.</p>
                            </div>
                          </div>
                      }
                      
                    </div>

                    {/* empty content E */}
                  </div>
                </div>

                {/* -----------friends requests--------------*/}
                <div className="tab-pane container fade" id="Invitations">
                  <div className="ct_white_bg">
                    {
                      requests?.length > 0 ?
                        requests?.map((req, key) => (
                          <div className="d-flex gap-3 py-3 ct_border_btm px-15">
                            <div className="ct_ct_friends_img">
                              <img src={man_1} alt="img" />
                            </div>
                            <div>
                              <h4 className="ct_fs_14 mb-1">
                                <span className="ct_fw_600">{req?.sender_username}</span> wants to be
                                friends.
                              </h4>
                              <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                                {req?.sent_at} minutes ago
                              </p>
                              <div className="d-flex align-items-center gap-2 pt-12">
                                <button type='button' onClick={() => AcceptFirendRequest({ req, key })}
                                  className="ct_button_blue ct_light_blue_btn ct_fs_11 p-1 h-auto ct_small_btn"
                                >
                                  Accept
                                </button>
                                <button type='button' onClick={() => CancleFirendRequest({ req, key })}
                                  className="ct_button_blue ct_transparent_btn ct_red_text ct_grey_border_btn ct_small_btn ct_fs_11 p-1 h-auto"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                        :
                        <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_cssw">
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
                            <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">You have no friends requests
                              at the moment. </p>
                          </div>
                        </div>
                    }

                  </div>



                  {/* empty content E */}
                </div>
              </div>
            </div>
          </div>

          <BottomNavigation />
        </div>
      </div>
    </>
  )
}

export default Friends