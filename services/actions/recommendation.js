import {
  GET_RECOMMENDATION_PAGE_TEXT,
  SET_RECOMMENDATION_PAGE_TEXT,
  SET_RECOMMENDATION_ERROR
} from "../action-types/recommendation";
import axios from "axios";

export const getRecommendationPageText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_RECOMMENDATION_PAGE_TEXT });

    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/recommendation-page-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_RECOMMENDATION_PAGE_TEXT,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_RECOMMENDATION_ERROR, payload: err }));
  };
};