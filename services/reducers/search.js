import {
  GET_SEARCH_PAGE_TEXT_DATA,
  SET_SEARCH_PAGE_TEXT_DATA,
  SET_SEARCH_PAGE_TEXT_ERROR,
  GET_SEARCH_DATA,
  SET_SEARCH_DATA,
  SET_SEARCH_ERROR,
} from "../action-types/search";

const initialState = {
  searchPageTextData: null,
  searchPageTextError: null,
  searchPageTextLoading: true,
  searchCount: 0,
  searchData: null,
  searchError: null,
  searchLoading: true,
};
const searchPageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SEARCH_PAGE_TEXT_DATA: {
      return {
        ...state,
        searchPageTextLoading: true,
      };
    }
    case SET_SEARCH_PAGE_TEXT_DATA: {
      return {
        ...state,
        searchPageTextLoading: false,
        searchPageTextData: payload,
      };
    }
    case SET_SEARCH_PAGE_TEXT_ERROR: {
      return {
        ...state,
        searchPageTextLoading: false,
        searchPageTextError: payload,
      };
    }
    case GET_SEARCH_DATA: {
      return {
        ...state,
        searchLoading: true,
      };
    }
    case SET_SEARCH_DATA: {
      return {
        ...state,
        searchLoading: false,
        searchData: payload,
        searchCount: payload?.length,
      };
    }
    case SET_SEARCH_ERROR: {
      return {
        ...state,
        searchLoading: false,
        searchError: payload,
      };
    }
    default:
      return state;
  }
};
export default searchPageReducer;
