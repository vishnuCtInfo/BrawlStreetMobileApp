import React from 'react'
import back_btn from "../img/back_btn.png"
import { useNavigate } from 'react-router-dom'
function HowWorks() {
  const navigate = useNavigate()
  
  return (
    <>
      <div className="ct_mobile_width">
        <div className=" ">
          <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
            <div onClick={() => navigate(-1)} className="ct_mob_head pt-0">
              <img src={back_btn} alt="img" />
            </div>
            <h4
              className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600"
            >
              HOW REFERRALS WORK
            </h4>
          </div>
          <div className="ct_white_bg pt-28 ">
            <div className="pb-30 px-15">
              <div className="d-flex gap-3 pt-4">
                <div className="ct_setting_icon_bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.5 18.5L8.5 1.5L11.5 1.5L11.5 18.5L8.5 18.5Z"
                      fill="#050505"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.5 8.5L18.5 8.5V11.5L1.5 11.5V8.5Z"
                      fill="#050505"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 ct_fs_14 ct_black_clr ct_fw_700">
                    Invite friends
                  </h4>
                  <p className="mb-0 ct_fs_13">
                    Each player has the ability to invite friends and contacts
                    from their contact lists to join Brawl Street and thereby
                    become an affiliate of Brawl Street.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 pt-4">
                <div className="ct_setting_icon_bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17 4C17 5.65685 15.6569 7 14 7C12.3431 7 11 5.65685 11 4C11 2.34315 12.3431 1 14 1C15.6569 1 17 2.34315 17 4Z"
                      fill="#050505"
                    />
                    <path
                      d="M17 15C17 16.6569 15.6569 18 14 18C12.3431 18 11 16.6569 11 15C11 13.3431 12.3431 12 14 12C15.6569 12 17 13.3431 17 15Z"
                      fill="#050505"
                    />
                    <path
                      d="M7 10C7 11.6569 5.65685 13 4 13C2.34315 13 1 11.6569 1 10C1 8.34315 2.34315 7 4 7C5.65685 7 7 8.34315 7 10Z"
                      fill="#050505"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.35731 8.92853L13.3573 2.92853L14.6436 5.07227L4.64355 11.0723L3.35731 8.92853Z"
                      fill="#050505"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.55945 8.88229L14.5594 13.8823L13.4414 16.1184L3.44142 11.1184L4.55945 8.88229Z"
                      fill="#050505"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 ct_fs_14 ct_black_clr ct_fw_700">
                    Referral code
                  </h4>
                  <p className="mb-0 ct_fs_13">
                    A referral code will we sent from the affiliate to the new
                    player which will then link that new player to the affiliate
                    which signed them up.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 pt-4">
                <div className="ct_setting_icon_bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z"
                      fill="#050505"
                    />
                    <path
                      d="M17 14C17 15.6569 15.6569 17 14 17C12.3431 17 11 15.6569 11 14C11 12.3431 12.3431 11 14 11C15.6569 11 17 12.3431 17 14Z"
                      fill="#050505"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.884 4.883L4.88398 16.883L3.11621 15.1152L15.1162 3.11524L16.884 4.883Z"
                      fill="#050505"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 ct_fs_14 ct_black_clr ct_fw_700">
                    Rules of commision
                  </h4>
                  <ul className='ps-0'>
                    <li className="pb-20">
                      <p className="mb-0 ct_fs_13">
                        1. Affiliate will receive a 1.5% commission off all future
                        winnings of the player which will paid out of Brawl Street
                        profits.
                      </p>
                    </li>
                    <li className="pb-20">
                      <p className="mb-0 ct_fs_13">
                        2. Affiliate will continue to receive commission as long
                        as the recruited player continues to play.
                      </p>
                    </li>
                    <li>
                      <p className="mb-0 ct_fs_13">
                        3. If recruited player terminates account, then the
                        affiliate commission ends immediately.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex gap-3 pt-4">
                <div className="ct_setting_icon_bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.8 1L11 7H16L7.2 19L9.5 10H5L9.4 1H13.8Z"
                      fill="#050505"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 ct_fs_14 ct_black_clr ct_fw_700">
                    Active account
                  </h4>
                  <p className="mb-0 ct_fs_13">
                    Affiliate needs to play Brawl Street at least once in 3 months
                    to keep account active.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 pt-4">
                <div className="ct_setting_icon_bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path d="M8.5 1H11.5V13H8.5V1Z" fill="#050505" />
                    <path d="M8.5 15H11.5V18H8.5V15Z" fill="#050505" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 ct_fs_14 ct_black_clr ct_fw_700">
                    Inactive account
                  </h4>
                  <p className="mb-0 ct_fs_13">
                    If they do not play for 3 months, then account goes inactive
                    at which time affiliate commissions will continue to
                    accumulate for up to another 3 months. However, the referral
                    fees will not be paid out while account is inactive
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 pt-4">
                <div className="ct_setting_icon_bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.3537 5.80256C11.7543 4.88426 10.8848 4.46423 10.0736 4.50253L10.0383 4.50419H10.0029C8.42499 4.50419 7.5 5.58162 7.5 6.50216C7.5 7.42387 8.42632 8.50239 10.0029 8.50239C12.8457 8.50239 15.5 10.5564 15.5 13.4981C15.5 16.4298 12.8591 18.4795 10.0296 18.496C8.04051 18.575 6.23262 17.521 5.1327 15.8383L7.64381 14.1969C8.2439 15.1149 9.11371 15.5353 9.92564 15.4977L9.96038 15.4961H9.99515C11.5748 15.4961 12.5 14.4165 12.5 13.4981C12.5 12.5778 11.5785 11.5024 10.0029 11.5024C7.16116 11.5024 4.5 9.44699 4.5 6.50216C4.5 3.56828 7.14064 1.52108 9.96789 1.5043C11.9579 1.42385 13.7667 2.4787 14.8659 4.16281L12.3537 5.80256Z"
                      fill="#050505"
                    />
                    <path d="M8.5 17H11.5V20H8.5V17Z" fill="#050505" />
                    <path d="M8.5 0H11.5V3H8.5V0Z" fill="#050505" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 ct_fs_14 ct_black_clr ct_fw_700">
                    Accumulated referral commisions
                  </h4>
                  <p className="mb-0 ct_fs_13">
                    Affiliate will receive notifications stating, play a game to
                    keep account active and receive accumulated referral
                    commissions.
                  </p>
                </div>
              </div>
            </div>

            <div className="ct_dark_grey_bg_clr pt-30 ct_pb_100">
              <div className="px-15">
                <h4 className="mb-1 ct_fs_14 ct_fw_700 ct_black_clr">Example:</h4>
                <p className="mb-0 ct_fs_13 ct_black_clr">
                  10 players in a 50/50 game with a $10 entry fee. (3 of the
                  players are linked to an affiliate)
                </p>

                <div className="  pt-20">
                  <h4 className="mb-0 ct_fs_14 ct_fw_700 ct_black_clr py-2  ct_border_top ct_border_btm_e1e1e1">$100 collected</h4>
                </div>
                <table className="ct_how_work_table pt-2">
                  <thead>
                    <tr>
                      <th className="ct_fs_14 ct_fw_700 mb-1 ct_black_clr w-50">Players</th>
                      <th className="ct_fs_14 ct_fw_700 mb-1 ct_black_clr w-50">Brawl Street</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="ct_fs_13 ct_black_clr ct_fw_500 pb-12 w-50">Pot  $90</td>
                      <td className="ct_fs_13 ct_black_clr ct_fw_500 pb-12 w-50">Brawl Street $10</td>
                    </tr>
                    <tr>
                      <td className="ct_fs_13 ct_black_clr ct_fw_500 pb-12 w-50">5 winners split $90</td>
                      <td className="ct_fs_13 ct_black_clr ct_fw_500 pb-12 w-50">Affiliate commission 1.5% of $18 payout.</td>
                    </tr>
                    <tr>
                      <td className="ct_fs_13 ct_black_clr ct_fw_500 pb-12 w-50">Each winner paid $18</td>
                      <td className="ct_fs_13 ct_black_clr ct_fw_500 pb-12 w-50">
                        Affiliate receives $0.27 for each of the players linked to for a total in this case of $0.81 <br />Brawl Street keeps (10-0.81) $9.19.
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <div className="d-flex pt-12">
                <div className="w-50">
                    <h4 className="ct_fs_14 ct_fw_700 mb-1 ct_black_clr">Players</h4>
                    <ul>
                        <li className="ct_fs_13 ct_black_clr ct_fw_500 mb-12">Pot  $90</li>
                        <li className="ct_fs_13 ct_black_clr ct_fw_500 mb-12">5 winners split $90</li>
                        <li className="ct_fs_13 ct_black_clr ct_fw_500 ">Each winner paid $18</li>
                    </ul>
                </div>
                <div className="w-50">
                    <h4 className="ct_fs_14 ct_fw_700 mb-1 ct_black_clr">Brawl Street</h4>
                    <ul>
                        <li className="ct_fs_13 ct_black_clr ct_fw_500 mb-12">Brawl Street $10</li>
                        <li className="ct_fs_13 ct_black_clr ct_fw_500 mb-12">Affiliate commission 1.5% of $18 payout.</li>
                        <li className="ct_fs_13 ct_black_clr ct_fw_500">Affiliate receives $0.27 for each of the players linked to for a total in this case of $0.81 <br>

                            Brawl Street keeps (10-0.81) $9.19.</li>
                    </ul>
                </div>
                 
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default HowWorks