import {HOME_GENRES_IS_LOADING, FETCH_HOME_GENRES_ERROR, FETCH_HOME_GENRES_SUCCESSFULLY} from '../constants.js'

const initialState = {
    homeGenres: [],
    homeFilms: [],
    isLoading: false,
    error: null
}

export const homeGenresData = (state = initialState, action) => {
    switch(action.type){
    case HOME_GENRES_IS_LOADING:
        return {
            ...state,
            isLoading: action.isLoading
        }
    case FETCH_HOME_GENRES_SUCCESSFULLY:
        return {
            ...state,
            isLoading: false,
            homeGenres: action.homeGenres,
            homeFilms: action.homeFilms
        }
    case FETCH_HOME_GENRES_ERROR:
        return {
            ...state,
            error: action.error
        }
    default:
        return state
    }
}
