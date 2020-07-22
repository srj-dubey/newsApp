
//action types imports
import { 
		CURRENT_SOURCE,
		ADD_FAVORITE_NEWS, 
		REMOVE_FAVORITE_NEWS, 
	} from '../Action/types.js'

// for list of sources
export const modifyFavorite = (type, favoriteList, data) => {
	return dispatch => {

		// for adding news to favorite
		if(type === 'add-news') {
			if(favoriteList.length === 0){
				favoriteList.push(data)
			}
			else {
				let exist = favoriteList.find(({title}) => title === data.title)
				if(exist === undefined){
					favoriteList.push(data)
				}
			}
			localStorage.setItem("favorite", JSON.stringify(favoriteList));
			dispatch({
				type: ADD_FAVORITE_NEWS,
				payload: favoriteList
			})
		}

		// for removing news from favorite
		if(type === 'remove-news') {
			localStorage.removeItem('favorite')
			if(favoriteList.length > 0){
				let index = favoriteList.findIndex(({title}) => title === data.title);
				if (index > -1) {
					favoriteList.splice(index, 1);
				}
			}
			localStorage.setItem("favorite", JSON.stringify(favoriteList));
			if(favoriteList.length < 1) {
				localStorage.removeItem('favorite')
			}
			dispatch({
				type: ADD_FAVORITE_NEWS,
				payload: favoriteList
			})
		}

	}
}
