import {
  GET_RECOMMENDATION_PAGE_TEXT,
  SET_RECOMMENDATION_PAGE_TEXT,
  SET_RECOMMENDATION_ERROR
} from "../action-types/recommendation";

const initialState = {
  recommendationTextData: null,
  recommendationTextError: null,
  recommendationTextLoading: true,
}

const recommendationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RECOMMENDATION_ERROR:
      return {
        ...state,
        recommendationTextLoading: false,
        recommendationTextError: payload,
      };
    case GET_RECOMMENDATION_PAGE_TEXT:
      return {
        ...state,
        recommendationTextLoading: true,
      };
    case SET_RECOMMENDATION_PAGE_TEXT:
      return {
        ...state,
        recommendationTextLoading: false,
        recommendationTextData: payload,
      };
    default:
      return state;
  }
};

export default recommendationReducer;