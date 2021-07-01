import {SWITCH_TO_FAVOURITE} from "../action-types/products";
import {
    GET_BRAND_PAGE_DATA,
    GET_BRANDS_PRODUCTS_FIVE,
    GET_BRANDS_PRODUCTS_FOUR,
    GET_BRANDS_PRODUCTS_ONE, GET_BRANDS_PRODUCTS_THREE,
    GET_BRANDS_PRODUCTS_TWO, SET_BRAND_PAGE_DATA, SET_BRANDS_PRODUCTS_FIVE, SET_BRANDS_PRODUCTS_FOUR,
    SET_BRANDS_PRODUCTS_ONE, SET_BRANDS_PRODUCTS_THREE, SET_BRANDS_PRODUCTS_TWO, SET_ERROR
} from "../action-types/brands";

const initialState = {
    productOne:[],
    productOneLoaded:true,
    productTwo:[],
    productTwoLoaded:true,
    productThree:[],
    productThreeLoaded:true,
    productFour:[],
    productFourLoaded:true,
    productFive:[],
    productFiveLoaded:true,
    brandPageData:{},
    brandPageDataLoaded:true
};

const brandsProductsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_BRAND_PAGE_DATA:{
           return {
               ...state,
               brandPageDataLoaded: true
           }
        }
        case SET_BRAND_PAGE_DATA:{
            return {
                ...state,
                brandPageData: payload[0],
                brandPageDataLoaded: false
            }
        }
        case GET_BRANDS_PRODUCTS_ONE:
            return {
                ...state,
                productOneLoaded: true,
            };
        case SET_BRANDS_PRODUCTS_ONE:
            return {
                ...state,
                productOneLoaded: false,
                productOne: payload,
            };
        case GET_BRANDS_PRODUCTS_TWO:
            return {
                ...state,
                productTwoLoaded: true,
            };
        case SET_BRANDS_PRODUCTS_TWO:
            return {
                ...state,
                productTwoLoaded: false,
                productTwo: payload,
            };
        case GET_BRANDS_PRODUCTS_THREE:
            return {
                ...state,
                productThreeLoaded: true,
            };
        case SET_BRANDS_PRODUCTS_THREE:
            return {
                ...state,
                productThreeLoaded: false,
                productThree: payload,
            };
        case GET_BRANDS_PRODUCTS_FOUR:
            return {
                ...state,
                productFourLoaded: true,
            };
        case SET_BRANDS_PRODUCTS_FOUR:
            return {
                ...state,
                productFourLoaded: false,
                productFour: payload,
            };
        case GET_BRANDS_PRODUCTS_FIVE:
            return {
                ...state,
                productFiveLoaded: true,
            };
        case SET_BRANDS_PRODUCTS_FIVE:
            return {
                ...state,
                productFiveLoaded: false,
                productFive: payload,
            };
        case SET_ERROR:
            return {
                ...state,
                productLoading: false,
                productsError: payload,
            };
        case SWITCH_TO_FAVOURITE:
            return {

                ...state,
                productOneLoaded: false,
                productOne: state.productOne.map((p) => {
                    if (p.id === payload.id) {
                        p = payload.data;
                    }
                    return p;
                }),
                productTwoLoaded: false,
                productTwo: state.productTwo.map((p) => {
                    if (p.id === payload.id) {
                        p = payload.data;
                    }
                    return p;
                }),
                productThreeLoaded: false,
                productThree: state.productThree.map((p) => {
                    if (p.id === payload.id) {
                        p = payload.data;
                    }
                    return p;
                }),
                productFourLoaded: false,
                productFour: state.productFour.map((p) => {
                    if (p.id === payload.id) {
                        p = payload.data;
                    }
                    return p;
                }),
                productFiveLoaded: false,
                productFive: state.productFive.map((p) => {
                    if (p.id === payload.id) {
                        p = payload.data;
                    }
                    return p;
                }),
            };
        default:
            return state;
    }
};

export default brandsProductsReducer;
