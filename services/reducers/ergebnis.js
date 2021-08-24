import {
  ADD_PARAMETERS,
  SET_ERGEBNIS_PAGE_ERROR,
  GET_ERGEBNIS_PAGE_TEXT,
  SET_ERGEBNIS_PAGE_TEXT,
} from "../action-types/ergebnis";

const initialState = {
  parameters: [],
  pageError: null,
  pageText: null,
  pageLoading: true,
};

const ergebnisReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PARAMETERS:
      return {
        ...state,
        parameters: payload,
      };
    case SET_ERGEBNIS_PAGE_ERROR:
      return {
        ...state,
        pageError: payload,
        pageLoading: false,
      };
    case GET_ERGEBNIS_PAGE_TEXT:
      return {
        ...state,
        pageLoading: true,
      };
    case SET_ERGEBNIS_PAGE_TEXT:
      return {
        ...state,
        pageText: payload,
        pageLoading: false,
      };
    default:
      return state;
  }
};

export default ergebnisReducer;
