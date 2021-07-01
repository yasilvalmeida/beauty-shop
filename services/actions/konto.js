import axios from 'axios';
import {
    GET_KONTO_MAIN_BOXES_TEXT,
    SET_KONTO_DATA_LOADED,
    SET_ERROR}
from "../action-types/konto";

export const getKontoMainBoxesData = () => {
    return dispatch => {
        dispatch({ type:SET_KONTO_DATA_LOADED })
        axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/main-accounts`
        )
            .then(res => {
                const { data } = res;

                dispatch({
                    type: GET_KONTO_MAIN_BOXES_TEXT,
                    payload: data
                });
            })
            .catch(err => dispatch({ type: SET_ERROR, payload: err }));
    };
};
