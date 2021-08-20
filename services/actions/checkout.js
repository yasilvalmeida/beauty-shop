import {
  GET_CHECKOUT_PAGE_DATA,
  SET_CHECKOUT_PAGE_DATA,
  SET_CHECKOUT_PAGE_ERROR,
  GET_CHECKOUT_PAGE_STEP_DATA,
  SET_CHECKOUT_PAGE_STEP_DATA,
  SET_CHECKOUT_PAGE_STEP_ERROR,
} from "../action-types/checkout";

import axios from "axios";

export const getCheckoutPageData = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_CHECKOUT_PAGE_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout-page-data?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_CHECKOUT_PAGE_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: SET_CHECKOUT_PAGE_ERROR, payload: err })
      );
  };
};

export const getCheckoutPageStepData = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_CHECKOUT_PAGE_STEP_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout-page-step-data?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_CHECKOUT_PAGE_STEP_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: SET_CHECKOUT_PAGE_STEP_ERROR, payload: err })
      );
  };
};
