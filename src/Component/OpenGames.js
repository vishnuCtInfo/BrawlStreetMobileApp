import React, { useEffect, useMemo, useState } from 'react'
import { Switch } from "antd"
import menu from "../img/menu.png"
import { useNavigate } from 'react-router-dom'
import notifications from "../img/notifications.png"
import star_stroke from "../img/star_stroke.png"
import bank_account from "../img/bank_account.png"
import my_game from "../img/my_game.png"
import add from "../img/add.png"
import search from "../img/search.png"
import filter from "../img/filter.png"
import sort from "../img/sort.png"
import _50 from "../img/50-50.png"
import clock from "../img/clock.png"
import hourglass from "../img/hourglass.png"
import entry_icon from "../img/entry_icon.png"
import players from "../img/players.png"
import prize from "../img/prize.png"
import rank from "../img/rank.png"
import profile_photo from "../img/Profile-photo.png"
import close from "../img/close.png"
import arrow_up from "../img/arrow_up.png"
import alphabetical from "../img/alphabetical.png";
import rank_24 from "../img/rank_24.png"
import entry_fee_24 from "../img/entry fee_24.png"
import stopwatch_24 from "../img/stopwatch_24.png"
import winnings_24 from "../img/winnings_24.png"
import friends from "../img/friends.png"
import axios from 'axios'
import BottomNavigation from './BottomNavigation'
import { IsAuthnaticated } from '../Utils/Auth'
import { API_games_getAllgames, API_games_pendingGamesInvitations } from '../Services/gamesAPIs'
import { message as toast, Slider } from 'antd'

//react icons
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { FaSortAlphaUp, FaSortAlphaDownAlt } from "react-icons/fa";
import { MdLabelImportantOutline } from "react-icons/md";
import { LuTicket } from "react-icons/lu";
import { LiaHourglassEndSolid } from "react-icons/lia";
import { GiTrophyCup } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";


function OpenGames() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [pendingData, setPendigData] = useState([]);
    const [sortApply, setSortApply] = useState('max_player_level')
    const [sortKeyData, setSortKeyData] = useState({
        max_player_level: true,
        name: null,
        entry_fee: null,
        duration: null,
        sortByPz: null,
        sortByNP: null
    });
    const [filtterData, setFiltterData] = useState({
        entry_fee: { min: '0', max: '20' },
        duration: { min: 0, max: 10 },
        max_player_level: { min: 0, max: 20 },
        access_type: '50/50',
        withFriends: false
    })

    const toggleSort = (key) => {
        setSortApply(key);
        setSortKeyData((prevSortData) => {
            const newSortData = { ...prevSortData };
            for (const sortKey in newSortData) {

                if (sortKey === key) {
                    newSortData[sortKey] === null ?
                        newSortData[sortKey] = true
                        :
                        newSortData[sortKey] = !newSortData[sortKey]
                } else {
                    newSortData[sortKey] = null

                }
            }
            return newSortData;
        });
    };

    const HandleCreateGame = () => {
        navigate("/create/game")
    }
    const HandleOpenGamesDetail = () => {
        navigate("/open/games/detail")
    }
    const HandleInviteGameDetail = () => {
        navigate("/invite/game/detail")
    }

    const get_all_games = async () => {
        try {
            const data = await API_games_getAllgames();
            if (data?.success) {
                setData(data?.data);
                console.log(data)
                return;
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const getPendingGameInvitation = async () => {
        try {
            const { activeUserEmail } = IsAuthnaticated();
            const data = API_games_pendingGamesInvitations(activeUserEmail)
            setPendigData(data);
        } catch (error) {
            console.log(error);
        }
    }

    function calculateDurationInHours(hours, duration) {
        return (hours === 1) ? duration * 24 : duration;
    }

    const sortAllData = () => {
        console.log('key is ', sortApply)

        switch (sortApply) {
            case 'max_player_level':
                const newArray = data.slice().sort((a, b) => sortKeyData[sortApply] ? a.max_player_level - b.max_player_level : b.max_player_level - a.max_player_level)
                setData(newArray)
                break;
            case 'name':
                const newArray1 = data.slice().sort((a, b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    if (nameA < nameB) {
                        return sortKeyData[sortApply] ? -1 : 1;
                    }
                    if (nameA > nameB) {
                        return sortKeyData[sortApply] ? 1 : -1;
                    }
                    return 0;
                })
                setData(newArray1)
                break;
            case 'entry_fee':
                const newArray2 = data.slice().sort((a, b) => {
                    const entryFeeA = parseFloat(a.entry_fee);
                    const entryFeeB = parseFloat(b.entry_fee);

                    return sortKeyData[sortApply] ? entryFeeA - entryFeeB : entryFeeB - entryFeeA;
                })
                setData(newArray2)
                break;
            case 'duration':
                const newArray3 = data.slice().sort((a, b) => {
                    const durationA = calculateDurationInHours(a?.hours, a?.duration);
                    const durationB = calculateDurationInHours(b?.hours, b?.duration);

                    return sortKeyData[sortApply] ? durationA - durationB : durationB - durationA;
                })
                setData(newArray3)
                break;
            case 'sortByPz': toast.error('this value Not Available for Backend'); break;
            case 'sortByNP': toast.error('this value Not Available for Backend'); break;
        }

    }

    useEffect(() => {
        getPendingGameInvitation();
        get_all_games()
    }, [navigate])

    const formatter = (value) => {
        if (value <= 24) {
            return `${value} hour${value !== 1 ? 's' : ''}`;
        } else {
            const days = Math.floor(value / 24);
            const hours = value % 24;
            return `${days} day${days !== 1 ? 's' : ''} ${hours} hour${hours !== 1 ? 's' : ''}`;
        }
    };

    useEffect(() => {
        console.log(data)
    })

    return (
        <>
            <div className="ct_mobile_width ">
                <div className="ct_login_bg  ">
                    <div className="ct_mob_head d-flex align-items-center pb-30 px-15">
                        <h4 className="text-white text-center text-center flex-1 ct_fs_18 mb-0 ct_fw_600">OPEN GAMES</h4>
                        <a onClick={() => HandleCreateGame()} className="ct_plus_icon ct_create_game_popup">
                            <img src={add} alt="img" />
                        </a>
                    </div>

                    <div className="ct_overflow_hidden">
                        <div className="ct_open_game_tab">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#Open">Open</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link position-relative" data-bs-toggle="tab" href="#Invitations">
                                        {pendingData?.length > 0 && <span className="ct_notification_badge ct_invitation_badge">{pendingData?.length}</span>}
                                        Invitations
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                {/* -----------------------Top Button----------------------- */}
                                <div className="tab-pane container active" id="Open">
                                    <div className="ct_filters_btn_bg ">
                                        <div className="ct_search_game ">
                                            <input type="text" placeholder="SEARCH" />
                                            <img src={search} alt="img" />
                                        </div>
                                        <div className="ct_filter_btn " data-bs-toggle="modal" data-bs-target="#ct_filter_popup">
                                            <button type='button'>
                                                <img src={filter} alt="img" />
                                                FILTER
                                            </button>
                                        </div>
                                        <div className="ct_filter_btn ct_sort_btn " data-bs-toggle="modal" data-bs-target="#ct_sort_popup">
                                            <button type='button'>
                                                <img src={sort} alt="img" />
                                                SORT
                                            </button>
                                        </div>
                                    </div>

                                    {/* --------------Open Game Cards-------------------------- */}
                                    <div className="ct_game_card_bg ct_pb_100">
                                        {data.map((obj, i) => (
                                            <a onClick={() => HandleOpenGamesDetail()} className="text-dark">
                                                <div className="ct_game_card">
                                                    <div className="ct_right_center_fixed">
                                                        <img src={_50} alt="img" />
                                                    </div>
                                                    <h1 className="ct_fs_29 ct_fw_900 ct_Oswald_ff mb-12">{obj?.name}</h1>
                                                    <div className="ct_flex_2">
                                                        <div className="d-flex align-items-start gap-2 mb-12 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <img src={clock} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">{obj?.start_time}</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">START TIME</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <img src={hourglass} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">{obj?.duration} {obj?.hours === 1 ? "days" : "hours"}</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">DURATION</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ct_flex_2 ">
                                                        <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <img src={entry_icon} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">{obj?.entry_fee}</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">ENTRY FEE</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <img src={players} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">59 (4 friends)</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">PLAYERS</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ct_flex_2">
                                                        <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <img src={prize} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$600.00</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">POT</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <img src={rank} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">{obj?.max_player_level}</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">MAX LEVEL</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        ))}



                                    </div>
                                </div>

                                {/* -------------------invitation container --------------------------- */}
                                <div className="tab-pane container fade" id="Invitations">
                                    <div className="ct_game_card_bg ct_height_84 ct_pb_100">
                                        {pendingData?.length > 0 &&
                                            <a onClick={() => HandleInviteGameDetail()} className="text-dark">
                                                <div className="ct_game_card">
                                                    <div className="ct_right_center_fixed">
                                                        <img src={_50} alt="img" />
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mb-12">
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <img src={profile_photo} alt="img" className="ct_img_24" />
                                                            <h5 className="ct_fs_14 ct_fw_600 mb-0">brownfish258</h5>
                                                        </div>
                                                        <div className="ct_close_icon">
                                                            <img src={close} alt="img" />
                                                        </div>
                                                    </div>
                                                    <h1 className="ct_fs_29 ct_fw_900 ct_Oswald_ff mb-12">Wallstreet Deathmatch</h1>
                                                    <div className="ct_flex_2">
                                                        <div className="d-flex align-items-start gap-2 mb-12 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <img src={clock} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">Nov 23 - 8:00am</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">START TIME</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <img src={hourglass} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">6 hours</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">DURATION</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ct_flex_2 ">
                                                        <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <img src={entry_icon} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$100.00</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">ENTRY FEE</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-start gap-2  mb-12 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <img src={players} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">59 (4 friends)</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">PLAYERS</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ct_flex_2">
                                                        <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <img src={prize} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text ">$600.00</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">POT</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-start gap-2 ct_sec_width_40">
                                                            <div className="ct_short_icon">
                                                                <img src={rank} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h6 className="ct_fs_13 mb-1 ct_fw_600 ct_dark_grey_text">20</h6>
                                                                <p className="ct_fs_12 ct_grey_text mb-0">MAX LEVEL</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        }
                                    </div>


                                    {/* empty page content s */}

                                    {pendingData?.length <= 0 &&
                                        <div className="ct_game_card_bg ct_height_84 ct_white_bg ct_center_css">
                                            <div className="w-100">
                                                <div className="text-center mb-12">
                                                    <img src="img/open_games.png" alt="" />
                                                </div>
                                                <p className="ct_grey_text mt_15 ct_fs_14  ct_fw_400 text-center ct_dark_grey_text">You don’t have any game <br /> invitations </p>
                                            </div>
                                        </div>
                                    }

                                    {/* empty content E */}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Filter Popup Section S */}
                    <div className="modal fade" id="ct_filter_popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header border-0">
                                    <h5 className="modal-title ct_fs_18 mb-0 ct_fw_700" id="exampleModalLabel">Filter games</h5>
                                    <button type='button' className="btn-close close" data-bs-dismiss="modal" aria-label="Close">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.939222 3.06077L16.9392 19.0608L19.0605 16.9395L3.06054 0.939448L0.939222 3.06077Z" fill="#050505" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.0608 3.06077L3.06077 19.0608L0.939453 16.9395L16.9395 0.939448L19.0608 3.06077Z" fill="#050505" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="modal-body border-0 pt-0 px-0">
                                    <div className="px-15">
                                        <div className="pb-20 ct_border_btm">
                                            <p className="ct_fw_500 mb-0 ">Game type</p>
                                            <div className="ct_type_border">
                                                <button type='button' className="active">50/50</button>
                                                <button type='button'>20/80</button>
                                                <button type='button'>TOP 10</button>
                                            </div>
                                        </div>

                                        <div className="pb-20 ct_border_btm mt_20">
                                            <p className="mb-0 ct_fw_500 ">Entry fee</p>
                                            <section className="range-slider" id="facet-price-range-slider">
                                                <Slider range defaultValue={[filtterData?.entry_fee?.min, filtterData?.entry_fee?.max]} />
                                                {/* <input name="range-1" value="50" min="50" max="250" step="1" type="range" /> */}

                                                {/* <input name="range-2" value="250" min="0" max="500" step="1" type="range" /> */}

                                            </section>
                                        </div>
                                        <div className="pb-20 ct_border_btm mt_20">
                                            <p className="mb-0 ct_fw_500 ">Duration</p>
                                            <section className="range-slider ps-2" id="facet-price-range-slider2">

                                                <Slider range max={24*30} defaultValue={[filtterData?.duration?.min, filtterData?.duration?.max]} tipFormatter={formatter} />

                                                {/* <input name="range-1" value="3" min="5" max="3" step="1" type="range" />

                                                <input name="range-2" value="3" min="0" max="5" step="1" type="range" /> */}

                                            </section>
                                        </div>
                                        <div className="pb-20 ct_border_btm mt_20">
                                            <p className="mb-0 ct_fw_500"> Maximum player level</p>
                                            <select className="ct_select_option">
                                                <option value="50">50</option>
                                                <option value="49">49</option>
                                            </select>
                                        </div>
                                        <div className="pb-20 ct_border_btm mt_2">
                                            <div className="d-flex align-items-center pt-20 gap-3">
                                                <input type="checkbox" id="ct_keep_login" className="ct_checkbox_width" checked />
                                                <label htmlFor="ct_keep_login" className="ct_fs_14 ct_fw_600">Show only games with friends</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ct_grey_bg_clr d-flex align-items-center gap-3 ">
                                        <button type='button' className="ct_button_blue ct_light_blue_btn">APPLY  FILTER</button>
                                        <button type='button' className="ct_button_blue ct_transparent_btn text-dark ct_clear_all_bg">CLEAR ALL</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Sort Popop Section S */}
                    <div className="modal fade" id="ct_sort_popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header border-0 pb-0">
                                    <h5 className="modal-title ct_fs_18 mb-0 ct_fw_700" id="exampleModalLabel">Sort games</h5>
                                    <button type='button' className="btn-close close" data-bs-dismiss="modal" aria-label="Close">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.939222 3.06077L16.9392 19.0608L19.0605 16.9395L3.06054 0.939448L0.939222 3.06077Z" fill="#050505" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.0608 3.06077L3.06077 19.0608L0.939453 16.9395L16.9395 0.939448L19.0608 3.06077Z" fill="#050505" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="modal-body pt-0 px-0">
                                    <div className=" pb-0 ct_p_16 px-0">
                                        <div onClick={() => toggleSort('max_player_level')} className={`d-flex align-items-center justify-content-between ct_border_top pb-15 pt-15 px-15 ct_sort_list_item ${sortApply === 'max_player_level' ? 'active' : ''}`}>
                                            <div className="ct_sort_left d-flex align-items-center gap-3">
                                                {
                                                    sortKeyData?.max_player_level ?
                                                        <FaSortAlphaUp color={(sortKeyData?.max_player_level !== null) ? '#1464f4' : '#676869'} className="ct_img_24" />
                                                        :
                                                        <FaSortAlphaDownAlt color={(sortKeyData?.max_player_level !== null) ? '#1464f4' : '#676869'} className="ct_img_24" />
                                                }
                                                <p className="mb-0 ct_fw_600"  >Max player level</p>
                                            </div>
                                            {sortKeyData?.max_player_level !== null &&
                                                <div className="ct_sort_right_icon">
                                                    {
                                                        sortKeyData?.max_player_level ?
                                                            <FaArrowUpLong color='#1464f4' className="ct_img_24" />
                                                            :
                                                            <FaArrowDownLong color='#1464f4' className="ct_img_24" />
                                                    }
                                                </div>
                                            }
                                        </div>
                                        <div onClick={() => toggleSort('name')} className={`d-flex align-items-center justify-content-between ct_border_top pb-15 pt-15 px-15 ct_sort_list_item ${sortApply === 'name' ? 'active' : ''}`}>
                                            <div className="ct_sort_left d-flex align-items-center gap-3">
                                                <MdLabelImportantOutline color={(sortApply === 'name') ? '#1464f4' : '#676869'} className="ct_img_24" style={{ transform: 'rotate(-90deg)' }} />
                                                <p className="mb-0 ct_fw_600" >Game name</p>
                                            </div>
                                            {sortKeyData?.name !== null &&
                                                <div className="ct_sort_right_icon">
                                                    {
                                                        sortKeyData?.name ?
                                                            <FaArrowUpLong color='#1464f4' className="ct_img_24" />
                                                            :
                                                            <FaArrowDownLong color='#1464f4' className="ct_img_24" />
                                                    }
                                                </div>
                                            }
                                        </div>
                                        <div onClick={() => toggleSort('entry_fee')} className={`d-flex align-items-center justify-content-between ct_border_top pb-15 pt-15 px-15 ct_sort_list_item ${sortApply === 'entry_fee' ? 'active' : ''}`}>
                                            <div className="ct_sort_left d-flex align-items-center gap-3">
                                                <LuTicket color={(sortApply === 'entry_fee') ? '#1464f4' : '#676869'} className="ct_img_24" style={{ transform: 'rotate(-45deg)' }} />
                                                <p className="mb-0 ct_fw_600" >Entry fee</p>
                                            </div>
                                            {
                                                sortKeyData?.entry_fee !== null &&
                                                <div className="ct_sort_right_icon">
                                                    {
                                                        sortKeyData?.entry_fee ?
                                                            <FaArrowUpLong color='#1464f4' className="ct_img_24" />
                                                            :
                                                            <FaArrowDownLong color='#1464f4' className="ct_img_24" />
                                                    }

                                                </div>
                                            }
                                        </div>
                                        <div onClick={() => toggleSort('duration')} className={`d-flex align-items-center justify-content-between ct_border_top pb-15 pt-15 px-15 ct_sort_list_item ${sortApply === 'duration' ? 'active' : ''}`}>
                                            <div className="ct_sort_left d-flex align-items-center gap-3">
                                                <LiaHourglassEndSolid color={(sortApply === 'duration') ? '#1464f4' : '#676869'} className="ct_img_24" />
                                                <p className="mb-0 ct_fw_600" >Game duration</p>
                                            </div>
                                            {sortKeyData?.duration !== null &&
                                                <div className="ct_sort_right_icon">
                                                    {
                                                        sortKeyData?.duration ?
                                                            <FaArrowUpLong color='#1464f4' className="ct_img_24" />
                                                            :
                                                            <FaArrowDownLong color='#1464f4' className="ct_img_24" />
                                                    }
                                                </div>
                                            }
                                        </div>
                                        <div onClick={() => toggleSort('sortByPz')} className={`d-flex align-items-center justify-content-between ct_border_top pb-15 pt-15 px-15 ct_sort_list_item ${sortApply === 'sortByPz' ? 'active' : ''}`}>
                                            <div className="ct_sort_left d-flex align-items-center gap-3">
                                                <GiTrophyCup dSolid color={(sortApply === 'sortByPz') ? '#1464f4' : '#676869'} className="ct_img_24" />
                                                <p className="mb-0 ct_fw_600">Prize</p>
                                            </div>
                                            {sortKeyData?.sortByPz !== null &&
                                                <div className="ct_sort_right_icon">
                                                    {
                                                        sortKeyData?.sortByPz ?
                                                            <FaArrowUpLong color='#1464f4' className="ct_img_24" />
                                                            :
                                                            <FaArrowDownLong color='#1464f4' className="ct_img_24" />
                                                    }
                                                </div>
                                            }

                                        </div>
                                        <div onClick={() => toggleSort('sortByNP')} className={`d-flex align-items-center justify-content-between ct_border_top pb-15 pt-15 px-15 ct_sort_list_item ${sortApply === 'sortByNP' ? 'active' : ''}`}>
                                            <div className="ct_sort_left d-flex align-items-center gap-3">
                                                <HiUserGroup dSolid color={(sortApply === 'sortByNP') ? '#1464f4' : '#676869'} className="ct_img_24" />
                                                <p className="mb-0 ct_fw_600">Number of players</p>
                                            </div>
                                            {
                                                sortKeyData?.sortByNP !== null &&
                                                <div className="ct_sort_right_icon">
                                                    {
                                                        sortKeyData?.sortByNP ?
                                                            <FaArrowUpLong color='#1464f4' className="ct_img_24" />
                                                            :
                                                            <FaArrowDownLong color='#1464f4' className="ct_img_24" />
                                                    }
                                                </div>
                                            }

                                        </div>
                                    </div>
                                    <div className="ct_grey_bg_clr d-flex align-items-center gap-3">
                                        <button type='button' className="ct_button_blue ct_light_blue_btn" data-bs-dismiss="modal" aria-label="Close" onClick={sortAllData} >APPLY </button>
                                        <button type='button' className="ct_button_blue ct_transparent_btn text-dark ct_clear_all_bg" data-bs-dismiss="modal" aria-label="Close">CANCEL</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* sort popup section E */}
                    <BottomNavigation data="opengames" />
                </div>

            </div>
        </>
    )
}

export default OpenGames