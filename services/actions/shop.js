import axios from "axios";
import {
    SET_SHOP_PRODUCTS,
    SET_ERROR,
    SET_LOADED,
    GET_SHOP_PRODUCTS,
    SET_PRODUCTS_COUNT,
    SORT_SHOP_PRODUCTS
} from "../action-types/shop";

export const getShopProducts = () => {
    return (dispatch) => {
        dispatch({type: GET_SHOP_PRODUCTS});
        dispatch({type:SET_LOADED})
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem("userData") || "{}")
                        .jwt
                        ? `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`
                        : "",
                },
            })
            .then((res) => {
                const {data} = res;

                dispatch({
                    type: SET_SHOP_PRODUCTS,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};


export const getProductsCount = () => {
    return dispatch => {

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/count`)
            .then(res => {
                const {data} = res;

                dispatch({
                    type: SET_PRODUCTS_COUNT,
                    payload: data
                });
            })
            .catch(err => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const sortShopProducts = (data) =>{
    return dispatch => {
        dispatch({
            type:SORT_SHOP_PRODUCTS,
            payload:data
        })
    }
}