import { combineReducers } from 'redux';
import auth from './auth';
import countries from './countries';
import overview from './overview';

const appReducer = combineReducers({
    auth,
    countries,
    overview
})
export default appReducer;