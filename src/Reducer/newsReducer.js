
//action types imports
import { 
		SOURCE_LIST, 
		SOURCE_NEWS,
		TOP_NEWS 
	} from '../Action/types.js'

const initialState = {
	source: [],
	sourceNews : [],
	topNews : []
}

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		
		// for list of sources
        case SOURCE_LIST:	    
			if(action.payload) {
				return {
					...state,
					source: action.payload,
				}
			}
			return {...state}
		break;

		// for top headlines
		case TOP_NEWS:	    
			if(action.payload) {
				return {
					...state,
					topNews: action.payload,
				}
			}
			return {...state}
		break;

		// for news from prtiicular source
		case SOURCE_NEWS:	    
			if(action.payload) {
				return {
					...state,
					sourceNews: action.payload,
				}
			}
			return {...state}
		break;
		
		default:
			return state

    }
    return state;
}

export default newsReducer