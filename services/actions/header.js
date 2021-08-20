import {
  SET_HEADER_ERROR,
  SET_HEADER_TEXT,
  SET_HEADER_LANGUAGE,
  SET_HEADER_CONTACT,
  SET_HEADER_PAGE_TEXT,
  GET_HEADER,
} from "../action-types/header";
import axios from "axios";

export const getHeaderTexts = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_HEADER });

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/page-headers?_locale=${lang}`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_HEADER_TEXT,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_HEADER_ERROR }));
  };
};

export const setSelectedLanguage = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_HEADER });
    return dispatch({
      type: SET_HEADER_LANGUAGE,
      payload: lang,
    });
  };
};

export const getHeaderContact = () => {
  return (dispatch) => {
    dispatch({ type: GET_HEADER });

    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/contact-details`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_HEADER_CONTACT,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_HOME_ERROR }));
  };
};

export const getHeaderPageText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_HEADER });

    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/header-page-text?_locale=${lang}`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_HEADER_PAGE_TEXT,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_HOME_ERROR }));
  };
};