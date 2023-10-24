import { countryOverviewApi, dreamInfluencersCountriesAvaibleApi } from "../services/api";
import Constants from "../constants/action";

const fetchCountriesSuccess = (countries) => ({
  type: Constants.FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});

const fetchCountriesFailure = () => ({
  type:Constants.FETCH_COUNTRIES_FAILURE,
});

const fetchCountryOverviewSuccess = (countryCode, country) => ({
  type: Constants.FETCH_COUNTRY_OVERVIEW_SUCCESS,
  payload: { [countryCode]: country },
});

const fetchCountryOverviewFailure = () => ({
  type:Constants.FETCH_COUNTRY_OVERVIEW_FAILURE,
});

export const getDreamInfluenceCountry = () =>  {
  return async dispatch => {
    const result = await dreamInfluencersCountriesAvaibleApi.get('/');
    if (!result) dispatch(fetchCountriesFailure());
    else {
      const countries = result.data.countries;
      dispatch(fetchCountriesSuccess(countries));
      return countries;
    }
  }
}

export const getOverviewCountry = (countryCode) => {
  return async dispatch => {
    const result = (await countryOverviewApi.get(`?codes=${countryCode}`)).data[0];
    if (!result) dispatch(fetchCountryOverviewFailure());
    dispatch(fetchCountryOverviewSuccess(countryCode, result));
    return result
  }
}