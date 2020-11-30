import { GET_ALL_REVIEWS } from '../actions/reviewAction'
const initialState = {
    allReviews: [],
    activeReview: {},
}

export default function (state = initialState, action = {}) {
        switch (action.type) {
        case GET_ALL_REVIEWS:
        return{
            ...state, 
            allReviews: action.payload
        }
        default: 
            return initialState;
    }
}