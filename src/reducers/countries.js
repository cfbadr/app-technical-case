import Constants from "../constants/action";

const initialState = {
  countries: null,
  error: null,
};

const countries = (state = initialState, action) => {
  switch (action.type) {
    case Constants.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        error: null,
      };
    case Constants.FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default countries;
