import React from 'react'
import { NavLink } from 'react-router-dom'
import skyline_bg from "../img/skyline_background.png"
function Onboarding16() {
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15" style={{ backgroundImage: `url(${skyline_bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                    <div className="ct_login_form pt-50 ct_h-100 ct_center_css ct_px_15">
                        <div className="w-100 ">
                            <div className="">
                                <h4 className="ct_fs_32 text-white text-center mt-30 ct_fw_700">Welcome to
                                    BrawlStreet</h4>
                                <div className="text-center mt-30">
                                    <NavLink to='/onboarding/step1' className="ct_button_blue">START PLAYING</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Onboarding16