import { useEffect, useState, useRef } from "react";
// import { useDebounce } from 'use-debounce';

import TrendingMovie from "../../components/TrendingMovie";
import { get } from '../../utils/httpRequest.jsx'
import Button from '../../components/Button'
import SearchMovie from '../../components/SearchMovie'

function Search() {
    // const btnRef = useRef()
    // const clearRef = useRef()
    // const inputRef = useRef()
    // const [inputValue, setInputValue] = useState('')
    const [movie, setMovie] = useState({})
    // const [debounce] = useDebounce(inputValue, 500)
    let checkRef = useRef(false);

    // console.log('re-render search page')
 

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await get('danh-sach/phim-moi-cap-nhat', { page: 1, limit: 7 })
                // console.log(response);
                checkRef.current = true;
                setMovie(response)
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchApi();
    }, [])

    // console.log(debounce)

    return (
        <div className="search mt-[80px] relative">
           
           <SearchMovie/>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 text-white">
                <div className="col-span-1">
                    <h1 className="text-white text-xl mb-6 font-bold">Xu hướng gần đây</h1>
                    <div className="trending">
                        {checkRef.current ? movie.items.map((item, index) => {
                            return <TrendingMovie key={index} item={item} />
                        }) : null}
                    </div>
                </div>
                <div className="col-span-1">
                    <h1 className="text-white text-xl mb-6 font-bold">Tìm kiếm hàng đầu</h1>
                    <div className="top-search flex flex-wrap gap-x-2.5 gap-y-4 text-sm">
                        <Button rounded className="button cursor-pointer select-none hover:text-primary duration-200 ease px-4 h-9 min-w-10 bg-[#151515]">hello world</Button>
                        <Button rounded className="button cursor-pointer select-none hover:text-primary duration-200 ease px-4 h-9 min-w-10 bg-[#151515]">held</Button>
                        <Button rounded className="button cursor-pointer select-none hover:text-primary duration-200 ease px-4 h-9 min-w-10 bg-[#151515]">hellld</Button>
                        <Button rounded className="button cursor-pointer select-none hover:text-primary duration-200 ease px-4 h-9 min-w-10 bg-[#151515]">hello wdfsdfdsorld</Button>
                        <Button rounded className="button cursor-pointer select-none hover:text-primary duration-200 ease px-4 h-9 min-w-10 bg-[#151515]">heworld</Button>
                        <Button rounded className="button cursor-pointer select-none hover:text-primary duration-200 ease px-4 h-9 min-w-10 bg-[#151515]">ld</Button>
                        <Button rounded className="button cursor-pointer select-none hover:text-primary duration-200 ease px-4 h-9 min-w-10 bg-[#151515]">heldfsdflo world</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;