import {
  LOADER,
  SET_ERROR,
  SET_ABOUT_TEXT,
} from "../action-types/about_page";

const initialState = {
  loading: true,
  error: null,
  aboutData: null,
  aboutText: null,
};

const aboutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADER:
      return {
        ...state,
        loading: true
      };

    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case SET_ABOUT_TEXT:
      return {
        ...state,
        loading: false,
        aboutText: payload,
      };

    default:
      return state;
  }
};

export default aboutReducer;
