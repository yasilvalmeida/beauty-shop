import {
  GET_LOGIN_DATA,
  SET_LOGIN_DATA,
  SET_LOGIN_ERROR,
  LOGOUT_USER,
  SET_LOGIN_PAGE_TEXT_ERROR,
  GET_LOGIN_PAGE_TEXT_DATA,
  SET_LOGIN_PAGE_TEXT_DATA,
} from "../action-types/auth";

const initialState = {
  loginLoading: false,
  token: "",
  userData: null,
  loginError: null,
  isAuthenticated: false,
  loginPageTextError: null,
  loginPageTextLoading: false,
  loginPageTextData: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOGIN_DATA:
      return {
        ...state,
        loginLoading: true,
      };
    case SET_LOGIN_DATA:
      return {
        ...state,
        loginLoading: false,
        userData: payload.user,
        token: payload.jwt,
        isAuthenticated: true,
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginLoading: false,
        loginError: payload,
        isAuthenticated: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loginLoading: false,
        userData: null,
        token: "",
        isAuthenticated: false,
        loginError: null,
      };
    case SET_LOGIN_PAGE_TEXT_ERROR:
      return {
        ...state,
        loginPageTextLoading: false,
        loginPageTextError: payload,
      };
    case GET_LOGIN_PAGE_TEXT_DATA:
      return {
        ...state,
        loginPageTextLoading: true,
      };
    case SET_LOGIN_PAGE_TEXT_DATA:
      return {
        ...state,
        loginPageTextLoading: false,
        loginPageTextData: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
