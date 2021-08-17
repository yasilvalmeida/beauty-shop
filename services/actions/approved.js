import {
  GET_APPROVED_DATA,
  SET_APPROVED_DATA,
  SET_ERROR,
} from "../action-types/approved";
import axios from "axios";

export const getApprovedData = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_APPROVED_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/approved-by-us?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_APPROVED_DATA,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};
