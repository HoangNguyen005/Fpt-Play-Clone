import { get } from "../utils/httpRequest";

const render = async (path, params = {}, page = 1, limit = 30) => {
    try {
        const response = await get(`v1/api/${path}`, {
            params: {
                page,                
                limit,
                ...params,
            }
        });

        return response;
    } catch (error) {
        throw new Error(error)
    }
}

export default render;