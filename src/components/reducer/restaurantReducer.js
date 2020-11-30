import { GET_ALL_RESTAURANTS, GET_SPECIFIC_RESTAURANT } from '../actions/restaurantAction'
const initialState = {
    allrestaurants: [],
    activeRestaurants: {},
}

export default function (state = initialState, action = {}) {
        switch (action.type) {
        case GET_ALL_RESTAURANTS:
        return{
            ...state, 
            allrestaurants: action.payload
        }
        case GET_ALL_RESTAURANTS:
            return{
                ...state, 
                allrestaurants: action.payload
            }
        case GET_SPECIFIC_RESTAURANT:
            return{
                ...state, 
                activeRestaurants: action.payload
            }
        default: 
            return initialState;
    }
}