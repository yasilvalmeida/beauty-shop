
import {
    ADD_ADDRESS, DELETE_ADDRESSES,
    GET_BILLING_ADDRESS, GET_DELIVERY_ADDRESS,
    SET_BILLING_ADDRESS,
    SET_DELIVERY_ADDRESS,
    SET_ERROR
} from "../action-types/address";

const initialState = {
    addressPost:"",
    error:"",
    billingAddresses:[],
    billingAddressesLoaded:true,
    deliveryAddresses:[],
    deliveryAddressesLoaded:true
};

const addressReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_ADDRESS:
            return {
                ...state,
               addressPost: payload
            };
        case SET_ERROR:
            return {
                ...state,
                error: payload
            }
        case SET_BILLING_ADDRESS:
            return {
                ...state,
                billingAddressesLoaded: false,
                billingAddresses: payload
            }
        case GET_BILLING_ADDRESS:
            return {
                ...state,
                billingAddressesLoaded: true
            }

        case SET_DELIVERY_ADDRESS:
            return {
                ...state,
                deliveryAddressesLoaded: false,
                deliveryAddresses: payload
            }
        case GET_DELIVERY_ADDRESS:
            return {
                ...state,
                deliveryAddressesLoaded: true
            }
        case DELETE_ADDRESSES:
            return {
                ...state,
                billingAddresses: payload.appointment === "billing" ? state.billingAddresses.filter(item=>item.id !== payload.id) : state.billingAddresses,
                deliveryAddresses: payload.appointment === "delivery" ? state.deliveryAddresses.filter(item=>item.id !== payload.id) : state.deliveryAddresses,
            }
        default:
            return state;
    }
};

export default addressReducer;
