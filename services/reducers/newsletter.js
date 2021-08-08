import {
  POST_NEWSLETTER,
  SET_NEWSLETTER,
  SET_NEWSLETTER_ERROR,
} from "../action-types/newsletter";

const initialState = {
    success: null,
    error: {}
}
const newsletterReducer = (state= initialState,action) =>{
    switch (action.type) {
      case POST_NEWSLETTER:
        return {
          ...state,
          success: action.payload,
        };
      case SET_NEWSLETTER:
        return {
          ...state,
          success: action.payload,
        };
      case SET_NEWSLETTER_ERROR:
        return {
          ...state,
          error: action.payload,
        };
    }
    return state
}
export default newsletterReducer