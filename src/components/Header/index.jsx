import { useState, useRef } from "react";
import { NavLink, Link, } from "react-router";
import classNames from "classnames/bind";
import styles from './Header.module.scss';

import logo from '/src/assets/imgs/logo.png';
import logoHbogo from '../../assets/imgs/logo_hbogo.jpg'
import defaultAvatar from '/src/assets/imgs/default-1.png'
import profileAvatar from '/src/assets/imgs/placeholder_profile.png'
import LoginPage from "../Login";
import Button from '../Button'

import configs from "../../configs";
import { toTop } from "../../utils/helpers";
// import tippy from 'tippy.js';
import Tippy from '@tippyjs/react/headless'
import { faWallet } from "@fortawesome/free-solid-svg-icons/faWallet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faMagnifyingGlass, faPen, faSortDown, faUser } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)


function Header() {
    const [show, setShow] = useState(false)
    const navRef = useRef()
    const [showBar, setShowBar] = useState(false)
    const isUser = false
   
    return (
        // fragments
        <>
            <header className="fixed z-30 flex justify-center items-center top-0 left-0 right-0 h-[80px] bg-black ">
                <div className="container lg:max-w-6xl px-4 flex justify-between items-center mx-auto">
                    <div className="flex items-center">
                        <div onClick={()=>{setShowBar(!showBar); toTop()}} className="bar lg:hidden text-xl mr-4 md:mr-16 hover:text-primary duration-200 ease text-white cursor-pointer">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className="logo mr-8">
                            <Link to="/" className="w-[125px] h-[52px] block" >
                                <img className="size-full object-cover" src={logo} alt="logo" />
                            </Link>
                        </div>

                        <nav className={cx('nav')}>
                            <ul className='lg:flex hidden gap-4'>
                                <li onClick={toTop}>
                                    <NavLink className={nav => cx('text-md font-[500] text-text hover:text-primary', { active: nav.isActive })} to={configs.routes.trangchu} exact>Trang chủ</NavLink>
                                </li>
                                <li onClick={toTop}>
                                    <NavLink className={nav => cx('text-md font-[500] text-text hover:text-primary', { active: nav.isActive })} to={configs.routes.phimbo} exact>Phim bộ</NavLink>
                                </li>
                                <li onClick={toTop}>
                                    <NavLink className={nav => cx('text-md font-[500] text-text hover:text-primary', { active: nav.isActive })} to={configs.routes.tvshows} exact>TV Shows</NavLink>
                                </li>
                                <li onClick={toTop}>
                                    <NavLink className={nav => cx('text-md font-[500] text-text hover:text-primary', { active: nav.isActive })} to={configs.routes.anime} exact>Anime</NavLink>
                                </li>
                                <li onClick={toTop}>
                                    <NavLink className={nav => cx('text-md font-[500] text-text hover:text-primary', { active: nav.isActive })} to={configs.routes.single} exact>Phim lẻ</NavLink>
                                </li>

                               <span className="relative">
                                    <Tippy
            
                                        interactive
                                        placement="bottom-start"
                                        trigger="click"
                                        render={attrs => (
                                            <div className="box min-w-[260px] bg-[#1F1F1F] rounded-md" tabIndex="-1" {...attrs}>
                                                <ul className="list-none w-full py-2 flex flex-wrap text-md text-white">
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>Trực tiếp</Link>
                                                    </li>
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>Galaxy Play</Link>
                                                    </li>
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>Thiếu nhi</Link>
                                                    </li>
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>K+</Link>
                                                    </li>
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>Âm nhạc</Link>
                                                    </li>
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>Giải trí</Link>
                                                    </li>
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>ASEAN Cup</Link>
                                                    </li>
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>Tuyền hình</Link>
                                                    </li>
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>
                                                            <img className="w-[70%] object-contain" src={logoHbogo}/>
                                                        </Link>
                                                    </li>                                   
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>Podcast</Link>
                                                    </li>
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>Học tập</Link>
                                                    </li>
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>Thể thao</Link>
                                                    </li>
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>FA Cup</Link>
                                                    </li>
                                                    <li onClick={toTop} className='cursor-pointer flex items-center px-4 py-1 w-[50%] hover:text-primary transition-color duration-200'>
                                                        <Link>NBANBA</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    >
    
                                        <li>
                                            <NavLink className={cx('text-md font-[500] text-text hover:text-primary flex items-center')}>
                                                <p>Xem thêm</p>
                                                <FontAwesomeIcon className="text-sm ml-2 -mt-2" icon={faSortDown}/>
                                            </NavLink>
                                        </li>
                                    </Tippy>
                               </span>
                            </ul>
                        </nav>

                        <nav ref={navRef} className={classNames('nav-sidebar z-50 transition-transform duration-500 ease py-4 bg-gray fixed top-0 left-0 bottom-0 w-[250px]  lg:hidden', {'translate-x-[-100%]': !showBar, 'translate-x-0': showBar})}>

                            {isUser ? (
                                <span className="block lg:hidden ml-2">
                                    <Tippy

                                        interactive
                                        trigger="click"                                 
                                        placement="bottom-end"
                                        
                                        render={attrs => (
                                            <div className='box' tabIndex="-1" {...attrs}>

                                                <div className={cx('tippy min-w-[250px] bg-[#1F1F1F] z-10')}>
                                                    <ul className="text-text py-2 list-none">
                                                        <li className="px-3 py-2 cursor-pointer">
                                                            <Link to="/nguoi-dung" className="text-md flex items-center">
                                                                <div className="icon size-6 rounded-md overflow-hidden">
                                                                    <img className="object-cover size-full" src={profileAvatar} alt="avata" />
                                                                </div>
                                                                <p className="ml-2 hover:text-primary transition-colors duration-100 linear text-md text-gray-200"> Người dùng</p>
                                                            </Link>
                                                        </li>
                                                        <li className="px-3 py-2 cursor-pointer">
                                                            <Link to="/tre-em" className="text-md flex items-center">
                                                                <div className="icon size-6 rounded-md overflow-hidden">
                                                                    <img className="object-cover size-full" src={defaultAvatar} alt="avata" />
                                                                </div>
                                                                <p className="ml-2 hover:text-primary transition-colors duration-100 linear text-md text-gray-200"> Trẻ em</p>
                                                            </Link>
                                                        </li>
                                                        <li className="px-3 py-2 cursor-pointer">
                                                            <Link to="/quan-ly-ho-so" className="text-md flex items-center">
                                                                <div className="icon size-6">
                                                                    <FontAwesomeIcon icon={faPen} />
                                                                </div>
                                                                <p className="ml-2 hover:text-primary transition-colors duration-100 linear text-md text-gray-200">Quản lý hồ sơ</p>
                                                            </Link>
                                                        </li>
                                                        <li className="px-3 py-2 cursor-pointer">
                                                            <Link to="/thong-tin-ca-nhan" className="text-md flex items-center">
                                                                <div className="icon size-6">
                                                                    <FontAwesomeIcon icon={faUser} />
                                                                </div>
                                                                <p className="ml-2 hover:text-primary transition-colors duration-100 linear text-md text-gray-200">Tài khoản và cài đặt</p>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>


                                            </div>
                                        )}
                                    >
                                        <div className="flex px-4 justify-between w-full cursor-pointer">
                                            <div className="avatar-user size-8 rounded-md overflow-hidden">
                                                <img className="object-cover size-full" src={defaultAvatar} alt="avata" />
                                            </div>

                                            <div className=" text-text ml-2">
                                                <FontAwesomeIcon className="text-2xl" icon={faSortDown} />
                                            </div>

                                        </div>
                                    </Tippy>
                                </span>
                            ) : (
                                <Button className={cx('ml-4 block cursor-pointer')} onClick={() => setShow(true)} transparent>Đăng nhập</Button>
                            )}

                            <ul className='flex flex-col text-sm pt-4 h-full overflow-auto'>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to={configs.routes.trangchu} exact>Trang chủ</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to="/truyen-hinh" exact>Truyền hình</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to={configs.routes.phimbo} exact>Phim bộ</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to={configs.routes.single} exact>Phim lẻ</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to="/vleague" exact>V.League</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to={configs.routes.tvshows} exact>TV Shows</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to={configs.routes.anime} exact>Anime</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to=''>Trực tiếp</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to=''>Galaxy Play</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to=''>Thiếu nhi</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to=''>K+</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to=''>Âm nhạc</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to=''>Giải trí</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to=''>ASEAN Cup</NavLink>
                                </li>
                             
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to=''>Podcast</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to=''>Học tập</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to=''>Thể thao</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to=''>FA Cup</NavLink>
                                </li>
                                <li onClick={()=>{setShowBar(!showBar); toTop()}}>
                                    <NavLink className={nav => cx('font-bold block px-5 py-2 text-text hover:text-primary', { active: nav.isActive })} to=''>NBANBA</NavLink>
                                </li>
                            </ul>
                        </nav>


                    </div>

                    <div className="action flex items-center">
                        <div onClick={toTop} className="search-icon flex mr-4 order-2 lg:order-1 cursor-pointer">
                            <Link className="m-auto flex" to='/tim-kiem'>
                                <FontAwesomeIcon className="text-text m-auto text-xl ml-4 lg:ml-0 hover:text-primary" icon={faMagnifyingGlass} />
                            </Link>
                        </div>
                        <div className="notification order-2 mr-4 cursor-pointer hidden lg:block">
                            <FontAwesomeIcon className="text-text text-xl hover:text-primary" icon={faBell} />
                        </div>

                        <Button hiddenMobileIcon icon={<FontAwesomeIcon icon={faWallet} />} className='rounded-md md:px-4 lg:py-2 px-3 py-2 md:w-[113px] md:h-[40px] w-[86px] h-[34px] text-white flex items-center justify-center text-sm md:text-md order-1 lg:order-3' to='/muagoi' primary fontBold>Mua gói</Button>

                        {isUser ? (
                            <span className="hidden lg:block relative order-4">
                                <Tippy

                                    interactive
                                    trigger="click"
                                    // offset={[-145, 16]}
                                    placement="bottom-end"
                                    render={attrs => (
                                        <div className='box' tabIndex="-1" {...attrs}>

                                            <div className={cx('tippy min-w-[220px] bg-[#1F1F1F] rounded-md z-10')}>
                                                <ul className="text-text py-2 list-none">
                                                    <li className="px-3 py-2 cursor-pointer">
                                                        <Link to="/nguoi-dung" className="text-md flex items-center">
                                                            <div className="icon size-6 rounded-md overflow-hidden">
                                                                <img className="object-cover size-full" src={profileAvatar} alt="avata" />
                                                            </div>
                                                            <p className="ml-2 hover:text-primary transition-colors duration-100 linear text-md text-gray-200"> Người dùng</p>
                                                        </Link>
                                                    </li>
                                                    <li className="px-3 py-2 cursor-pointer">
                                                        <Link to="/tre-em" className="text-md flex items-center">
                                                            <div className="icon size-6 rounded-md overflow-hidden">
                                                                <img className="object-cover size-full" src={defaultAvatar} alt="avata" />
                                                            </div>
                                                            <p className="ml-2 hover:text-primary transition-colors duration-100 linear text-md text-gray-200"> Trẻ em</p>
                                                        </Link>
                                                    </li>
                                                    <li className="px-3 py-2 cursor-pointer">
                                                        <Link to="/quan-ly-ho-so" className="text-md flex items-center">
                                                            <div className="icon size-6">
                                                                <FontAwesomeIcon icon={faPen} />
                                                            </div>
                                                            <p className="ml-2 hover:text-primary transition-colors duration-100 linear text-md text-gray-200">Quản lý hồ sơ</p>
                                                        </Link>
                                                    </li>
                                                    <li className="px-3 py-2 cursor-pointer">
                                                        <Link to="/thong-tin-ca-nhan" className="text-md flex items-center">
                                                            <div className="icon size-6">
                                                                <FontAwesomeIcon icon={faUser} />
                                                            </div>
                                                            <p className="ml-2 hover:text-primary transition-colors duration-100 linear text-md text-gray-200">Tài khoản và cài đặt</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>


                                        </div>
                                    )}
                                >
                                    <div className="flex ml-4 cursor-pointer">
                                        <div className="avatar-user size-8 rounded-md overflow-hidden">
                                            <img className="object-cover size-full" src={defaultAvatar} alt="avata" />
                                        </div>

                                        <div className=" text-text ml-2">
                                            <FontAwesomeIcon className="text-2xl" icon={faSortDown} />
                                        </div>

                                    </div>
                                </Tippy>
                            </span>
                        ) : (
                            <Button className='rounded-md md:px-4 lg:py-2 px-3 py-2 w-[113px] h-[40px] text-white items-center justify-center text-sm  hidden lg:block order-4' onClick={() => setShow(true)} transparent>Đăng nhập</Button>
                        )}



                    </div>

                </div>


            <div onClick={()=>{setShowBar(!showBar); toTop()}} className={classNames('overLay fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-40', {block: showBar, hidden: !showBar})}></div>
            </header>
            {show ? <LoginPage setShow={() => setShow(false)} /> : <div />}
        </>
    );
}

export default Header;