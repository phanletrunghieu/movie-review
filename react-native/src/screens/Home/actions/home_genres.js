import {getHomeGenres} from '../../../api/GenreAPI.js'
import {getFilmsByGenreID} from '../../../api/FilmAPI.js'
import {HOME_GENRES_IS_LOADING, FETCH_HOME_GENRES_ERROR, FETCH_HOME_GENRES_SUCCESSFULLY} from '../constants.js'

export function fetchHomeGenres(){
    return (dispatch)=>{
        dispatch(homeGenresIsLoading(true))
        let homeGenres = []
        let homeFilms = []
        getHomeGenres()
            .then(genres=>{
                homeGenres = genres

                let promiseFilms = []
                genres.forEach(genre=>{
                    promiseFilms.push(getFilmsByGenreID(genre._id))
                })

                return Promise.all(promiseFilms)
            })
            .then(filmss=>{
                filmss.forEach(films=>{
                    homeFilms.push(...films)
                })
                dispatch(fetchHomeGenresSuccessfully(homeGenres, homeFilms)) 
            })
            .catch(err=>dispatch(fetchHomeGenresError(err)))
    }
}

export function homeGenresIsLoading(bool){
    return {
        type: HOME_GENRES_IS_LOADING,
        isLoading: bool
    }
}

export function fetchHomeGenresSuccessfully(homeGenres, homeFilms){
    return {
        type: FETCH_HOME_GENRES_SUCCESSFULLY,
        homeGenres,
        homeFilms
    }
}

export function fetchHomeGenresError(err){
    return {
        type: FETCH_HOME_GENRES_ERROR,
        error: err
    }
}
