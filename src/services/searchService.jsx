import { get } from "../utils/httpRequest";

const search = async (keyword, limit = 10) => {
    try {
        const response = await get('v1/api/tim-kiem', {
            params: {
                keyword,
                limit,
            }
        });

        return response;
    } catch (error) {
        throw new Error(error)
    }
}

export default search;