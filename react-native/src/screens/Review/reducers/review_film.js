import {REVIEW_IS_LOADING, FETCH_REVIEW_ERROR, FETCH_REVIEW_SUCCESSFULLY, CREATE_REVIEW_SUCCESSFULLY, DELETE_REVIEW_SUCCESSFULLY, UPDATE_REVIEW_SUCCESSFULLY} from '../constants.js'

const initialState = {
    reviews: [],
    isLoading: false,
    error: null
}

export const reviewData = (state = initialState, action) => {
    switch(action.type){
    case REVIEW_IS_LOADING:
        return {
            ...state,
            isLoading: action.isLoading
        }
    case FETCH_REVIEW_SUCCESSFULLY:
        return {
            ...state,
            isLoading: false,
            reviews: action.reviews
        }
    case FETCH_REVIEW_ERROR:
        return {
            ...state,
            isLoading: false,
            error: action.error
        }
    case CREATE_REVIEW_SUCCESSFULLY:
        return {
            ...state,
            reviews: state.reviews.concat([action.review])
        }
    case DELETE_REVIEW_SUCCESSFULLY:
        return {
            ...state,
            reviews: state.reviews.filter(r=>r._id!==action.review_id)
        }
    case UPDATE_REVIEW_SUCCESSFULLY:
        let reviews = state.reviews
        let findIndex = state.reviews.findIndex(r=>r._id === action.review._id)
        
        if (findIndex!==-1) {
            reviews[findIndex] = action.review
        }

        return {
            ...state,
            reviews
        }
    default:
        return state
    }
}
