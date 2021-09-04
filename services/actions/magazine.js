import {
  SET_MAGAZINE_ONE_PAGE_TEXT_ERROR,
  GET_MAGAZINE_ONE_PAGE_TEXT_DATA,
  SET_MAGAZINE_ONE_PAGE_TEXT_DATA,
} from "../action-types/magazine";
import axios from "axios";

export const getMagazineOnePageText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_MAGAZINE_ONE_PAGE_TEXT_DATA });

    return axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/magazine-one-page-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_MAGAZINE_ONE_PAGE_TEXT_DATA,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_MAGAZINE_ONE_PAGE_TEXT_ERROR }));
  };
};
