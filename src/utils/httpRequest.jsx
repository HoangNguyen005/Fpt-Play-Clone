import axios from 'axios';

// instance
const request = axios.create({
    baseURL: 'https://phimapi.com/', //endpoint
});

export const get = async (path, params = {}) => {
    const response = await request.get(path, params);
    return response.data;
}

export default request; 