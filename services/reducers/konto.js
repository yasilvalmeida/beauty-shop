import {
    GET_KONTO_MAIN_BOXES_TEXT,
    SET_KONTO_DATA_LOADED,
    SET_ERROR
}
from "../action-types/konto";

const initialState = {
   mainBoxes:[],
   mainBoxesLoaded:true,
   error:""
};

const kontoPageReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_KONTO_MAIN_BOXES_TEXT:
            return {
                ...state,
                mainBoxesLoaded: false,
                mainBoxes: payload
            };
        case SET_KONTO_DATA_LOADED:
            return {
                ...state,
                mainBoxesLoaded: true
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload,
                mainBoxesLoaded: false
            }
        default:
            return state;
    }
};

export default kontoPageReducer;