import { useState, useEffect } from 'react'

import axios from 'axios';
// import { get } from '../../utils/httpRequest.jsx'
import services from '../../services';
// import { GlobalContext } from '../../contexts/GlobalState';
import ItemSlide from '../../components/ItemSlide';
// import ItemSlide from '../../components/ItemSlide';

import Hero from "../../components/Hero";
// import { GlobalContext } from '../../contexts/GlobalState'


import hanhDong from '../../assets/imgs/categorys/Hanh_dong-anime.png';
import hocDuong from '../../assets/imgs/categorys/Hoc-duong-anime.png';
import phieuLuu from '../../assets/imgs/categorys/Phieu-luu-anime.png';
import tinhCam from '../../assets/imgs/categorys/Tinh-cam-anime.png';
import vienTuong from '../../assets/imgs/categorys/Vien-tuong-anime.png';

import CategoryItem from '../../components/Category/categoryItem.jsx';
import CategoryWrapper from '../../components/Category/categoryWrapper.jsx';

function Anime() {
    const [anime, setAnime] = useState({})
    const [animeLove, setAnimeLove] = useState({})
    const [animeChina, setAnimeChina] = useState({})
    const [animeAction, setAnimeAction] = useState({})
    const [animePhieuLuu, setAnimePhieuLuu] = useState({})
    const [animeSchool, setAnimeSchool] = useState({})


    useEffect(() => {
        const fetchApi = async () => {
            try {
                const [anime, animeLove, animeChina, animeAction, phieuLuu, animeSchool] = await axios.all([

                    services.render('danh-sach/hoat-hinh'),
                    services.render('danh-sach/hoat-hinh', {category: 'tinh-cam'}),
                    services.render('danh-sach/hoat-hinh', {country: 'trung-quoc'}),
                    services.render('danh-sach/hoat-hinh', {category: 'hanh-dong'}),
                    services.render('danh-sach/hoat-hinh', {category: 'phieu-luu'}),
                    services.render('danh-sach/hoat-hinh', {category: 'hoc-duong'}),

                ])

                setAnime(anime)
                setAnimeLove(animeLove)
                setAnimeChina(animeChina)
                setAnimeAction(animeAction)
                setAnimePhieuLuu(phieuLuu)
                setAnimeSchool(animeSchool)


            } catch (error) {
                console.error('Error fetching data', error);
            }

            // const a = await res1.json()
        }

        fetchApi()

    }, []);

    return (
        <div className="anime-page" id="anime-page">
            <Hero data={anime} />


            <div className="category mt-10">
                <h2 className='text-white text-2xl font-bold my-4'>Thể loại</h2>
                <CategoryWrapper>
                    <CategoryItem path='danh-sach/hoat-hinh' params={{category: 'hanh-dong'}} image={hanhDong} />
                    <CategoryItem path='danh-sach/hoat-hinh' params={{category: 'vien-tuong'}} image={vienTuong} />
                    <CategoryItem path='danh-sach/hoat-hinh' params={{category: 'tinh-cam'}} image={tinhCam} />
                    <CategoryItem path='danh-sach/hoat-hinh' params={{category: 'phieu-luu'}} image={phieuLuu} />
                    <CategoryItem path='danh-sach/hoat-hinh' params={{category: 'hoc-duong'}} image={hocDuong} />      
                </CategoryWrapper>
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className=' text-2xl font-bold my-4'>Tình cảm lãng mạn</h2>
                </div>
                <ItemSlide data={animeLove} medium />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className=' text-2xl font-bold my-4'>Hoạt hình Trung Quốc</h2>
                </div>
                <ItemSlide data={animeChina} medium />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className=' text-2xl font-bold my-4'>Hành động đỉnh cao</h2>
                </div>
                <ItemSlide data={animeAction} medium />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className=' text-2xl font-bold my-4'>Phiêu lưu mạo hiểm</h2>
                </div>
                <ItemSlide data={animePhieuLuu} medium />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className=' text-2xl font-bold my-4'>Học đường</h2>
                </div>
                <ItemSlide data={animeSchool} medium />
            </div>
        </div>
    );
}

export default Anime;