import {
  GET_HERREN_PAGE_TEXT_DATA,
  SET_HERREN_PAGE_TEXT_DATA,
  GET_HERREN_PAGE_TEXT_ERROR,
  GET_HERREN_INSPIRATION_ONE_TEXT_DATA,
  SET_HERREN_INSPIRATION_ONE_TEXT_DATA,
  GET_HERREN_INSPIRATION_ONE_TEXT_ERROR,
  GET_HERREN_INSPIRATION_TWO_TEXT_DATA,
  SET_HERREN_INSPIRATION_TWO_TEXT_DATA,
  GET_HERREN_INSPIRATION_TWO_TEXT_ERROR,
  GET_HERREN_INSPIRATION_THREE_TEXT_DATA,
  SET_HERREN_INSPIRATION_THREE_TEXT_DATA,
  GET_HERREN_INSPIRATION_THREE_TEXT_ERROR,
} from "../action-types/herren";

const initialState = {
  herrenPageTextData: null,
  herrenPageTextLoading: true,
  herrenPageTextError: null,
  herrenInspirationOneTextData: null,
  herrenInspirationOneTextLoading: true,
  herrenInspirationOneTextError: null,
  herrenInspirationTwoTextData: null,
  herrenInspirationTwoTextLoading: true,
  herrenInspirationTwoTextError: null,
  herrenInspirationThreeTextData: null,
  herrenInspirationThreeTextLoading: true,
  herrenInspirationThreeTextError: null,
};

const herrenPageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HERREN_PAGE_TEXT_DATA:
      return {
        ...state,
        herrenPageTextLoading: false,
        herrenPageTextData: payload,
      };
    case GET_HERREN_PAGE_TEXT_DATA:
      return {
        ...state,
        herrenPageTextLoading: true,
      };
    case GET_HERREN_PAGE_TEXT_ERROR:
      return {
        ...state,
        herrenPageTextError: payload,
        herrenPageTextLoading: false,
      };
    case SET_HERREN_INSPIRATION_ONE_TEXT_DATA:
      return {
        ...state,
        herrenInspirationOneTextLoading: false,
        herrenInspirationOneTextData: payload,
      };
    case GET_HERREN_INSPIRATION_ONE_TEXT_DATA:
      return {
        ...state,
        herrenInspirationOneTextLoading: true,
      };
    case GET_HERREN_INSPIRATION_ONE_TEXT_ERROR:
      return {
        ...state,
        herrenInspirationOneTextError: payload,
        herrenInspirationOneTextLoading: false,
      };
    case SET_HERREN_INSPIRATION_TWO_TEXT_DATA:
      return {
        ...state,
        herrenInspirationTwoTextLoading: false,
        herrenInspirationTwoTextData: payload,
      };
    case GET_HERREN_INSPIRATION_TWO_TEXT_DATA:
      return {
        ...state,
        herrenInspirationTwoTextLoading: true,
      };
    case GET_HERREN_INSPIRATION_TWO_TEXT_ERROR:
      return {
        ...state,
        herrenInspirationTwoTextError: payload,
        herrenInspirationTwoTextLoading: false,
      };
    case SET_HERREN_INSPIRATION_THREE_TEXT_DATA:
      return {
        ...state,
        herrenInspirationThreeTextLoading: false,
        herrenInspirationThreeTextData: payload,
      };
    case GET_HERREN_INSPIRATION_THREE_TEXT_DATA:
      return {
        ...state,
        herrenInspirationThreeTextLoading: true,
      };
    case GET_HERREN_INSPIRATION_THREE_TEXT_ERROR:
      return {
        ...state,
        herrenInspirationThreeTextError: payload,
        herrenInspirationThreeTextLoading: false,
      };
    default:
      return state;
  }
};

export default herrenPageReducer;
