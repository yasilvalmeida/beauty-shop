import { ADD_PARAMETERS, SET_ERROR } from "../action-types/ergebnis";

export const addParameters = (parameters) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PARAMETERS,
      payload: parameters,
    });
  };
};