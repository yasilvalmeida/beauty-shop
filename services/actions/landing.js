import {
  SET_RENDER_MODAL_ERROR,
  GET_RENDER_MODAL_DATA,
  SET_RENDER_MODAL_DATA,
  SET_FIRST_INTRO_ERROR,
  GET_FIRST_INTRO_DATA,
  SET_FIRST_INTRO_DATA,
  SET_PRODUCTS_WITH_LEFT_TEXT_ONE_ERROR,
  GET_PRODUCTS_WITH_LEFT_TEXT_ONE_DATA,
  SET_PRODUCTS_WITH_LEFT_TEXT_ONE_DATA,
  SET_PRODUCTS_WITH_LEFT_TEXT_TWO_ERROR,
  GET_PRODUCTS_WITH_LEFT_TEXT_TWO_DATA,
  SET_PRODUCTS_WITH_LEFT_TEXT_TWO_DATA,
  SET_SECTION_TEXT_ERROR,
  GET_SECTION_TEXT_DATA,
  SET_SECTION_TEXT_DATA,
  SET_INSPIRATION_ONE_TEXT_ERROR,
  GET_INSPIRATION_ONE_TEXT_DATA,
  SET_INSPIRATION_ONE_TEXT_DATA,
  SET_INSPIRATION_TWO_TEXT_ERROR,
  GET_INSPIRATION_TWO_TEXT_DATA,
  SET_INSPIRATION_TWO_TEXT_DATA,
  SET_INSPIRATION_THREE_TEXT_ERROR,
  GET_INSPIRATION_THREE_TEXT_DATA,
  SET_INSPIRATION_THREE_TEXT_DATA,
  SET_NEWS_SECTION_TEXT_ERROR,
  GET_NEWS_SECTION_TEXT_DATA,
  SET_NEWS_SECTION_TEXT_DATA,
  SET_DPAB_MAGAZINE_TEXT_ERROR,
  GET_DPAB_MAGAZINE_TEXT_DATA,
  SET_DPAB_MAGAZINE_TEXT_DATA,
  SET_DPAB_BOTTOM_TEXT_ERROR,
  GET_DPAB_BOTTOM_TEXT_DATA,
  SET_DPAB_BOTTOM_TEXT_DATA,
} from "../action-types/landing";
import axios from "axios";

export const getRenderModal = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_RENDER_MODAL_DATA });

    return axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/home-page-popup-content?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_RENDER_MODAL_DATA,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_RENDER_MODAL_ERROR }));
  };
};

export const getFirstIntroPageText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_FIRST_INTRO_DATA });

    return axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/first-intro-page-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_FIRST_INTRO_DATA,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_FIRST_INTRO_ERROR }));
  };
};

export const getProductsWithLeftTextOne = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_PRODUCTS_WITH_LEFT_TEXT_ONE_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/product-with-left-text-one?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_PRODUCTS_WITH_LEFT_TEXT_ONE_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: SET_PRODUCTS_WITH_LEFT_TEXT_ONE_ERROR, payload: err })
      );
  };
};

export const getProductsWithLeftTextTwo = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_PRODUCTS_WITH_LEFT_TEXT_TWO_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/product-with-left-text-two?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_PRODUCTS_WITH_LEFT_TEXT_TWO_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: SET_PRODUCTS_WITH_LEFT_TEXT_TWO_ERROR, payload: err })
      );
  };
};

export const getSectionText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_SECTION_TEXT_DATA });
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/section-text?_locale=${lang}`)
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_SECTION_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_SECTION_TEXT_ERROR, payload: err }));
  };
};

export const getInspirationOneText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_INSPIRATION_ONE_TEXT_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/inspiration-one-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_INSPIRATION_ONE_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: SET_INSPIRATION_ONE_TEXT_ERROR, payload: err })
      );
  };
};

export const getInspirationTwoText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_INSPIRATION_TWO_TEXT_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/inspiration-two-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_INSPIRATION_TWO_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: SET_INSPIRATION_TWO_TEXT_ERROR, payload: err })
      );
  };
};

export const getInspirationThreeText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_INSPIRATION_THREE_TEXT_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/inspiration-three-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_INSPIRATION_THREE_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: SET_INSPIRATION_THREE_TEXT_ERROR, payload: err })
      );
  };
};

export const getNewsSectionText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_NEWS_SECTION_TEXT_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/news-section-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_NEWS_SECTION_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: SET_NEWS_SECTION_TEXT_ERROR, payload: err })
      );
  };
};

export const getDPABMagazineText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_DPAB_MAGAZINE_TEXT_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/d-pab-magazine-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_DPAB_MAGAZINE_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: SET_DPAB_MAGAZINE_TEXT_ERROR, payload: err })
      );
  };
};

export const getDPABBottomText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_DPAB_BOTTOM_TEXT_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/d-pab-bottom-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_DPAB_BOTTOM_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: SET_DPAB_BOTTOM_TEXT_ERROR, payload: err })
      );
  };
};