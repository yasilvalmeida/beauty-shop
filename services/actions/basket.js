import axios from "axios";
import {ADD_TO_BASKET, DELETE_FROM_BASKET, GET_BASKET_DATA, SET_BASKET_DATA, SET_ERROR} from "../action-types/basket";

export const addToBasket = (product, variantId, quantity) => {
    return (dispatch) => {
        return axios
            .post(
                `${process.env.NEXT_PUBLIC_API_URL}/addProductInTheShoppingBasket`,
                {product: product, variant: variantId, quantity: quantity},
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`,
                    },
                }
            )
            .then((res) => {
                const {data} = res;
                dispatch({
                    type: ADD_TO_BASKET,
                    payload: data

                });

                return product;
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
}

export const getBasketData = () => {
    return (dispatch) => {
        dispatch({type: GET_BASKET_DATA});

        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_URL}/getProductsInTheShoppingBasket`,
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`,
                    }
                }
                // { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData') || '{}').jwt || ''}` } }
            )
            .then((res) => {
                const {data} = res;

                dispatch({
                    type: SET_BASKET_DATA,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
}

export const deleteFromBasket = (product, variantId) => {
    return (dispatch) => {
        return axios
            .delete(
                `${process.env.NEXT_PUBLIC_API_URL}/deleteProductFromTheShoppingBasket/${product}/${variantId}`,
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`,
                    },
                }
            )
            .then((res) => {
                const {data} = res;
                dispatch({
                    type: DELETE_FROM_BASKET,
                    payload:{
                        id:product,
                        variant:variantId
                    }

                });

                return product;
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
}
