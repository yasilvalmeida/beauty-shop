import {POST_NEWSLETTER,SET_NEWSLETTER} from "../action-types/newsletter";

const initialState = {
    success:null
}
const newsletterReducer = (state= initialState,action) =>{
    switch (action.type){
        case "POST_NEWSLETTER" :
            return {
                ...state,
                success: action.payload
            }
        case "SET_NEWSLETTER" :
            return {
                ...state,
                success: action.payload
            }
    }
    return state
}
export default newsletterReducer