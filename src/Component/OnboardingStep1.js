import React from 'react'
import { NavLink } from 'react-router-dom'

function OnboardingStep1() {
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">
                <div className='text-end pt-4'>
                        <NavLink to='/onboard/wizard2' className="ct_blue_text ct_fw_600 ct_fs_14" style={{ textAlign: "right", fontSize: "15px" }} >SKIP TOUR</NavLink>
                    </div>
                    <div className="ct_login_form ct_center_css ct_h-100 ct_px_15">
                        <div className="w-100">
                            <div className="ct_bottom_fixed w-100 ct_px_15">
                                <div className="w-100">
                                    <h4 className="ct_fs_32 text-white text-center ct_fw_700">Choose a game</h4>
                                    <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">Either build your own game or select a game from the many games
                                        already created.</p>
                                </div>
                                <div className="text-center mt-30">
                                    <NavLink to="/onboarding/step2" className="ct_blue_text text-center ct_fw_600 ct_fs_14" >Next</NavLink>
                                </div>
                                <div className="ct_skip_dots mt-30">
                                    <span className="active"></span>
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

export default OnboardingStep1