import Constants from '../constants/auth';
import { dreamInfluencersLoginApi } from '../services/api';

function request() {
    return {
        type: Constants.REQUEST,
    }
}
function error(error) {
    return {
        type: Constants.FAILURE,
        error
    }
}
function success(user) {
    return {
        type: Constants.SUCCESS,
        user
    }
}
function sendLogout() {
    return {
        type: Constants.lOGOUT,
    }
}
export function login() {
    return async dispatch => {
        dispatch(request());
        const result = (await dreamInfluencersLoginApi.get('/')).data;
        if(result.version != 8) {
            dispatch(error('Invalid version'));
            return;
        }
        dispatch(success({
            email: 'test@gmail.com',
        }))
    }
}
export function logout() {
    return dispatch => {
        dispatch(sendLogout());
    }
}