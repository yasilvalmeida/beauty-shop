import axios from "axios";
import {GET_MARKENS, SET_MARKENS, SET_ERROR, GET_MARKEN_DATA, SET_MARKEN_DATA} from "../action-types/marken";


export const getMarkens = () => {
    return dispatch => {
        dispatch({ type: GET_MARKENS });

        axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/brands`,
        )
            .then(res => {
                const { data } = res;

                dispatch({
                    type: SET_MARKENS,
                    payload: data
                });
            })
            .catch(err => dispatch({ type: SET_ERROR, payload: err }));
    };
};

export const getMarkenText = () => {
    return dispatch => {
        dispatch({ type: GET_MARKEN_DATA });

        axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/marken-page-data`,
        )
            .then(res => {
                const { data } = res;

                dispatch({
                    type: SET_MARKEN_DATA,
                    payload: data
                });
            })
            .catch(err => dispatch({ type: SET_ERROR, payload: err }));
    };
};