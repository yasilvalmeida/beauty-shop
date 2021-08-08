import {
  POST_NEWSLETTER,
  SET_NEWSLETTER,
  SET_NEWSLETTER_ERROR,
} from "../action-types/newsletter";
import axios from "axios";

export const postNewsletter = (formData) => {
  return function (dispatch) {
    axios
      .post("http://207.154.241.233:1337/user-newsletters", formData)
      .then((response) => {
        dispatch({ type: POST_NEWSLETTER, payload: response.data });
      })
      .catch((err) => dispatch({ type: SET_NEWSLETTER_ERROR, payload: error }));
  };
};
export const setNewsLetters = (data) => ({
  type: SET_NEWSLETTER,
  payload: data,
});
