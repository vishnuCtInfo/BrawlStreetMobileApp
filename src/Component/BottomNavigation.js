import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import menu from "../img/menu.png"
import notifications from "../img/notifications.png"
import star_stroke from "../img/star_stroke.png"
import bank_account from "../img/bank_account.png"
import my_game from "../img/my_game.png"
import { IsAuthnaticated } from '../Utils/Auth'

function BottomNavigation(props) {
    const active = props.data
    const navigate = useNavigate()

    const HandleMygames = () => {
        navigate("/mygames")
    }
    const HandleOpenGames = () => {
        navigate("/open/games")
    }
    const HandleWatchlist = () => {
        navigate("/watchlist")
    }
    const HandleNavigationMore = () => {
        navigate("/navigation/more")
    }
    const HandleNotificationsMain = () => {
        navigate("/notification/main")
    }

    useEffect(()=>{
        if(!IsAuthnaticated())
            navigate('/login')
    },[navigate])
    return (
        <>
            <div className="ct_navigation_bar px-15">
                <ul>
                    {/*  */}
                    <li className={active == "mygames" ? "active" : ""}>
                        <a onClick={() => HandleMygames()}>
                            <img src={my_game} alt="img" />
                            <h5 className="mb-0">My games</h5>
                        </a>
                    </li>
                    <li className={active == "opengames" ? "active" : ""}>
                        <a onClick={() => HandleOpenGames()}>
                            <img src={bank_account} alt="img" />
                            <h5 className="mb-0">Open games</h5>
                        </a>
                    </li>
                    <li className={active == "watchlist" ? "active" : ""}>
                        <a onClick={() => HandleWatchlist()}>
                            <img src={star_stroke} alt="img" />
                            <h5 className="mb-0">Watchlist</h5>
                        </a>
                    </li>
                    <li className={active == "notifications" ? "active" : ""}>
                        <a onClick={() => HandleNotificationsMain()}>
                            <img src={notifications} alt="img" />
                            <h5 className="mb-0">Notifications</h5>
                            <span className="ct_notification_badge">5</span>
                        </a>
                    </li>
                    <li className={active == "myprofile" ? "active" : ""} >
                        <a onClick={() => HandleNavigationMore()}>
                            <img src={menu} alt="img" />
                            <h5 className="mb-0">More</h5>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default BottomNavigation