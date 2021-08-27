import {
  SET_LEXIKON_PAGE_TEXT_ERROR,
  GET_LEXIKON_PAGE_TEXT_DATA,
  SET_LEXIKON_PAGE_TEXT_DATA,
  SET_LEXIKON_THEME_ERROR,
  GET_LEXIKON_THEME_DATA,
  SET_LEXIKON_THEME_DATA,
} from "../action-types/lexikon";

const initialState = {
  lexikonPageTextError: null,
  lexikonPageTextLoading: true,
  lexikonPageTextData: null,
  lexikonThemeError: null,
  lexikonThemeLoading: true,
  lexikonThemeData: null,
};

const lexikonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LEXIKON_PAGE_TEXT_ERROR:
      return {
        ...state,
        lexikonPageTextError: payload,
        lexikonPageTextLoading: false,
      };
    case GET_LEXIKON_PAGE_TEXT_DATA:
      return {
        ...state,
        lexikonPageTextLoading: true,
      };
    case SET_LEXIKON_PAGE_TEXT_DATA:
      return {
        ...state,
        lexikonPageTextData: payload,
        lexikonPageTextLoading: false,
      };
    case SET_LEXIKON_THEME_ERROR:
      return {
        ...state,
        lexikonThemeError: payload,
        lexikonThemeLoading: false,
      };
    case GET_LEXIKON_THEME_DATA:
      return {
        ...state,
        lexikonThemeLoading: true,
      };
    case SET_LEXIKON_THEME_DATA:
      return {
        ...state,
        lexikonThemeData: payload,
        lexikonThemeLoading: false,
      };
  }
  return state;
};
export default lexikonReducer;
