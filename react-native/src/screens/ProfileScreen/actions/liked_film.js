import {likeFilm as likeFilmAPI, listLikeFilm, unlikeFilm as unlikeFilmAPI} from '../../../api/UserAPI'
import {FETCH_LIKED_FILMS_ERROR, FETCH_LIKED_FILMS_SUCCESSFULLY, LIKED_FILMS_IS_LOADING, LIKE_FILM_ERROR, LIKE_FILM, UNLIKE_FILM, UNLIKE_FILM_ERROR} from '../constants.js'

export function fetchLikedFilms(){
    return (dispatch)=>{
        dispatch(likeFilmsIsLoading(true))
        listLikeFilm()
        .then(likedFilms=>{
            dispatch(fetchLikedFilmsSuccessfully(likedFilms))
        })
        .catch(err=>dispatch(fetchLikedFilmsError(err)))
    }
}

export function likeFilmsIsLoading(bool){
    return {
        type: LIKED_FILMS_IS_LOADING,
        isLoading: bool
    }
}

export function fetchLikedFilmsSuccessfully(likedFilms){
    return {
        type: FETCH_LIKED_FILMS_SUCCESSFULLY,
        likedFilms
    }
}

export function fetchLikedFilmsError(err){
    return {
        type: FETCH_LIKED_FILMS_ERROR,
        error: err
    }
}

export function likeFilmSuccessfully(film){
    return {
        type: LIKE_FILM,
        film
    }
}

export function likeFilmError(err){
    return {
        type: LIKE_FILM_ERROR,
        error: err
    }
}

export function likeFilm(film_id){
    return (dispatch)=>{
        likeFilmAPI(film_id)
        .then(film=>{
            dispatch(likeFilmSuccessfully(film))
        })
        .catch(err=>dispatch(likeFilmError(err)))
    }
}

export function unlikeFilmSuccessfully(film_id){
    return {
        type: UNLIKE_FILM,
        film_id
    }
}

export function unlikeFilmError(err){
    return {
        type: UNLIKE_FILM_ERROR,
        error: err
    }
}

export function unlikeFilm(film_id){
    return (dispatch)=>{
        unlikeFilmAPI(film_id)
        .then(film=>{
            dispatch(unlikeFilmSuccessfully(film_id))
        })
        .catch(err=>dispatch(unlikeFilmError(err)))
    }
}