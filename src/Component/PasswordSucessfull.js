import React from 'react'
import { NavLink } from 'react-router-dom'
function PasswordSucessfull() {
  return (
    <>
        <div className="ct_mobile_width">
        <div className="ct_login_bg h-100 px-15">
            <div className="ct_login_form ct_center_css ct_h-100 ct_px_15">
                <form  className="w-100">
                    <h4 className="ct_fs_32 text-white text-center ct_fw_700">New password successfully set</h4>
                    <p className="ct_grey_text mt_15 ct_fs_16 ct_lh_20 ct_fw_400 text-center px-15">Use your new password to 
                        log into the app</p>
                    <div className="text-center mt-30">
                        <NavLink to="/login"  className="ct_button_blue">log in</NavLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default PasswordSucessfull