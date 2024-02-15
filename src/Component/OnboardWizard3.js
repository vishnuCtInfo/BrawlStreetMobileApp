import React from 'react'
import { NavLink } from 'react-router-dom'
import Rectangle_box from "../img/Rectangle_box.png"
function OnboardWizard3() {
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                    <div className="ct_login_form pt-30 ct_h-100 ct_px_15">
                        <div className="ct_position_relative">
                            <div className="ct_skip_dots mb-30">
                                <span ></span>
                                <span className="active_2"></span>
                                <span ></span>
                            </div>
                            <NavLink to="/onboard/wizard4" className="ct_sky_blue_text ct_skip_position">SKIP</NavLink>
                        </div>
                        <div className="w-100 pt-15">
                            <div className="ct_onboarding_screen text-center">
                                <img src={Rectangle_box} alt="" />
                            </div>

                            <div className="">
                                <h4 className="ct_fs_18 text-center mt-30 ct_fw_600 ct_yellow_text">TRADING STOCKS</h4>
                                <p className="text-white ct_text_op_0_8 mt-30 ct_fs_14 ct_lh_20 ct_fw_400">
                                    With each game, you’ll manage a new Portfolio using your Brawl Street Bucks.
                                </p>
                                <p className="text-white ct_text_op_0_8 mt-30 ct_fs_14 ct_lh_20 ct_fw_400">
                                    All of your virtual trades are real time and thus your actions and reactions buying and selling stocks follow the live stock market. It’s like you are playing the real market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnboardWizard3