import { useState, memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import configs from "../../configs";
import defaultImage from '../../assets/imgs/default-background.jpg'

function TrendingMovie({item}) {

    const [show, setShow] = useState(false)
    // console.log('re-render trending')
    return ( 
        <div className="flex items-center mb-4 overflow-hidden">
           <Link className="block" to={`${configs.routes.video}?slug=${item.slug}`}>
            <img
                onLoad={() => setShow(true)}
                src={!show ? defaultImage : item.thumb_url}
                alt=""
                className="min-w-[160px] h-[90px] object-cover rounded-md" 
             />
             </Link>
            <div className="info ml-4 flex-1">
               <Link className="w-full block" to={`${configs.routes.video}?${item.slug}`}> 
               <div className="max-w-full overflow-ellipsis overflow-hidden text-nowrap"><h3 className="mb-2 text-md hover:text-primary inline-block py-1  duration-200 ease cursor-pointer">{item.name}</h3></div>
               </Link>
                <ul className="flex gap-4 text-sm">
                    <li>{item.year}</li>
                    <li>{item.origin_name}</li>
                </ul>
            </div>
       
        </div>
     );
}


TrendingMovie.propTypes = {
    item: PropTypes.object.isRequired
};

export default memo(TrendingMovie);