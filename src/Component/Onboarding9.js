import React from 'react'
import { NavLink } from 'react-router-dom'
import stock_detail from "../img/stock_detail.png"
import back_btn from '../img/back_btn.png'
function Onboarding9() {

    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                <div className='d-flex align-items-center justify-content-between py-4'>
                        <NavLink to='/onboarding8'className='ct_mob_head pt-0'>
                            <img src={back_btn} alt='back-btn'/>
                        </NavLink>
                        <NavLink to='/onboarding11' className="ct_blue_text ct_fw_600 ct_fs_14" style={{ textAlign: "right", fontSize: "15px" }} >SKIP TOUR</NavLink>
                    </div>
                    {/* <div >
                        <NavLink className="ct_blue_text ct_fw_600 ct_fs_14" style={{ textAlign: "right", fontSize: "15px" }} >skip tour</NavLink>
                    </div> */}
                    <div className="ct_login_form ct_center_css ct_px_15">
                        <div className="w-100">
                            <div className="ct_onboarding_screen text-center">
                                <img src={stock_detail} alt="" />
                            </div>
                            <div className="ct_mt_minus_130">
                                <h4 className="ct_fs_32 text-white text-center ct_fw_700">Trading stocks</h4>
                                <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">With each game, you’ll manage a new Portfolio using your Brawl Street Bucks.
                                    All of your virtual trades are real time and thus your actions and reactions buying and selling stocks follow the live stock market. It’s like you are playing the real market.    </p>
                            </div>
                            <div className="ct_bottom_fixed " style={{bottom: "-70px"}}>
                                <div className="text-center mt-30">
                                    <NavLink to="/onboarding10" className="ct_blue_text text-center ct_fw_600 ct_fs_14" >Next</NavLink>
                                </div>
                                <div className="ct_skip_dots mt-30">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="active"></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Onboarding9