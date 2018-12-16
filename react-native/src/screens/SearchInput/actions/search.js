import {search as searchAPI} from '../../../api/FilmAPI'
import {START_SEARCH, SEARCH_ERROR, SEARCH_SUCCESSFULLY} from '../constants.js'

export function search(keyword){
    return (dispatch)=>{
        dispatch(startSearch(true))
        searchAPI(keyword)
        .then(results=>{
            dispatch(searchSuccessfully(results))
        })
        .catch(err=>{
            console.log(err);
            
            dispatch(searchError(err))
        })
    }
}

export function startSearch(bool){
    return {
        type: START_SEARCH,
        isLoading: bool
    }
}

export function searchSuccessfully(results){
    return {
        type: SEARCH_SUCCESSFULLY,
        results
    }
}

export function searchError(err){
    return {
        type: SEARCH_ERROR,
        error: err
    }
}
