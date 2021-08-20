import {
  SET_ERROR,
  GET_FOOTER,
  SET_FOOTER_CONTACT,
  SET_FOOTER_HEADER,
  SET_FOOTER_TOP,
  SET_FOOTER_PAYMENT,
  SET_FOOTER_DPAB,
  SET_FOOTER_MAIN_MENU,
} from "../action-types/footer";

const initialState = {
  error: null,
  footerTop: [],
  footerContact: null,
  footerHeader: null,
  footerPayment: null,
  footerDPAB: null,
  footerMainMenu: null,
  footerLoaded: true,
};

const footerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERROR:
      return {
        ...state,
        footerLoader: false,
        error: payload,
      };
    case GET_FOOTER:
      return {
        ...state,
        footerLoader: true,
      };
    case SET_FOOTER_CONTACT:
      return {
        ...state,
        footerLoader: false,
        footerContact: payload,
      };
    case SET_FOOTER_HEADER:
      return {
        ...state,
        footerLoader: false,
        footerHeader: payload,
      };
    case SET_FOOTER_TOP:
      return {
        ...state,
        footerLoader: false,
        footerTop: payload,
      };
    case SET_FOOTER_PAYMENT:
      return {
        ...state,
        footerLoader: false,
        footerPayment: payload,
      };
    case SET_FOOTER_DPAB:
      return {
        ...state,
        footerLoader: false,
        footerDPAB: payload,
      };
    case SET_FOOTER_MAIN_MENU:
      return {
        ...state,
        footerLoader: false,
        footerMainMenu: payload,
      };
    default:
      return state;
  }
};

export default footerReducer;
