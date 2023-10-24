import { apiCelebrityApi } from "../services/api";

export const getCelebrities = async (countryCode) => {
    const result = (await apiCelebrityApi.get('', {
      params: {
        nationality: countryCode
      }
    })).data;
    if (!result) return []
    return result
}