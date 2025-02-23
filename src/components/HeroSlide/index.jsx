import { useState } from 'react'
import { Link } from 'react-router';
import configs from '../../configs';

import Button from "../Button";

import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlay, faShare } from "@fortawesome/free-solid-svg-icons";


import heart from '../../assets/imgs/heart.png';
import heartFill from '../../assets/imgs/heart-fill.png';

import defaultBackground from '../../assets/imgs/default-background.jpg';

function HeroSlide({ item }) {
    // console.log(item)

    const [load, setLoad] = useState(false)
    const [follow, setFollow] = useState(false)

    return (

        <div data-slug={item.slug} className="w-full max-h-[203px] md:max-h-[640px] overflow-hidden cursor-pointer relative">
            <Link to={`${configs.routes.video}?slug=${item.slug}`} data-slug={item.slug}>
            
                <div className="absolute w-full h-[30%] bottom-0 left-0 bg-linear-to-t from-black to-transparent" />
                <div style={{background: 'linear-gradient(220deg, rgba(0,0,0,0) 31%, rgba(0,0,0,1) 82%)'}} className="absolute size-full bottom-0 left-0" />
                {/* <div style={{maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0))'}} className="absolute size-full bottom-0 left-0" /> */}
                <div className="size-full cursor-pointer">
                    <img className="w-full h-auto object-cover cursor-pointer"
                        onLoad={() => setLoad(true)}
                        src={!load ? defaultBackground : (item.thumb_url.startsWith('https://phimimg.com') ? item.thumb_url : `https://phimimg.com/${item.thumb_url}`)}
                        alt={item.name} />
                </div>
            </Link>
            <div className="absolute flex flex-col items-start z-20 bottom-2 left-2 md:bottom-4 md:left-4 lg:bottom-8 lg:left-12 text-white">
                <h2 className="movie-name text-base lg:text-2xl uppercase font-bold max-w-[500px]">{item.name || item.origin_name}</h2>
                <ul className="flex my-4 marker:bg-white">
                    <li className="mr-2 new text-primary">Mới</li>
                    <li className="mr-2 year">{item.year}</li>
                </ul>

                <div className="flex items-center">
                    <Button to={configs.routes.video} icon={<FontAwesomeIcon icon={faPlay} />} data={item.slug} className="cursor-pointer lg:w-46 w-28 h-10 lg:h-12 text-sm font-[500] leading-10 lg:leading-12 rounded-md" primary>Xem ngay</Button>
                    <div onClick={()=>setFollow(!follow)} className="icon size-10 p-2 md:p-3 md:size-12 flex items-center justify-center rounded-full cursor-pointer hover:text-primary ml-2 md:ml-4 bg-[#202020]">
                      {follow ? <img src={heartFill}/> : <img src={heart}/>}
                    </div>
                    <div className="icon size-10 p-1  md:p-3 md:size-12 text-center flex items-center justify-center rounded-full cursor-pointer hover:text-primary ml-2 md:ml-4 bg-[#202020]">
                      <FontAwesomeIcon icon={faShare}/>
                    </div>
                </div>
            </div>
        </div>


    );
}

HeroSlide.propTypes = {
    item: PropTypes.object.isRequired,
}

export default HeroSlide;