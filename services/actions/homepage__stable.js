import {
  GET_NAVBAR_SETTINGS,
  GET_HOMEPAGE_SECTIONONE,
  SET_HOMEPAGE_SECTIONONE,
  GET_HEADER_CONTACTS,
  SET_ERROR,
  SET_HOMEPAGE_HEADERTXTS,
  GET_COLLECTION_SHOPS,
  SET_COLLECTION_SHOPS,
  GET_INSPIRATIONS,
  SET_INSPIRATIONS,
  SET_NAVBAR_SETTINGS,
  SET_HEADER_CONTACTS,
  SET_FOUR_ICONS,
  SET_MIDFOOT,
  SET_NEWSLETTER_TEXT,
  HOMEPAGE_LOADER,
  GET_RENDER_MODAL,
} from "../action-types/homepage__stable";
import axios from "axios";

export const getNavbar = () => {
  return (dispatch) => {
    dispatch({ type: HOMEPAGE_LOADER });
    dispatch({ type: GET_NAVBAR_SETTINGS });

    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/navbaritems`)
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_NAVBAR_SETTINGS,
          payload: data,
        });
        return data;
      })
      .catch((err) => dispatch({ type: SET_ERROR }));
  };
};

export const getHomePageSctOne = () => {
  return (dispatch) => {
    dispatch({ type: GET_HOMEPAGE_SECTIONONE });
    dispatch({ type: HOMEPAGE_LOADER });


    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/section-under-navbars`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_HOMEPAGE_SECTIONONE,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_ERROR }));
  };
};

export const getHeaderContacts = () => {
  return (dispatch) => {
    dispatch({ type: GET_HEADER_CONTACTS });
    dispatch({ type: HOMEPAGE_LOADER });


    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/contact-details`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_HEADER_CONTACTS,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_ERROR }));
  };
  // return function (dispatch){
  //     axios.get('http://207.154.241.233:1337/contact-details')
  //         .then(response => dispatch({type: GET_HEADER_CONTACTS,payload: response.data}) )
  //         .catch(err => dispatch({type: SET_ERROR}));
  // }
};

export const getHeaderTexts = () => {
  return (dispatch) => {
    dispatch({ type: HOMEPAGE_LOADER });

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/page-headers`)
      .then((res) => {
        const { data } = res;
        const firstIndx = data.findIndex((elem) => elem?.position === "black");

        dispatch({
          type: SET_HOMEPAGE_HEADERTXTS,
          payload: [
            data[firstIndx]?.describe_HTML_CSS,
            data[1 - firstIndx]?.describe_HTML_CSS,
          ],
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR }));
  };
};

export const getCollectionShops = () => {
  return (dispatch) => {
    dispatch({ type: GET_COLLECTION_SHOPS });
    dispatch({ type: HOMEPAGE_LOADER });


    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/collection-shops`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_COLLECTION_SHOPS,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_ERROR }));
  };
};

export const getInspirations = () => {
  return (dispatch) => {
    dispatch({ type: GET_INSPIRATIONS });
    dispatch({ type: HOMEPAGE_LOADER });


    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/inspirations`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_INSPIRATIONS,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_ERROR }));
  };
};
export const getFourIcons = () => {
  return (dispatch) => {
    dispatch({ type: HOMEPAGE_LOADER });

    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/four-icons`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_FOUR_ICONS,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_ERROR }));
  };
};
export const getMidFoot = () => {
  return (dispatch) => {
    dispatch({ type: HOMEPAGE_LOADER });

    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/mid-footers`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_MIDFOOT,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_ERROR }));
  };
};
export const getNewsletterText = () => {
  return (dispatch) => {
    dispatch({ type: HOMEPAGE_LOADER });

    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/newsletter-texts`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_NEWSLETTER_TEXT,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_ERROR }));
  };
};


export const getRenderModal = () => {
    return (dispatch) => {
      dispatch({ type: HOMEPAGE_LOADER });

      return axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/home-page-popup-content`)
        .then((res) => {
          const { data } = res;
          dispatch({
            type: GET_RENDER_MODAL,
            payload: data,
          });
  
          return data;
        })
        .catch((err) => dispatch({ type: SET_ERROR }));
    };
  };
  