import React, { useEffect, useState } from "react";
import back_btn from "../img/back_btn.png";
import man_1 from "../img/man_1.png";
import green_circle from "../img/green_circle.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message as MESSAGE } from "antd";
import { IsAuthnaticated } from "../Utils/Auth";
export const configJSON = require("../Component/Config");

function AddFriends() {
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  const [search, setSearch] = useState('');

  const handleContinue = () => {
    navigate("/buy/order/successfull");
  };

  const HandleFriends = () => {
    navigate("/friends");
  };

  const getAllFriends = async () => {
    try {
      const { data } = await axios.get(
        configJSON?.baseUrl + configJSON?.friends_get_all_users
      );
      if (data?.Success) {
        const user = IsAuthnaticated();
        const fdata = data?.users?.filter((obj) => obj.email != user?.activeUserEmail)
        setUsers(fdata);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchFriends = async (user_id) => {
    if (!user_id) {
      return;
    }
    try {

      const { data } = await axios.get(
        configJSON?.baseUrl + configJSON?.friends_search_by_email + user_id
      );
      if (data?.Success) {
        const user = IsAuthnaticated();
        const fdata = data?.users?.filter((obj) => obj.email != user?.activeUserEmail)
        setUsers(fdata);
        return;
      }
    } catch (error) {
      console.log(error);
      // MESSAGE.error('user not found');
    }
  }

  const sendFriendRequirest = async (receiver_email) => {
    const sender_email = sessionStorage.getItem('user_mail_id');
    if (!sender_email) {
      console.log('sender email not found, try relogin');
      return;
    }
    try {
      const { data } = await axios.post(configJSON?.baseUrl + configJSON?.friend_send_Invitation, { receiver_email, sender_email });
      if (data?.Success) {
        MESSAGE.success(data?.message);
        return;
      }
      if (!data?.Success) {
        MESSAGE.success(data?.error);
        return;

      }

    } catch (error) {
      console.log('error is : ', error);
    }
  }


  useEffect(() => {
    getAllFriends();
  }, [navigate]);

  useEffect(() => {
    if (search) {
      searchFriends(search);
    } else {
      getAllFriends();
    }
  }, [search])
  return (
    <>
      <div className="ct_mobile_width">
        <div className="ct_h-100 ">
          <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
            <a onClick={() => HandleFriends()} className="ct_mob_head pt-0">
              <img src={back_btn} alt="img" />
            </a>
            <div className="flex-1">
              <h4 className="text-white text-center ct_fs_18 mb-0 ct_fw_600">
                ADD FRIENDS
              </h4>
            </div>
          </div>
          <div className="ct_dark_grey_bg_clr ct_friend_search position-relative py-2 ">
            <input type="text" className="form-control" onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
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

          {
            users?.length > 0 ?
              users?.map((user, key) => {
                return (<div className="ct_white_bg px-15 " key={key}>
                  <div onClick={() => sendFriendRequirest(user?.email)} className="d-flex align-items-center gap-3 py-3 ct_border_btm">
                    <div className="ct_ct_friends_img">
                      <img src={man_1} alt="img" />
                      <div className="ct_lavel_badge">
                        <img src={green_circle} alt="img" />
                        <h6>2</h6>
                      </div>
                    </div>
                    <div>
                      <h4 className="ct_fs_14 ct_fw_700 mb-0">{user?.username}</h4>
                      <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
                )
              })
              :
              <>
                {search ?
                  <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_css">
                    <div className="w-100">

                      <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">No results found.</p>
                    </div>
                  </div>
                  :
                  <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_css">
                    <div className="w-100">
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
                      <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">Find a person by their username.</p>
                    </div>
                  </div>
                }
              </>
          }

          {/* no result found S */}

          {/* <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_css">
                            <div className="w-100">
                               
                                <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">No results found.</p>
                            </div>
                        </div> */}
          {/* no result found E */}

          {/* empty page content s */}

          {/* empty content E */}

          <div className="ct_grey_bg_clr ct_fixed_botom d-flex align-items-center gap-3">
            <a
              onClick={() => handleContinue()}
              className="ct_button_blue ct_light_blue_btn"
            >
              CONTINUE
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddFriends;
