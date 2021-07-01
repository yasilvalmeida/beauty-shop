import axios from "axios";
import {
    ADD_ADDRESS, DELETE_ADDRESSES, EDIT_ADDRESSES,
    GET_BILLING_ADDRESS, GET_DELIVERY_ADDRESS,
    SET_BILLING_ADDRESS,
    SET_DELIVERY_ADDRESS,
    SET_ERROR
} from "../action-types/address";
import {GET_PRODUCTS, SET_PRODUCTS} from "../action-types/products";

export const addAddress = (data, appointment) => {

    return (dispatch) => {
        return axios
            .post(
                `${process.env.NEXT_PUBLIC_API_URL}/createAddresses/${appointment}`,
                {
                    first_name: data.name,
                    surname: data.surname,
                    address_line: data.addressLineOne,
                    road: data.road,
                    house_number: data.house,
                    place: data.ort,
                    country: data.country,
                    postcode: data.plz
                },
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
                    type: ADD_ADDRESS,
                    payload: data,

                });

                return product;
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
}

export const getBillingAddress = () => {
    return (dispatch) => {
        dispatch({type: GET_BILLING_ADDRESS});

        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/getUserBillingAdresses`, {
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
                    type: SET_BILLING_ADDRESS,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const getDeliveryAddress = () => {
    return (dispatch) => {
        dispatch({type: GET_DELIVERY_ADDRESS});

        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/getUserDeliveryAdresses`, {
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
                    type: SET_DELIVERY_ADDRESS,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const deleteAddress = (id, appointment) => {
    // console.log(data)
    return (dispatch) => {
        return axios
            .delete(
                `${process.env.NEXT_PUBLIC_API_URL}/deleteAddresses/${appointment}/${id}`,
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
                    type: DELETE_ADDRESSES,
                    payload: {
                        data: data,
                        appointment:appointment,
                        id:id
                    },

                });

                return data
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    }
}

export const editAddress = (datas, appointment,id) => {

    return (dispatch) => {
        return axios
            .put(
                `${process.env.NEXT_PUBLIC_API_URL}/updateAddresses/${appointment}/${id}`,
                {
                    first_name: datas.name,
                    surname: datas.surname,
                    address_line: datas.addressLineOne,
                    road: datas.road,
                    house_number: datas.house,
                    place: datas.ort,
                    country: datas.country,
                    postcode: datas.plz
                },
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
                    type: EDIT_ADDRESSES,
                    payload: {
                        data:data,
                        id:id,
                        appointment:appointment
                    },
                });

                return data;
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
}