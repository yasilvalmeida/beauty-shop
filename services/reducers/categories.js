import {
    GET_CATEGORIES,
    SET_CATEGORIES,
    SET_ERROR
} from "../action-types/categories";

const initialState = {
  categoryLoading: false,
  categories: [],
  categoriesError: null,
};

const categoriesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categoryLoading: true,
            };
        case SET_CATEGORIES:
            return {
                ...state,
                categoryLoading: false,
                categories: payload,
            };
        case SET_ERROR:
            return {
              ...state,
              categoryLoading: false,
              categoriesError: payload,
            };
        default:
            return state;
    }
};

export default categoriesReducer;
