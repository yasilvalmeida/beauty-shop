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
        const plentyMarketAuthData = JSON.parse(
          localStorage.getItem("plentyMarketAuthData")
        );
        const { accessToken, access_token } = plentyMarketAuthData;
        axios
          .get(`${process.env.PLENTY_MARKET_API_URL}/categories?type=item`, {
            headers: {
              Authorization: `Bearer ${
                accessToken ? accessToken : access_token
              }`,
            },
          })
          .then(async (res) => {
            const { data } = res;
            const { entries } = data;
            const categories = [];
            await entries.map(async (category, i) => {
              const { details } = category;
              if (details.length > 0) {
                const { categoryId, name, description } = details[0];
                categories.push({
                  id: categoryId,
                  name,
                  description,
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
