import axios from "axios";
import {
    GET_BRANDS_PRODUCTS_FOUR,
    GET_BRANDS_PRODUCTS_ONE,
    GET_BRANDS_PRODUCTS_THREE,
    GET_BRANDS_PRODUCTS_TWO,
    SET_BRANDS_PRODUCTS_FOUR,
    SET_BRANDS_PRODUCTS_ONE,
    SET_BRANDS_PRODUCTS_THREE,
    SET_BRANDS_PRODUCTS_TWO,
    GET_BRANDS_PRODUCTS_FIVE,
    SET_BRANDS_PRODUCTS_FIVE,
    SET_ERROR, GET_BRAND_PAGE_DATA,
    SET_BRAND_PAGE_DATA
} from "../action-types/brands";


export const getBrandsProductsOne = () => {
    return (dispatch) => {
        dispatch({type: GET_BRANDS_PRODUCTS_ONE});

        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/findByLimit/3`, {
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
                    type: SET_BRANDS_PRODUCTS_ONE,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const getBrandsProductsTwo = () => {
    return (dispatch) => {
        dispatch({type: GET_BRANDS_PRODUCTS_TWO});

        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/findByLimit/3`, {
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
                    type: SET_BRANDS_PRODUCTS_TWO,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const getBrandsProductsThree = () => {
    return (dispatch) => {
        dispatch({type: GET_BRANDS_PRODUCTS_THREE});

        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/findByLimit/3`, {
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
                    type: SET_BRANDS_PRODUCTS_THREE,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const getBrandsProductsFour = () => {
    return (dispatch) => {
        dispatch({type: GET_BRANDS_PRODUCTS_FOUR});

        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/findByLimit/3`, {
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
                    type: SET_BRANDS_PRODUCTS_FOUR,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};


export const getBrandsProductsFive = () => {
    return (dispatch) => {
        dispatch({type: GET_BRANDS_PRODUCTS_FIVE});

        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/findByLimit/3`, {
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
                    type: SET_BRANDS_PRODUCTS_FIVE,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const getBrandsPageData = (name) => {
    return dispatch => {
        dispatch({type: GET_BRAND_PAGE_DATA});

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/brand-page-data?header_title_in=${name}`)
            .then(res => {
                const {data} = res;

                dispatch({
                    type: SET_BRAND_PAGE_DATA,
                    payload: data
                });
            })
            .catch(err => dispatch({type: SET_ERROR, payload: err}));
    };
};