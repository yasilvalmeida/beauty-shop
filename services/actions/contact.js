import axios from "axios";
import {GET_CONTACT_DATA, POST_CONTACT_DATA, SET_CONTACT_LOADED, SET_ERROR} from "../action-types/contact";

export const getContactData = () => {
    return dispatch => {
        dispatch({ type: SET_CONTACT_LOADED });

        axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/contact-page-text`,
        )
            .then(res => {
                const { data } = res;

                dispatch({
                    type: GET_CONTACT_DATA,
                    payload: data
                });
            })
            .catch(err => dispatch({ type: SET_ERROR, payload: err }));
    };
};

export const postContact = (formData) => {
    return function (dispatch){
        axios.post( `${process.env.NEXT_PUBLIC_API_URL}/question-or-concerns`,formData)
            .then(response => {
                dispatch({type: POST_CONTACT_DATA, payload: response.data})
            } )
            .catch(err => dispatch({type: SET_ERROR}));
    }
}