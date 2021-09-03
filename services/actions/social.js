import {
  GET_SOCIAL_URL_DATA,
  SET_SOCIAL_URL_DATA,
  SET_SOCIAL_URL_ERROR,
} from "../action-types/social";
import axios from "axios";

export const getSocialUrlText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_SOCIAL_URL_DATA });

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/social-text?_locale=${lang}`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_SOCIAL_URL_DATA,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_SOCIAL_URL_ERROR, payload: err }));
  };
};
