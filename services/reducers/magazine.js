import {
  SET_MAGAZINE_ONE_PAGE_TEXT_ERROR,
  GET_MAGAZINE_ONE_PAGE_TEXT_DATA,
  SET_MAGAZINE_ONE_PAGE_TEXT_DATA,
} from "../action-types/magazine";

const initialState = {
  magazineOnePageTextError: null,
  magazineOnePageTextLoading: true,
  magazineOnePageTextData: null,
};

const magazineReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MAGAZINE_ONE_PAGE_TEXT_ERROR:
      return {
        ...state,
        magazineOnePageTextError: payload,
        magazineOnePageTextLoading: false,
      };
    case GET_MAGAZINE_ONE_PAGE_TEXT_DATA:
      return {
        ...state,
        magazineOnePageTextLoading: true,
      };
    case SET_MAGAZINE_ONE_PAGE_TEXT_DATA:
      return {
        ...state,
        magazineOnePageTextData: payload,
        magazineOnePageTextLoading: false,
      };
  }
  return state;
};
export default magazineReducer;
