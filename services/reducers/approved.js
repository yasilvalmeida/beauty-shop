import {
  GET_APPROVED_DATA,
  SET_APPROVED_DATA,
  SET_ERROR,
} from "../action-types/approved";

const initialState = {
  approvedDataLoading: true,
  approvedData: [],
  error: null,
};

const approvedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_APPROVED_DATA:
      return {
        ...state,
        approvedDataLoading: true,
      };
    case SET_APPROVED_DATA:
      return {
        ...state,
        approvedDataLoading: false,
        approvedData: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default approvedReducer;
