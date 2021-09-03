import {
  GET_SOCIAL_URL_DATA,
  SET_SOCIAL_URL_DATA,
  SET_SOCIAL_URL_ERROR,
} from "../action-types/social";

const initialState = {
  socialUrlData: null,
  socialUrlError: null,
  socialUrlLoading: true,
};

const socialReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SOCIAL_URL_DATA:
      return {
        ...state,
        socialUrlLoading: true,
      };
    case SET_SOCIAL_URL_DATA:
      return {
        ...state,
        socialUrlLoading: false,
        socialUrlData: payload,
      };
    case SET_SOCIAL_URL_ERROR:
      return {
        ...state,
        socialUrlLoading: false,
        socialUrlError: payload,
      };
    default:
      return state;
  }
};

export default socialReducer;
