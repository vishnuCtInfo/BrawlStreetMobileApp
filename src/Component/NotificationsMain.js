import React from 'react'
import { useNavigate } from 'react-router-dom'
import notirfication_profile from "../img/notirfication_profile.png"
import star_stroke from "../img/star_stroke.png"
import bank_account from "../img/bank_account.png"
import my_game from "../img/my_game.png"
import menu from "../img/menu.png"
import notifications from "../img/notifications.png"
import BottomNavigation from './BottomNavigation'

function NotificationsMain() {
  const navigate = useNavigate()
  const HandleMygames = () => {
    navigate("/mygames")
  }
  const HandleOpenGames = () => {
    navigate("/open/games")
  }
  const HandleWatchlist = () => {
    navigate("/watchlist")
  }
  const HandleNavigationMore = () => {
    navigate("/navigation/more")
  }

  const HandleNotificationsMain = () => {
    navigate("/notification/main")
  }
  return (
    <>
      <div className="ct_mobile_width">
        <div className="ct_login_bg ct_h-100">
          <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
            <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">
              NOTIFICATIONS
            </h4>
            <a href="javascript:void(0)" className="ct_blue_text ct_fw_700 ct_fs_14" data-bs-toggle="modal"
              data-bs-target="#clear_notification">CLEAR</a>
          </div>
          <div className="ct_white_bg pt-28 ct_pb_100">
            <div>
              <div className="d-flex gap-3 py-3 ct_border_btm px-15">
                <div className="ct_ct_friends_img">
                  <div className="position-relative">
                    <img src={notirfication_profile} alt="img" />
                    <div className="ct_lavel_badge">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <mask id="path-1-outside-1_1722_13621" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18"
                          fill="black">
                          <rect fill="white" width="18" height="18" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 10V16H10V10H16V8H10V2H8V8H2V10H8Z" />
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 10V16H10V10H16V8H10V2H8V8H2V10H8Z"
                          fill="#1464F4" />
                        <path
                          d="M8 16H6V18H8V16ZM8 10H10V8H8V10ZM10 16V18H12V16H10ZM10 10V8H8V10H10ZM16 10V12H18V10H16ZM16 8H18V6H16V8ZM10 8H8V10H10V8ZM10 2H12V0H10V2ZM8 2V0H6V2H8ZM8 8V10H10V8H8ZM2 8V6H0V8H2ZM2 10H0V12H2V10ZM10 16V10H6V16H10ZM10 14H8V18H10V14ZM8 10V16H12V10H8ZM16 8H10V12H16V8ZM14 8V10H18V8H14ZM10 10H16V6H10V10ZM8 2V8H12V2H8ZM8 4H10V0H8V4ZM10 8V2H6V8H10ZM2 10H8V6H2V10ZM4 10V8H0V10H4ZM8 8H2V12H8V8Z"
                          fill="white" mask="url(#path-1-outside-1_1722_13621)" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="ct_fs_14 mb-1">
                    <span className="ct_fw_600">John Barley</span> wants to be
                    friends.
                  </h4>
                  <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">30 minutes ago</p>
                  <div className="d-flex align-items-center gap-2 pt-12">
                    <button type='button' className="ct_button_blue ct_light_blue_btn ct_fs_11 p-1 h-auto ct_small_btn px-3 py-2">
                      Accept
                    </button>
                    <button type='button'
                      className="ct_button_blue ct_transparent_btn ct_blue_text ct_grey_border_btn py-2 ct_small_btn px-3 ct_fs_11 p-1 h-auto">
                      IGNORE
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-3 py-3 ct_border_btm px-15">
                <div className="ct_ct_friends_img">
                  <div className="position-relative">
                    <img src={notirfication_profile} alt="img" />
                    <div className="ct_lavel_badge">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                        <path
                          d="M2.58579 9.41421L1.87868 8.70711L2.58579 8L4 6.58579L4.70711 5.87868L5.41421 6.58579L9 10.1716L16.5858 2.58579L17.2929 1.87868L18 2.58579L19.4142 4L20.1213 4.70711L19.4142 5.41421L9.70711 15.1213L9 15.8284L8.29289 15.1213L2.58579 9.41421Z"
                          fill="#16C766" stroke="white" stroke-width="2" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="ct_fs_14 mb-1">
                    <span className="ct_fw_600">John Barley</span> accepted your
                    friend request.
                  </h4>
                  <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">2 hours ago</p>
                </div>
              </div>
              <div className="d-flex gap-3 py-3 ct_border_btm px-15">
                <div className="ct_ct_friends_img">
                  <div className="position-relative">
                    <img src={notirfication_profile} alt="img" />
                    <div className="ct_lavel_badge">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                        <mask id="path-1-outside-1_5860_3041" maskUnits="userSpaceOnUse" x="0.292969" y="0.585938"
                          width="18" height="21" fill="black">
                          <rect fill="white" x="0.292969" y="0.585938" width="18" height="21" />
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M9.70718 4.29304L9.00008 3.58594L8.29297 4.29304L3.29297 9.29304L4.70718 10.7073L8.00008 7.41436L8.00008 19.0002H10.0001L10.0001 7.41436L13.293 10.7073L14.7072 9.29304L9.70718 4.29304Z" />
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.70718 4.29304L9.00008 3.58594L8.29297 4.29304L3.29297 9.29304L4.70718 10.7073L8.00008 7.41436L8.00008 19.0002H10.0001L10.0001 7.41436L13.293 10.7073L14.7072 9.29304L9.70718 4.29304Z"
                          fill="#F160A6" />
                        <path
                          d="M9.00008 3.58594L10.4143 2.17172L9.00008 0.75751L7.58586 2.17172L9.00008 3.58594ZM9.70718 4.29304L8.29297 5.70726H8.29297L9.70718 4.29304ZM8.29297 4.29304L9.70718 5.70726H9.70718L8.29297 4.29304ZM3.29297 9.29304L1.87876 7.87883L0.464541 9.29304L1.87876 10.7073L3.29297 9.29304ZM4.70718 10.7073L3.29297 12.1215L4.70718 13.5357L6.1214 12.1215L4.70718 10.7073ZM8.00008 7.41436H10.0001L10.0001 2.58594L6.58586 6.00015L8.00008 7.41436ZM8.00008 19.0002H6.00008L6.00008 21.0002H8.00008V19.0002ZM10.0001 19.0002V21.0002H12.0001V19.0002H10.0001ZM10.0001 7.41436L11.4143 6.00015L8.00008 2.58594L8.00008 7.41436L10.0001 7.41436ZM13.293 10.7073L11.8788 12.1215L13.293 13.5357L14.7072 12.1215L13.293 10.7073ZM14.7072 9.29304L16.1214 10.7073L17.5356 9.29304L16.1214 7.87883L14.7072 9.29304ZM7.58586 5.00015L8.29297 5.70726L11.1214 2.87883L10.4143 2.17172L7.58586 5.00015ZM9.70718 5.70726L10.4143 5.00015L7.58586 2.17172L6.87876 2.87883L9.70718 5.70726ZM4.70718 10.7073L9.70718 5.70726L6.87876 2.87883L1.87876 7.87883L4.70718 10.7073ZM6.1214 9.29304L4.70718 7.87883L1.87876 10.7073L3.29297 12.1215L6.1214 9.29304ZM6.58586 6.00015L3.29297 9.29304L6.1214 12.1215L9.41429 8.82858L6.58586 6.00015ZM10.0001 19.0002L10.0001 7.41436L6.00008 7.41436L6.00008 19.0002H10.0001ZM10.0001 17.0002H8.00008V21.0002H10.0001V17.0002ZM8.00008 7.41436L8.00007 19.0002H12.0001V7.41436L8.00008 7.41436ZM14.7072 9.29304L11.4143 6.00015L8.58586 8.82858L11.8788 12.1215L14.7072 9.29304ZM13.293 7.87883L11.8788 9.29304L14.7072 12.1215L16.1214 10.7073L13.293 7.87883ZM8.29297 5.70726L13.293 10.7073L16.1214 7.87883L11.1214 2.87883L8.29297 5.70726Z"
                          fill="white" mask="url(#path-1-outside-1_5860_3041)" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="ct_fs_14 mb-1">
                    Congratulations! <br /> You reached
                    <span className="ct_fw_600"> Level 26 Broker.</span>
                  </h4>
                  <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">8 hours ago</p>
                </div>
              </div>
              <div className="d-flex gap-3 py-3 ct_border_btm px-15">
                <div className="ct_ct_friends_img">
                  <div className="position-relative">
                    <img src={notirfication_profile} alt="img" />
                    <div className="ct_lavel_badge">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                        <mask id="path-1-outside-1_5860_4901" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="20"
                          fill="black">
                          <rect fill="white" width="16" height="20" />
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M7 2H9V3.06465C10.339 3.27563 11.5618 3.99431 12.3983 5.0939L10.8066 6.30484C10.1526 5.4453 9.11955 4.95898 8.0395 5.00272C8.02602 5.00327 8.01252 5.00354 7.99903 5.00354C7.09079 5.00354 6.30633 5.28077 5.77154 5.68151C5.23709 6.08199 5 6.55889 5 7.00177C5 7.44519 5.23715 7.92262 5.77128 8.32335C6.30575 8.72434 7.09001 9.00194 7.99903 9.00194C9.29861 9.00194 10.514 9.39518 11.4272 10.0789C12.3407 10.7629 13 11.7846 13 12.9982C13 14.2117 12.3409 15.2338 11.4276 15.9182C10.7538 16.4232 9.91545 16.77 9 16.9171V18H7V16.9357C5.66024 16.7251 4.4367 16.0062 3.59977 14.9061L5.1915 13.6952C5.84542 14.5547 6.87851 15.041 7.95856 14.9973C7.97204 14.9967 7.98554 14.9965 7.99903 14.9965C8.90808 14.9965 9.69304 14.7188 10.2282 14.3178C10.7631 13.9169 11 13.4399 11 12.9982C11 12.5567 10.7633 12.0803 10.2285 11.6799C9.69347 11.2793 8.90842 11.0019 7.99903 11.0019C6.69908 11.0019 5.48382 10.608 4.57102 9.92316C3.65788 9.23807 3 8.21542 3 7.00177C3 5.78758 3.65891 4.76537 4.57222 4.081C5.24614 3.57601 6.08468 3.22945 7 3.08259V2Z" />
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M7 2H9V3.06465C10.339 3.27563 11.5618 3.99431 12.3983 5.0939L10.8066 6.30484C10.1526 5.4453 9.11955 4.95898 8.0395 5.00272C8.02602 5.00327 8.01252 5.00354 7.99903 5.00354C7.09079 5.00354 6.30633 5.28077 5.77154 5.68151C5.23709 6.08199 5 6.55889 5 7.00177C5 7.44519 5.23715 7.92262 5.77128 8.32335C6.30575 8.72434 7.09001 9.00194 7.99903 9.00194C9.29861 9.00194 10.514 9.39518 11.4272 10.0789C12.3407 10.7629 13 11.7846 13 12.9982C13 14.2117 12.3409 15.2338 11.4276 15.9182C10.7538 16.4232 9.91545 16.77 9 16.9171V18H7V16.9357C5.66024 16.7251 4.4367 16.0062 3.59977 14.9061L5.1915 13.6952C5.84542 14.5547 6.87851 15.041 7.95856 14.9973C7.97204 14.9967 7.98554 14.9965 7.99903 14.9965C8.90808 14.9965 9.69304 14.7188 10.2282 14.3178C10.7631 13.9169 11 13.4399 11 12.9982C11 12.5567 10.7633 12.0803 10.2285 11.6799C9.69347 11.2793 8.90842 11.0019 7.99903 11.0019C6.69908 11.0019 5.48382 10.608 4.57102 9.92316C3.65788 9.23807 3 8.21542 3 7.00177C3 5.78758 3.65891 4.76537 4.57222 4.081C5.24614 3.57601 6.08468 3.22945 7 3.08259V2Z"
                          fill="#FFA800" />
                        <path
                          d="M9 2H11V0H9V2ZM7 2V0H5V2H7ZM9 3.06465H7V4.77421L8.68872 5.04028L9 3.06465ZM12.3983 5.0939L13.6092 6.68564L15.201 5.4747L13.99 3.88296L12.3983 5.0939ZM10.8066 6.30484L9.21482 7.51578L10.4258 9.10752L12.0175 7.89658L10.8066 6.30484ZM8.0395 5.00272L8.12042 7.00108L8.12044 7.00108L8.0395 5.00272ZM5.77154 5.68151L6.97085 7.28203H6.97085L5.77154 5.68151ZM5.77128 8.32335L6.97154 6.72354L5.77128 8.32335ZM11.4272 10.0789L10.2285 11.6799H10.2285L11.4272 10.0789ZM11.4276 15.9182L10.2282 14.3178L10.2282 14.3178L11.4276 15.9182ZM9 16.9171L8.68262 14.9425L7 15.2129V16.9171H9ZM9 18V20H11V18H9ZM7 18H5V20H7V18ZM7 16.9357H9V15.2255L7.31055 14.9599L7 16.9357ZM3.59977 14.9061L2.38883 13.3144L0.797092 14.5253L2.00803 16.117L3.59977 14.9061ZM5.1915 13.6952L6.78324 12.4842L5.5723 10.8925L3.98056 12.1034L5.1915 13.6952ZM7.95856 14.9973L8.0395 16.9956L8.03955 16.9956L7.95856 14.9973ZM10.2282 14.3178L11.4276 15.9182L11.4276 15.9182L10.2282 14.3178ZM10.2285 11.6799L9.02981 13.2809H9.02981L10.2285 11.6799ZM4.57102 9.92316L5.77128 8.32335L5.77128 8.32335L4.57102 9.92316ZM4.57222 4.081L3.37291 2.48048L3.37291 2.48048L4.57222 4.081ZM7 3.08259L7.31683 5.05734L9 4.78729V3.08259H7ZM9 0H7V4H9V0ZM11 3.06465V2H7V3.06465H11ZM13.99 3.88296C12.838 2.36863 11.1544 1.37942 9.31128 1.08902L8.68872 5.04028C9.52361 5.17183 10.2855 5.61999 10.8066 6.30484L13.99 3.88296ZM12.0175 7.89658L13.6092 6.68564L11.1874 3.50217L9.59562 4.71311L12.0175 7.89658ZM8.12044 7.00108C8.54812 6.98376 8.95661 7.17638 9.21482 7.51578L12.3983 5.0939C11.3487 3.71422 9.69098 2.93419 7.95856 3.00436L8.12044 7.00108ZM7.99903 7.00354C8.03952 7.00354 8.07999 7.00272 8.12042 7.00108L7.95858 3.00436C7.97204 3.00381 7.98553 3.00354 7.99903 3.00354V7.00354ZM6.97085 7.28203C7.12782 7.1644 7.4818 7.00354 7.99903 7.00354V3.00354C6.69979 3.00354 5.48485 3.39714 4.57222 4.081L6.97085 7.28203ZM7 7.00177C7 7.14489 6.96018 7.24982 6.92945 7.30458C6.90062 7.35594 6.894 7.33961 6.97085 7.28203L4.57222 4.081C3.65261 4.77009 3 5.79405 3 7.00177H7ZM6.97154 6.72354C6.89489 6.66604 6.90135 6.64963 6.92995 6.70064C6.96042 6.75499 7 6.85933 7 7.00177H3C3 8.20899 3.65163 9.23338 4.57102 9.92316L6.97154 6.72354ZM7.99903 7.00194C7.48141 7.00194 7.12801 6.84094 6.97154 6.72354L4.57102 9.92316C5.48349 10.6077 6.69862 11.0019 7.99903 11.0019V7.00194ZM12.6259 8.47796C11.3344 7.51094 9.68852 7.00194 7.99903 7.00194V11.0019C8.90871 11.0019 9.69368 11.2794 10.2285 11.6799L12.6259 8.47796ZM15 12.9982C15 11.0095 13.9152 9.44325 12.6259 8.47796L10.2285 11.6799C10.7662 12.0825 11 12.5597 11 12.9982H15ZM12.627 17.5187C13.9157 16.5529 15 14.9865 15 12.9982H11C11 13.437 10.766 13.9147 10.2282 14.3178L12.627 17.5187ZM9.31738 18.8918C10.524 18.6978 11.6715 18.2347 12.627 17.5187L10.2282 14.3178C9.83617 14.6116 9.3069 14.8421 8.68262 14.9425L9.31738 18.8918ZM7 16.9171V18H11V16.9171H7ZM9 16H7V20H9V16ZM9 18V16.9357H5V18H9ZM2.00803 16.117C3.16064 17.6321 4.8453 18.6215 6.68945 18.9114L7.31055 14.9599C6.47518 14.8286 5.71277 14.3803 5.1915 13.6952L2.00803 16.117ZM3.98056 12.1034L2.38883 13.3144L4.81071 16.4978L6.40244 15.2869L3.98056 12.1034ZM7.87762 12.9989C7.44994 13.0162 7.04145 12.8236 6.78324 12.4842L3.59977 14.9061C4.64939 16.2858 6.30708 17.0658 8.0395 16.9956L7.87762 12.9989ZM7.99903 12.9965C7.95859 12.9965 7.91809 12.9973 7.87757 12.9989L8.03955 16.9956C8.026 16.9962 8.01249 16.9965 7.99903 16.9965V12.9965ZM9.02878 12.7173C8.87128 12.8354 8.51676 12.9965 7.99903 12.9965V16.9965C9.2994 16.9965 10.5148 16.6023 11.4276 15.9182L9.02878 12.7173ZM9 12.9982C9 12.854 9.04015 12.7487 9.07077 12.6942C9.09953 12.6429 9.10596 12.6595 9.02878 12.7173L11.4276 15.9182C12.3472 15.2291 13 14.2052 13 12.9982H9ZM9.02981 13.2809C9.10684 13.3385 9.1001 13.3548 9.07108 13.3032C9.04017 13.2481 9 13.1425 9 12.9982H13C13 11.7911 12.347 10.7676 11.4272 10.0789L9.02981 13.2809ZM7.99903 13.0019C8.51777 13.0019 8.87255 13.1631 9.02981 13.2809L11.4272 10.0789C10.5144 9.39543 9.29907 9.00194 7.99903 9.00194V13.0019ZM3.37077 11.523C4.66211 12.4918 6.30843 13.0019 7.99903 13.0019V9.00194C7.08972 9.00194 6.30554 8.72418 5.77128 8.32335L3.37077 11.523ZM1 7.00177C1 8.98856 2.08146 10.5557 3.37077 11.523L5.77128 8.32335C5.2343 7.92048 5 7.44228 5 7.00177H1ZM3.37291 2.48048C2.0836 3.4466 1 5.01333 1 7.00177H5C5 6.56183 5.23422 6.08414 5.77154 5.68151L3.37291 2.48048ZM6.68317 1.10785C5.4767 1.30142 4.32883 1.76418 3.37291 2.48048L5.77154 5.68151C6.16345 5.38783 6.69266 5.15748 7.31683 5.05734L6.68317 1.10785ZM5 2V3.08259H9V2H5Z"
                          fill="white" mask="url(#path-1-outside-1_5860_4901)" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="ct_fs_14 mb-1">
                    Congratulations, you earned <span className="ct_fw_600">$12.00</span> because one of your referrals won a
                    game.
                  </h4>
                  <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">2 hours ago</p>
                </div>
              </div>
              <div className="d-flex gap-3 py-3 ct_border_btm px-15">
                <div className="ct_ct_friends_img">
                  <div className="position-relative">
                    <img src={notirfication_profile} alt="img" />
                    <div className="ct_lavel_badge">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <mask id="path-1-outside-1_5860_11293" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18"
                          fill="black">
                          <rect fill="white" width="18" height="18" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 10V16H10V10H16V8H10V2H8V8H2V10H8Z" />
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 10V16H10V10H16V8H10V2H8V8H2V10H8Z"
                          fill="#7F57F6" />
                        <path
                          d="M8 16H6V18H8V16ZM8 10H10V8H8V10ZM10 16V18H12V16H10ZM10 10V8H8V10H10ZM16 10V12H18V10H16ZM16 8H18V6H16V8ZM10 8H8V10H10V8ZM10 2H12V0H10V2ZM8 2V0H6V2H8ZM8 8V10H10V8H8ZM2 8V6H0V8H2ZM2 10H0V12H2V10ZM10 16V10H6V16H10ZM10 14H8V18H10V14ZM8 10V16H12V10H8ZM16 8H10V12H16V8ZM14 8V10H18V8H14ZM10 10H16V6H10V10ZM8 2V8H12V2H8ZM8 4H10V0H8V4ZM10 8V2H6V8H10ZM2 10H8V6H2V10ZM4 10V8H0V10H4ZM8 8H2V12H8V8Z"
                          fill="white" mask="url(#path-1-outside-1_5860_11293)" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="ct_fs_14 mb-1">
                    <span className="ct_fw_600">John Barley </span> invited you to play <span className="ct_fw_600">Wallstreet
                      Deathmatch.</span>
                  </h4>
                  <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">1 day</p>
                </div>
              </div>
              <div className="d-flex gap-3 py-3 ct_border_btm px-15">
                <div className="ct_ct_friends_img">
                  <div className="position-relative">
                    <div className="ct_setting_icon_bg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M20 0V5.29897C20 9.31457 17.575 12.5919 14.2842 13.6443C13.5593 13.8761 12.7923 14 12 14C11.2077 14 10.4407 13.8761 9.7158 13.6443C6.42495 12.5919 4 9.31457 4 5.29897V0.000614906L20 0ZM7 3V5.29897C7 8.41711 9.11183 11 12 11C14.8882 11 17 8.41711 17 5.29897V3H7Z"
                          fill="#050505" />
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 13.8889C9.05486 13.8889 7 16.0233 7 19V21H17V19C17 16.0233 14.9451 13.8889 12 13.8889ZM4 18.952C4 14.2088 7.66797 11 12 11C16.332 11 20 14.2088 20 18.952V24H4V18.952Z"
                          fill="#050505" />
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M18.1126 22.4045C16.9142 19.8882 14.6255 19 12 19C9.37453 19 7.08805 19.8882 5.88965 22.4045"
                          fill="#050505" />
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M4.5354 21.7595C6.06795 18.5416 9.0253 17.5 12 17.5C14.9741 17.5 17.9341 18.5412 19.4668 21.7595C19.6882 22.2242 19.6557 22.77 19.3809 23.2052C19.1061 23.6405 18.6273 23.9045 18.1126 23.9045H5.88965C5.3749 23.9045 4.8961 23.6405 4.62129 23.2052C4.34649 22.77 4.31406 22.2242 4.5354 21.7595ZM9.51353 20.9045H14.4873C13.7763 20.6266 12.9449 20.5 12 20.5C11.0552 20.5 10.2242 20.6266 9.51353 20.9045Z"
                          fill="#050505" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="ct_fs_14 mb-1">

                    <span className="ct_fw_600">Walstreet Deathmatch </span> is ending within an hour.
                  </h4>
                  <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">2 day</p>
                </div>
              </div>
              <div className="d-flex gap-3 py-3 ct_border_btm px-15">
                <div className="ct_ct_friends_img">
                  <div className="position-relative">
                    <div className="ct_setting_icon_bg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M20 0V5.29897C20 9.31457 17.575 12.5919 14.2842 13.6443C13.5593 13.8761 12.7923 14 12 14C11.2077 14 10.4407 13.8761 9.7158 13.6443C6.42495 12.5919 4 9.31457 4 5.29897V0.000614906L20 0ZM7 3V5.29897C7 8.41711 9.11183 11 12 11C14.8882 11 17 8.41711 17 5.29897V3H7Z"
                          fill="#050505" />
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 13.8889C9.05486 13.8889 7 16.0233 7 19V21H17V19C17 16.0233 14.9451 13.8889 12 13.8889ZM4 18.952C4 14.2088 7.66797 11 12 11C16.332 11 20 14.2088 20 18.952V24H4V18.952Z"
                          fill="#050505" />
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M18.1126 22.4045C16.9142 19.8882 14.6255 19 12 19C9.37453 19 7.08805 19.8882 5.88965 22.4045"
                          fill="#050505" />
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M4.5354 21.7595C6.06795 18.5416 9.0253 17.5 12 17.5C14.9741 17.5 17.9341 18.5412 19.4668 21.7595C19.6882 22.2242 19.6557 22.77 19.3809 23.2052C19.1061 23.6405 18.6273 23.9045 18.1126 23.9045H5.88965C5.3749 23.9045 4.8961 23.6405 4.62129 23.2052C4.34649 22.77 4.31406 22.2242 4.5354 21.7595ZM9.51353 20.9045H14.4873C13.7763 20.6266 12.9449 20.5 12 20.5C11.0552 20.5 10.2242 20.6266 9.51353 20.9045Z"
                          fill="#050505" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="ct_fs_14 mb-1">
                    <span className="ct_fw_600">Walstreet Deathmatch </span> has ended and you lost. Good luck next time!
                  </h4>
                  <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">1 week ago</p>
                </div>
              </div>
              <div className="d-flex gap-3 py-3 ct_border_btm px-15">
                <div className="ct_ct_friends_img">
                  <div className="position-relative">
                    <div className="ct_setting_icon_bg ct_yellow_bg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M17.4747 12C16.4901 13.4037 15.0969 14.4202 13.5 14.8168V20H16C17.6569 20 19 21.3431 19 23H5C5 21.3431 6.34315 20 8 20H10.5V14.8168C8.90308 14.4202 7.50991 13.4037 6.52527 12H4.99906C3.3422 12 2 10.6569 2 9V3H5V1H19V3H22V9C22 10.6569 20.6578 12 19.0009 12H17.4747ZM4 8.33333V5H6V10C4 10 4 8.33333 4 8.33333ZM20 8.33333V5H18V10C20 10 20 8.33333 20 8.33333Z"
                          fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="ct_fs_14 mb-1">

                    Congratulations, you won<span className="ct_fw_600">Walstreet Deathmatch </span>and <span
                      className="ct_green_text ct_fw_700">$260.00</span> were added to your account.
                  </h4>
                  <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">1 week ago</p>
                </div>
              </div>
            </div>
            <div className="ct_dark_grey_bg_clr">
              <h4 className="py-12 ct_border_top ct_border_btm_e1e1e1 px-15 ct_fs_11 ct_fw_700">
                PREVIOUSLY VIEWED
              </h4>
              <div className="d-flex gap-3 py-3 ct_border_btm_e1e1e1 px-15">
                <div className="ct_ct_friends_img">
                  <div className="position-relative">
                    <img src={notirfication_profile} alt="img" />
                    <div className="ct_lavel_badge">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <mask id="path-1-outside-1_5860_11293" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18"
                          fill="black">
                          <rect fill="white" width="18" height="18"></rect>
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 10V16H10V10H16V8H10V2H8V8H2V10H8Z"></path>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 10V16H10V10H16V8H10V2H8V8H2V10H8Z"
                          fill="#7F57F6"></path>
                        <path
                          d="M8 16H6V18H8V16ZM8 10H10V8H8V10ZM10 16V18H12V16H10ZM10 10V8H8V10H10ZM16 10V12H18V10H16ZM16 8H18V6H16V8ZM10 8H8V10H10V8ZM10 2H12V0H10V2ZM8 2V0H6V2H8ZM8 8V10H10V8H8ZM2 8V6H0V8H2ZM2 10H0V12H2V10ZM10 16V10H6V16H10ZM10 14H8V18H10V14ZM8 10V16H12V10H8ZM16 8H10V12H16V8ZM14 8V10H18V8H14ZM10 10H16V6H10V10ZM8 2V8H12V2H8ZM8 4H10V0H8V4ZM10 8V2H6V8H10ZM2 10H8V6H2V10ZM4 10V8H0V10H4ZM8 8H2V12H8V8Z"
                          fill="white" mask="url(#path-1-outside-1_5860_11293)"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="ct_fs_14 mb-1">
                    <span className="ct_fw_600">John Barley </span> invited you to play <span className="ct_fw_600">Wallstreet
                      Deathmatch.</span>
                  </h4>
                  <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">1 day</p>
                </div>
              </div>
              <div className="d-flex gap-3 py-3 ct_border_btm_e1e1e1 px-15">
                <div className="ct_ct_friends_img">
                  <div className="position-relative">
                    <div className="ct_setting_icon_bg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M20 0V5.29897C20 9.31457 17.575 12.5919 14.2842 13.6443C13.5593 13.8761 12.7923 14 12 14C11.2077 14 10.4407 13.8761 9.7158 13.6443C6.42495 12.5919 4 9.31457 4 5.29897V0.000614906L20 0ZM7 3V5.29897C7 8.41711 9.11183 11 12 11C14.8882 11 17 8.41711 17 5.29897V3H7Z"
                          fill="#050505"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 13.8889C9.05486 13.8889 7 16.0233 7 19V21H17V19C17 16.0233 14.9451 13.8889 12 13.8889ZM4 18.952C4 14.2088 7.66797 11 12 11C16.332 11 20 14.2088 20 18.952V24H4V18.952Z"
                          fill="#050505"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M18.1126 22.4045C16.9142 19.8882 14.6255 19 12 19C9.37453 19 7.08805 19.8882 5.88965 22.4045"
                          fill="#050505"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M4.5354 21.7595C6.06795 18.5416 9.0253 17.5 12 17.5C14.9741 17.5 17.9341 18.5412 19.4668 21.7595C19.6882 22.2242 19.6557 22.77 19.3809 23.2052C19.1061 23.6405 18.6273 23.9045 18.1126 23.9045H5.88965C5.3749 23.9045 4.8961 23.6405 4.62129 23.2052C4.34649 22.77 4.31406 22.2242 4.5354 21.7595ZM9.51353 20.9045H14.4873C13.7763 20.6266 12.9449 20.5 12 20.5C11.0552 20.5 10.2242 20.6266 9.51353 20.9045Z"
                          fill="#050505"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="ct_fs_14 mb-1">

                    <span className="ct_fw_600">Walstreet Deathmatch </span> is ending within an hour.
                  </h4>
                  <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">2 day</p>
                </div>
              </div>
              <div className="d-flex gap-3 py-3 ct_border_btm_e1e1e1 px-15">
                <div className="ct_ct_friends_img">
                  <div className="position-relative">
                    <div className="ct_setting_icon_bg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M20 0V5.29897C20 9.31457 17.575 12.5919 14.2842 13.6443C13.5593 13.8761 12.7923 14 12 14C11.2077 14 10.4407 13.8761 9.7158 13.6443C6.42495 12.5919 4 9.31457 4 5.29897V0.000614906L20 0ZM7 3V5.29897C7 8.41711 9.11183 11 12 11C14.8882 11 17 8.41711 17 5.29897V3H7Z"
                          fill="#050505"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 13.8889C9.05486 13.8889 7 16.0233 7 19V21H17V19C17 16.0233 14.9451 13.8889 12 13.8889ZM4 18.952C4 14.2088 7.66797 11 12 11C16.332 11 20 14.2088 20 18.952V24H4V18.952Z"
                          fill="#050505"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M18.1126 22.4045C16.9142 19.8882 14.6255 19 12 19C9.37453 19 7.08805 19.8882 5.88965 22.4045"
                          fill="#050505"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M4.5354 21.7595C6.06795 18.5416 9.0253 17.5 12 17.5C14.9741 17.5 17.9341 18.5412 19.4668 21.7595C19.6882 22.2242 19.6557 22.77 19.3809 23.2052C19.1061 23.6405 18.6273 23.9045 18.1126 23.9045H5.88965C5.3749 23.9045 4.8961 23.6405 4.62129 23.2052C4.34649 22.77 4.31406 22.2242 4.5354 21.7595ZM9.51353 20.9045H14.4873C13.7763 20.6266 12.9449 20.5 12 20.5C11.0552 20.5 10.2242 20.6266 9.51353 20.9045Z"
                          fill="#050505"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="ct_fs_14 mb-1">

                    <span className="ct_fw_600">Walstreet Deathmatch </span> is ending within an hour.
                  </h4>
                  <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">2 day</p>
                </div>
              </div>
              <div className="d-flex gap-3 py-3 ct_border_btm_e1e1e1 px-15">
                <div className="ct_ct_friends_img">
                  <div className="position-relative">
                    <div className="ct_setting_icon_bg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M20 0V5.29897C20 9.31457 17.575 12.5919 14.2842 13.6443C13.5593 13.8761 12.7923 14 12 14C11.2077 14 10.4407 13.8761 9.7158 13.6443C6.42495 12.5919 4 9.31457 4 5.29897V0.000614906L20 0ZM7 3V5.29897C7 8.41711 9.11183 11 12 11C14.8882 11 17 8.41711 17 5.29897V3H7Z"
                          fill="#050505"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 13.8889C9.05486 13.8889 7 16.0233 7 19V21H17V19C17 16.0233 14.9451 13.8889 12 13.8889ZM4 18.952C4 14.2088 7.66797 11 12 11C16.332 11 20 14.2088 20 18.952V24H4V18.952Z"
                          fill="#050505"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M18.1126 22.4045C16.9142 19.8882 14.6255 19 12 19C9.37453 19 7.08805 19.8882 5.88965 22.4045"
                          fill="#050505"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M4.5354 21.7595C6.06795 18.5416 9.0253 17.5 12 17.5C14.9741 17.5 17.9341 18.5412 19.4668 21.7595C19.6882 22.2242 19.6557 22.77 19.3809 23.2052C19.1061 23.6405 18.6273 23.9045 18.1126 23.9045H5.88965C5.3749 23.9045 4.8961 23.6405 4.62129 23.2052C4.34649 22.77 4.31406 22.2242 4.5354 21.7595ZM9.51353 20.9045H14.4873C13.7763 20.6266 12.9449 20.5 12 20.5C11.0552 20.5 10.2242 20.6266 9.51353 20.9045Z"
                          fill="#050505"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="ct_fs_14 mb-1">

                    <span className="ct_fw_600">Walstreet Deathmatch </span> is ending within an hour.
                  </h4>
                  <p className="ct_7C7D7E_text_clr ct_fs_13 mb-0">2 day</p>
                </div>
              </div>

            </div>
          </div>
          {/* empty page content s */}

          {/* <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_css">
                            <div className="w-100">
                                <div className="text-center mb-12">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M36 69C54.2254 69 69 54.2254 69 36C69 17.7746 54.2254 3 36 3C17.7746 3 3 17.7746 3 36C3 54.2254 17.7746 69 36 69ZM36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z" fill="#D8D8D8"/>
  <path d="M30 50H42C42 52.7614 39.3137 55 36 55C32.6863 55 30 52.7614 30 50Z" fill="#D8D8D8"/>
  <path d="M46.5 37V37.4542L46.7519 37.8321L50.5 43.4542V49.5H21.5V43.4542L25.2481 37.8321L25.5 37.4542V37V30.8854C25.5 29.0097 25.6347 27.3135 26.2395 25.8091C27.4751 22.736 30.2045 18.5 36 18.5C41.7955 18.5 44.5249 22.736 45.7605 25.8091C46.3653 27.3135 46.5 29.0097 46.5 30.8854V37Z" stroke="#D8D8D8" stroke-width="3"/>
</svg>
                                </div>
                                <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">You don’t have any notifications.
at the moment.</p>
                            </div>
                        </div> */}

          {/* empty content E */}

        </div>
        {/* Clear all notifications?l S */}
        <div className="modal fade" id="clear_notification" tabindex="-1" aria-labelledby="join_game_modalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body py-24 px-3 pb-0">
                <div className="w-100">
                  <div className="text-center pb-15">
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                      <path opacity="0.1" fillRule="evenodd" clipRule="evenodd"
                        d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z"
                        fill="#54A3FF" />
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M69 36C69 54.2254 54.2254 69 36 69C17.7746 69 3 54.2254 3 36C3 17.7746 17.7746 3 36 3C54.2254 3 69 17.7746 69 36ZM72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36ZM45.7544 26.5174C44.6629 21.6943 40.2058 18.51 35.4297 19.0627C30.6498 19.6158 27.0009 24.0444 27 29L24 28.9994C24.0012 22.5635 28.7496 16.8156 35.0848 16.0825C41.4238 15.349 47.2598 19.5777 48.6804 25.8552C50.0996 32.1265 46.6764 38.5117 40.6737 40.6728C39.6458 41.0429 38.9881 41.4139 38.5859 41.8299C38.2392 42.1886 37.9987 42.6648 37.9992 43.4995V50.0002H34.9992V43.501C34.9985 41.9617 35.4921 40.7137 36.4292 39.7446C37.3109 38.8327 38.487 38.2716 39.6574 37.8502C44.2016 36.2142 46.8473 31.3467 45.7544 26.5174ZM35 53H38V56H35V53Z"
                        fill="#1464F4" />
                    </svg>
                  </div>
                  <h4 className="ct_fs_18 text-center ct_fw_700 mb-0">Clear all notifications?</h4>
                  <p className="ct_grey_text mt-2 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">
                    This is an irreversible action, you will not be able to recover your notifications.
                  </p>
                </div>
              </div>
              <div className="modal-footer border-0 d-flex align-items-center gap-3 ct_flex_wrap_none pt-0">
                <button type='button' className="ct_button_blue ct_light_blue_btn ">CONFIRM</button>
                <button type='button' className="ct_button_blue ct_transparent_btn ct_blue_text"
                  data-bs-dismiss="modal">CANCEL</button>

              </div>
            </div>
          </div>
        </div>
        {/* Clear all notifications? S */}

        <BottomNavigation data="notifications" />
      </div>
    </>
  )
}

export default NotificationsMain