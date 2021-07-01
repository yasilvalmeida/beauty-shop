import * as notFoundTypes from "../action-types/not_found_page";

const initialState = {
  loading: true,
  error: null,
  notFoundData: null,
};

const notFoundReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case notFoundTypes.LOADER:
      return {
        ...state,
        loading: true,
      };

    case notFoundTypes.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case notFoundTypes.SET_NOT_FOUND_DATA:
      return {
        ...state,
        loading: false,
        notFoundData: payload,
      };

    default:
      return state;
  }
};

export default notFoundReducer;
