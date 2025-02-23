
// import SwiperSlide from '../SwiperSlide'
import PropTypes from 'prop-types';
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HeroSlide from '../HeroSlide'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import "swiper/css/effect-flip"; // Import hiệu ứng fade
import './Hero.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Hero({ data }) {

  // console.log(data)

  const swiperRef = useRef(null);

  return (
    <>
      {
        Object.keys(data).length > 0 ? (
          <div className="hero overflow-hidden">
            <div className="w-full mt-[80px] relative">
              <div className="relative size-full">
                <Swiper
                  className="swiper-container rounded-md size-full ease"
                  // spaceBetween={50}
                  cssMode
                  slidesPerView={1}
                  modules={[Navigation, Pagination, Autoplay]}
                  loop={true} // Lặp vô hạn
                  autoplay={{ delay: 7000, disableOnInteraction: false }} // Tự động chạy
                  // navigation // Hiển thị nút điều hướng
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}

                  onSwiper={(swiper) => (swiperRef.current = swiper)} // Lưu instance của Swiper
                  speed={2000} // Tăng tốc độ trượt (ms)
                  // effect="slide" // Hiệu ứng mượt mà (có thể dùng 'slide', 'fade', 'cube', 'coverflow', 'flip')
                >

                  {data.status ? (

                    (data.items || data.data.items).map((item, index) => (
                      <SwiperSlide className='rounded overflow-hidden' key={index} >
                        <HeroSlide item={item} />

                      </SwiperSlide>
                    ))

                  ) : null}


                </Swiper>

                <button
                  className="absolute hidden md:block z-10 top-1/2 left-2 transform -translate-y-1/2 p-4 transition-colors duration-200 linear text-gray-600 text-5xl cursor-pointer hover:text-white"
                  onClick={() => swiperRef.current.slidePrev()}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button
                  className="absolute  hidden md:block z-10 top-1/2 right-2 transform -translate-y-1/2 p-4 transition-colors duration-200 linear text-gray-600 text-5xl cursor-pointer hover:text-white"
                  onClick={() => swiperRef.current.slideNext()}
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>

              </div>



            </div>
          </div>

        ) : null
      }
    </>
  );
  // console.log(data.data)
}

Hero.propTypes = {
  data: PropTypes.object,
};

export default Hero
