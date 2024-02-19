import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back_btn from "../img/back_btn.png";
import { IsAuthnaticated, server_live_url, server_local_url } from "../Utils/Auth";
import { message as MESSAGE } from "antd";
import axios from "axios";
export const configJSON = require("../Component/Config");

function EmailInvite() {
  const navigate = useNavigate();
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [userData, setUserData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    message: "",
    referral_code: "",
    reference_link: ""
  });
  const HandleReferrals = () => {
    navigate("/referrals");
  };

  const sendMail = async (payload) => {
    setLoadingBtn(true)
    try {
      payload = {...payload, reference_link: payload.reference_link+'=email='+payload?.email}
      console.log(payload)
      const {data} = await axios.post(configJSON?.baseUrl + configJSON?.send_email_invitation, payload);
      MESSAGE.success(data?.message);
      navigate("/send/invite",{state:{id:payload?.email}})
    } catch (error) {
      console.log(error);
      MESSAGE.error('server internal errors');
    }finally{
      setLoadingBtn(false)
    }
  }

  const HandleSendInvite = () => {

    if (userData && userData?.first_name && userData?.last_name && userData?.email && userData?.message) {
      sendMail(userData);
      return
    }
    MESSAGE.error('all fields required');
  };


  useEffect(() => {
    const code = IsAuthnaticated();
    if (code) {
      let rLink = server_live_url+'/signup';

      const isLocal = window.location.href.includes('localhost');
      if (isLocal) {
        rLink = server_local_url+'/signup';
      }
      const updatedReferanceLink = `${rLink}?code=${code.referralCode}`;
      setUserData({
        ...userData,
        referral_code: code.referralCode,
        reference_link: updatedReferanceLink,
      });

    }

    if (!code) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <div className="ct_mobile_width">
        <div className=" ">
          <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
            <a onClick={() => HandleReferrals()} className="ct_mob_head pt-0">
              <img src={back_btn} alt="img" />
            </a>
            <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">
              EMAIL INVITE
            </h4>
          </div>
          <div className="ct_white_bg pt-28  px-15">
            <div className="pb-20">
              <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">First name</p>
              <input
                onChange={(e) =>
                  setUserData({ ...userData, first_name: e.target.value })
                }
                type="text"
                value={userData?.first_name}
                className="ct_select_option form-control w-100"
              />
            </div>
            <div className="pb-20">
              <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Last name</p>
              <input
                onChange={(e) =>
                  setUserData({ ...userData, last_name: e.target.value })
                }
                type="text"
                value={userData?.last_name}
                className="ct_select_option form-control w-100"
              />
            </div>
            <div className="pb-20">
              <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Email address</p>
              <div className="position-relative">
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  type="email"
                  value={userData?.email}
                  className="ct_select_option form-control w-100"
                />
                {/* if email is wrong then show this icon S*/}
                {/* <div className="ct_wrong_email_error">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11 20H14V23H11V20Z" fill="#FA6D1E"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.9085 7.27952C15.5022 5.48389 13.8523 4.32129 12.1075 4.52319C10.3591 4.72552 9.00035 6.24222 9 8.09102L6 8.09046C6.00062 4.76134 8.45884 1.92538 11.7627 1.54307C15.0703 1.16032 18.0991 3.36729 18.8346 6.61735C19.5687 9.86121 17.8006 13.1775 14.6743 14.303C14.2834 14.4437 13.9994 14.8319 13.9996 15.2922V18.0002H10.9996L10.9996 15.2938C10.9991 13.5959 12.0507 12.0591 13.6581 11.4804C15.3258 10.8799 16.3163 9.08134 15.9085 7.27952Z" fill="#FA6D1E"/>
                          </svg>
                        </div> */}
                {/* if email is wrong then show this icon S*/}
              </div>
            </div>
            <div className="pb-20">
              <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Message</p>
              <textarea
                onChange={(e) =>
                  setUserData({ ...userData, message: e.target.value })
                }
                value={userData?.message}
                rows="5"
                className="ct_select_option form-control w-100 h-auto"
                placeholder="Add a custom message"
              ></textarea>
            </div>
          </div>

          <div className="ct_grey_bg_clr ct_fixed_botom">
            <button
              onClick={() => HandleSendInvite()}
              className="ct_button_blue ct_light_blue_btn"
              disabled={loadingBtn}
            >
              {loadingBtn && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
              SEND INVITE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailInvite;
