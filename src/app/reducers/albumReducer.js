import { ALBUM_LIST_REQUEST } from "../constants/albumConstants"
import { ALBUM_LIST_SUCCESS } from "../constants/albumConstants"
import { ALBUM_LIST_FAILED } from "../constants/albumConstants"

export const albumListReducer = (state = {albums:[]}, action) => {
    switch(action.type){
        case ALBUM_LIST_REQUEST:
             return {loading: true, products:[]}
        case ALBUM_LIST_SUCCESS:
             return {loading: false, products:action.payload}
        case ALBUM_LIST_FAILED:
            return {loading: false, error: action.payload}
        default:
            return state
    }
} 