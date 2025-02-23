import { get } from "../utils/httpRequest";

const renderDetail = async (slug) => {
    try {
        const response = await get(`phim/${slug}`) 
        return response;
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

export default renderDetail;