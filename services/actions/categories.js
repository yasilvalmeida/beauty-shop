import {
  GET_CATEGORIES,
  SET_CATEGORIES,
  SET_ERROR,
} from "../action-types/categories";
import { backendLogin } from "./plenty_market_auth";

import axios from "axios";

export const getCategories = () => {
    return (dispatch) => {
        dispatch(backendLogin())
        dispatch({ type: GET_CATEGORIES });
        const plentyMarketAuthData = JSON.parse(localStorage.getItem("plentyMarketAuthData"));
        const { accessToken } = plentyMarketAuthData;
        axios
          .get(
            `${process.env.PLENTY_MARKET_API_URL}/categories?type=item&itemsPerPage=200`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then(async (res) => {
            const { data } = res;
            const { entries } = data;
            const categories = [];
            categories.push({
              id: 0,
              name: "Keiner",
            });
            await entries.map(async (category, i) => {
              const { details } = category;
              if (details.length > 0) {
                const { categoryId, name } = details[0];
                categories.push({
                  id: categoryId,
                  name,
                });
              }
              if (i === entries.length - 1) {
                dispatch({
                  type: SET_CATEGORIES,
                  payload: categories,
                });
              }
            });
          })
          .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
    };
};
