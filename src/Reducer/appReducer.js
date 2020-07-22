
//action types imports
import { 
		CURRENT_SOURCE,
		ADD_FAVORITE_NEWS, 
		REMOVE_FAVORITE_NEWS, 
		CURRENT_WINDOW
	} from '../Action/types.js'

const initialState = {
	favorite : (localStorage.getItem('favorite') ? (JSON.parse(localStorage.getItem('favorite'))) : []),
	current : null,
	currentWindow : 'source-list'
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		
		// setting the cuurent source
        case CURRENT_SOURCE:	    
			if(action.payload || action.payload === null) {
				return {
					...state,
					current: action.payload,
				}
			}
			return {...state}
		break;

		// adding news to favorite
        case ADD_FAVORITE_NEWS:	    
			if(action.payload) {
				return {
					...state,
					favorite: action.payload,
				}
			}
			return {...state}
		break;

		// removing news from favorite
        case REMOVE_FAVORITE_NEWS:	    
			if(action.payload) {
				return {
					...state,
					favorite: action.payload,
				}
			}
			return {...state}
		break;

		// changing window for mobile
        case CURRENT_WINDOW:	    
			if(action.payload) {
				return {
					...state,
					currentWindow: action.payload,
				}
			}
			return {...state}
		break;
		
		default:
			return state

    }
    return state;
}

export default appReducer