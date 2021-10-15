import {
  SET_ERROR,
  GET_FOOTER,
  SET_FOOTER_TOP,
  SET_FOOTER_CONTACT,
  SET_FOOTER_HEADER,
  SET_FOOTER_PAYMENT,
  SET_FOOTER_DPAB,
  SET_FOOTER_MAIN_MENU,
} from "../action-types/footer";
import axios from "axios";

export const getFooterTop = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_FOOTER });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/top-of-the-footers?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_FOOTER_TOP,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getFooterPayment = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_FOOTER });
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/footer-payments?_locale=${lang}`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_FOOTER_PAYMENT,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getFooterHeader = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_FOOTER });
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/footer-header?_locale=${lang}`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_FOOTER_HEADER,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getFooterContact = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_FOOTER });
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/footer-contact?_locale=${lang}`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_FOOTER_CONTACT,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getFooterDPAB = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_FOOTER });
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/footer-dpab?_locale=${lang}`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_FOOTER_DPAB,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getFooterMainMenu = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_FOOTER });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/footer-main-accounts?_locale=${lang}&_sort=order_number:ASC`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_FOOTER_MAIN_MENU,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};
