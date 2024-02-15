import React from 'react'
import { useNavigate } from 'react-router-dom'

function VarificationEmail() {
const navigate = useNavigate()
const HandleLogin=()=>{
    navigate("/login")
}
return (
    <>
    <div className="ct_mobile_width">
        <div className="ct_login_bg h-100 px-15">
            <div className="ct_login_form ct_center_css ct_h-100 ct_px_15">
                <div className="w-100">
                    <h4 className="ct_fs_32 text-white text-center ct_fw_700">Email confirmed</h4>
                    <p className="ct_grey_text mt_15 ct_fs_14 ct_lh_20 ct_fw_400 text-center">You can now use your log in credentials to access the app.</p>
                    <div className="text-center mt-30">
                        <a onClick={()=>HandleLogin()} className="ct_button_blue">log in</a>
                    </div>
                </div>

            </div>
        </div>

    </div>
    </>
  )
}

export default VarificationEmail