import { useState, useEffect, useContext } from 'react'

import axios from 'axios';
import { get } from '../../utils/httpRequest.jsx'
import services from '../../services';
// import { GlobalContext } from '../../contexts/GlobalState';
import configs from '../../configs/index.jsx';
import ItemSlide from '../../components/ItemSlide';

import Hero from "../../components/Hero";
import { GlobalContext } from '../../contexts/GlobalState'
import { Link } from 'react-router';
function Home() {

  const [history] = useContext(GlobalContext)

  const [isRender, setIsRender] = useState(false)

  const [newMovie, setNewMovie] = useState({});
  const [seriesMovie, setSeriesMovie] = useState({});
  const [singleMovie, setsingleMovie] = useState({});
  const [animeMovie, setAnimeMovie] = useState({});
  const [tvShow, setTvShow] = useState({});
  const [seriesMovieVietNam, setSeriesMovieVietNam] = useState({});
  const [movieThaiLand, setMovieThaiLand] = useState({});
  const [children, setChildren] = useState({});
  const [loveMovies, setLoveMoies] = useState({});
  const [scienceMovies, setScienceMovies] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const [newMv, single, series, anime, tvshow, seriesVn, thaiLand, children, love, science] = await axios.all([
          get('danh-sach/phim-moi-cap-nhat', { limit: 30 }),
          services.render('danh-sach/phim-le'),
          services.render('danh-sach/phim-bo'),
          services.render('danh-sach/hoat-hinh'),
          services.render('danh-sach/tv-shows'),
          services.render('danh-sach/phim-bo', { country: 'viet-nam' }),
          services.render('quoc-gia/thai-lan'),
          services.render('the-loai/tre-em'),
          services.render('the-loai/tinh-cam'),
          services.render('the-loai/khoa-hoc'),
        ])

        setNewMovie(newMv)
        setsingleMovie(single)
        setSeriesMovie(series)
        setAnimeMovie(anime)
        setTvShow(tvshow)
        setSeriesMovieVietNam(seriesVn)
        setMovieThaiLand(thaiLand)
        setChildren(children)
        setLoveMoies(love)
        setScienceMovies(science)
        setIsRender(true)
        console.log(love);
        // console.log(single);
        // console.log(series);

      } catch (error) {
        console.error('Error fetching data', error);
      }

      // const a = await res1.json()
    }

    fetchApi()

  }, []);


  return (
    <div id="home-page">

      <Hero data={newMovie} />

      {history.length > 0 ? (
        <div className='movie mt-12'>
          <div className='flex justify-between items-center text-white'>
            <h2 className='text-xl  md:text-2xl font-bold my-4'>Đang xem</h2>
            <Link className='text-sm cursor-pointer hover:text-primary transition-colors duration-250 ease-in-out'>Xem tất cả</Link>
          </div>
          <ItemSlide data={history} small />
        </div>) : null}

      <div className='movie mt-12'>
        <div className='flex justify-between items-center text-white'>
          <h2 className='text-xl  md:text-2xl font-bold my-4'>Mới ra mắt</h2>
          <Link className='text-sm cursor-pointer hover:text-primary transition-colors duration-250 ease-in-out'>Xem tất cả</Link>
        </div>
        <ItemSlide data={newMovie} large />
      </div>


      <div className='movie mt-12'>
        <div className='flex justify-between items-center text-white'>
          <h2 className='text-xl  md:text-2xl font-bold my-4'>TV Shows</h2>
          <Link to={`${configs.routes.category}?path=danh-sach${configs.routes.tvshows}`} className='text-sm cursor-pointer hover:text-primary transition-colors duration-250 ease-in-out'>Xem tất cả</Link>
        </div>
        <ItemSlide data={tvShow} small />
      </div>


      <div className='movie mt-12'>
        <div className='flex justify-between items-center text-white'>
          <h2 className='text-xl  md:text-2xl font-bold my-4'>Phim bộ hot</h2>
          <Link to={`${configs.routes.category}?path=danh-sach${configs.routes.phimbo}`} className='text-sm cursor-pointer hover:text-primary transition-colors duration-250 ease-in-out'>Xem tất cả</Link>
        </div>
        <ItemSlide data={seriesMovie} medium />
      </div>

      <div className='movie mt-12'>
        <div className='flex justify-between items-center text-white'>
          <h2 className='text-xl  md:text-2xl font-bold my-4'>Phim lẻ nổi bật</h2>
          <Link to={`${configs.routes.category}?path=danh-sach${configs.routes.single}`} className='text-sm cursor-pointer hover:text-primary transition-colors duration-250 ease-in-out'>Xem tất cả</Link>
        </div>
        <ItemSlide data={singleMovie} medium />
      </div>

      <div className='movie mt-12'>
        <div className='flex justify-between items-center text-white'>
          <h2 className='text-xl  md:text-2xl font-bold my-4'>Anime hấp dẫn</h2>
          <Link to={`${configs.routes.category}?path=danh-sach${configs.routes.anime}`} className='text-sm cursor-pointer hover:text-primary transition-colors duration-250 ease-in-out'>Xem tất cả</Link>
        </div>
        <ItemSlide data={animeMovie} medium />
      </div>

      <div className='movie mt-12'>
        <div className='flex justify-between items-center text-white'>
          <h2 className='text-xl  md:text-2xl font-bold my-4'>Phim bộ Việt Nam đặc sắc</h2>
          <Link to={`${configs.routes.category}?path=danh-sach${configs.routes.phimbo}&query={"country":"viet-nam"}`} className='text-sm cursor-pointer hover:text-primary transition-colors duration-250 ease-in-out'>Xem tất cả</Link>
        </div>
        <ItemSlide data={seriesMovieVietNam} medium />
      </div>

      <div className='movie mt-12'>
        <div className='flex justify-between items-center text-white'>
          <h2 className='text-xl  md:text-2xl font-bold my-4'>Siêu phẩm Thái Lan</h2>
          <Link to={`${configs.routes.category}?path=quoc-gia/thai-lan`} className='text-sm cursor-pointer hover:text-primary transition-colors duration-250 ease-in-out'>Xem tất cả</Link>
        </div>
        <ItemSlide data={movieThaiLand} medium />
      </div>


      {isRender && children.data.items.length > 0 ? (
        <div className='movie mt-12'>
          <div className='flex justify-between items-center text-white'>
            <h2 className='text-xl  md:text-2xl font-bold my-4'>Thiếu nhi</h2>
            <Link to={`${configs.routes.category}?path=the-loai/thieu-nhi`} className='text-sm cursor-pointer hover:text-primary transition-colors duration-250 ease-in-out'>Xem tất cả</Link>
          </div>
          <ItemSlide data={children} small />
        </div>
      ) : null}

      <div className='movie mt-12'>
        <div className='flex justify-between items-center text-white'>
          <h2 className='text-xl  md:text-2xl font-bold my-4'>Muôn vàn sắc thái tình yêu</h2>
          <Link to={`${configs.routes.category}?path=the-loai/tinh-cam`} className='text-sm cursor-pointer hover:text-primary transition-colors duration-250 ease-in-out'>Xem tất cả</Link>
        </div>
        <ItemSlide data={loveMovies} medium />
      </div>

      
      <div className='movie mt-12'>
        <div className='flex justify-between items-center text-white'>
          <h2 className='text-xl  md:text-2xl font-bold my-4'>Khoa học hấp dẫn</h2>
          <Link to={`${configs.routes.category}?path=the-loai/khoa-hoc`} className='text-sm cursor-pointer hover:text-primary transition-colors duration-250 ease-in-out'>Xem tất cả</Link>
        </div>
        <ItemSlide data={scienceMovies} medium />
      </div>

    </div>
  );
}

export default Home;