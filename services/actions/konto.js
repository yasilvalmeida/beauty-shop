import axios from "axios";
import {
  GET_KONTO_MAIN_BOXES_DATA,
  SET_KONTO_MAIN_BOXES_DATA,
  GET_KONTO_MAIN_BOXES_ERROR,
  GET_KONTO_PAGE_TEXT_DATA,
  SET_KONTO_PAGE_TEXT_DATA,
  GET_KONTO_PAGE_TEXT_ERROR,
} from "../action-types/konto";

export const getKontoMainBoxesData = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_KONTO_MAIN_BOXES_DATA });
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/main-accounts?_locale=${lang}&_sort=id:ASC`)
      .then((res) => {
        const { data } = res;
        /* const sortData = data.sort((a, b) => {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          // a must be equal to b
          return 0;
        }); */

        dispatch({
          type: SET_KONTO_MAIN_BOXES_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: GET_KONTO_MAIN_BOXES_ERROR, payload: err })
      );
  };
};

export const getKontoPageTextData = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_KONTO_PAGE_TEXT_DATA });
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/konto-page-text?_locale=${lang}`)
      .then((res) => {
        const { data } = res;
        
        dispatch({
          type: SET_KONTO_PAGE_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: GET_KONTO_PAGE_TEXT_ERROR, payload: err })
      );
  };
};
