import {TOP_FILMS_IS_LOADING, FETCH_ERROR, FETCH_SUCCESSFULLY} from '../constants.js'

const initialState = {
    topFilms: [],
    isLoading: false,
    error: null
}

const homeData = (state = initialState, action) => {
    switch(action.type){
    case TOP_FILMS_IS_LOADING:
        return {
            ...state,
            isLoading: action.isLoading
        }
    case FETCH_SUCCESSFULLY:
        return {
            ...state,
            isLoading: false,
            topFilms: action.data
        }
    case FETCH_ERROR:
        return {
            ...state,
            error: action.error
        }
    default:
        return state
    }
}

export default homeData
