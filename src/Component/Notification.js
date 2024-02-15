import React from 'react'
import { useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"
function Notification() {
    const navigate = useNavigate()
    const HandleSetting = () => {
        navigate("/setting")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div>
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandleSetting()} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">NOTIFICATIONS</h4>
                    </div>
                    <div className="ct_white_bg pt-15  h-100 pt-15 mt-1">
                        <div>
                            <div className="d-flex align-items-center justify-content-between px-15 pb-12 mb-1">
                                <h4 className="mb-0 ct_fs_14 ct_fw_600">All notifications</h4>
                                <div className="flipswitch">
                                    <input id="fs" className="flipswitch-cb" name="flipswitch" type="checkbox" />
                                    <label htmlFor="fs" className="flipswitch-label">
                                        <div className="flipswitch-inner"></div>
                                        <div className="flipswitch-switch"></div>
                                    </label>
                                </div>
                            </div>
                            <table className="table ct_winning_table mb-0 px-15 ct_notification_table">
                                <thead>
                                    <tr>
                                        <th className="ct_fs_12 ct_grey_text">USERS</th>
                                        <th className="ct_fs_12 ct_grey_text">PUSH</th>
                                        <th className="text-end ct_fs_12 ct_grey_text">EMAIL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4 className="mb-0 ct_fs_16 ct_fw_500 ct_black_clr">Friend requests</h4>
                                            <p className="mb-0 ct_fs_13 ct_grey_text_2">When some sends you a friend request.</p>
                                        </td>
                                        <td>
                                            <div className="ct_active_notify">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 10L12.3889 7H5V19H17V11L14 10ZM2 4V22H20V10.5L15 9.5L13 4H2Z" fill="#D8D8D8" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM18 12C21.3137 12 24 9.31371 24 6C24 2.68629 21.3137 0 18 0C14.6863 0 12 2.68629 12 6C12 9.31371 14.6863 12 18 12Z" fill="#D8D8D8" />
                                                </svg>
                                            </div>
                                        </td>
                                        <td className="text-end">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20 6H4V18H20V6ZM1 3V21H23V3H1Z" fill="#D8D8D8" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75208 5.16811C2.21161 4.47882 3.14292 4.29256 3.83221 4.75208L12.0002 10.1974L20.1681 4.75208C20.8574 4.29256 21.7887 4.47882 22.2482 5.16811C22.7078 5.8574 22.5215 6.78871 21.8322 7.24823L12.0002 13.8029L2.16811 7.24823C1.47882 6.78871 1.29256 5.8574 1.75208 5.16811Z" fill="#D8D8D8" />
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4 className="mb-0 ct_fs_16 ct_fw_500">Friend request reply</h4>
                                            <p className="mb-0 ct_fs_13 ct_grey_text_2">When some accepts or denies your friend request.</p>
                                        </td>
                                        <td>
                                            <div className="ct_active_notify">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 10L12.3889 7H5V19H17V11L14 10ZM2 4V22H20V10.5L15 9.5L13 4H2Z" fill="#D8D8D8" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM18 12C21.3137 12 24 9.31371 24 6C24 2.68629 21.3137 0 18 0C14.6863 0 12 2.68629 12 6C12 9.31371 14.6863 12 18 12Z" fill="#D8D8D8" />
                                                </svg>
                                            </div>
                                        </td>
                                        <td className="text-end">
                                            <div className="ct_active_notify">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20 6H4V18H20V6ZM1 3V21H23V3H1Z" fill="#D8D8D8" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75208 5.16811C2.21161 4.47882 3.14292 4.29256 3.83221 4.75208L12.0002 10.1974L20.1681 4.75208C20.8574 4.29256 21.7887 4.47882 22.2482 5.16811C22.7078 5.8574 22.5215 6.78871 21.8322 7.24823L12.0002 13.8029L2.16811 7.24823C1.47882 6.78871 1.29256 5.8574 1.75208 5.16811Z" fill="#D8D8D8" />
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table ct_winning_table mb-0 px-15 ct_notification_table">
                                <thead>
                                    <tr>
                                        <th className="ct_fs_12 ct_grey_text">GAMES</th>
                                        <th className="ct_fs_12 ct_grey_text">PUSH</th>
                                        <th className="text-end ct_fs_12 ct_grey_text">EMAIL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4 className="mb-0 ct_fs_16 ct_fw_500  ct_black_clr">Game has ended</h4>
                                            <p className="mb-0 ct_fs_13 ct_grey_text_2">When a game your playing has ended.</p>
                                        </td>
                                        <td>
                                            <div className="ct_active_notify">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 10L12.3889 7H5V19H17V11L14 10ZM2 4V22H20V10.5L15 9.5L13 4H2Z" fill="#D8D8D8" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM18 12C21.3137 12 24 9.31371 24 6C24 2.68629 21.3137 0 18 0C14.6863 0 12 2.68629 12 6C12 9.31371 14.6863 12 18 12Z" fill="#D8D8D8" />
                                                </svg>
                                            </div>
                                        </td>
                                        <td className="text-end">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20 6H4V18H20V6ZM1 3V21H23V3H1Z" fill="#D8D8D8" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75208 5.16811C2.21161 4.47882 3.14292 4.29256 3.83221 4.75208L12.0002 10.1974L20.1681 4.75208C20.8574 4.29256 21.7887 4.47882 22.2482 5.16811C22.7078 5.8574 22.5215 6.78871 21.8322 7.24823L12.0002 13.8029L2.16811 7.24823C1.47882 6.78871 1.29256 5.8574 1.75208 5.16811Z" fill="#D8D8D8" />
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4 className="mb-0 ct_fs_16 ct_fw_500 ct_black_clr">Game invite</h4>
                                            <p className="mb-0 ct_fs_13 ct_grey_text_2">When someone invites you to join a game.</p>
                                        </td>
                                        <td>
                                            <div className="ct_active_notify">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 10L12.3889 7H5V19H17V11L14 10ZM2 4V22H20V10.5L15 9.5L13 4H2Z" fill="#D8D8D8" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM18 12C21.3137 12 24 9.31371 24 6C24 2.68629 21.3137 0 18 0C14.6863 0 12 2.68629 12 6C12 9.31371 14.6863 12 18 12Z" fill="#D8D8D8" />
                                                </svg>
                                            </div>
                                        </td>
                                        <td className="text-end">
                                            <div className="ct_active_notify">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20 6H4V18H20V6ZM1 3V21H23V3H1Z" fill="#D8D8D8" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75208 5.16811C2.21161 4.47882 3.14292 4.29256 3.83221 4.75208L12.0002 10.1974L20.1681 4.75208C20.8574 4.29256 21.7887 4.47882 22.2482 5.16811C22.7078 5.8574 22.5215 6.78871 21.8322 7.24823L12.0002 13.8029L2.16811 7.24823C1.47882 6.78871 1.29256 5.8574 1.75208 5.16811Z" fill="#D8D8D8" />
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4 className="mb-0 ct_fs_16 ct_fw_500">Game ending soon</h4>
                                            <p className="mb-0 ct_fs_13 ct_grey_text_2">When a game is about to end in less then 1 hour.</p>
                                        </td>
                                        <td>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 10L12.3889 7H5V19H17V11L14 10ZM2 4V22H20V10.5L15 9.5L13 4H2Z" fill="#D8D8D8" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM18 12C21.3137 12 24 9.31371 24 6C24 2.68629 21.3137 0 18 0C14.6863 0 12 2.68629 12 6C12 9.31371 14.6863 12 18 12Z" fill="#D8D8D8" />
                                                </svg>
                                            </div>
                                        </td>
                                        <td className="text-end">
                                            <div className="ct_active_notify">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20 6H4V18H20V6ZM1 3V21H23V3H1Z" fill="#D8D8D8" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75208 5.16811C2.21161 4.47882 3.14292 4.29256 3.83221 4.75208L12.0002 10.1974L20.1681 4.75208C20.8574 4.29256 21.7887 4.47882 22.2482 5.16811C22.7078 5.8574 22.5215 6.78871 21.8322 7.24823L12.0002 13.8029L2.16811 7.24823C1.47882 6.78871 1.29256 5.8574 1.75208 5.16811Z" fill="#D8D8D8" />
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table ct_winning_table mb-0 px-15 ct_notification_table">
                                <thead>
                                    <tr>
                                        <th className="ct_fs_12 ct_grey_text">TRANSACTIONS</th>
                                        <th className="ct_fs_12 ct_grey_text">PUSH</th>
                                        <th className="text-end ct_fs_12 ct_grey_text">EMAIL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4 className="mb-0 ct_fs_16 ct_fw_500">Limit orders</h4>
                                            <p className="mb-0 ct_fs_13 ct_grey_text_2">When a limit order has been executed.</p>
                                        </td>
                                        <td>
                                            <div className="ct_active_notify">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 10L12.3889 7H5V19H17V11L14 10ZM2 4V22H20V10.5L15 9.5L13 4H2Z" fill="#D8D8D8" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM18 12C21.3137 12 24 9.31371 24 6C24 2.68629 21.3137 0 18 0C14.6863 0 12 2.68629 12 6C12 9.31371 14.6863 12 18 12Z" fill="#D8D8D8" />
                                                </svg>
                                            </div>
                                        </td>
                                        <td className="text-end">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20 6H4V18H20V6ZM1 3V21H23V3H1Z" fill="#D8D8D8" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75208 5.16811C2.21161 4.47882 3.14292 4.29256 3.83221 4.75208L12.0002 10.1974L20.1681 4.75208C20.8574 4.29256 21.7887 4.47882 22.2482 5.16811C22.7078 5.8574 22.5215 6.78871 21.8322 7.24823L12.0002 13.8029L2.16811 7.24823C1.47882 6.78871 1.29256 5.8574 1.75208 5.16811Z" fill="#D8D8D8" />
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification