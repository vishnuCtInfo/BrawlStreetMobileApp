import React from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNavigation from './BottomNavigation'

function Wallet() {
    const navigate = useNavigate()
    const HandleSetting = () => {
        navigate("/setting")
    }
    const HandleAddFunds = () => {
        navigate("/add/funds")
    }
    const HandleWithdrawl = () => {
        navigate("/withdrawl")
    }
    // const HandleMygames = () => {
    //     navigate("/mygames")
    // }
    // const HandleOpenGames = () => {
    //     navigate("/open/games")
    // }
    // const HandleWatchlist = () => {
    //     navigate("/watchlist")
    // }
    // const HandleNotificationsMain = () => {
    //     navigate("/notification/main")
    // }
    // const HandleNavigationMore = () => {
    //     navigate("/navigation/more")
    // }

    
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">

                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">MY WALLET</h4>
                        <a onClick={() => HandleSetting()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11 0H14V3.13193C15.2307 3.35106 16.3697 3.83503 17.3561 4.52282L19.5713 2.30762L21.6926 4.42894L19.4774 6.64418C20.1651 7.63047 20.649 8.76942 20.8681 10H24V13H20.8681C20.649 14.2306 20.165 15.3696 19.4773 16.3559L21.6924 18.571L19.5711 20.6924L17.356 18.4773C16.3696 19.165 15.2306 19.649 14 19.8681V23H11V19.8681C9.76942 19.649 8.63047 19.1651 7.64418 18.4774L5.42915 20.6924L3.30783 18.5711L5.52282 16.3561C4.83503 15.3697 4.35106 14.2307 4.13193 13H1V10H4.13193C4.35105 8.76936 4.83499 7.63036 5.52273 6.64403L3.30761 4.42891L5.42893 2.30759L7.64406 4.52272C8.63038 3.83499 9.76937 3.35105 11 3.13193V0ZM18 11.5C18 14.5376 15.5376 17 12.5 17C9.46243 17 7 14.5376 7 11.5C7 8.46243 9.46243 6 12.5 6C15.5376 6 18 8.46243 18 11.5ZM12.5 14C13.8807 14 15 12.8807 15 11.5C15 10.1193 13.8807 9 12.5 9C11.1193 9 10 10.1193 10 11.5C10 12.8807 11.1193 14 12.5 14Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                    <div className="ct_portfolio_main px-15 mb-2 pt-28">
                        <div className="ct_light_black_bg">
                            <h3 className="mb-2 ct_green_text ct_fw_700 text-center ct_fs_29">$28,640.80</h3>
                            <p className="mb-0 text-center text-white ct_fs_11">BALANCE</p>

                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between px-15 gap-2">
                        <div className="ct_portfolio_main  w-50 mb-2">
                            <div className="ct_light_black_bg">
                                <h3 className="mb-2 text-white ct_fs_13 ct_fw_700 ">$280.53</h3>
                                <p className="mb-0 text-white ct_fs_11 ct_letter_space_0">DEPOSITS</p>

                            </div>
                        </div>
                        <div className="ct_portfolio_main  w-50 mb-2">
                            <div className="ct_light_black_bg">
                                <h3 className="mb-2 text-white ct_fs_13 ct_fw_700 ">$10,340.43</h3>
                                <p className="mb-0 text-white ct_fs_11 ct_letter_space_0">WITHDRAWS</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2 px-15  ">
                        <div className="ct_portfolio_main  w-50 mb-2">
                            <div className="ct_light_black_bg">
                                <h3 className="mb-2 text-white ct_fs_13 ct_fw_700 ">$60,485.48</h3>
                                <p className="mb-0 text-white ct_fs_11 ct_letter_space_0">REFERRALS EARNED</p>
                            </div>
                        </div>
                        <div className="ct_portfolio_main w-50 mb-2">
                            <div className="ct_light_black_bg">
                                <h3 className="mb-2 text-white ct_fs_13 ct_fw_700 ">$4,531.52</h3>
                                <p className="mb-0 text-white ct_fs_11 ct_letter_space_0">ENTRY FEES & WINNINGS</p>
                            </div>
                        </div>
                    </div>
                    <div className="ct_white_bg ct_pb_100 ">
                        <div className="">
                            <table className="table ct_winning_table mb-0">
                                <thead>
                                    <tr>
                                        <th className="ct_fs_12 ct_grey_text" colspan="2">TRANSACTION HISTORY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="ct_setting_icon_bg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z" fill="#050505" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z" fill="#050505" />
                                                    </svg>
                                                </div>
                                                <div className="">
                                                    <h4 className="ct_fs_14 ct_fw_700 mb-0">Added funds</h4>
                                                    <p className="mb-0 ct_fs_13">•••• 4321</p>
                                                </div>
                                            </div>

                                        </td>
                                        <td className="text-end">
                                            <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">+$150.00</h4>
                                            <p className="mb-0 ct_fs_13">10/11/2019</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="ct_setting_icon_bg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M17 10.5H7V13.5L17 13.5V10.5Z" fill="#050505" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z" fill="#050505" />
                                                    </svg>
                                                </div>
                                                <div className="">
                                                    <h4 className="ct_fs_14 ct_fw_700 mb-0">Withdrawl</h4>
                                                    <p className="mb-0 ct_fs_13">Paypal</p>
                                                </div>
                                            </div>

                                        </td>
                                        <td className="text-end">
                                            <h4 className="ct_fs_14 ct_fw_700 ct_red_text mb-0">-$80.00</h4>
                                            <p className="mb-0 ct_fs_13">10/01/2019</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="ct_setting_icon_bg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7ZM12 10C14.7614 10 17 7.76142 17 5C17 2.23858 14.7614 0 12 0C9.23858 0 7 2.23858 7 5C7 7.76142 9.23858 10 12 10Z" fill="#050505" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M5 19C6.10457 19 7 18.1046 7 17C7 15.8954 6.10457 15 5 15C3.89543 15 3 15.8954 3 17C3 18.1046 3.89543 19 5 19ZM5 22C7.76142 22 10 19.7614 10 17C10 14.2386 7.76142 12 5 12C2.23858 12 0 14.2386 0 17C0 19.7614 2.23858 22 5 22Z" fill="#050505" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19 19C20.1046 19 21 18.1046 21 17C21 15.8954 20.1046 15 19 15C17.8954 15 17 15.8954 17 17C17 18.1046 17.8954 19 19 19ZM19 22C21.7614 22 24 19.7614 24 17C24 14.2386 21.7614 12 19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22Z" fill="#050505" />
                                                        <path d="M8 3.83226C4.46819 5.37537 2 8.89953 2 13.0002C2 13.51 2.03815 14.0109 2.11175 14.5002L5 13.0002C5 10.2078 6.63505 7.79726 9 6.6738L8 3.83226Z" fill="#050505" />
                                                        <path d="M19 13.0002C19 10.2582 17.4235 7.88448 15.1275 6.73594L15.8204 3.75586C19.4478 5.25663 22 8.83036 22 13.0002C22 13.3377 21.9833 13.6713 21.9506 14.0002L19 13.0002Z" fill="#050505" />
                                                        <path d="M12 20.0002C13.635 20.0002 15.1391 19.4396 16.3306 18.5002L18.6146 20.5002C16.8517 22.0561 14.5361 23.0002 12 23.0002C9.51846 23.0002 7.24803 22.0963 5.5 20.5998L7.81628 18.6129C8.9834 19.4843 10.4315 20.0002 12 20.0002Z" fill="#050505" />
                                                    </svg>
                                                </div>
                                                <div className="">
                                                    <h4 className="ct_fs_14 ct_fw_700 mb-0">Referral fees</h4>
                                                    <p className="mb-0 ct_fs_13">Manhattan Deathmatch</p>
                                                </div>
                                            </div>

                                        </td>
                                        <td className="text-end">
                                            <h4 className="ct_fs_14 ct_fw_700 ct_red_text mb-0">-50.00</h4>
                                            <p className="mb-0 ct_fs_13">09/24/2019</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="ct_setting_icon_bg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z" fill="#050505" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z" fill="#050505" />
                                                    </svg>
                                                </div>
                                                <div className="">
                                                    <h4 className="ct_fs_14 ct_fw_700 mb-0">Added funds</h4>
                                                    <p className="mb-0 ct_fs_13">Paypal</p>
                                                </div>
                                            </div>

                                        </td>
                                        <td className="text-end">
                                            <h4 className="ct_fs_14 ct_fw_700 ct_green_text mb-0">+$150.00</h4>
                                            <p className="mb-0 ct_fs_13">09/22/2019 </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="ct_grey_bg_clr d-flex align-items-center gap-3">
                                <a onClick={() => HandleAddFunds()} className="ct_button_blue ct_light_blue_btn">ADD FUNDS </a>
                                <a onClick={() => HandleWithdrawl()} className="ct_button_blue ct_green_btn  ct_clear_all_bg">WITHDRAWL</a>

                            </div>
                        </div>
                    </div>

                    <BottomNavigation />


                </div>



            </div>
        </>
    )
}

export default Wallet