import { Link } from "react-router";
import configs from "../../configs";
import PropTypes from "prop-types";
function CategoryItem({image, path, params = {}}) {
    const query = JSON.stringify(params);
    // console.log(params)
    return ( 
       
            <Link to={`${configs.routes.category}?path=${path}&query=${query}`} className="w-[176px] h-[100px] md:w-[207px] md:h-[120px] cursor-pointer">
                <img className="size-full object-cover" src={image}/>
            </Link>
       
     );
}

CategoryItem.propTypes = {
    path: PropTypes.string, 
    params: PropTypes.string,  // optional parameters for the component
    image: PropTypes.string.isRequired
};

export default CategoryItem;