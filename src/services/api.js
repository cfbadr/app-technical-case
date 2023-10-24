import axios from 'axios';
import endpoints from '../constants/endpoints'

const createApiInstance = (url) => {
    return axios.create({
        baseURL: url,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
};
const apiCelebrityInstance = (url) => {
    return axios.create({
        baseURL: url,
        headers: {
            'X-RapidAPI-Key': '78beb035d8mshc27c7a788c12021p1c67dfjsnb4e28a80ce2e',
            'X-RapidAPI-Host': 'celebrity-by-api-ninjas.p.rapidapi.com',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
};

const dreamInfluencersLoginApi = createApiInstance(endpoints.dreamInfluencersLoginUrl);
const dreamInfluencersCountriesAvaibleApi = createApiInstance(endpoints.dreamInfluencersCountriesAvaibleUrl);
const countryOverviewApi = createApiInstance(endpoints.restCountriesUrl);
const apiCelebrityApi = apiCelebrityInstance(endpoints.celebrityUrl);

export { dreamInfluencersLoginApi, dreamInfluencersCountriesAvaibleApi, countryOverviewApi, apiCelebrityApi };