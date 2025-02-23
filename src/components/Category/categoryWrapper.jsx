import { useRef } from 'react'
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/free-mode";
import "swiper/scss/effect-fade"; // Import hiệu ứng fade


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


import classNames from 'classnames/bind';
import styles from './Category.module.scss'
const cx = classNames.bind(styles)

function CategoryWrapper({ children }) {

    const swiperRef = useRef(null);

    return (
        <div className="relative group">
            <Swiper
                className="size-full ease-in flex"
                spaceBetween={10}
                cssMode

                freeMode={true}
                modules={[Navigation, FreeMode]}
                navigation // Hiển thị nút điều hướng
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Lưu instance của Swiper
                speed={200} // Tăng tốc độ trượt (ms)
                effect="slide" // Hiệu ứng mượt mà (có thể dùng 'slide', 'fade', 'cube', 'coverflow', 'flip')
            >

                {children.map((child, index) => (
                    <SwiperSlide className={cx('swiper-slide')} key={index}>{child}</SwiperSlide>
                ))}



            </Swiper>

            <button
                style={{height: '120px', width: '6%'}}
                className="absolute opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity ease delay-200 duration-300 z-20 top-0 left-0 bg-linear-to-r from-black to-black/70 text-white text-2xl cursor-pointer"
                onClick={() => swiperRef.current.slidePrev()}
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button
                style={{height: '120px', width: '6%'}}

                className="absolute opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity ease delay-200 duration-300 z-20 top-0 right-0 w-18 bg-linear-to-l from-black to-black/70 text-white text-2xl cursor-pointer"
                onClick={() => swiperRef.current.slideNext()}
            >
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    );
}

CategoryWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CategoryWrapper;