import {
  PLENTY_MARKET_TOKEN,
  PLENTY_MARKET_LOGIN,
  PLENTY_MARKET_ERROR,
} from "../action-types/plenty_market_auth";

const initialState = {
  loading: false,
  accessToken: "",
  refreshToken: "",
  error: null,
  isAuthenticated: false,
};

const plentyMarketAuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PLENTY_MARKET_TOKEN:
      return {
        ...state,
        loading: true,
      };
    case PLENTY_MARKET_LOGIN:
      return {
        ...state,
        loading: false,
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token,
        isAuthenticated: true,
      };
    case PLENTY_MARKET_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default plentyMarketAuthReducer;
