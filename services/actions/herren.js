import axios from "axios";
import {
  GET_HERREN_PAGE_TEXT_DATA,
  SET_HERREN_PAGE_TEXT_DATA,
  GET_HERREN_PAGE_TEXT_ERROR,
  GET_HERREN_INSPIRATION_ONE_TEXT_DATA,
  SET_HERREN_INSPIRATION_ONE_TEXT_DATA,
  GET_HERREN_INSPIRATION_ONE_TEXT_ERROR,
  GET_HERREN_INSPIRATION_TWO_TEXT_DATA,
  SET_HERREN_INSPIRATION_TWO_TEXT_DATA,
  GET_HERREN_INSPIRATION_TWO_TEXT_ERROR,
  GET_HERREN_INSPIRATION_THREE_TEXT_DATA,
  SET_HERREN_INSPIRATION_THREE_TEXT_DATA,
  GET_HERREN_INSPIRATION_THREE_TEXT_ERROR,
} from "../action-types/herren";

export const getHerrenPageTextData = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_HERREN_PAGE_TEXT_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/herren-page-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_HERREN_PAGE_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: GET_HERREN_PAGE_TEXT_ERROR, payload: err })
      );
  };
};

export const getHerrenInspirationOneTextData = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_HERREN_INSPIRATION_ONE_TEXT_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/herren-inspiration-one-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_HERREN_INSPIRATION_ONE_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: GET_HERREN_INSPIRATION_ONE_TEXT_ERROR, payload: err })
      );
  };
};

export const getHerrenInspirationTwoTextData = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_HERREN_INSPIRATION_TWO_TEXT_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/herren-inspiration-two-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_HERREN_INSPIRATION_TWO_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: GET_HERREN_INSPIRATION_TWO_TEXT_ERROR, payload: err })
      );
  };
};

export const getHerrenInspirationThreeTextData = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_HERREN_INSPIRATION_THREE_TEXT_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/herren-inspiration-three-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_HERREN_INSPIRATION_THREE_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: GET_HERREN_INSPIRATION_THREE_TEXT_ERROR, payload: err })
      );
  };
};