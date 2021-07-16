import {
  GET_MANUFACTORIES,
  SET_MANUFACTORIES,
  SET_ERROR,
} from "../action-types/manufactories";
import { backendLogin } from "./plenty_market_auth";

import axios from "axios";

export const getManufactories = () => {
    return (dispatch) => {
        dispatch(backendLogin())
        dispatch({ type: GET_MANUFACTORIES });
        const plentyMarketAuthData = JSON.parse(localStorage.getItem("plentyMarketAuthData"));
        const { accessToken } = plentyMarketAuthData;
        axios
          .get(
            `${process.env.PLENTY_MARKET_API_URL}/items/manufacturers?itemsPerPage=200`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then(async (res) => {
            const { data } = res;
            const { entries } = data;
            const manufactories = [];
            manufactories.push({
              id: 0,
              name: "None",
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
