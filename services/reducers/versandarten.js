import {GET_VERSANDARTEN_TEXT, SET_ERROR, SET_VERSANDARTEN_TEXT_LOADED} from "../action-types/versandarten";

const initialState = {
    versandartenText:[],
    versandartenTextLoaded:true,
    error:""
};

const versandartenReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_VERSANDARTEN_TEXT:
            return {
                ...state,
                versandartenTextLoaded: false,
                versandartenText: payload
            };
        case SET_VERSANDARTEN_TEXT_LOADED:
            return {
                ...state,
                versandartenTextLoaded: true
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload,
                versandartenTextLoaded: false
            }
        default:
            return state;
    }
};

export default versandartenReducer;