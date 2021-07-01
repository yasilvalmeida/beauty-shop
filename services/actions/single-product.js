import {
    GET_SINGLEPRODUCT_STYLE_TEXT,
    SET_ERROR,
    SET_DATA_LOADED
    ,GET_SINGLEPRODUCT_VARIANT_ID
} from "../action-types/single-product";
import axios from "axios";

export const getSingleProductText = () => {
    return dispatch => {
        dispatch({ type: SET_DATA_LOADED });

        axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/styles`,
        )
            .then(res => {
                const { data } = res;

                dispatch({
                    type: GET_SINGLEPRODUCT_STYLE_TEXT,
                    payload: data
                });
            })
            .catch(err => dispatch({ type: SET_ERROR, payload: err }));
    };
};


export const getSingleProductVariantId = (id) => {
    return dispatch => {
        dispatch({
            type: GET_SINGLEPRODUCT_VARIANT_ID,
            payload: id
        });
       
           
    };
};
