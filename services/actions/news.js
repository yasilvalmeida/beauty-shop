import { GET_NEWS_REPORT, SET_NEWS_REPORT, SET_ERROR,SET_SHOP_LGTXT ,SET_MAGAZIN_STAIR_ADD} from '../action-types/news';
import axios from 'axios';

export const getNewsReport = () => {
  return dispatch => {
    dispatch({ type: GET_NEWS_REPORT });

    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/news-reports`)
      .then(res => {
        const { data } = res;
        
        dispatch({ 
          type: SET_NEWS_REPORT, 
          payload: data 
        });
      })
      .catch(err => dispatch({ type: SET_ERROR, payload: err }));
  };
};
export const getShopLgText = () => {
    return dispatch => {

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/shop-page-large-texts`)
            .then(res => {
                const { data } = res;

                dispatch({
                    type: SET_SHOP_LGTXT,
                    payload: data
                });
            })
            .catch(err => dispatch({ type: SET_ERROR, payload: err }));
    };
};
export const getStairsAdd = () => {
    return dispatch => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/stair-sections`)
            .then(res => {
                const { data } = res;

                dispatch({
                    type: SET_MAGAZIN_STAIR_ADD,
                    payload: data
                });
            })
            .catch(err => dispatch({ type: SET_ERROR, payload: err }));
    };
};