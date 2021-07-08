import {
    GET_SHOP_PRODUCTS,
    SET_SHOP_PRODUCTS,
    SET_ERROR,
    SET_LOADED, SET_PRODUCTS_COUNT, SORT_SHOP_PRODUCTS
} from "../action-types/shop";
import {SWITCH_TO_FAVOURITE} from "../action-types/products";

const initialState = {
    shopProducts: [],
    shopProductsLoaded: true,
    error: null,
    count: 0,
    staticShopProducts: []
};
const shopPageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_SHOP_PRODUCTS:
            return {
                ...state,
                shopProductsLoaded: true,
            };
        case SET_SHOP_PRODUCTS:
            return {
                ...state,
                shopProductsLoaded: false,
                shopProducts: payload,
                staticShopProducts: payload
            };
        case SORT_SHOP_PRODUCTS:
            return {
                ...state,
                shopProducts: payload
            }
        case SET_ERROR:
            return {
                ...state,
                shopProductsLoaded: false,
                error: payload,
            };
        case SET_PRODUCTS_COUNT:
            return {
                ...state,
                count: payload
            }
        case SWITCH_TO_FAVOURITE:
            return {
                ...state,
                shopProductsLoaded: false,
                shopProducts: state.shopProducts.map((p) => {
                    if (p.id === payload.id) {
                        p = payload.data;
                    }
                    return p;
                }),
                staticShopProducts: state.staticShopProducts.map((p) => {
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
export default shopPageReducer;