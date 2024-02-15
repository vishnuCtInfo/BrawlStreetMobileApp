import React from 'react'
import newLavel1to9 from "../img/new_evel_1-9.png"

function NewLevel1to9() {
  return (
    <>
      <div className="ct_mobile_width">
        <div className="ct_new_level_green_bg ct_h-100 " style={{
          backgroundImage: `url(${newLavel1to9})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
          <div className="ct_mob_head bg-transparent d-flex align-items-center pb-12 px-15">
            <a  >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.12188 11.9997L16.2034 3.9182L14.082 1.79688L3.87924 11.9997L14.082 22.2025L16.2034 20.0811L8.12188 11.9997Z" fill="#050505" />
              </svg>
            </a>
          </div>
          <div className="mt-4">
            <h1 className="ct_fs_57 ct_fw_700 ct_Oswald_ff mb-0 text-center">LEVEL UP!</h1>
            <div className="mt-4">
              <div className="position-relative text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
                  <g filter="url(#filter0_i_1850_13434)">
                    <circle cx="38.9996" cy="38.9996" r="38.6207" fill="#16C766" />
                  </g>
                  <defs>
                    <filter id="filter0_i_1850_13434" x="0.378906" y="0.378906" width="77.2412" height="77.2422" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="-2" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1850_13434" />
                    </filter>
                  </defs>
                </svg>
                <h2 className="ct_new_level_position">2</h2>
              </div>
              <p className="ct_green_text ct_fw_900 text-center mt-3 ct_fs_18 ct_letter_space_5 pb-20 mb-0"><i className="ct_fw_900">LEVEL NAME</i></p>
              <div className=" px-15">
                <div className="pt-30 ct_border_top">
                  <p className="mb-0 ct_fs_13 ct_fw_700 text-center">Congrats, you are now a Level 2 Broker!
                    Win 4 more games to reach the next level.</p>
                </div>
              </div>
              <div className="mt-30">
                <a className="ct_button_blue ct_light_blue_btn d-flex align-items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 4.5C22 6.433 20.433 8 18.5 8C16.567 8 15 6.433 15 4.5C15 2.567 16.567 1 18.5 1C20.433 1 22 2.567 22 4.5Z" fill="white" />
                    <path d="M22 19.5C22 21.433 20.433 23 18.5 23C16.567 23 15 21.433 15 19.5C15 17.567 16.567 16 18.5 16C20.433 16 22 17.567 22 19.5Z" fill="white" />
                    <path d="M9 12C9 13.933 7.433 15.5 5.5 15.5C3.567 15.5 2 13.933 2 12C2 10.067 3.567 8.5 5.5 8.5C7.433 8.5 9 10.067 9 12Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.1243 5.58231L6.12365 13.0824L4.87439 10.9169L17.875 3.41683L19.1243 5.58231Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.8752 20.5837L4.87516 13.0837L6.12447 10.9182L19.1245 18.4182L17.8752 20.5837Z" fill="white" />
                  </svg>
                  SHARE THE NEWS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewLevel1to9