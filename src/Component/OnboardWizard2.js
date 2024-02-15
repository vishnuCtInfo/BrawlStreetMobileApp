import React from 'react'
import { NavLink } from 'react-router-dom'
import Rectangle_box from "../img/Rectangle_box.png"
function OnboardWizard2() {
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg ct_h-100 px-15">
                    <div className="ct_login_form pt-30 h-100 ct_px_15">
                        <div className="ct_position_relative">
                            <div className="ct_skip_dots mb-30">
                                <span className="active_2"></span>
                                <span></span>
                                <span ></span>
                            </div>
                            <NavLink to="/onboard/wizard3" className="ct_sky_blue_text ct_skip_position">SKIP</NavLink>
                        </div>
                        <div className="w-100 pt-15">
                            <div className="ct_onboarding_screen text-center">
                                <img src={Rectangle_box} alt="" />
                            </div>

                            <div className="">
                                <h4 className="ct_fs_18 text-center mt-30 ct_fw_600 ct_yellow_text">TYPES OF GAMES</h4>
                                <p className="text-white ct_text_op_0_8 mt-30 ct_fs_14 ct_lh_20 ct_fw_400">
                                    Each game requires you to pay an entry fee with most of that added to the Pot.  Winners of the game split the Pot based on the type of game.
                                </p>
                                <p className="text-white  mt_15 ct_fs_14 ct_lh_20 ct_fw_400">
                                    <strong className="text-white">50/50</strong><br />
                                    <span className="ct_text_op_0_8">The top 50% of the players split the Pot evenly. This is a massive 80%</span>
                                </p>
                                <p className="text-white mt_15 ct_fs_14 ct_lh_20 ct_fw_400">
                                    <strong className="text-white">20/80</strong><br />
                                    <span className="ct_text_op_0_8">The top 20% of the players split the Pot evenly</span>
                                </p>
                                <p className="text-white  mt_15 ct_fs_14 ct_lh_20 ct_fw_400">
                                    <strong className="text-white">Top 10</strong><br />
                                    <span className="ct_text_op_0_8"> The top 10 players split the Pot evenly.  </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnboardWizard2