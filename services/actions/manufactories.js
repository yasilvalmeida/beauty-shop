import {
  GET_MANUFACTORIES,
  SET_MANUFACTORIES,
  SET_ERROR,
} from "../action-types/manufactories";

import axios from "axios";

export const getManufactories = (lang = "de") => {
    return (dispatch) => {
        dispatch({ type: GET_MANUFACTORIES });
        axios
          .get(
            `${process.env.PLENTY_MARKET_API_URL}?action=fetchManufacturers&page=1&itemsPerPage=200&lang=${lang}`
          )
          .then(async (res) => {
            const { data } = res;
            const { entries } = data;
            const manufactories = [];
            await entries.map(async (manufactory, i) => {
              const { id, name } = manufactory;
              manufactories.push({
                id,
                name,
              });
              if (i === entries.length - 1) {
                const sortManufacturers = manufactories.sort((a, b) => {
                  if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  // a must be equal to b
                  return 0;;
                });
                dispatch({
                  type: SET_MANUFACTORIES,
                  payload: sortManufacturers,
                });
              }
            });
          })
          .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
    };
};
