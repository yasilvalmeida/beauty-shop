import {GET_CONTACT_DATA, POST_CONTACT_DATA, SET_CONTACT_LOADED, SET_ERROR} from "../action-types/contact";

const initialState = {
    textData:[],
    textDataLoaded: true,
    post_success:null,
    error:""
};

const ContactReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case GET_CONTACT_DATA:
            return {
                ...state,
                textData: payload,
                textDataLoaded: false
            }
        case SET_CONTACT_LOADED:
            return {
                ...state,
                textDataLoaded: true
            }
        case POST_CONTACT_DATA:
            return {
                ...state,
                post_success: payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload,
                countriesLoaded: false,
                textDataLoaded: false
            }
        default:
            return state;
    }
};

export default ContactReducer;