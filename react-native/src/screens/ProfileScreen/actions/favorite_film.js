import {favoriteFilm as favoriteFilmAPI, listFavoriteFilm, unfavoriteFilm as unfavoriteFilmAPI} from '../../../api/UserAPI'
import {FETCH_FAVORITE_FILMS_ERROR, FETCH_FAVORITE_FILMS_SUCCESSFULLY, FAVORITE_FILMS_IS_LOADING, FAVORITE_FILM_ERROR, FAVORITE_FILM, UNFAVORITE_FILM, UNFAVORITE_FILM_ERROR} from '../constants.js'

export function fetchFavoriteFilms(){
    return (dispatch)=>{
        dispatch(favoriteFilmsIsLoading(true))
        listFavoriteFilm()
        .then(favoriteFilms=>{
            dispatch(fetchFavoriteFilmsSuccessfully(favoriteFilms))
        })
        .catch(err=>dispatch(fetchFavoriteFilmsError(err)))
    }
}

export function favoriteFilmsIsLoading(bool){
    return {
        type: FAVORITE_FILMS_IS_LOADING,
        isLoading: bool
    }
}

export function fetchFavoriteFilmsSuccessfully(favoriteFilms){
    return {
        type: FETCH_FAVORITE_FILMS_SUCCESSFULLY,
        favoriteFilms
    }
}

export function fetchFavoriteFilmsError(err){
    return {
        type: FETCH_FAVORITE_FILMS_ERROR,
        error: err
    }
}

export function favoriteFilmSuccessfully(film){
    return {
        type: FAVORITE_FILM,
        film
    }
}

export function favoriteFilmError(err){
    return {
        type: FAVORITE_FILM_ERROR,
        error: err
    }
}

export function favoriteFilm(film_id){
    return (dispatch)=>{
        favoriteFilmAPI(film_id)
        .then(film=>{
            dispatch(favoriteFilmSuccessfully(film))
        })
        .catch(err=>dispatch(favoriteFilmError(err)))
    }
}

export function unfavoriteFilmSuccessfully(film_id){
    return {
        type: UNFAVORITE_FILM,
        film_id
    }
}

export function unfavoriteFilmError(err){
    return {
        type: UNFAVORITE_FILM_ERROR,
        error: err
    }
}

export function unfavoriteFilm(film_id){
    return (dispatch)=>{
        unfavoriteFilmAPI(film_id)
        .then(film=>{
            dispatch(unfavoriteFilmSuccessfully(film_id))
        })
        .catch(err=>dispatch(unfavoriteFilmError(err)))
    }
}