import { 
    PLENTY_MARKET_TOKEN, 
    PLENTY_MARKET_LOGIN, 
    PLENTY_MARKET_ERROR
} from '../action-types/plenty_market_auth';
import axios from 'axios';

export const getPlentyMarketAuthDataFromLocalStorage = () => {
    return dispatch => {
        const plentyMarketAuthData = localStorage.getItem(
            "plentyMarketAuthData"
        )
            ? JSON.parse(localStorage.getItem("plentyMarketAuthData"))
            : null;
    
        if (plentyMarketAuthData) {
            console.log("plentyMarketAuthData", plentyMarketAuthData);
            return dispatch({ type: PLENTY_MARKET_TOKEN, payload: plentyMarketAuthData });
        }
    };
};

export const backendLogin = () => {
    return dispatch => {
        dispatch({ type: PLENTY_MARKET_TOKEN });
        const plentyMarketAuthData = JSON.parse(localStorage.getItem("plentyMarketAuthData"));
        const { expiresDate } = plentyMarketAuthData;
        const today = new Date()
          .toISOString()
          .slice(0, 19)
          .replace("T", " ");
        if (expiresDate > today) {
          const headers = {
            "Content-type": "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST",
          };
          axios
            .post(
              `${process.env.PLENTY_MARKET_API_URL}/login`,
              {
                username: process.env.PLENTY_MARKET_USERNAME,
                password: process.env.PLENTY_MARKET_PASSWORD,
              }
              /* {
              headers: headers
            },
            { crossdomain: true }, */
            )
            .then((res) => {
              const { data } = res;
              const { accessToken, refreshToken, expiresIn } = data;
              const today = new Date(Date.now() + expiresIn)
                .toISOString()
                .slice(0, 19)
                .replace("T", " ");
              localStorage.setItem(
                "plentyMarketAuthData",
                JSON.stringify({
                  accessToken,
                  refreshToken,
                  expiresIn,
                })
              );
              return dispatch({
                type: PLENTY_MARKET_LOGIN,
                payload: {
                  accessToken,
                  refreshToken,
                  expiresIn,
                  expiresDate: today,
                },
              });
            })
            .catch((err) =>
              dispatch({ type: PLENTY_MARKET_ERROR, payload: err })
            );
        }
    };
};