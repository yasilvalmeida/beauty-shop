import {
  SET_VIDEO_TEXT_ERROR,
  GET_VIDEO_TEXT_DATA,
  SET_VIDEO_TEXT_DATA,
  SET_VIDEO_ERROR,
  GET_VIDEO_DATA,
  SET_VIDEO_DATA,
  ADD_TO_BOOKMARK,
  CHANGE_VIDEO,
  FILTERED_VIDEOS,
  GET_BOOKMARK_FAVORITES,
  SET_BOOKMARK_FAVORITES,
  SET_CHANGEABLE_VIDEOS,
  SET_ERROR,
} from "../action-types/video";

const initialState = {
  videoTextLoaded: true,
  videoTextData: null,
  videoTextError: null,
  videoLoaded: true,
  videoData: null,
  videoError: null,
  videosForSelect: [],
  videosLoaded: true,
  favorites: [],
  favoritesLoaded: true,
  filtered: [],
  error: null,
};

const videoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_VIDEO_TEXT_ERROR:
      return {
        ...state,
        videoTextLoaded: false,
        videoTextError: payload,
      };
    case GET_VIDEO_TEXT_DATA:
      return {
        ...state,
        videoTextLoaded: true,
      };
    case SET_VIDEO_TEXT_DATA:
      return {
        ...state,
        videoTextLoaded: false,
        videoTextData: payload,
      };
    case SET_VIDEO_ERROR:
      return {
        ...state,
        videoLoaded: false,
        videoError: payload,
      };
    case GET_VIDEO_DATA:
      return {
        ...state,
        videoLoaded: true,
      };
    case SET_VIDEO_DATA:
      return {
        ...state,
        videoLoaded: false,
        videoData: payload,
      };
    case SET_CHANGEABLE_VIDEOS:
      return {
        ...state,
        videosForSelect: state.videoData?.filter(
          (item) => item.id !== state.videoData[0].id
        ),
      };
    case CHANGE_VIDEO:
      return {
        ...state,
        videosForSelect: state.videoData?.filter((item) => item.id !== payload),
      };
    case ADD_TO_BOOKMARK:
      return {
        ...state,
        videos: state.videoData?.map((e) => {
          if (payload.id === e.id) {
            if (payload.data.isFavorite !== undefined) {
              e.favorite = payload.data.isFavorite;
            } else {
              e.favorite = true;
            }
          }
          return e;
        }),
        favorites: state.favorites.filter((item) => item.id !== payload.id),
      };
    case GET_BOOKMARK_FAVORITES:
      return {
        ...state,
        favoritesLoaded: true,
      };
    case SET_BOOKMARK_FAVORITES:
      return {
        ...state,
        favorites: payload,
        favoritesLoaded: false,
      };
    case FILTERED_VIDEOS:
      return {
        ...state,
        filtered: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default videoReducer;
