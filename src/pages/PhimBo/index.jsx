import { useState, useEffect } from 'react'

import axios from 'axios';
// import { get } from '../../utils/httpRequest.jsx'
import services from '../../services';
// import { GlobalContext } from '../../contexts/GlobalState';
import ItemSlide from '../../components/ItemSlide';
// import ItemSlide from '../../components/ItemSlide';

import Hero from "../../components/Hero";
// import { GlobalContext } from '../../contexts/GlobalState'

import HoaNgu from '../../assets/imgs/categorys/HoaNgu.png'
import HanQuoc from '../../assets/imgs/categorys/HanQuoc.png'
import AuMy from '../../assets/imgs/categorys/AuMy.png'
import ThaiLand from '../../assets/imgs/categorys/ThaiLand.png'
import VietNam from '../../assets/imgs/categorys/VietNam.png'
import Khac from '../../assets/imgs/categorys/Khac.png'


import CategoryItem from '../../components/Category/categoryItem.jsx';
import CategoryWrapper from '../../components/Category/categoryWrapper.jsx';
function PhimBo() {

    // const [history] = useContext(GlobalContext)
    const [seriesMovie, setSeriesMovie] = useState({});
    const [loveMovies, setLoveMoies] = useState({});
    const [chinaLoveMovies, setChinaLoveMovies] = useState({});
    const [seriesMovieVietNam, setSeriesMovieVietNam] = useState({});
    const [chinaMovies, setChinaMovies] = useState({});
    const [koreanMovie, setKoreanMovies] = useState({});
    const [cotrang, setCoTrang] = useState({});
    const [thaiLand, setThaiLand] = useState({});
    const [vietSub, setVietSub] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const [series, love, chinaLove, vietnam, china, korean, cotrang, thaiLand, vietsub] = await axios.all([
                    services.render('danh-sach/phim-bo'),
                    services.render('danh-sach/phim-bo', { category: 'tinh-cam' }),
                    services.render('danh-sach/phim-bo', { category: 'tinh-cam', country: 'trung-quoc' }),
                    services.render('danh-sach/phim-bo', { country: 'viet-nam' }),
                    services.render('danh-sach/phim-bo', { country: 'trung-quoc' }),
                    services.render('danh-sach/phim-bo', { country: 'han-quoc' }),
                    services.render('danh-sach/phim-bo', { category: 'co-trang', country: 'trung-quoc' }),
                    services.render('danh-sach/phim-bo', { country: 'thai-lan' }),
                    services.render('danh-sach/phim-bo', { sort_lang: 'vietsub' }),

                ])

                setSeriesMovie(series)
                setLoveMoies(love)
                setChinaLoveMovies(chinaLove)
                setSeriesMovieVietNam(vietnam)
                setChinaMovies(china)
                setKoreanMovies(korean)
                setCoTrang(cotrang)
                setThaiLand(thaiLand)
                setVietSub(vietsub)
                // console.log(china)


            } catch (error) {
                console.error('Error fetching data', error);
            }

            // const a = await res1.json()
        }

        fetchApi()

    }, []);




    return (
        <div className='series-page' id='series-page'>
            <Hero data={seriesMovie} />

            <div className="category mt-10">
                <h2 className='text-whitetext-xl md:text-2xl font-bold my-4'>Thể loại</h2>
                <CategoryWrapper>
                    <CategoryItem params={{category: 'hoa-ngu'}} image={HoaNgu} />
                    <CategoryItem params={{country: 'viet-nam'}} image={VietNam} />
                    <CategoryItem params={{country: 'thai-lan'}} image={ThaiLand} />
                    <CategoryItem params={{country: 'hanquoc'}} image={HanQuoc} />
                    <CategoryItem params={{country: 'au-my'}} image={AuMy} />
                    <CategoryItem params={{country: 'quoc-gia-khac'}} image={Khac} />                  
                </CategoryWrapper>
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className='text-xl md:text-2xl font-bold my-4'>Phim bộ hot</h2>
                </div>
                <ItemSlide data={seriesMovie} medium />
            </div>

            

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className='text-xl md:text-2xl font-bold my-4'>Top phim Hoa ngữ &quot;bạo đỏ&quot;</h2>
                </div>
                <ItemSlide data={chinaLoveMovies} medium />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className='text-xl md:text-2xl font-bold my-4'>Phim bộ Việt Nam đặc sắc</h2>
                </div>
                <ItemSlide data={seriesMovieVietNam} medium />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className='text-xl md:text-2xl font-bold my-4'>VietSub</h2>
                </div>
                <ItemSlide data={vietSub} small />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className='text-xl md:text-2xl font-bold my-4'>Muôn vàn sắc thái tình yêu</h2>
                </div>
                <ItemSlide data={loveMovies} medium />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className='text-xl md:text-2xl font-bold my-4'>Hoa ngữ</h2>
                </div>
                <ItemSlide data={chinaMovies} small />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className='text-xl md:text-2xl font-bold my-4'>Hàn Quốc</h2>
                </div>
                <ItemSlide data={koreanMovie} small />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className='text-xl md:text-2xl font-bold my-4'>Thái Lan</h2>
                </div>
                <ItemSlide data={thaiLand} small />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className='text-xl md:text-2xl font-bold my-4'>Phim tiên hiệp, huyền huyễn</h2>
                </div>
                <ItemSlide data={cotrang} medium />
            </div>

        </div>
    );
}

export default PhimBo;