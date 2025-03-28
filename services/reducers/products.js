import {
  GET_PRODUCTS,
  SET_PRODUCTS,
  SET_PRODUCTS_COUNT,
  SET_PRODUCTS_LAST_PAGE_NUMBER,
  SET_FIRST_THREE_PRODUCTS,
  SET_SECOND_THREE_PRODUCTS,
  SET_PRODUCTS_ERROR,
  SWITCH_TO_FAVOURITE,
  GET_FAVOURITES_PRODUCTS,
  SET_FAVOURITES_PRODUCTS,
  GET_PRODUCTS_WITH_LEFT_TEXT,
  SET_PRODUCTS_WITH_LEFT_TEXT,
  GET_PRODUCTS_WITH_FILTER,
  GET_PRODUCTS_PAGE_DATA,
  GET_EIGHT_PRODUCTS_WITH_FILTER,
  GET_PRODUCTS_WITH_FILTER_TWO,
  SWITCH_TO_FAVOURITE_TWO,
  SET_PRODUCTS_BY_CATEGORIES,
  SET_PRODUCTS_BY_CATEGORY,
  SET_SEARCH_PRODUCTS,
  SET_SEARCH_PRODUCTS_COUNT,
  SET_SEARCHING,
} from "../action-types/products";

const initialState = {
  productLoading: false,
  favouriteProductsLoading: false,
  products: [],
  firstThreeProducts: [],
  secondThreeProducts: [],
  favouriteProducts: [],
  productsError: null,
  productsWithLeftTextLoading: false,
  productsWithLeftText: [],
  productsWithFilter: [],
  productsWithFilter2: [],
  productsWithFilterLoaded: true,
  productsPageData: [],
  productsPageDataLoaded: true,
  productsByCategories: [],
  productsByCategory: [],
  totalsCount: 0,
  lastPageNumber: 0,
  searchProducts: [],
  totalsCountSearch: 0,
  searching: true,
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_WITH_FILTER:
      return {
        ...state,
        productsWithFilterLoaded: false,
        productsWithFilter: payload,
      };
    case GET_EIGHT_PRODUCTS_WITH_FILTER:
      return {
        ...state,
        productsWithFilterLoaded: false,
        productsWithFilter: payload,
      };
    case GET_PRODUCTS_WITH_FILTER_TWO:
      return {
        ...state,
        productsWithFilterLoaded: false,
        productsWithFilter2: payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        productLoading: true,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        productLoading: false,
        products: payload,
      };
    case SET_FIRST_THREE_PRODUCTS:
      return {
        ...state,
        productLoading: false,
        firstThreeProducts: payload,
      };
    case SET_SECOND_THREE_PRODUCTS:
      return {
        ...state,
        productLoading: false,
        secondThreeProducts: payload,
      };
    case GET_PRODUCTS_PAGE_DATA:
      return {
        ...state,
        productsPageDataLoaded: false,
        productsPageData: payload,
      };
    case SET_PRODUCTS_ERROR:
      return {
        ...state,
        productLoading: false,
        productsError: payload,
      };
    case SWITCH_TO_FAVOURITE:
      const name = payload.array;
      return {
        ...state,
        favouriteProductsLoading: false,
        products: state.products.map((p) => {
          if (p.id === payload.id) {
            p = payload.data;
          }
          return p;
        }),
        products2: state.products2.map((p) => {
          if (p.id === payload.id) {
            p = payload.data;
          }

          return p;
        }),
        singleProduct: payload.data,
        productsWithFilter: {
          ...state.productsWithFilter,
          [name]: state?.productsWithFilter[name]?.map((p) => {
            if (p.id === payload.id) {
              p = payload.data;
            }
            return p;
          }),
        },
        favouriteProducts: state.favouriteProducts.filter(
          (e) =>
            !(
              e.id === payload.id &&
              e.variants_of_a_products[0].id === payload.variant_id
            )
        ),
      };
    case SWITCH_TO_FAVOURITE_TWO: {
      const name = payload.array;
      return {
        ...state,
        productsWithFilter2: {
          ...state.productsWithFilter2,
          [name]: state?.productsWithFilter2[name]?.map((p) => {
            if (p.id === payload.id) {
              p = payload.data;
            }
            return p;
          }),
        },
      };
    }
    case GET_FAVOURITES_PRODUCTS: {
      return {
        ...state,
        favouriteProductsLoading: true,
      };
    }
    case SET_FAVOURITES_PRODUCTS: {
      return {
        ...state,
        favouriteProductsLoading: false,
        favouriteProducts: payload,
      };
    }
    case GET_PRODUCTS_WITH_LEFT_TEXT: {
      return {
        ...state,
        productsWithLeftTextLoading: true,
      };
    }
    case SET_PRODUCTS_WITH_LEFT_TEXT: {
      return {
        ...state,
        productsWithLeftTextLoading: false,
        productsWithLeftText: payload,
      };
    }
    case SET_PRODUCTS_BY_CATEGORIES: {
      return {
        ...state,
        productsByCategories: payload,
      };
    }
    case SET_PRODUCTS_BY_CATEGORY: {
      return {
        ...state,
        productsByCategory: payload,
      };
    }
    case SET_SEARCH_PRODUCTS: {
      return {
        ...state,
        searchProducts: payload,
      };
    }
    case SET_SEARCH_PRODUCTS_COUNT: {
      return {
        ...state,
        totalsCountSearch: payload,
      };
    }
    case SET_SEARCHING: {
      return {
        ...state,
        searching: payload,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
