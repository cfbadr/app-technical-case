import Constants from '../constants/auth';
import api from '../services/api';

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
        const result = (await api.get('/')).data;
        if(result.version != 4) {
            dispatch(error('Invalid version'));
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