import { GET_LOGIN_DATA, SET_LOGIN_DATA, SET_LOGIN_ERROR, LOGOUT_USER } from '../action-types/auth';
import axios from 'axios';

export const getUserDataFromLocalStorage = () => {
    return dispatch => {
        const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;
    
        if (userData) {
            return dispatch({ type: SET_LOGIN_DATA, payload: userData });
        }
    };
};

export const login = data => {
    return dispatch => {
        dispatch({ type: GET_LOGIN_DATA })
        
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, data)
            .then(res => {
                localStorage.setItem('userData', JSON.stringify(res.data));

                return dispatch({ type: SET_LOGIN_DATA, payload: res.data });
            })
            .catch(err => dispatch({ type: SET_LOGIN_ERROR, payload: err }))
    };
};

export const logout = () => {
    localStorage.removeItem('userData');
    return { type: LOGOUT_USER };
};
