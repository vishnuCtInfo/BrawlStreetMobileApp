import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"
import BottomNavigation from './BottomNavigation'
import { IsAuthnaticated } from '../Utils/Auth'

function Referrals() {

    const navigate = useNavigate()
    const [refelCode,setRefelCode] = useState('');

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
    const HandleEmailInvite = () => {
        navigate("/email/invite",{refelCode})
    }
    const HandleViewReferrals = () => {
        navigate("/view/referrals")
    }
    useEffect(()=>{
        const code = IsAuthnaticated();
        if(code){
            setRefelCode(code?.referralCode);
        }else{
            navigate('/login')
        }
    },[navigate]);
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ">
                    <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                        <a onClick={() => HandleNavigationMore()} className="ct_mob_head pt-0">
                            <img src={back_btn} alt="img" />
                        </a>
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">REFERRALS</h4>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10.5 6H13.5V9H10.5V6Z" fill="white" />
                                <path d="M10.5 11H13.5V18H10.5V11Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between px-15 gap-2 pt-28 pb-30">
                        <div className="ct_portfolio_main  w-50 mb-2">
                            <div className="ct_light_black_bg py-22">
                                <h3 className="mb-2 ct_green_text ct_fw_700 text-center ct_fs_29">$462.80</h3>
                                <p className="mb-0 text-center text-white ct_fs_11">REFERRAL FEES</p>
                            </div>
                        </div>
                        <div className="ct_portfolio_main  w-50 mb-2">
                            <div className="ct_light_black_bg d-flex align-items-center gap-2 py-12 mb-2">
                                <h3 className="mb-0 text-white ct_fs_18 ct_fw_700 ">24</h3>
                                <p className="mb-0 text-white ct_fs_11 ct_letter_space_0">PENDING INVITES</p>
                            </div>
                            <div className="ct_light_black_bg d-flex align-items-center gap-2 py-12">
                                <h3 className="mb-0 text-white ct_fs_18 ct_fw_700 ">24</h3>
                                <p className="mb-0 text-white ct_fs_11 ct_letter_space_0">PENDING INVITES</p>
                            </div>
                        </div>
                    </div>
                    <div className="ct_white_bg pt-28 ct_pb_100">
                        <div className="px-15">
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Referral code</p>
                                <div className="position-relative">
                                    <input type="text" value={refelCode} className="ct_select_option form-control w-100 ct_text_indent" />
                                    <div className="ct_postion_left_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M8 7H11V11H8V7Z" fill="#050505" />
                                            <path d="M8 13H11V17H8V13Z" fill="#050505" />
                                            <path d="M3 6.00001V18L8 18V21L0 21V3L8 3.00003V6.00003L3 6.00001Z" fill="#050505" />
                                            <path d="M11 3.00004L24 3.00009V9.16171C24 9.16171 22 9.8293 22 12C22 14.1707 24 14.8291 24 14.8291V21.0001L11 21V18L21 18.0001V14.8291C21 14.8291 19.0141 14.1849 19 12C18.9859 9.81509 21 9.16171 21 9.16171V6.00008L11 6.00004V3.00004Z" fill="#050505" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-20">
                                <p className="mb-0 ct_fw_400 ct_fs_13 mb-1">Referral link</p>
                                <div className="position-relative">
                                    <input type="text" value="https://brawlstreet.com/signup?ref" className="ct_select_option form-control w-100 ct_text_indent" />
                                    <div className="ct_postion_left_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.50002 24.6211L0.87867 16.9998L5.43936 12.4391L7.56068 14.5604L5.12134 16.9998L8.50002 20.3785L14.8787 13.9998L13.4394 12.5604L15.5607 10.4391L19.1221 13.9997L8.50002 24.6211Z" fill="#050505" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.4999 0.378906L25.1212 8.00013L20.5605 12.5608L18.4392 10.4395L20.8785 8.00012L17.4999 4.62144L11.1212 11.0001L12.5605 12.4395L10.4392 14.5608L6.87793 11.0001L17.4999 0.378906Z" fill="#050505" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-20">
                                <p className="mb-0 ct_fs_14 text-center ct_black_clr">Share your referral link with your friends and earn 1.5% comission of all future winnings from all of your friends games.</p>
                            </div>
                            <div className="pb-4 ct_border_btm">
                                <div className="ct_social_links">
                                    <a onClick={() => HandleEmailInvite()} className="ct_social_box w-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20 6H4V18H20V6ZM1 3V21H23V3H1Z" fill="#1464F4" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.75208 5.16811C2.21161 4.47882 3.14292 4.29256 3.83221 4.75208L12.0002 10.1974L20.1681 4.75208C20.8574 4.29256 21.7887 4.47882 22.2482 5.16811C22.7078 5.8574 22.5215 6.78871 21.8322 7.24823L12.0002 13.8029L2.16811 7.24823C1.47882 6.78871 1.29256 5.8574 1.75208 5.16811Z" fill="#1464F4" />
                                        </svg>
                                        <h5 className="mb-0 ct_fs_11 ct_fw_600 ct_blue_text mt-2 text-center">EMAIL</h5>
                                    </a>
                                    <a onClick={() => HandleEmailInvite()} className="ct_social_box w-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.5 12.3077C14.3161 12.3077 13.3571 13.2726 13.3571 14.4615V22H8C8 22 8.06321 9.07692 8 8H13.3571V9.59923C13.3571 9.59923 15.0157 8.04523 17.5775 8.04523C20.75 8.04523 23 10.3531 23 14.8342V22H17.6429V14.4615C17.6429 13.2726 16.6839 12.3077 15.5 12.3077ZM3.4847 6H3.45607C1.96446 6 1 4.79215 1 3.46475C1 2.10668 1.99408 1 3.51431 1C5.03554 1 5.97039 2.14245 6 3.50051C6 4.82894 5.03554 6 3.4847 6ZM6 22H1V8H6V22Z" fill="#1464F4" />
                                        </svg>
                                        <h5 className="mb-0 ct_fs_11 ct_fw_600 ct_blue_text mt-2 text-center">LINKEDIN</h5>
                                    </a>
                                    <a onClick={() => HandleEmailInvite()} className="ct_social_box  w-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M24 4.59333C23.1296 4.99667 22.396 5.01 21.6175 4.61111C22.6216 3.98667 22.6676 3.54889 23.0301 2.36778C22.0912 2.94667 21.0508 3.36778 19.944 3.59556C19.0586 2.61444 17.7947 2 16.3981 2C13.7141 2 11.5391 4.26222 11.5391 7.04889C11.5391 7.44556 11.5819 7.83111 11.6642 8.2C7.62538 7.99 4.04527 5.97889 1.6489 2.92333C1.2308 3.67 0.990198 4.53778 0.990198 5.46333C0.990198 7.21556 1.84887 8.76 3.15238 9.66556C2.35573 9.63889 1.6072 9.41222 0.951702 9.03444C0.950633 9.05556 0.950633 9.07556 0.950633 9.09778C0.950633 11.5444 2.62627 13.5844 4.8494 14.0489C4.13723 14.25 3.38656 14.2811 2.65407 14.1356C3.27321 16.1411 5.06755 17.6011 7.19337 17.6422C5.1146 19.3356 2.53645 20.0411 0 19.7322C2.15042 21.1644 4.70397 22 7.44787 22C16.3864 22 21.2721 14.3067 21.2721 7.63444C21.2721 7.41444 21.2689 7.19889 21.2593 6.98111C22.2078 6.27 23.3488 5.60667 24 4.59333Z" fill="#1464F4" />
                                        </svg>
                                        <h5 className="mb-0 ct_fs_11 ct_fw_600 ct_blue_text mt-2 text-center">TWITTER</h5>
                                    </a>
                                    <a onClick={() => HandleEmailInvite()} className="ct_social_box w-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17 7.67233H13.1731V5.84738C13.1731 4.98903 13.7057 4.78881 14.0805 4.78881H16.7597V1.01245L12.8781 1C9.35792 1 8.68992 3.8155 8.68992 5.61842V7.67233H6V11.5042H8.68992V23H13.1731V11.5042H16.6261L17 7.67233Z" fill="#1464F4" />
                                        </svg>
                                        <h5 className="mb-0 ct_fs_11 ct_fw_600 ct_blue_text mt-2 text-center">FACEBOOK</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="pt-15">
                                <a onClick={() => HandleViewReferrals()} className="mb-0 ct_fs_14 text-center ct_blue_text ct_fw_700 d-block">VIEW REFERRALS</a>
                            </div>
                        </div>
                    </div>
                    <BottomNavigation />
                </div>
            </div>
        </>
    )
}

export default Referrals