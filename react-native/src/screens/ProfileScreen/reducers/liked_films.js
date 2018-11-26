import {LIKED_FILMS_IS_LOADING, FETCH_LIKED_FILMS_ERROR, FETCH_LIKED_FILMS_SUCCESSFULLY} from '../constants.js'

const initialState = {
    likedFilms: [],
    isLoading: false,
    error: null
}

export const likedFilmsData = (state = initialState, action) => {
    switch(action.type){
    case LIKED_FILMS_IS_LOADING:
        return {
            ...state,
            isLoading: action.isLoading
        }
    case FETCH_LIKED_FILMS_SUCCESSFULLY:
        return {
            ...state,
            isLoading: false,
            likedFilms: action.data
        }
    case FETCH_LIKED_FILMS_ERROR:
        return {
            ...state,
            error: action.error
        }
    default:
        return state
    }
}
