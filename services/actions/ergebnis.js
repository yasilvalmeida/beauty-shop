import {
  ADD_PARAMETERS,
  SET_ERGEBNIS_PAGE_ERROR,
  GET_ERGEBNIS_PAGE_TEXT,
  SET_ERGEBNIS_PAGE_TEXT,
} from "../action-types/ergebnis";

import axios from "axios";

export const addParameters = (parameters) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PARAMETERS,
      payload: parameters,
    });
  };
};

export const getErgebnisPageText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_ERGEBNIS_PAGE_TEXT });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/ergebnis-page-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_ERGEBNIS_PAGE_TEXT,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: SET_ERGEBNIS_PAGE_ERROR, payload: err })
      );
  };
};
