import { useEffect, useState, useRef, useContext } from "react";
import Tippy from '@tippyjs/react/headless'; // different import path!
import classNames from "classnames";
import { Link } from "react-router";
import { useDebounce } from 'use-debounce';
import services from '../../services'
import {  faSearch, faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import configs from "../../configs";
import {GlobalContext} from '../../contexts/GlobalState'
import './SearchMovie.css';

    // const cx = classNames.bind(styles)

import Button from '../../components/Button'
function Search() {
    const btnRef = useRef()
    const clearRef = useRef()
    const inputRef = useRef()
    const [inputValue, setInputValue] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [loadding, setLoadding] = useState(false)
    const [history, setHistory] = useContext(GlobalContext)
    // const [movie, setMovie] = useState({})
    const [debounce] = useDebounce(inputValue, 300)
    // let checkRef = useRef(false);


    const handleSearch = e => {
        setInputValue(e.target.value)
    }

    const handleClear = () => {
        inputRef.current.focus()
        setLoadding(false)
        setSearchResults([])
        setInputValue('')
    }

    useEffect(() => {

        if(inputValue.length === 0) {
            setLoadding(false)
            setSearchResults([])         
        }

        const fetchApi = async () => {
            try {
                if(inputValue.length === 0) return;
                setLoadding(true)
                const response = await services.search(inputValue);
                // setMovie(response);
                setShowResults(true)
                setSearchResults(response.data.items)
                setLoadding(false)

            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchApi();
    }, [debounce])



    return (
        <span className="w-full relative container">
            <Tippy
                title={'tippy-box'}
                zIndex={10}
                interactive
                onClickOutside={() => setShowResults(false)}
                maxWidth='100%'
                onHide={() => setLoadding(false)}
                onShow={(instance)=> {                 
                    instance.popper.classList.add('my-custom-tooltip');                
                    setLoadding(false)
                } }
                visible={searchResults.length > 0 && showResults}
                placement={"bottom"}
                render={attrs => (
                    <div className="w-full" tabIndex="-1" {...attrs}>
                        <div className="box w-full  py-4 rounded-md bg-gray text-white">
                            {searchResults.map((item, index) => (
                                <Link onClick={()=>setHistory(history => [...history, item])} key={index} to={`${configs.routes.video}?slug=${item.slug}`}>
                                    <div className="result hover:bg-[#2c2c2e] flex items-center p-3 cursor-pointer border-b-[0.2px] border-[#303030]">
                                        <FontAwesomeIcon className="ml-2" icon={faSearch} />
                                        <h3 className=" ml-4 text-sm">{item.name}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}>



                <div className="search-container overflow-hidden relative bg-[#151515] rounded-md w-full h-16 flex items-center ">
                    <div className="icon text-text p-4 text-xl">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input
                        spellCheck={false}
                        value={inputValue}
                        ref={inputRef}
                    
                        onFocus={() => setShowResults(true)}
                        onChange={handleSearch}
                        className="text-white flex-1 z-10 py-5 border-0 outline-0 placeholder:text-text placeholder:text-sm"
                        type="text"
                        placeholder="Nhập tên phim, kênh, sự kiện..."
                    />
                    {loadding && inputValue.length != 0 ? (
                        <div>
                            <FontAwesomeIcon className="text-text text-md select-none mr-2 animate-spin p-4  z-10 absolute right-30 top-[50%] translate-y-[-50%]"  icon={faSpinner}/>
                        </div>
                    ) : (

                        <div ref={clearRef} onClick={handleClear} className={classNames({ hidden: inputValue.length <= 0 })}>
                            <FontAwesomeIcon className="text-text text-md mr-2 cursor-pointer hover:text-primary p-4 z-10  absolute right-30 top-[50%] translate-y-[-50%]"  icon={faXmark} />
                        </div>

                    )}
                    {inputValue.length > 0 ? (
                        <Button ref={btnRef} primary className="rounded absolute right-1 z-20 md:w-27 md:h-12 w-22 h-10 mr-4 text-sm md:text-md text-text cursor-pointer ">Tìm kiếm</Button>
                    ) : (
                        <Button ref={btnRef} className="bg-[#2C2C2E] absolute right-1  z-20 rounded-md md:w-27 md:h-12 w-22 h-10 mr-4 text-sm md:text-md text-text cursor-pointer ">Tìm kiếm</Button>
                    )}

                </div>
            </Tippy>
        </span>
    );
}

export default Search;