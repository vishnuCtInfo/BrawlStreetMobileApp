import React from 'react'
import { useNavigate } from 'react-router-dom'
import graph_svg from "../img/graph_svg.svg"
import back_btn from "../img/back_btn.png"
// import add from "../img/add.png"
function WatchlistStockDetail() {
const navigate = useNavigate()

const HandleAddToWatchlist=()=>{
    navigate("/addto/watchlist")
}
const HandleWatchlistBuyStock=()=>{
    navigate("/watchlist/buy/stock")
}
const HandleSellShares=()=>{
    navigate("/sell/shares")
}
return (
    <>
    <div className="ct_mobile_width">
        <div className="ct_login_bg ct_h-100 ">
            
            <div className="ct_mob_head d-flex align-items-center mb-30 px-15">
                <a onClick={()=>HandleAddToWatchlist()} className="ct_mob_head pt-0">
                    <img src={back_btn} alt="img"/>
                </a>
    
               <div className="flex-1">
                <h4 className="text-white text-center ct_fs_18 mb-0 ct_fw_600">AMZN</h4>
                <p className="mb-0  text-center text-white ct_fs_13">St Louis Brawl</p>
               </div>

                 {/* <div className="ct_plus_icon">
                    <img src={add} alt="img">
                </div>  */}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.2982 8.95974L11.9995 1L8.70084 8.95974L0.111328 9.63729L6.66213 15.2342L4.65222 23.6127L11.9995 19.1121L19.3469 23.6127L17.3369 15.2342L23.8877 9.63729L15.2982 8.95974ZM16.4353 12.0587L13.2303 11.8059L11.9995 8.836L10.7687 11.8059L7.56381 12.0587L10.008 14.1471L9.2581 17.2733L11.9995 15.594L14.741 17.2733L13.991 14.1471L16.4353 12.0587Z" fill="white"/>
                      </svg>
                </div>
            </div>

            <div className=" position-relative">
            <div className="px-15">
                <h1 ><span className="ct_font_45 ct_Oswald_ff">AMZN</span> <span className="ct_lower_txt ct_Oswald_ff">AMAZON.COM, INC</span></h1>
                <div className="d-flex align-items-center gap-4 pt-12">
                  <h4 className="text-white ct_fw_700 ct_fs_25 mb-0">$1,911.30</h4>
                  <h5 className="ct_fw_600 ct_fs_18 ct_red_text mb-0">-$6.89 (-0.36%)</h5>
                </div>
                <p className="mb-0 ct_fs_11 text-white ct_text_op_0_8 pt-12">AS OF 3:14PM EDT. MARKET OPEN</p>  
            </div>
              <div className="mt-3">
                <img src={graph_svg} alt="img/graph_svg.svg" className="w-100"/>
              </div>
                
            </div>

            <div className="ct_white_bg px-15  ct_pb_100">
                <div className="py-2 ct_border_btm ct_border_top d-flex align-items-center justify-content-between">
                    <p className="mb-0 ct_fs_13 ct_fw_400">BID (SIZE)</p>
                    <p className="mb-0 ct_fs_13 ct_fw_700">$1,903.15 x 100</p>
                </div>
                <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                    <p className="mb-0 ct_fs_13 ct_fw_400">ASK (SIZE)</p>
                    <p className="mb-0 ct_fs_13 ct_fw_700">$1,903.15 x 100</p>
                </div>
                <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                    <p className="mb-0 ct_fs_13 ct_fw_400">52 WEEK RANGE </p>
                    <p className="mb-0 ct_fs_13 ct_fw_700">1,307.00-2,050.50</p>
                </div>
                <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                    <p className="mb-0 ct_fs_13 ct_fw_400">VOLUME</p>
                    <p className="mb-0 ct_fs_13 ct_fw_700">3.93M</p>
                </div>
                 <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                    <p className="mb-0 ct_fs_13 ct_fw_400">P/E</p>
                    <p className="mb-0 ct_fs_13 ct_fw_700">81.09</p>
                </div>
                <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                    <p className="mb-0 ct_fs_13 ct_fw_400">EPS</p>
                    <p className="mb-0 ct_fs_13 ct_fw_700">23.656</p>
                </div>
                <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                    <p className="mb-0 ct_fs_13 ct_fw_400">NEXT EARNINGS DATE</p>
                    <p className="mb-0 ct_fs_13 ct_fw_700">7/12/2019</p>
                </div>
                <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                    <p className="mb-0 ct_fs_13 ct_fw_400">EX-DIVIDEND DATE</p>
                    <p className="mb-0 ct_fs_13 ct_fw_700">9/2/1999</p>
                </div>
                <div className="py-2 ct_border_btm  d-flex align-items-center justify-content-between">
                    <p className="mb-0 ct_fs_13 ct_fw_400">DIVIDEND YIELD/AMOUNT</p>
                    <p className="mb-0 ct_fs_13 ct_fw_700">0.00%/0.00</p>
                </div>
                <div className="py-2  d-flex align-items-center justify-content-between">
                    <p className="mb-0 ct_fs_13 ct_fw_400">DIVIDEND PAYABLE DATE</p>
                    <p className="mb-0 ct_fs_13 ct_fw_700">9/1/1999</p>
                </div>
            </div>
          
            <div className="ct_grey_bg_clr ct_fixed_botom d-flex align-items-center gap-3">
                <a onClick={()=>HandleWatchlistBuyStock()} className="ct_button_blue ct_light_blue_btn">BUY</a>
                <a onClick={()=>HandleSellShares()} className="ct_button_blue ct_light_blue_btn ct_green_btn">SELL</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default WatchlistStockDetail