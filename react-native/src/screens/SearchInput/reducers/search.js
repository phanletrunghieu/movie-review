import {START_SEARCH, SEARCH_SUCCESSFULLY, SEARCH_ERROR} from '../constants.js'

const initialState = {
    results: [],
    isLoading: false,
    error: null
}

export const searchData = (state = initialState, action) => {
    switch(action.type){
    case START_SEARCH:
        return {
            ...state,
            isLoading: action.isLoading
        }
    case SEARCH_SUCCESSFULLY:
        return {
            ...state,
            isLoading: false,
            results: action.results
        }
    case SEARCH_ERROR:
        return {
            ...state,
            isLoading: false,
            error: action.error
        }
    default:
        return state
    }
}
