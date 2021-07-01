import axios from "axios";
import {
    GET_VIDEO_TEXTS,
    SET_VIDEO_TEXTS,
    SET_ERROR,
    GET_VIDEOS,
    SET_VIDEOS,
    SET_CHANGEABLE_VIDEOS,
    CHANGE_VIDEO,
    ADD_TO_BOOKMARK,
    GET_BOOKMARK_FAVORITES,
    SET_BOOKMARK_FAVORITES, FILTERED_VIDEOS
} from "../action-types/video";

export const getVideoText = () => {
    return (dispatch) => {
        dispatch({type: GET_VIDEO_TEXTS});

        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_URL}/video-page-data`,
            )
            .then((res) => {
                const {data} = res;

                dispatch({
                    type: SET_VIDEO_TEXTS,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
}

export const getVideos = (index) => {
    return (dispatch) => {
        dispatch({type: GET_VIDEOS});

        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_URL}/videos`,
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`,
                    }
                }
            )
            .then((res) => {
                const {data} = res;

                dispatch({
                    type: SET_VIDEOS,
                    payload: data,
                });
            }).then(res => {
            dispatch({
                type: SET_CHANGEABLE_VIDEOS,
                payload: index
            })
        })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
}

export const changeVideoList = (id) => {
    return dispatch => {
        dispatch(
            {
                type: CHANGE_VIDEO,
                payload: id
            }
        )
    }
}

export const addToBookmark = (id) => {
    return (dispatch) => {
        return axios
            .post(
                `${process.env.NEXT_PUBLIC_API_URL}/AddFavoriteVideosTheUser`,
                {video: id},
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`,
                    },
                }
            )
            .then((res) => {
                const {data} = res;
                dispatch({
                    type: ADD_TO_BOOKMARK,
                    payload: {
                        id: id,
                        data: data,
                    },

                });
                return data
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
}

export const getUserBookmarks = () => {
    return (dispatch) => {
        dispatch({type: GET_BOOKMARK_FAVORITES});

        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/theUsersAllFavoriteVideos`, {
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                    }`,
                },
            })
            .then((res) => {
                const {data} = res;
                dispatch({type: SET_BOOKMARK_FAVORITES, payload: data});
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
}

export const filterVideos = (filter) => {
    return dispatch => {
        dispatch(
            {
                type: FILTERED_VIDEOS,
                payload: filter
            }
        )
    }
}