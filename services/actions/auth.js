import {
  GET_LOGIN_DATA,
  SET_LOGIN_DATA,
  SET_LOGIN_ERROR,
  LOGOUT_USER,
  SET_LOGIN_PAGE_TEXT_ERROR,
  GET_LOGIN_PAGE_TEXT_DATA,
  SET_LOGIN_PAGE_TEXT_DATA,
} from "../action-types/auth";
import axios from "axios";

export const getUserDataFromLocalStorage = () => {
  return (dispatch) => {
    const userData = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null;

    if (userData) {
      localStorage.removeItem("userData");
      return dispatch({ type: GET_LOGIN_DATA, payload: userData });
    }
  };
};

export const login = (data) => {
  return (dispatch) => {
    dispatch({ type: GET_LOGIN_DATA });
    axios
      .post(`${process.env.PLENTY_MARKET_API_URL}?action=login`, data)
      .then((res) => {
        const { data } = res;
        localStorage.setItem("userData", JSON.stringify(data));
        return dispatch({
          type: SET_LOGIN_DATA,
          payload: { auth: data, body: data },
        });
      })
      .catch((err) => {
        return dispatch({
          type: SET_LOGIN_ERROR,
          payload: { error: "Login failed!" },
        });
      });
  };
};

export const logout = () => {
  localStorage.removeItem("userData");
  return { type: LOGOUT_USER };
};

export const getLoginPageText = (lang) => {
    return (dispatch) => {
      dispatch({ type: GET_LOGIN_PAGE_TEXT_DATA });
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}/login-page-text?_locale=${lang}`
        )
        .then((res) => {
          const { data } = res;
          dispatch({
            type: SET_LOGIN_PAGE_TEXT_DATA,
            payload: data,
          });
        })
        .catch((err) =>
          dispatch({ type: SET_LOGIN_PAGE_TEXT_ERROR, payload: err })
        );
    };
};
