import { useSearchParams } from "react-router";
import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router";

import services from "../../services";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import VideoPlayer from '../../components/VideoPlayer'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
// import configs from '../../configs';


import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { toTop } from "../../utils/helpers";

import rateStar from '../../assets/imgs/rate-star.png'
import nonRateStar from '../../assets/imgs/non-rate-star.png'
import heart from '../../assets/imgs/heart.png'
import heartFill from '../../assets/imgs/heart-fill.png'
import shareIcon from '../../assets/imgs/share.png'
import liveImage from '../../assets/imgs/live.gif'

import classNames from "classnames/bind";
import styles from './video.module.scss'

const cx = classNames.bind(styles)


function Video() {
    const [searchParams] = useSearchParams();
    const slug = searchParams.get('slug');

    const [isRender, setIsRender] = useState(false)
    const swiperRef = useRef(null);
  


    const [showContent, setShowContent] = useState(false)
    const [following, setFollowing] = useState(false)
    const [movie, setMovie] = useState({})
    const [src, setSrc] = useState('')
    const [activeEpisode, setActiveEpisode] = useState(null);
    const rateRef = useRef()
    const movieRef = useRef()
    const trailerUrl = useRef()

    useEffect(() => {
        setIsRender(true)
    }, [])

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await services.renderDetail(slug);
                // console.log(response)
                trailerUrl.current = response.movie.trailer_url;
                setSrc(response.episodes[0].server_data[0].link_m3u8)
                setMovie(response);
                setActiveEpisode(response.episodes[0].server_data[0].slug);

            }
            catch (err) {
                console.error("Error fetching movie", err);
            };
        }
        fetchApi()
    }, [slug]);

    // console.log(trailerUrl.current)

    const getEmbedUrl = (youtubeUrl) => {

        if (youtubeUrl.length > 0) {
            const videoId = youtubeUrl.split("v=")[1]?.split("&")[0]; // Lấy ID từ URL
            return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
        } else {
            return '';
        }
    }
    if (isRender) {
        if (typeof (trailerUrl.current) == 'string') {
            // console.log(trailerUrl.current)
            var trailer = getEmbedUrl(trailerUrl.current)
       
        }

    }

   



    const handleLive = (item) => {
        toTop()
        setActiveEpisode(item.slug);
        setSrc(item.link_m3u8)
    }

    
    return (
        <>
            {Object.keys(movie).length > 0 || movie.status || movie.status === 'success' ? (
                <div className="video-page">
                    <div className="movie mt-[80px]">
                        <div className="video lg:h-[600px] flex items-center">
                            {
                                src.startsWith('https://www.youtube.com') ? (
                                    <iframe title="video" width="100%" height="640" src={src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                ) : (
                                    <VideoPlayer src={src} />
                                )
                            }
                        </div>
                    </div>

                    <div className="movie-detail mt-20 grid grid-cols-1 gap-6 text-white lg:grid-cols-3">
                        <div className="col-span-2">
                            <div className="w-full">
                                <h1 className="text-xl  md:text-2xl uppercase">{movie.movie.name}</h1>
                                <h3 className="text-base my-4 capitalize text-[#d2d2d2]">{movie.movie.origin_name}</h3>
                                <div className="flex items-center gap-3">

                                    <Button className="min-w-26 h-8 flex items-center justify-center bg-gray rounded-md" icon={<img src={rateStar} alt="rate star" />}>0 ({movie.movie.view})</Button>
                                    <div ref={rateRef} className="rate-star flex gap-1 cursor-pointer">
                                        <img src={nonRateStar} className="none-rate-star" />
                                        <img src={nonRateStar} className="none-rate-star" />
                                        <img src={nonRateStar} className="none-rate-star" />
                                        <img src={nonRateStar} className="none-rate-star" />
                                        <img src={nonRateStar} className="none-rate-star" />
                                    </div>
                                </div>
                                <ul className=" flex gap-2 text-sm text-[#d2d2d2] my-4">
                                    <li className="text-primary">Mới</li>
                                    <li>{movie.movie.year}</li>
                                    <li className="flex items-center">
                                        <FontAwesomeIcon className="text-[3px] mr-2" icon={faCircle} />
                                        <p>{movie.movie.episode_current === 'Full' ? movie.movie.episode_current : `${movie.movie.episode_current}/${movie.movie.episode_total}`}</p>

                                    </li>
                                    {movie.movie.country.map(country => (
                                        <li className="flex items-center" key={country.id}>
                                            <FontAwesomeIcon className="text-[3px] mr-2" icon={faCircle} />
                                            <p>{country.name}</p>
                                        </li>
                                    ))}
                                </ul>

                                <ul className="category flex text-[#d2d2d2] my-4 text-sm ">
                                    {movie.movie.category.map(category => (
                                        <li className="flex items-center mr-2" key={category.id}>
                                            <FontAwesomeIcon className="text-[3px] mr-2" icon={faCircle} />
                                            <p>{category.name}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="movie-des text-sm relative text-[#d2d2d2]">
                                    <p className={classNames('content w-full text-sm leading-5 max-h-10 overflow-hidden', { 'max-h-full': showContent })}>{movie.movie.content}</p>
                                    <p
                                        onClick={() => setShowContent(true)}
                                        className={classNames('read-more z-10 bg-black absolute bottom-0 right-0  text-text px-2  hover:text-white transition-colors duration-400 ease text-sm  cursor-pointer', { inline: !showContent, hidden: showContent })}>
                                        ...Thêm
                                    </p>
                                    <p
                                        onClick={() => setShowContent(false)}
                                        className={classNames('read-more z-10 bg-black absolute -bottom-10 right-0  text-text px-2 py-1  hover:text-white transition-colors duration-400 ease text-sm cursor-pointer mt-2', { inline: showContent, hidden: !showContent })}>
                                        Ẩn bớt
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 text-[#d2d2d2]">
                            <div className="w-full">
                                <div className="flex gap-8 text-white text-sm font-bold">
                                    <Button className="flex items-center cursor-pointer "
                                        onClick={() => setFollowing(!following)}
                                        icon={!following ? <img className="size-6" src={heart} /> : <img className="size-6" src={heartFill} />}
                                    >
                                        Theo dõi
                                    </Button>
                                    <Button className="flex items-center cursor-pointer " icon={<img className="size-5" src={shareIcon} />}>Chia sẻ</Button>
                                </div>


                                <div className="info flex flex-wrap text-sm mt-4 text-[#d2d2d2]">
                                    <p className="text-nowrap w-[25%] mb-2 pr-6">Đạo diễn: </p>
                                    <p className="w-[75%] mb-2">{movie.movie.director.join(', ')}</p>
                                    <p className="text-nowrap w-[25%] mb-2 pr-6">Diễn viên: </p>
                                    <p className="w-[75%] mb-2">{movie.movie.actor.join(', ')}</p>
                                    <p className="text-nowrap w-[25%] mb-2 pr-6">Thể loại: </p>
                                    <p className="w-[75%] mb-2">{(movie.movie.category.map(item => item.name)).join(', ')}</p>
                                    <p className="text-nowrap w-[25%] mb-2 pr-6">Danh mục: </p>
                                    <p className="w-[75%] mb-2">{movie.movie.type}</p>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div className="my-14">
                        <h1 className="text-2xl mb-6 font-bold text-white uppercase">danh sách</h1>
                        <div className="item-slide relative group">
                            <Swiper
                                spaceBetween={10}
                                cssMode
                                ref={movieRef}
                                freeMode={true}
                                modules={[Navigation, FreeMode]}
                                // navigation // Hiển thị nút điều hướng
                                onSwiper={(swiper) => (swiperRef.current = swiper)} // Lưu instance của Swiper
                                speed={200} // Tăng tốc độ trượt (ms)
                                effect="slide" // Hiệu ứng mượt mà (có thể dùng 'slide', 'fade', 'cube', 'coverflow', 'flip')
                            >
                                {/* data._id || data.status || data.status === 'success'? */}
                                {movie.episodes[0].server_data.map((item, index) => (
                                    <SwiperSlide key={index} className={cx('swiper-slide')}>
                                        <div style={{ width: '207px' }} className='group'>
                                            <div className="movie-list-episode" onClick={() => handleLive(item)}>
                                                <div data-slug={item.slug} className={cx('movie-item')}>

                                                    <div className={cx('icon-play')} >
                                                        <FontAwesomeIcon icon={faPlay} />
                                                    </div>
                                                    <img className='size-full object-cover rounded-md'
                                                        src={movie.movie.thumb_url}
                                                        alt={item.name}
                                                    />
                                                    <img
                                                        className='live-img absolute bottom-3 right-3 size-8'
                                                        src={liveImage}
                                                        style={{ display: activeEpisode === item.slug ? 'block' : 'none' }}
                                                    />

                                                </div>
                                            </div>
                                            <h4 className='capitalize text-gray-300 leading-6 max-h-12 overflow-hidden text-[1rem] text-left mt-3'>{item.name}</h4>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <button
                                className="absolute w-[6%] h-[120px] opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity ease delay-200 duration-300 z-20 top-0 left-0 bg-linear-to-r from-black to-black/70 text-white text-2xl cursor-pointer"
                                onClick={() => swiperRef.current.slidePrev()}
                            >
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </button>
                            <button
                                className="absolute w-[6%] h-[120px] opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity ease delay-200 duration-300 z-20 top-0 right-0 bg-linear-to-l from-black to-black/70 text-white text-2xl cursor-pointer"
                                onClick={() => swiperRef.current.slideNext()}
                            >
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </div>
                    </div>

                  {trailerUrl.current.length > 0 ? (
                      <div className="trailer">
                      <h1 className="text-2xl mb-4 font-bold text-white">Trailer - Clip hậu trường</h1>
                      <div className="">
                         <div  onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}) ;setSrc(trailer)}} className="group relative cursor-pointer w-[207px] h-[120px] "> 
                            <div className="top-0 left-0 bottom-0 right-0 absolute bg-black/60 hidden group-hover:block"/>
                            <img className="rounded-md size-full" src={movie.movie.thumb_url} alt="" />
                         </div>
                            <p className="text-white mt-4">Trailer</p>
                      </div>
                  </div>
                  ) : null}

                  <div className="comment mt-10">
                    <h1 className="text-2xl mb-4 font-bold text-white">Bình luận</h1>
                    <div className="comments">
                        <button className="rounded-md text-white text-sm italic bg-[#151515] text-center w-[100%] md:w-[60%] h-[50px]">Bình luận bị vô hiệu hóa trên video này</button>
                  </div>
                  </div>

                </div>
            ) : (null)}
        </>
    )
}

export default Video;