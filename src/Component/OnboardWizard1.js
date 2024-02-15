import React from 'react'
import { NavLink } from 'react-router-dom'
import Rectangle_box from "../img/Rectangle_box.png"
function OnboardWizard1() {
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                    <div className="ct_login_form pt-30 ct_h-100 ct_px_15">
                        <div className="ct_position_relative">
                            <div className="ct_skip_dots mb-30">
                                <span className="active_2"></span>
                                <span></span>
                                <span ></span>
                            </div>
                            <NavLink to="/onboard/wizard2" className="ct_sky_blue_text ct_skip_position">SKIP</NavLink>
                        </div>
                        <div className="w-100 pt-15">
                            <div className="ct_onboarding_screen text-center">
                                <img src={Rectangle_box} alt="" />
                            </div>
                            <div className="">
                                <h4 className="ct_fs_18 text-center mt-30 ct_fw_600 ct_yellow_text">HOW TO PLAY</h4>
                                <p className="text-white ct_text_op_0_8 mt_15 ct_fs_14 ct_lh_20 ct_fw_400">
                                    To play, you can join an existing game or create your own game.
                                </p>
                                <p className="text-white ct_text_op_0_8 mt_15 ct_fs_14 ct_lh_20 ct_fw_400">
                                    You are given $200,000 of Brawl Street virtual dollars to buy stocks with which you build your portfolio.
                                </p>
                                <p className="text-white ct_text_op_0_8 mt_15 ct_fs_14 ct_lh_20 ct_fw_400">
                                    Your goal is to make your best stock picks and if you outperform other players in your game you win cold hard cash.  So even if the market is down or your stocks tank, you just need to finish with more virtual dollars than other players based on your games rules and you win!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnboardWizard1