import React from 'react'
import { useNavigate } from 'react-router-dom'
import back_btn from "../img/back_btn.png"

function EditPaypal() {

  const navigate = useNavigate()
  const HandlePaymentMethod = () => {
    navigate("/payment/method")
  }
  return (
    <>
      <div className="ct_mobile_width">
        <div>
          <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
            <a onClick={() => HandlePaymentMethod()} className="ct_mob_head pt-0">
              <img src={back_btn} alt="img" />
            </a>
            <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">EDIT PAYPAL</h4>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M21 7H3V4H21V7Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M16 7H8V19H16V7ZM5 4H19V22H5V4Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M14 3H10V4H14V3ZM8 1H16V7H8V1Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className="ct_white_bg pt-28 h-100">
            <div className="px-15">
              <div className="ct_setting_icon_bg mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                  <g clip-path="url(#clip0_5794_12935)">
                    <path d="M33.9142 9.56787C33.6672 9.42246 33.3634 9.41233 33.1074 9.54089C32.8518 9.66977 32.679 9.91953 32.6483 10.2042C32.618 10.481 32.5707 10.7577 32.5116 11.0481C30.8593 18.5468 27.5411 22.194 22.3648 22.194H14.7699C14.3694 22.1948 14.0246 22.4768 13.9446 22.8691L11.4129 34.7358L10.9606 37.7569C10.7006 39.1307 11.6034 40.4553 12.9772 40.7153C13.1287 40.7439 13.2824 40.7587 13.4366 40.7595H18.5167C19.6811 40.763 20.6963 39.9683 20.9724 38.8371L23.0247 30.6329H27.4281C32.6247 30.6329 36.2163 26.4895 37.5411 18.9654C38.4156 15.3827 36.9688 11.6341 33.9142 9.56787Z" fill="#54A3FF" />
                    <path d="M32.3227 3.26058C30.6552 1.36905 28.2621 0.275539 25.7405 0.252991H11.7658C9.67445 0.241757 7.89392 1.7719 7.59036 3.84112L3.25113 32.7879C3.0433 34.1706 3.99559 35.4599 5.37826 35.6678C5.50373 35.6867 5.63055 35.696 5.75745 35.696H12.2385C12.6389 35.6952 12.9837 35.4132 13.0638 35.0209L15.452 23.8817H22.3718C28.3769 23.8817 32.3448 19.6842 34.1676 11.3922C34.2409 11.0617 34.2972 10.7277 34.3363 10.3913C34.7594 7.8332 34.0214 5.21952 32.3227 3.26058Z" fill="#092DAF" />
                  </g>
                  <defs>
                    <clipPath id="clip0_5794_12935">
                      <rect width="40.5063" height="40.5063" fill="white" transform="translate(0.253906 0.25293)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="mt-4 text-center">
                <p className="mb-2 ct_fs_13 ct_7C7D7E_text_clr">You are connected to this PayPal account</p>
                <h4 className="ct_fw_700 ct_fs_18 mb-0">jonathanbartley88@gmail.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditPaypal