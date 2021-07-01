import {
    GET_SINGLEPRODUCT_STYLE_TEXT,
    SET_DATA_LOADED,
    SET_ERROR,
    GET_SINGLEPRODUCT_VARIANT_ID
} from "../action-types/single-product";

const initialState = {
    styles:[],
    stylesLoaded:true,
    error: "",
    singleProductVariantId: "",
};

const singleProductPageReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_SINGLEPRODUCT_STYLE_TEXT:
            return {
                ...state,
                stylesLoaded: false,
                styles: payload
            };
        case SET_DATA_LOADED:
            return {
                ...state,
                stylesLoaded: true
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload,
                stylesLoaded: false
            }

            case GET_SINGLEPRODUCT_VARIANT_ID:
            return {
                ...state,
                singleProductVariantId: payload,
            }
        default:
            return state;
    }
};

export default singleProductPageReducer;