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
        dispatch({ type: PLENTY_MARKET_TOKEN })
        
        axios
          .post(
            `${process.env.PLENTY_MARKET_API_URL}/login`,
            {
              username: process.env.PLENTY_MARKET_USERNAME,
              password: process.env.PLENTY_MARKET_PASSWORD,
            },
            {
              "Content-Type": "text/plain; charset=UTF-8",
            }
          )
          .then((res) => {
            localStorage.setItem(
              "plentyMarketAuthData",
              JSON.stringify(res.data)
            );

            return dispatch({ type: PLENTY_MARKET_LOGIN, payload: res.data });
          })
          .catch((err) =>
            dispatch({ type: PLENTY_MARKET_ERROR, payload: err })
          );
    };
};
