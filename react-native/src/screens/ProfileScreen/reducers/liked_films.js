import {LIKED_FILMS_IS_LOADING, FETCH_LIKED_FILMS_ERROR, FETCH_LIKED_FILMS_SUCCESSFULLY, LIKE_FILM, LIKE_FILM_ERROR, UNLIKE_FILM, UNLIKE_FILM_ERROR} from '../constants.js'

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
            likedFilms: action.likedFilms
        }
    case FETCH_LIKED_FILMS_ERROR:
        return {
            ...state,
            error: action.error
        }
    case LIKE_FILM:
        return {
            ...state,
            likedFilms: state.likedFilms.concat([action.film])
        }
    case LIKE_FILM_ERROR:
        return {
            ...state,
            error: action.error
        }
    case UNLIKE_FILM:
        return {
            ...state,
            likedFilms: state.likedFilms.filter(f=>f._id!==action.film_id)
        }
    case UNLIKE_FILM_ERROR:
        return {
            ...state,
            error: action.error
        }
    default:
        return state
    }
}
