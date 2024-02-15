import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import profile_pic from "../img/profile_pic.png"
import my_game from "../img/my_game.png"
import menu from "../img/menu.png"
import notifications from "../img/notifications.png"
import star_stroke from "../img/star_stroke.png"
import bank_account from "../img/bank_account.png"
import BottomNavigation from './BottomNavigation'
import { IsAuthnaticated } from '../Utils/Auth'
function NavigationMore() {
  const navigate = useNavigate()
  const [activeUser, setActiveUser] = useState();

  const signout = ()=>{
    sessionStorage.clear();
    localStorage.removeItem("user_mail_id");
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("referral_code");
    localStorage.removeItem("username");
    navigate('/login');
  }

  useEffect(()=>{
    const user = IsAuthnaticated();
    if(user){
      setActiveUser(user);
      return;
    }else{
      navigate('/login');
    }
  },[])

  return ( 
    <>
      <div className="ct_mobile_width">
        <div className=" ">
          <div className="pt-4  ">

            <NavLink to="/myprofile" className="d-flex gap-1">
              <div className="px-15">
                <img src={profile_pic} alt="" className="ct_img_36" />
              </div>
              <div className="flex-1 ct_border_btm pb-15">
                <h4 className="ct_fs_14 ct_fw_700 mb-1 ct_black_clr">{activeUser?.username ?? 'A/C holder name'}</h4>
                <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">
                  View your Profile
                </p>
              </div>
            </NavLink>

            <NavLink to="/wallet" className="d-flex gap-1 align-items-center">
              <div className="px-15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 6V20H21V12.5C21 11.6716 21.6716 11 22.5 11C23.3284 11 24 11.6716 24 12.5V23H0V3L21 1V6.5C21 7.32843 20.3284 8 19.5 8C18.6716 8 18 7.32843 18 6.5V4L3 6Z" fill="#050505" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 7.5C0 6.67157 0.671573 6 1.5 6C4.32241 6 24 6.5 24 6.5V15C24 15.8284 23.3284 16.5 22.5 16.5C21.6716 16.5 21 15.8284 21 15V9H1.5C0.671573 9 0 8.32843 0 7.5Z" fill="#050505" />
                  <path d="M16 14.5L16.0001 13H19V16H16V14.5Z" fill="#050505" />
                </svg>
              </div>
              <div className="flex-1 ct_border_btm pb-15 pt-15">
                <h4 className="ct_fs_14 ct_fw_700 mb-1 ct_black_clr">Wallet</h4>
              </div>
            </NavLink>


            <NavLink to="/friends" className="d-flex gap-1 align-items-center">
              <div className="px-15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="6" r="4" fill="#050505" />
                  <circle cx="20" cy="9" r="3" fill="#050505" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M6 17C6 13.5 7.51472 12 10 12H14C16.4853 12 18 13.5 18 17V23H15V16.5C15 15.6025 14.3284 15 13.5 15H10.5C9.67157 15 9 15.6025 9 16.5V23H6V17Z" fill="#050505" />
                  <path d="M20 14C22.2091 14 24 15.9699 24 18.4V23H20V14Z" fill="#050505" />
                  <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 7 6)" fill="#050505" />
                  <path d="M4 14C1.79086 14 0 15.7909 0 18V23H4V14Z" fill="#050505" />
                </svg>
              </div>
              <div className="flex-1 ct_border_btm pb-15 pt-15">
                <h4 className="ct_fs_14 ct_fw_700 mb-1 ct_black_clr">Friends</h4>
              </div>
            </NavLink>

            <NavLink to="/referrals" className="d-flex gap-1 align-items-center">
              <div className="px-15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7ZM12 10C14.7614 10 17 7.76142 17 5C17 2.23858 14.7614 0 12 0C9.23858 0 7 2.23858 7 5C7 7.76142 9.23858 10 12 10Z" fill="#050505" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M5 19C6.10457 19 7 18.1046 7 17C7 15.8954 6.10457 15 5 15C3.89543 15 3 15.8954 3 17C3 18.1046 3.89543 19 5 19ZM5 22C7.76142 22 10 19.7614 10 17C10 14.2386 7.76142 12 5 12C2.23858 12 0 14.2386 0 17C0 19.7614 2.23858 22 5 22Z" fill="#050505" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M19 19C20.1046 19 21 18.1046 21 17C21 15.8954 20.1046 15 19 15C17.8954 15 17 15.8954 17 17C17 18.1046 17.8954 19 19 19ZM19 22C21.7614 22 24 19.7614 24 17C24 14.2386 21.7614 12 19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22Z" fill="#050505" />
                  <path d="M8 3.83226C4.46819 5.37537 2 8.89953 2 13.0002C2 13.51 2.03815 14.0109 2.11175 14.5002L5 13.0002C5 10.2078 6.63505 7.79726 9 6.6738L8 3.83226Z" fill="#050505" />
                  <path d="M19 13.0002C19 10.2582 17.4235 7.88448 15.1275 6.73594L15.8204 3.75586C19.4478 5.25663 22 8.83036 22 13.0002C22 13.3377 21.9833 13.6713 21.9506 14.0002L19 13.0002Z" fill="#050505" />
                  <path d="M12 20.0002C13.635 20.0002 15.1391 19.4396 16.3306 18.5002L18.6146 20.5002C16.8517 22.0561 14.5361 23.0002 12 23.0002C9.51846 23.0002 7.24803 22.0963 5.5 20.5998L7.81628 18.6129C8.9834 19.4843 10.4315 20.0002 12 20.0002Z" fill="#050505" />
                </svg>
              </div>
              <div className="flex-1 ct_border_btm pb-15 pt-15">
                <h4 className="ct_fs_14 ct_fw_700 mb-1 ct_black_clr">Referrals</h4>
              </div>
            </NavLink>

            <NavLink to="/setting" className="d-flex gap-1 align-items-center">
              <div className="px-15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11 0H14V3.13193C15.2307 3.35106 16.3697 3.83503 17.3561 4.52282L19.5713 2.30762L21.6926 4.42894L19.4774 6.64418C20.1651 7.63047 20.649 8.76942 20.8681 10H24V13H20.8681C20.649 14.2306 20.165 15.3696 19.4773 16.3559L21.6924 18.571L19.5711 20.6924L17.356 18.4773C16.3696 19.165 15.2306 19.649 14 19.8681V23H11V19.8681C9.76942 19.649 8.63047 19.1651 7.64418 18.4774L5.42915 20.6924L3.30783 18.5711L5.52282 16.3561C4.83503 15.3697 4.35106 14.2307 4.13193 13H1V10H4.13193C4.35105 8.76936 4.83499 7.63036 5.52273 6.64403L3.30761 4.42891L5.42893 2.30759L7.64406 4.52272C8.63038 3.83499 9.76937 3.35105 11 3.13193V0ZM18 11.5C18 14.5376 15.5376 17 12.5 17C9.46243 17 7 14.5376 7 11.5C7 8.46243 9.46243 6 12.5 6C15.5376 6 18 8.46243 18 11.5ZM12.5 14C13.8807 14 15 12.8807 15 11.5C15 10.1193 13.8807 9 12.5 9C11.1193 9 10 10.1193 10 11.5C10 12.8807 11.1193 14 12.5 14Z" fill="#050505" />
                </svg>
              </div>
              <div className="flex-1 ct_border_btm pb-15 pt-15">
                <h4 className="ct_fs_14 ct_fw_700 mb-1 ct_black_clr">Settings</h4>
              </div>
            </NavLink>

            <NavLink to="/how/works" className="d-flex gap-1 align-items-center">
              <div className="px-15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10.5 6H13.5V9H10.5V6Z" fill="#050505" />
                  <path d="M10.5 11H13.5V18H10.5V11Z" fill="#050505" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#050505" />
                </svg>
              </div>
              <div className="flex-1 ct_border_btm pb-15 pt-15">
                <h4 className="ct_fs_14 ct_fw_700 mb-1 ct_black_clr">How to play</h4>
              </div>
            </NavLink>

            <NavLink to="/send-feedback" className="d-flex gap-1 align-items-center">
              <div className="px-15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 20H24V1H0V20H3V24L12 20ZM6 19.3837L11.3634 17H21V4H3V17H6V19.3837Z" fill="#050505" />
                  <path d="M5 6H19V9H5V6Z" fill="#050505" />
                  <path d="M5 11H13V14H5V11Z" fill="#050505" />
                </svg>
              </div>
              <div className="flex-1 ct_border_btm pb-15 pt-15">
                <h4 className="ct_fs_14 ct_fw_700 mb-1 ct_black_clr">Send feedback</h4>
              </div>
            </NavLink>

            <NavLink className="d-flex gap-1 align-items-center">
              <div className="px-15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#050505" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.4534 9.41752C13.2395 8.37312 12.4534 7.93191 11.8513 8.00889C11.2066 8.09132 10.5 8.62403 10.5 9.9992H7.5C7.5 7.37438 9.08413 5.33826 11.4708 5.03312C13.9001 4.72253 15.9212 6.51507 16.3924 8.81553C16.6283 9.96735 16.4789 11.0661 15.9108 12.0001C15.3557 12.9124 14.4913 13.5203 13.5544 13.893C13.5341 13.9011 13.523 13.9087 13.5182 13.9124C13.5136 13.9161 13.5125 13.9179 13.5125 13.9179L13.5112 13.9203C13.5105 13.9218 13.5092 13.9248 13.5077 13.9297C13.5049 13.9389 13.4998 13.9607 13.4998 13.9985L13.4998 14.9992H10.4998L10.4998 13.9999C10.4994 12.659 11.2855 11.5669 12.4456 11.1054C12.9469 10.906 13.2152 10.6588 13.3478 10.4409C13.4672 10.2446 13.5601 9.93813 13.4534 9.41752Z" fill="#050505" />
                  <path d="M10.5 16H13.5V19H10.5V16Z" fill="#050505" />
                </svg>
              </div>
              <div className="flex-1 ct_border_btm pb-15 pt-15">
                <h4 className="ct_fs_14 ct_fw_700 mb-1 ct_black_clr">Support</h4>
              </div>
            </NavLink>
 
            <div role='button' onClick={signout} className="d-flex gap-1 align-items-center">
              <div className="px-15">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M3 3V21H13V24H0V0H13V3H3Z" fill="#050505" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.3787 10.5001L14.9393 7.06077L17.0607 4.93945L24.1213 12.0001L17.0607 19.0608L14.9393 16.9395L18.3787 13.5001H6V10.5001H18.3787Z" fill="#050505" />
                </svg>
              </div>
              <div className="flex-1 ct_border_btm pb-15 pt-15">
                <h4 className="ct_fs_14 ct_fw_700 mb-1 ct_black_clr">Log out</h4>
              </div>
            </div>

          </div>
          
          <div className="px-15  ">
            <p className="ct_last_bottom_text ct_fs_13 ct_7C7D7E_text_clr ct_fw_600">© Brawl Street 2019. All right reserved.
              <span className="ct_blue_text"> Terms of use  </span>•  <span className="ct_blue_text">Privacy Policy</span></p>
          </div>
        </div>
        <BottomNavigation data="myprofile" />
      </div>
    </>
  )
}

export default NavigationMore