import {likeFilm as likeFilmAPI, listLikeFilm, unlikeFilm} from '../../../api/UserAPI'
import {FETCH_LIKED_FILMS_ERROR, FETCH_LIKED_FILMS_SUCCESSFULLY, LIKED_FILMS_IS_LOADING, LIKE_FILM_ERROR} from '../constants.js'

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

export function likeFilmError(err){
    return {
        type: LIKE_FILM_ERROR,
        error: err
    }
}

export function likeFilm(film_id){
    return (dispatch)=>{
        likeFilmAPI(film_id)
        .catch(err=>dispatch(likeFilmError(err)))
    }
}