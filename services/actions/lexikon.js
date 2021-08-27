import {
  SET_LEXIKON_PAGE_TEXT_ERROR,
  GET_LEXIKON_PAGE_TEXT_DATA,
  SET_LEXIKON_PAGE_TEXT_DATA,
  SET_LEXIKON_THEME_ERROR,
  GET_LEXIKON_THEME_DATA,
  SET_LEXIKON_THEME_DATA,
} from "../action-types/lexikon";
import axios from "axios";

export const getLexikonPageText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_LEXIKON_PAGE_TEXT_DATA });

    return axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/lexikon-page-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_LEXIKON_PAGE_TEXT_DATA,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_LEXIKON_PAGE_TEXT_ERROR }));
  };
};

export const getLexikonThemes = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_LEXIKON_THEME_DATA });

    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/lexikon-themes?_locale=${lang}`)
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_LEXIKON_THEME_DATA,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_LEXIKON_THEME_ERROR }));
  };
};
