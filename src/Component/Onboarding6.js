import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ct_logo from "../img/ct_logo.png"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Onboarding6() {
    const navigate = useNavigate()

    const HandleOnboarding7 = () => {
        navigate("/onboarding7")
    }
    return (
        <>
            <div className="ct_mobile_width">
                <div className="ct_login_bg h-100 px-15">

                <div className='text-end pt-4'>
                        <NavLink to='/onboarding11' className="ct_blue_text ct_fw_600 ct_fs_14" style={{textAlign:"right",fontSize:"15px"}} >SKIP TOUR</NavLink>
                    </div>
                    
                    <div className="ct_login_form ct_center_css ct_h-100 ct_px_15">
                        <div className="w-100">

                            <div className="ct_logo">
                                <img src={ct_logo} alt="" />
                            </div>
                            <h4 className="ct_fs_32 text-white text-center ct_fw_700">Welcome to <br /> Brawl Street!</h4>
                            <p className="ct_grey_text pb-4 mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">You are joining a growing group of players who are winning money even when the stock market is doing poorly.  </p>

                            <div className="ct_bottom_fixed">
                                <div className="text-center mt-30">
                                    <NavLink to="/onboarding7" className="ct_blue_text text-center ct_fw_600 ct_fs_14" >Next</NavLink>
                                </div>
                                <div className="ct_skip_dots mt-30">
                                    <span className="active"></span>
                                    <span></span>
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

export default Onboarding6