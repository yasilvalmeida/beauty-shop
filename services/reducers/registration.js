import {
    GET_COUNTRIES,
    GET_REGISTER_TXT_DATA,
    SET_LOADED,
    SET_ERROR,
    POST_REGISTRATION_DATA, SET_REGISTRATION_DATA
} from "../action-types/registration";

const initialState = {
    countries: [],
    countriesLoaded: true,
    error: "",
    textData: {},
    textDataLoaded: true,
    success: null
};

const RegistrationReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload,
                countriesLoaded: false
            }
        case POST_REGISTRATION_DATA:
            return {
                ...state,
                success: true
            }
        case GET_REGISTER_TXT_DATA:
            return {
                ...state,
                textData: payload,
                textDataLoaded: false
            }
        case SET_LOADED:
            return {
                ...state,
                countriesLoaded: true,
                textDataLoaded: true
            }
        case SET_REGISTRATION_DATA:
            return {
                ...state,
                success: null,
                error: ""
            }
        case SET_ERROR:
            return {
                ...state,
                error: true,
                countriesLoaded: false,
                textDataLoaded: false,
                success: payload
            }
        default:
            return state;
    }
};

export default RegistrationReducer;