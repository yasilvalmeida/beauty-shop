import axios from "axios";
import {
    GET_COUNTRIES, GET_REGISTER_TXT_DATA, POST_REGISTRATION_DATA, SET_ERROR,
    SET_LOADED, SET_REGISTRATION_DATA
} from "../action-types/registration";

export const getRegisterCountries = () => {
    return dispatch => {
        dispatch({ type: SET_LOADED });

        axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/country-data`,
        )
            .then(res => {
                const { data } = res;

                dispatch({
                    type: GET_COUNTRIES,
                    payload: data
                });
            })
            .catch(err => dispatch({ type: SET_ERROR, payload: err }));
    };
};
export const getRegisterTextData = () => {
    return dispatch => {
        dispatch({ type: SET_LOADED });

        axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/registration-page-data`,
        )
            .then(res => {
                const { data } = res;

                dispatch({
                    type: GET_REGISTER_TXT_DATA,
                    payload: data
                });
            })
            .catch(err => dispatch({ type: SET_ERROR, payload: err }));
    };
};

export const postRegistration = (formData) => {
    return function (dispatch){
        dispatch({
            type: SET_REGISTRATION_DATA,
        });
        axios.post( `${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`,formData)
            .then(response => {
                dispatch({type: POST_REGISTRATION_DATA, payload: response})
            } )
            .catch(err => dispatch({type: SET_ERROR, payload:err}));
    }
}