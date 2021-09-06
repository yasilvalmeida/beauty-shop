import {
  GET_KONTO_MAIN_BOXES_DATA,
  SET_KONTO_MAIN_BOXES_DATA,
  GET_KONTO_MAIN_BOXES_ERROR,
  GET_KONTO_PAGE_TEXT_DATA,
  SET_KONTO_PAGE_TEXT_DATA,
  GET_KONTO_PAGE_TEXT_ERROR,
} from "../action-types/konto";

const initialState = {
  kontoMainBoxesData: null,
  kontoMainBoxesLoading: true,
  kontoMainBoxesError: null,
  kontoPageTextData: null,
  kontoPageTextLoading: true,
  kontoPageTextError: null,
};

const kontoPageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_KONTO_MAIN_BOXES_DATA:
      return {
        ...state,
        kontoMainBoxesLoading: false,
        kontoMainBoxesData: payload,
      };
    case GET_KONTO_MAIN_BOXES_DATA:
      return {
        ...state,
        kontoMainBoxesLoading: true,
      };
    case GET_KONTO_MAIN_BOXES_ERROR:
      return {
        ...state,
        kontoMainBoxesError: payload,
        kontoMainBoxesLoading: false,
      };
    case SET_KONTO_PAGE_TEXT_DATA:
      return {
        ...state,
        kontoPageTextLoading: false,
        kontoPageTextData: payload,
      };
    case GET_KONTO_PAGE_TEXT_DATA:
      return {
        ...state,
        kontoPageTextLoading: true,
      };
    case GET_KONTO_PAGE_TEXT_ERROR:
      return {
        ...state,
        kontoPageTextError: payload,
        kontoPageTextLoading: false,
      };
    default:
      return state;
  }
};

export default kontoPageReducer;
