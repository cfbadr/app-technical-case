import Constants from '../constants/action';

const initialState = {
  countriesDetails: {},
};

const overview = (state = initialState, action) => {
  switch (action.type) {
    case Constants.FETCH_COUNTRY_OVERVIEW_SUCCESS:
      return {
        ...state,
        countriesDetails: {...state.countriesDetails, ...action.payload},
      };
    case Constants.FETCH_COUNTRY_OVERVIEW_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default overview;