import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import configs from "../../configs";
function MovieCategoryItem({ item }) {
    return (
        <div className="cursor-pointer col-span-1  ">
         <Link to={`${configs.routes.video}?slug=${item.slug}`}>
                <div className="relative w-full lg:max-h-[120px]  rounded-md  overflow-hidden h-auto group">
                    <div className="absolute size-full top-0 left-0 right-0 bottom bg-black/70 hidden group-hover:block" />
                    <div className="hidden group-hover:block"><FontAwesomeIcon className="absolute text-2xl text-white top-[50%] left-[50%] translate-[-50%] " icon={faPlay} /></div>
                    <img className="rounded-md w-full h-auto object-cover" src={`https://phimimg.com/${item.thumb_url}`} alt={item.name} />
                </div>
                <h4 className="text-white leadding-5 max-h-16 overflow-hidden font-base py-4 ">{item.name}</h4>
         </Link>
        </div>
    );
}


MovieCategoryItem.propTypes = {
    item: PropTypes.object.isRequired,
};
export default MovieCategoryItem;