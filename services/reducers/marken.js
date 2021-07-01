import {GET_MARKENS, SET_MARKENS, SET_ERROR, SET_MARKEN_DATA, GET_MARKEN_DATA} from "../action-types/marken";

const initialState = {
    markenData: [],
    markenDataLoaded: true,
    textData: {},
    textDataLoaded: true,
    error: ""
};

const markenReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_MARKEN_DATA:
            return {
                ...state,
                textData: payload,
                textDataLoaded: false
            }
        case GET_MARKEN_DATA:
            return {
                ...state,
                textDataLoaded: true
            }
        case SET_MARKENS:
            return {
                ...state,
                markenData: payload,
                markenDataLoaded: false
            }
        case GET_MARKENS:
            return {
                ...state,
                markenDataLoaded: true
            }

        case SET_ERROR:
            return {
                ...state,
                error: payload,
            }
        default:
            return state;
    }
};

export default markenReducer;