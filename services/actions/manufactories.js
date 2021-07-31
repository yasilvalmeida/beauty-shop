import {
  GET_MANUFACTORIES,
  SET_MANUFACTORIES,
  SET_ERROR,
} from "../action-types/manufactories";

import axios from "axios";

export const getManufactories = () => {
    return (dispatch) => {
        dispatch({ type: GET_MANUFACTORIES });
        axios
          .get(
            `${process.env.PLENTY_MARKET_API_URL}?action=fetchManufactorers&page=1&itemsPerPage=200`
          )
          .then(async (res) => {
            const { data } = res;
            const { entries } = data;
            const manufactories = [];
            manufactories.push({
              id: 0,
              name: "Keiner",
            });
            await entries.map(async (manufactory, i) => {
              const { id, name } = manufactory;
              manufactories.push({
                id,
                name,
              });
              if (i === entries.length - 1) {
                dispatch({
                  type: SET_MANUFACTORIES,
                  payload: manufactories,
                });
              }
            });
          })
          .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
    };
};
