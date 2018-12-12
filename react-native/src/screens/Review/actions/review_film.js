import {getReviews, createReview as createReviewAPI, deleteReview as deleteReviewAPI, updateReview as updateReviewAPI} from '../../../api/ReviewAPI'
import {FETCH_REVIEW_ERROR, FETCH_REVIEW_SUCCESSFULLY, REVIEW_IS_LOADING, CREATE_REVIEW_SUCCESSFULLY, DELETE_REVIEW_SUCCESSFULLY, UPDATE_REVIEW_SUCCESSFULLY} from '../constants.js'

export function fetchReviews(film_id){
    return (dispatch)=>{
        dispatch(reviewsIsLoading(true))
        getReviews(film_id)
        .then(reviews=>{
            dispatch(fetchReviewsSuccessfully(reviews))
        })
        .catch(err=>dispatch(fetchReviewsError(err)))
    }
}

export function reviewsIsLoading(bool){
    return {
        type: REVIEW_IS_LOADING,
        isLoading: bool
    }
}

export function fetchReviewsSuccessfully(reviews){
    return {
        type: FETCH_REVIEW_SUCCESSFULLY,
        reviews
    }
}

export function fetchReviewsError(err){
    return {
        type: FETCH_REVIEW_ERROR,
        error: err
    }
}

export function createReviewSuccessfully(review){
    return {
        type: CREATE_REVIEW_SUCCESSFULLY,
        review
    }
}

export function deleteReviewSuccessfully(review_id){
    return {
        type: DELETE_REVIEW_SUCCESSFULLY,
        review_id
    }
}

export function updateReviewSuccessfully(review){
    return {
        type: UPDATE_REVIEW_SUCCESSFULLY,
        review
    }
}

export function createReview(review, rating, owner, onModel = "Film"){
    return (dispatch)=>{
        createReviewAPI(review, rating, owner, onModel)
        .then(review=>{
            dispatch(createReviewSuccessfully(review))
        })
        .catch(err=>dispatch(fetchReviewsError(err)))
    }
}

export function deleteReview(review_id){
    return (dispatch)=>{
        deleteReviewAPI(review_id)
        .then(review=>{
            dispatch(deleteReviewSuccessfully(review_id))
        })
        .catch(err=>dispatch(fetchReviewsError(err)))
    }
}

export function updateReview(review_id, new_review, new_rating){
    return (dispatch)=>{
        updateReviewAPI(review_id, new_review, new_rating)
        .then(review=>{
            dispatch(updateReviewSuccessfully(review))
        })
        .catch(err=>dispatch(fetchReviewsError(err)))
    }
}