import {
  GET_STYLE_DATA,
  SET_STYLE_DATA,
  SET_STYLE_ERROR,
  GET_SINGLE_PRODUCT_DATA,
  SET_SINGLE_PRODUCT_DATA,
  SET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_PAGE_TEXT_DATA,
  SET_SINGLE_PRODUCT_PAGE_TEXT_DATA,
  SET_SINGLE_PRODUCT_PAGE_TEXT_ERROR,
  SET_SINGLE_PRODUCT_VARIANT_ID,
  SET_SINGLE_PRODUCT_SELECTED,
} from "../action-types/single-product";

const initialState = {
  styleData: null,
  styleError: null,
  styleLoading: true,
  singleProductData: null,
  singleProductError: null,
  singleProductLoading: true,
  singleProductPageTextData: null,
  singleProductPageTextError: null,
  singleProductPageTextLoading: true,
  singleProductVariantId: null,
  singleProductSelected: null,
};

const singleProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STYLE_DATA:
      return {
        ...state,
        styleLoading: true,
      };
    case SET_STYLE_DATA:
      return {
        ...state,
        styleLoading: false,
        styleData: payload,
      };
    case SET_STYLE_ERROR:
      return {
        ...state,
        styleLoading: false,
        styleError: payload,
      };
    case GET_SINGLE_PRODUCT_DATA:
      return {
        ...state,
        singleProductLoading: true,
      };
    case SET_SINGLE_PRODUCT_DATA:
      return {
        ...state,
        singleProductLoading: false,
        singleProductData: payload,
      };
    case SET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        singleProductLoading: false,
        singleProductError: payload,
      };
    case GET_SINGLE_PRODUCT_PAGE_TEXT_DATA:
      return {
        ...state,
        singleProductPageTextLoading: true,
      };
    case SET_SINGLE_PRODUCT_PAGE_TEXT_DATA:
      return {
        ...state,
        singleProductPageTextLoading: false,
        singleProductPageTextData: payload,
      };
    case SET_SINGLE_PRODUCT_PAGE_TEXT_ERROR:
      return {
        ...state,
        singleProductPageTextLoading: false,
        singleProductPageTextError: payload,
      };
    case SET_SINGLE_PRODUCT_VARIANT_ID:
      return {
        ...state,
        singleProductVariantId: payload,
      };
    case SET_SINGLE_PRODUCT_SELECTED:
      return {
        ...state,
        singleProductSelected: payload,
      };
    default:
      return state;
  }
};

export default singleProductReducer;
