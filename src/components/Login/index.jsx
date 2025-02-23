import { useState } from "react";
import { Link } from "react-router";
import classNames from "classnames/bind";
import styles from './Login.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import logo from '/src/assets/imgs/logo.png';
import Button from "../Button";

const cx = classNames.bind(styles)

function LoginPage({ setShow }) {
    const [activeButton, setActiveButton] = useState(false)
    // const [showModal, setShowModal] = useState(true)

    const handleChecked = () => {
        setActiveButton(!activeButton)
    }

    return (
        <div className="login-fid-modal top-0 left-0 bottom-0 right-0 fixed bg-cover bg-no-repeat bg-center bg-[url(https://images.fptplay53.net/media/photo/OTT/2025/02/06/exportbg-login-tablet-landscape_1738860359372.jpg?w=1018&c=0)] z-50">
            <div className="modal-overlay size-full absolute bg-black/80 backdrop-blur-sm">
                <div className="logo absolute top-6 left-[50%] translate-x-[-50%] w-[210px] h-[50px]">
                    <img className="object-cover size-full" src={logo} alt="logo" />
                </div>
                <div className="close-modal absolute top-6 right-6 size-8 rounded-full bg-gray-600 text-gray-300 text-xl text-center leading-8 cursor-pointer" onClick={setShow}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="modal-login-form bg-[#202020] rounded-2xl absolute top-[50%] left-[50%] p-16 translate-x-[-50%] translate-y-[-50%] w-[503px]">
                    <h2 className="text-3xl font-bold text-gray-300">Đăng nhập hoặc đăng ký</h2>
                    <div className="form-group">
                        <input type="number" autoComplete="off" className="form-input w-full h-14 mt-10 p-4 rounded-md text-white outline-none bg-[#2c2c2e]" placeholder="Số điện thoại" />
                    </div>
                    <div className="form-group">
                        {activeButton ? (
                            <Button className={cx('button w-full rounded-md h-12 mt-8')} id={cx('login-btn')} primary type="submit">Tiếp tục</Button>

                        ) : (
                            <Button className={cx('button w-full bg-[#2c2c2e] rounded-md h-12 mt-8 text-text')} id={cx('login-btn')} unActive type="submit">Tiếp tục</Button>

                        )}
                    </div>
                    <div className="form-group flex items-start  mt-6">
                        <div className="relative size-6 cursor-pointer mt-1">
                            <input type="checkbox" onChange={handleChecked} className={cx('checkbox')} id="checkbox" />
                            <label className={cx('checkbox-label')} htmlFor="checkbox"></label>
                        </div>
                        <p className="text-gray-500 select-none text-sm leading-5">Tôi đã đọc và đồng ý với <Link to="dieukhoansudung" className="text-primary underline text-sm">Điều khoản sử dụng FPT Play</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

LoginPage.propTypes = {
    setShow: PropTypes.func.isRequired
};

export default LoginPage;