import React from 'react'
import { NavLink} from 'react-router-dom'
import gameopen from "../img/gameopen.png"
import back_btn from '../img/back_btn.png'
function Onboarding7() {
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                    <div className='d-flex align-items-center justify-content-between py-4'>
                        <NavLink to='/onboarding6'className='ct_mob_head pt-0'>
                            <img src={back_btn} alt='back-btn'/>
                        </NavLink>
                        <NavLink to='/onboarding11'  className="ct_blue_text ct_fw_600 ct_fs_14" style={{ textAlign: "right", fontSize: "15px" }} >SKIP TOUR</NavLink>
                    </div>
                    <div className="ct_login_form ct_center_css  ct_x_15">
                        <div className="w-100">
                            <div className="ct_onboarding_screen text-center">
                                <img src={gameopen} alt="" />
                            </div>
                            <div className="ct_mt_minus_130">
                                <h4 className="ct_fs_32 text-white text-center ct_fw_700">How to play</h4>
                                <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">To play, you can join an existing game or create your own game.</p>
                                <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">You are given $200,000 of Brawl Street virtual dollars to buy stocks with which you build your portfolio.</p>
                            </div>
                            <div className="ct_bottom_fixed ct_bottom_50">
                                <div className="text-center mt-30">
                                    <NavLink to='/onboarding8' className="ct_blue_text text-center ct_fw_600 ct_fs_14" >Next</NavLink>
                                </div>
                                <div className="ct_skip_dots mt-30">
                                    <span></span>
                                    <span className="active"></span>
                                    <span></span>
                                    <span></span>
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

export default Onboarding7