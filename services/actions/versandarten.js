import axios from "axios";
import {
    GET_VERSANDARTEN_TEXT,
    SET_ERROR,
    SET_VERSANDARTEN_TEXT_LOADED
} from "../action-types/versandarten";

export const getVersandartenText = () => {
    return dispatch => {
        dispatch({type: SET_VERSANDARTEN_TEXT_LOADED});

        axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/shipping-method`,
        )
            .then(res => {
                const {data} = res;

                dispatch({
                    type: GET_VERSANDARTEN_TEXT,
                    payload: data
                });
            })
            .catch(err => dispatch({type: SET_ERROR, payload: err}));
    };
};
