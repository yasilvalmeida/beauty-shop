import {
    ADD_TO_BOOKMARK,
    CHANGE_VIDEO, FILTERED_VIDEOS, GET_BOOKMARK_FAVORITES,
    GET_VIDEO_TEXTS,
    GET_VIDEOS, SET_BOOKMARK_FAVORITES,
    SET_CHANGEABLE_VIDEOS,
    SET_ERROR,
    SET_VIDEO_TEXTS,
    SET_VIDEOS
} from "../action-types/video";

const initialState = {
    videoTextLoaded: true,
    videoText: {},
    videos: [],
    videosForSelect: [],
    videosLoaded: true,
    favorites: [],
    favoritesLoaded: true,
    filtered:[],
    error: null
};

const videoReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_VIDEO_TEXTS:
            return {
                ...state,
                videoTextLoaded: true
            }
        case SET_VIDEO_TEXTS:
            return {
                ...state,
                videoTextLoaded: false,
                videoText: payload
            }
        case GET_VIDEOS:
            return {
                ...state,
                videosLoaded: true
            }
        case SET_VIDEOS:
            return {
                ...state,
                videos: payload,
                videosLoaded: false,

            }
        case SET_CHANGEABLE_VIDEOS:
            return {
                ...state,
                videosForSelect: state.videos.filter(item => item.id !== state.videos[0].id)
            }
        case CHANGE_VIDEO:
            return {
                ...state,
                videosForSelect: state.videos.filter(item => item.id !== payload)
            }
        case ADD_TO_BOOKMARK:
            return {
                ...state,
                videos: state.videos.map(e => {
                    if (payload.id === e.id) {
                        if (payload.data.isFavorite !== undefined) {
                            e.favorite = payload.data.isFavorite
                        } else {
                            e.favorite = true
                        }
                    }
                    return e
                }),
                favorites: state.favorites.filter(item => item.id !== payload.id)
            }
        case GET_BOOKMARK_FAVORITES:
            return {
                ...state,
                favoritesLoaded: true
            }
        case SET_BOOKMARK_FAVORITES:
            return {
                ...state,
                favorites: payload,
                favoritesLoaded: false
            }
        case FILTERED_VIDEOS:
            return {
                ...state,
                filtered: payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
};

export default videoReducer;