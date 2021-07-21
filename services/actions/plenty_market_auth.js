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
        const today = new Date()/* 
          .toISOString()
          .slice(0, 19)
          .replace("T", " ") */;
        if (true) {
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
              },
              {
                headers: headers
              },
              { crossdomain: true },
            )
            .then((res) => {
              const { data } = res;
              const { accessToken, refreshToken, expiresIn } = data;
              const expiresDate = new Date(Date.now() + expiresIn)/* 
                .toISOString()
                .slice(0, 19)
                .replace("T", " "); */
              localStorage.setItem(
                "plentyMarketAuthData",
                JSON.stringify({
                  accessToken,
                  refreshToken,
                  expiresDate,
                })
              );
              return dispatch({
                type: PLENTY_MARKET_LOGIN,
                payload: {
                  accessToken,
                  refreshToken,
                  expiresDate
                },
              });
            })
            .catch((err) =>
              dispatch({ type: PLENTY_MARKET_ERROR, payload: err })
            );
        } else {
          /* const options = {
            method: "POST",
            mode: 'cors',
            headers: {
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,POST",
              Accept: "text/html",
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: {
              username: process.env.PLENTY_MARKET_USERNAME,
              password: process.env.PLENTY_MARKET_PASSWORD,
            },
          };

          fetch(`${process.env.PLENTY_MARKET_API_URL}/login`, options)
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((err) => console.error(err)); */
        }
    };
};