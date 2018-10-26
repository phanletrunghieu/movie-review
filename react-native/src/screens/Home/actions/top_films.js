import {getTopFilms} from '../../../api/FilmAPI.js'
import {TOP_FILMS_IS_LOADING, FETCH_TOP_FILMS_ERROR, FETCH_TOP_FILMS_SUCCESSFULLY} from '../constants.js'

export function fetchTopFilms(){
    return (dispatch)=>{
        dispatch(topFilmsIsLoading(true))
        getTopFilms()
            .then(topFilms=>{
                dispatch(topFilmsFetchSuccessfully(topFilms)) 
            })
            .catch(err=>dispatch(errorFetchTopFilms(err)))
    }
}

export function topFilmsIsLoading(bool){
    return {
        type: TOP_FILMS_IS_LOADING,
        isLoading: bool
    }
}

export function topFilmsFetchSuccessfully(films){
    return {
        type: FETCH_TOP_FILMS_SUCCESSFULLY,
        data: films
    }
}

export function errorFetchTopFilms(err){
    return {
        type: FETCH_TOP_FILMS_ERROR,
        error: err
    }
}
