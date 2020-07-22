//Root Reducer
//combines all the reducers

import { combineReducers } from "redux"

//reducers imports
import newsReducer from './newsReducer.js'
import appReducer from './appReducer.js'

export default combineReducers(
    {
		news : newsReducer,
		app : appReducer
    }
)
