import { useRef, useState, useContext } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import configs from '../../configs';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/free-mode";
import "swiper/scss/effect-fade"; // Import hiệu ứng fade


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '../../contexts/GlobalState'

import defaultImageMedium from '../../assets/imgs/no_img.jpg'
import defaultImageLarge from '../../assets/imgs/default-background.jpg'

import { toTop } from '../../utils/helpers';

import classNames from 'classnames/bind';
import styles from './ItemSlide.module.scss'
const cx = classNames.bind(styles)


function ItemSlide({ large, medium, small, data }) {

    const [load, setLoad] = useState(false)
    const [history, setHistory] = useContext(GlobalContext)
    const swiperRef = useRef(null);

    const styles = {
        width: '6%',
        height: '80%',
    };

    const classes = cx({
        large,
        small,
        medium,
    })

    const handleSetHistory = (item) => {

        const check = history.some(value => {
            return value.slug === item.slug
        })
        if (check) {
            return
        } else {
            setHistory(history => [...history, item])
        }
    }

    return (
        <div className="item-slide relative group">
            <Swiper
                className="swiper-container size-full ease-in flex"
                spaceBetween={10}
                cssMode
                freeMode={true}
                modules={[Navigation, FreeMode]}
                // navigation // Hiển thị nút điều hướng
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Lưu instance của Swiper
                speed={200} // Tăng tốc độ trượt (ms)
                effect="slide" // Hiệu ứng mượt mà (có thể dùng 'slide', 'fade', 'cube', 'coverflow', 'flip')
            >
                {/* data._id || data.status || data.status === 'success'? */}
                {Object.keys(data).length > 0 || data.length > 0 ? (Array.isArray(data) ? data : (data.items || data.data.items)).map((item, index) => (
                    <SwiperSlide key={index} className={cx('swiper-slide')}>
                        <div className={cx(classes, 'relative')}>

                            <Link className={cx('size-full  group', 'slide')} onClick={() => { handleSetHistory(item); toTop() }} to={`${configs.routes.video}?slug=${item.slug}`}>
                         
                                <div className={cx('icon-play', 'absolute top-[35%] left-[50%] translate-x-[-50%]')}> <FontAwesomeIcon className={cx('text-white  text-3xl')} icon={faPlay} /></div>
                                <img

                                    className={cx('w-full h-[80%] object-cover rounded-md')}
                                    onLoad={() => setLoad(true)}
                                    src={!load ? (medium ? defaultImageMedium : defaultImageLarge) : (item.thumb_url.startsWith('https://phimimg.com') ? item.thumb_url : `https://phimimg.com/${item.thumb_url} `)}
                                    alt={item.name}
                                />
                            </Link>
                            <h4 className='capitalize h-[20%] text-white font-[400] leading-6 max-h-12 overflow-hidden text-[1rem] text-left mt-3'>{item.name}</h4>
                        </div>
                    </SwiperSlide>
                )) : null}
            </Swiper>

            <button
                style={styles}
                className="absolute opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity ease delay-200 duration-300 z-20 top-0 left-0 bg-linear-to-r from-black to-black/70 text-white text-2xl cursor-pointer"
                onClick={() => swiperRef.current.slidePrev()}
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button
                style={styles}

                className="absolute opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity ease delay-200 duration-300 z-20 top-0 right-0 w-18 bg-linear-to-l from-black to-black/70 text-white text-2xl cursor-pointer"
                onClick={() => swiperRef.current.slideNext()}
            >
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    );
}

ItemSlide.propTypes = {
    large: PropTypes.bool,
    medium: PropTypes.bool,
    small: PropTypes.bool,
    data: PropTypes.node,
}
export default ItemSlide;