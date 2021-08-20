import {
  SET_HEADER_ERROR,
  SET_HEADER_TEXT,
  SET_HEADER_LANGUAGE,
  SET_HEADER_CONTACT,
  SET_HEADER_PAGE_TEXT,
  GET_HEADER,
} from "../action-types/header";

const initialState = {
  headerLoading: true,
  headerText: null,
  headerError: null,
  headerLanguage: "de",
  headerContact: null,
  headerPageText: null,
};

const headerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HEADER_ERROR:
      return {
        ...state,
        headerLoading: false,
        headerError: payload,
      };
    case GET_HEADER:
      return {
        ...state,
        headerLoading: true,
      };
    case SET_HEADER_TEXT:
      return {
        ...state,
        headerLoading: false,
        headerText: payload,
      };
    case SET_HEADER_LANGUAGE:
      return {
        ...state,
        headerLoading: false,
        headerLanguage: payload,
      };
    case SET_HEADER_CONTACT:
      return {
        ...state,
        headerLoading: false,
        headerContact: payload,
      };
    case SET_HEADER_PAGE_TEXT:
      return {
        ...state,
        headerLoading: false,
        headerPageText: payload,
      };
  }
  return state;
};
export default headerReducer;
