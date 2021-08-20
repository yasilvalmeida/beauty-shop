import {
  SET_CHECKOUT_PAGE_ERROR,
  GET_CHECKOUT_PAGE_DATA,
  SET_CHECKOUT_PAGE_DATA,
  SET_CHECKOUT_PAGE_STEP_ERROR,
  GET_CHECKOUT_PAGE_STEP_DATA,
  SET_CHECKOUT_PAGE_STEP_DATA,
} from "../action-types/checkout";

const initialState = {
  checkoutPageError: null,
  checkoutPageData: null,
  checkoutPageLoading: true,
  checkoutPageStepError: null,
  checkoutPageStepData: null,
  checkoutPageStepLoading: true,
};

const checkoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHECKOUT_PAGE_ERROR:
      return {
        ...state,
        checkoutPageLoading: false,
        checkoutPageError: payload,
      };
    case GET_CHECKOUT_PAGE_DATA:
      return {
        ...state,
        checkoutPageLoading: true,
      };
    case SET_CHECKOUT_PAGE_DATA:
      return {
        ...state,
        checkoutPageLoading: false,
        checkoutPageData: payload,
      };
    case SET_CHECKOUT_PAGE_STEP_ERROR:
      return {
        ...state,
        checkoutPageStepLoading: false,
        checkoutPageStepError: payload,
      };
    case GET_CHECKOUT_PAGE_STEP_DATA:
      return {
        ...state,
        checkoutPageStepLoading: true,
      };
    case SET_CHECKOUT_PAGE_STEP_DATA:
      return {
        ...state,
        checkoutPageStepLoading: false,
        checkoutPageStepData: payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;
