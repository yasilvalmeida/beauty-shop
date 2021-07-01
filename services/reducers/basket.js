import {DELETE_FROM_BASKET, GET_BASKET_DATA, SET_BASKET_DATA, SET_ERROR} from "../action-types/basket";


const initialState = {
    products: [],
    productsLoaded: true,
    error: ""
};

const basketReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case GET_BASKET_DATA:
            return {
                ...state,
                productsLoaded: true,
            };
        case SET_BASKET_DATA:
            return {
                ...state,
                products: payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload,
                productsLoaded: false
            }
        case DELETE_FROM_BASKET:
            return {
                ...state,
                products: {
                    ...state.products,
                    products:state.products?.products?.filter(item=>!(item.id === payload.id && item?.variants_of_a_products[0]?.id === payload.variant))
                }
            }
        default:
            return state;
    }
};

export default basketReducer;