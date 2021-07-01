import * as notFoundTypes from "../action-types/not_found_page";
import axios from 'axios';

export const getNotFoundData = () => {
  return dispatch => {
    dispatch({ type: notFoundTypes.LOADER });

    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/not-found-page-section-1`)
      .then(res => {
        const { data } = res;
        
        dispatch({ 
          type: notFoundTypes.SET_NOT_FOUND_DATA, 
          payload: data 
        });
      })
      .catch(err => dispatch({ type: notFoundTypes.SET_ERROR, payload: err }));
  };
};

