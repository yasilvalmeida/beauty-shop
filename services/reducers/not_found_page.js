import {
  LOADER,
  SET_ERROR,
  SET_NOT_FOUND_DATA,
  SET_NOT_FOUND_TEXT,
} from "../action-types/not_found_page";

const initialState = {
  loading: true,
  error: null,
  notFoundData: null,
  notFoundText: null,
};

const notFoundReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADER:
      return {
        ...state,
        loading: true,
      };

    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case SET_NOT_FOUND_DATA:
      return {
        ...state,
        loading: false,
        notFoundData: payload,
      };
    case SET_NOT_FOUND_TEXT:
      return {
        ...state,
        loading: false,
        notFoundText: payload,
      };

    default:
      return state;
  }
};

export default notFoundReducer;
