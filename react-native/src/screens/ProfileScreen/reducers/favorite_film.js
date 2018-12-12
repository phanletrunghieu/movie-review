import {FAVORITE_FILMS_IS_LOADING, FETCH_FAVORITE_FILMS_ERROR, FETCH_FAVORITE_FILMS_SUCCESSFULLY, FAVORITE_FILM, FAVORITE_FILM_ERROR, UNFAVORITE_FILM, UNFAVORITE_FILM_ERROR} from '../constants.js'

const initialState = {
    favoriteFilms: [],
    isLoading: false,
    error: null
}

export const favoriteFilmsData = (state = initialState, action) => {
    switch(action.type){
    case FAVORITE_FILMS_IS_LOADING:
        return {
            ...state,
            isLoading: action.isLoading
        }
    case FETCH_FAVORITE_FILMS_SUCCESSFULLY:
        return {
            ...state,
            isLoading: false,
            favoriteFilms: action.favoriteFilms
        }
    case FETCH_FAVORITE_FILMS_ERROR:
        return {
            ...state,
            error: action.error
        }
    case FAVORITE_FILM:
        return {
            ...state,
            favoriteFilms: state.favoriteFilms.concat([action.film])
        }
    case FAVORITE_FILM_ERROR:
        return {
            ...state,
            error: action.error
        }
    case UNFAVORITE_FILM:
        return {
            ...state,
            favoriteFilms: state.favoriteFilms.filter(f=>f._id!==action.film_id)
        }
    case UNFAVORITE_FILM_ERROR:
        return {
            ...state,
            error: action.error
        }
    default:
        return state
    }
}
