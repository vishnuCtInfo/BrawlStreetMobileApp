import React from 'react'
import { useNavigate } from 'react-router-dom'
import add from "../img/add.png"
import BottomNavigation from './BottomNavigation'
function Watchlist() {
const navigate = useNavigate()
const HandleAddToWatchlist=()=>{
    navigate("/addto/watchlist")
}
const HandleWatchlistStockDetail=()=>{
    navigate("/watchlist/stock/detail")
}
const HandleMygames =()=>{
    navigate("/mygames")
}
const HandleOpenGames =()=>{
    navigate("/open/games")
}
const HandleWatchlist=()=>{
    navigate("/watchlist")
}
const HandleNotificationsMain=()=>{
    navigate("/notification/main")
}
const HandleNavigationMore=()=>{
    navigate("/navigation/more")
}
return (
    <>
    <div className="ct_mobile_width">
        <div className="ct_login_bg ct_h-100 ">
            <div className="ct_mob_head d-flex align-items-center pb-12 px-15">
                <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">WATCHLIST</h4>
                <a onClick={()=>HandleAddToWatchlist()} className="ct_plus_icon" >
                    <img src={add} alt="img"/>
                </a>
            </div>
            <div className="ct_white_bg ct_h-100">
                <div className="ct_dark_grey_bg_clr ct_friend_search position-relative py-2 ">
                    <input type="text" className="form-control" placeholder="Search"/>
                    <div className="ct_search_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 14C11.7614 14 14 11.7614 14 9C14 6.23858 11.7614 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14ZM9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" fill="#7C7D7E"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.9392 22.0608L11.9392 14.0608L14.0605 11.9395L22.0605 19.9395L19.9392 22.0608Z" fill="#7C7D7E"></path>
                            </svg>
                    </div>
                </div>
                <div>
                    <table className="table ct_winning_table">
                        <thead className="px-15">
                            <tr>
                                <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr">SYMBOL</th>
                                <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr">LAST PRICE $</th>
                                <th className="ct_fs_11 ct_fw_700 ct_dark_grey_bg_clr">DAY GAIN $</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="ct_h_59">
                                    <a onClick={()=>HandleWatchlistStockDetail()} className="ct_fw_700 ct_black_clr ct_fs_14 mb-0">DOW J</a>
                                    <p className="mb-0 ct_fs_11 ct_7C7D7E_text_clr">Dow Jones industry</p>
                                </td>
                                <td className="ct_h_59">40.50</td>
                                <td className="ct_h_59">19.48</td>
                            </tr>
                            <tr>
                                <td className="ct_h_59">
                                    <a onClick={()=>HandleWatchlistStockDetail()} className="ct_fw_700 ct_black_clr ct_fs_14 mb-0">NFLX</a>
                                    <p className="mb-0 ct_fs_11 ct_7C7D7E_text_clr">Netflix, Inc.</p>
                                </td>
                                <td className="ct_h_59">53.29</td>
                                <td className="ct_h_59">20.49</td>
                            </tr>
                            <tr>
                                <td className="ct_h_59">
                                    <a onClick={()=>HandleWatchlistStockDetail()} className="ct_fw_700 ct_black_clr ct_fs_14 mb-0">NIKE</a>
                                    <p className="mb-0 ct_fs_11 ct_7C7D7E_text_clr">Nike, Inc.</p>
                                </td>
                                <td className="ct_h_59">54.54</td>
                                <td className="ct_h_59">20.90</td>
                            </tr>
                            <tr>
                                <td className="ct_h_59">
                                    <a onClick={()=>HandleWatchlistStockDetail()} className="ct_fw_700 ct_black_clr ct_fs_14 mb-0">FB</a>
                                    <p className="mb-0 ct_fs_11 ct_7C7D7E_text_clr">Facebook, Inc</p>
                                </td>
                                <td className="ct_h_59">40.29</td>
                                <td className="ct_h_59">15.80</td>
                            </tr>
                            <tr>
                                <td className="ct_h_59">
                                    <a onClick={()=>HandleWatchlistStockDetail()} className="ct_fw_700 ct_black_clr ct_fs_14 mb-0">GOOGLE</a>
                                    <p className="mb-0 ct_fs_11 ct_7C7D7E_text_clr">Alphabet, Inc</p>
                                </td>
                                <td className="ct_h_59">32.48</td>
                                <td className="ct_h_59">10.43</td>
                            </tr>
                            <tr>
                                <td className="ct_h_59">
                                    <a onClick={()=>HandleWatchlistStockDetail()} className="ct_fw_700 ct_black_clr ct_fs_14 mb-0">GOOGLE</a>
                                    <p className="mb-0 ct_fs_11 ct_7C7D7E_text_clr">Alphabet, Inc</p>
                                </td>
                                <td className="ct_h_59">48.29</td>
                                <td className="ct_h_59">20.39</td>
                            </tr>
                            <tr>
                                <td className="ct_h_59">
                                    <a onClick={()=>HandleWatchlistStockDetail()} className="ct_fw_700 ct_black_clr ct_fs_14 mb-0">NFLX</a>
                                    <p className="mb-0 ct_fs_11 ct_7C7D7E_text_clr">Netflix, Inc.</p>
                                </td>
                                <td className="ct_h_59">53.29</td>
                                <td className="ct_h_59">20.49</td>
                            </tr>
                            <tr>
                                <td className="ct_h_59">
                                    <a onClick={()=>HandleWatchlistStockDetail()} className="ct_fw_700 ct_black_clr ct_fs_14 mb-0">FB</a>
                                    <p className="mb-0 ct_fs_11 ct_7C7D7E_text_clr">Facebook, Inc</p>
                                </td>
                                <td className="ct_h_59">40.29</td>
                                <td className="ct_h_59">15.80</td>
                            </tr>
                            <tr>
                                <td className="ct_h_59">
                                    <a onClick={()=>HandleWatchlistStockDetail()} className="ct_fw_700 ct_black_clr ct_fs_14 mb-0">GOOGLE</a>
                                    <p className="mb-0 ct_fs_11 ct_7C7D7E_text_clr">Alphabet, Inc</p>
                                </td>
                                <td className="ct_h_59">32.48</td>
                                <td className="ct_h_59">10.43</td>
                            </tr>
                            <tr>
                                <td className="ct_h_59">
                                    <a onClick={()=>HandleWatchlistStockDetail()} className="ct_fw_700 ct_black_clr ct_fs_14 mb-0">GOOGLE</a>
                                    <p className="mb-0 ct_fs_11 ct_7C7D7E_text_clr">Alphabet, Inc</p>
                                </td>
                                <td className="ct_h_59">48.29</td>
                                <td className="ct_h_59">20.39</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
        <BottomNavigation data="watchlist"/>


    </div>
    </>
  )
}

export default Watchlist