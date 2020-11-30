import { combineReducers } from 'redux'

import restaurantReducer from './restaurantReducer'
import reviewReducer from './reviewReducer'


const rootReducer = combineReducers({
    restaurants: restaurantReducer,
    reviews: reviewReducer
})

export default rootReducer