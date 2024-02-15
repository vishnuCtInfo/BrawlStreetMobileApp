import React from 'react'
import { useNavigate } from 'react-router-dom'
import splash_bg from "../img/splash_bg.png"

function Splash() {
  const navigate = useNavigate()
  const HandleLogin = () => {
    navigate("/login")
  }
  const HandleSignUp = () => {
    navigate("/signup")
  }
  return (
    <>
      <div className="ct_mobile_width">
        <div className="ct_splash_bg" style={{ backgroundImage: `url(${splash_bg})` }} >
          <div className="d-flex align-items-end h-100 pb-100 flex-direction-column flex-flow-reverse">
            <a onClick={() => HandleLogin()} className="ct_button_blue ct_full_w_btn ct_transparent_btn">LOG IN</a>
            <a onClick={() => HandleSignUp()} className="ct_button_blue mb-24 ct_full_w_btn ">SIGN UP</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Splash