import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import services from "../../services";

import MovieCategoryItem from "../../components/MovieCategoryItem";
function Category() {
    const [searchParams] = useSearchParams();
    const path = searchParams.get('path');
    const params = JSON.parse( searchParams.get('query'))
    const [movieList, setMovieList] = useState({})
    const [isRender, setIsRender] = useState(false)

    useEffect(()=> {
        
    },[])

    useEffect(()=> {
        const fetchApi = async ()=> {
            try {
                const response = await services.render(path, {
                    page: 1,
                    limit: 64,
                    ...params,
                })      
                setIsRender(true)
                setMovieList(response.data)     
                console.log(response)
            } catch(error) {
                console.error('Error fetching data', error)
            }
        }
        fetchApi();
    },[])

    return (
        <div className="mt-[80px] category-page" id="category-page">
             {isRender ? (
                <div>
                    <h1 className="heading text-center text-white capitalize text-2xl md:text-3xl lg:text-4xl font-bold mb-18 mt-40">{movieList.titlePage}</h1>

                  <div className="grid gap-x-4 gap-y-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {
                            movieList.items.map(item => (
                                <MovieCategoryItem key={item._id} item={item} />
                            ))
                        }
                  </div>
                </div>
             ) : null}
        </div>
    );
}

export default Category;