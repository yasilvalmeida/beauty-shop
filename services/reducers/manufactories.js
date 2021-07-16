import {
    GET_MANUFACTORIES,
    SET_MANUFACTORIES,
    SET_ERROR
} from "../action-types/manufactories";

const initialState = {
  manufactoryLoading: false,
  manufactories: [],
  manufactoriesError: null,
};

const manufactoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MANUFACTORIES:
      return {
        ...state,
        manufactoryLoading: true,
      };
    case SET_MANUFACTORIES:
      return {
        ...state,
        manufactoryLoading: false,
        manufactories: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        manufactoryLoading: false,
        manufactoriesError: payload,
      };
    default:
      return state;
  }
};

export default manufactoriesReducer;
