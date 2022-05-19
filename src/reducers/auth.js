import Constants from "../constants/auth";

export default function auth(state = {}, action) {
  switch (action.type) {
    case Constants.REQUEST:
        return {
            ...state,
            loading: true,
            error: false
        };
    case Constants.SUCCESS:
        return {
            ...state,
            loading: false,
            user: action.user,
            loggedIn: true
        };
    case Constants.FAILURE:
        return {
            ...state,
            loggedIn: false,
            loading: false,
            error: action.error
        };
    case Constants.lOGOUT:
        return {
            ...state,
            loggedIn: false,
            user: false,
        }
    default:
        return state;
  }
}
