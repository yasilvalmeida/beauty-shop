import {
  SET_NOT_FOUND_TEXT,
  SET_ERROR,
  SET_NOT_FOUND_DATA,
  LOADER
} from "../action-types/not_found_page";
import axios from "axios";

export const getNotFoundText = (lang) => {
  return (dispatch) => {
    dispatch({ type: LOADER });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/not-found-page-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_NOT_FOUND_TEXT,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getNotFoundData = (lang) => {
  return (dispatch) => {
    dispatch({ type: LOADER });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/not-found-page-section-3-s?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_NOT_FOUND_DATA,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};
