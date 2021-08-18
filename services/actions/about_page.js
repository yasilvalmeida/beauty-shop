import {
  SET_ABOUT_TEXT,
  SET_ERROR,
  LOADER,
} from "../action-types/about_page";
import axios from "axios";

export const getAboutText = (lang) => {
  return (dispatch) => {
    dispatch({ type: LOADER });
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/about-page-text?_locale=${lang}`)
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_ABOUT_TEXT,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};
