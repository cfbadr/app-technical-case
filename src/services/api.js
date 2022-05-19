import axios from 'axios';
const url = 'https://api.dreaminfluencers.com/influencer';

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
export default api;