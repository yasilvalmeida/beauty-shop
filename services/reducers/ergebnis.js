import { ADD_PARAMETERS, SET_ERROR } from "../action-types/ergebnis";

const initialState = {
  parameters: [],
  error: "",
};

const ergebnisReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PARAMETERS:
      return {
        ...state,
        parameters: payload,
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

export default ergebnisReducer;
