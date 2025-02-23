import { useState, useEffect } from 'react'

import axios from 'axios';
// import { get } from '../../utils/httpRequest.jsx'
import services from '../../services';
// import { GlobalContext } from '../../contexts/GlobalState';
import ItemSlide from '../../components/ItemSlide';
// import ItemSlide from '../../components/ItemSlide';

import Hero from "../../components/Hero";

import CategoryItem from '../../components/Category/categoryItem.jsx';
import CategoryWrapper from '../../components/Category/categoryWrapper.jsx';
// import { GlobalContext } from '../../contexts/GlobalState'

import tinhCam from '../../assets/imgs/categorys/Tinh-cam.png'
import haiHuoc from '../../assets/imgs/categorys/Hai-huoc.png'
import taiLieu from '../../assets/imgs/categorys/Tai-lieu.png'
import hoatHinh from '../../assets/imgs/categorys/Hoat-hinh.png'
import kinhDi from '../../assets/imgs/categorys/Kinh-di.png'
import hanhDong from '../../assets/imgs/categorys/Hanh-dong.png'
import tamLyImg from '../../assets/imgs/categorys/Tam-ly.png'


function Single() {

    const [singleMovie, setSingleMovie] = useState({})
    const [actionMovie, setActionMovie] = useState({})
    const [tamLy, setTamLy] = useState({})
    const [kinhDiMovie, setKinhDiMovie] = useState({})
    const [HaiHuoc, setHaiHuoc] = useState({})
    const [TinhCam, setTinhCam] = useState({})
    const [TaiLieu, setTaiLieu] = useState({})
    const [vietnam, setVietnam] = useState({})

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const [single, action, tamLy, kinhdi, HaiHuoc, TinhCam, TaiLieu, VietNam] = await axios.all([
                    services.render('danh-sach/phim-le'),
                    services.render('danh-sach/phim-le', { category: 'hanh-dong' }),
                    services.render('danh-sach/phim-le', { category: 'tam-ly' }),
                    services.render('danh-sach/phim-le', { category: 'kinh-di' }),
                    services.render('danh-sach/phim-le', { category: 'hai-huoc' }),
                    services.render('danh-sach/phim-le', { category: 'tinh-cam' }),
                    services.render('danh-sach/phim-le', { category: 'tai-lieu' }),
                    services.render('danh-sach/phim-le', { country: 'viet-nam' }),
                ])

                setSingleMovie(single)
                setActionMovie(action)
                setTamLy(tamLy)
                setKinhDiMovie(kinhdi)
                setHaiHuoc(HaiHuoc)
                setTinhCam(TinhCam)
                setTaiLieu(TaiLieu)
                setVietnam(VietNam)
            } catch (error) {
                console.error('Error fetching data', error);
            }

            // const a = await res1.json()
        }

        fetchApi()

    }, []);




    return (
        <div className="single-page" id="single-page">

            <Hero data={singleMovie} />

            <div className="category mt-10">
                <h2 className='text-white text-xl md:text-2xl font-bold my-4'>Thể loại</h2>
                <CategoryWrapper>
                    <CategoryItem path='danh-sach/phim-le' params={{category: 'tinh-cam'}} image={tinhCam} />
                    <CategoryItem path='danh-sach/phim-le' params={{category: 'kinh-di'}} image={kinhDi} />
                    <CategoryItem path='danh-sach/phim-le' params={{category: 'hoat-hinh'}} image={hoatHinh} />
                    <CategoryItem path='danh-sach/phim-le' params={{category: 'hai-huoc'}} image={haiHuoc} />
                    <CategoryItem path='danh-sach/phim-le' params={{category: 'tai-lieu'}} image={taiLieu} />
                    <CategoryItem path='danh-sach/phim-le' params={{category: 'tam-ly'}} image={tamLyImg }/>                
                    <CategoryItem path='danh-sach/phim-le' params={{category: 'hanh-dong'}} image={hanhDong} />
                </CategoryWrapper>
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className=' text-xl md:text-2xl font-bold my-4'>Một mình vẫn vui</h2>
                </div>
                <ItemSlide data={singleMovie} medium />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className=' text-xl md:text-2xl font-bold my-4'>Phim hành động gay cấn</h2>
                </div>
                <ItemSlide data={actionMovie} medium />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className=' text-xl md:text-2xl font-bold my-4'> Phim tâm lý đỉnh cao</h2>
                </div>
                <ItemSlide data={tamLy} medium />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className=' text-xl md:text-2xl font-bold my-4'>Phim kinh dị giật gân</h2>
                </div>
                <ItemSlide data={kinhDiMovie} medium />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className=' text-xl md:text-2xl font-bold my-4'>Phim hài hước đặc sắc</h2>
                </div>
                <ItemSlide data={HaiHuoc} medium />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className=' text-xl md:text-2xl font-bold my-4'>Phim tình cảm lãng mạn</h2>
                </div>
                <ItemSlide data={TinhCam} medium />
            </div>

            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className=' text-xl md:text-2xl font-bold my-4'>Phim tài liệu chân thực</h2>
                </div>
                <ItemSlide data={TaiLieu} medium />
            </div>

            
            <div className='movie mt-12'>
                <div className='flex justify-between items-center text-white'>
                    <h2 className=' text-xl md:text-2xl font-bold my-4'>Điện ảnh Việt</h2>
                </div>
                <ItemSlide data={vietnam} medium />
            </div>
        </div>
    );
}

export default Single