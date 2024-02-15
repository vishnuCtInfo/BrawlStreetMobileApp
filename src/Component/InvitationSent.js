import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function InvitationSent() {
    const location = useLocation();
    const friend_email = location?.state?.email;
    const friend_username = location?.state?.username;
    
    return (
        <>
            <div className="ct_mobile_width">
                <div className=" h-100 px-15">
                    <div className="ct_login_form ct_center_css ct_h-100 ct_px_15">
                        <form className="w-100">
                            <h4 className="ct_fs_32 ct_green_text text-center ct_fw_700">Invitation sent</h4>
                            <p className="ct_dark_grey_text mt_15 ct_fs_18 ct_lh_20 ct_fw_400 text-center px-15">You have sucessfully
                                <span className="ct_black_clr">{friend_username || 'silverduck204'}</span> in 2 games </p>
                            <div className=" ct_grey_bg_clr ct_fixed_botom mt-30 ">
                                <button type='button' className="ct_button_blue ct_light_blue_btn">DONE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvitationSent