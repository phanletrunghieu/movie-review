import {TOP_FILMS_IS_LOADING, FETCH_TOP_FILMS_ERROR, FETCH_TOP_FILMS_SUCCESSFULLY} from '../constants.js'

const initialState = {
    topFilms: [],
    isLoading: false,
    error: null
}

export const topFilmsData = (state = initialState, action) => {
    switch(action.type){
    case TOP_FILMS_IS_LOADING:
        return {
            ...state,
            isLoading: action.isLoading
        }
    case FETCH_TOP_FILMS_SUCCESSFULLY:
        return {
            ...state,
            isLoading: false,
            topFilms: action.data
        }
    case FETCH_TOP_FILMS_ERROR:
        return {
            ...state,
            error: action.error
        }
    default:
        return state
    }
}
