import { 
		SOURCE_LIST,
		SOURCE_NEWS,
		TOP_NEWS,
		CURRENT_SOURCE 
	} from '../Action/types.js'

// for list of sources
export const sourceList = () => {
	return dispatch => {
		
		const api = 'https://newsapi.org/v2/sources?' +
				'apiKey=c86d07b2b8904904bc1f8864ac6549a4'

		fetch(api)
		.then(res => res.json())
		.then(res => dispatch({
			type: SOURCE_LIST,
			payload: res.sources
		}))

	}
}

// for top headlines
export const topNews = (source) => {
	return dispatch => {

		const api = 'https://newsapi.org/v2/top-headlines?' +
				'country=us&' +
				'apiKey=c86d07b2b8904904bc1f8864ac6549a4'

		fetch(api)
		.then(res => res.json())
		.then(res => {
			dispatch({
				type: TOP_NEWS,
				payload: res.articles 
			})
			dispatch({
				type: CURRENT_SOURCE,
				payload: null
			})
			dispatch({
				type: SOURCE_NEWS,
				payload: []
			})
		})

	}
}

// for news from particular source
export const sourceNews = (source) => {
	return dispatch => {

		const api = 'https://newsapi.org/v2/top-headlines?' +
				'sources=' + source.id + '&' +
				'apiKey=c86d07b2b8904904bc1f8864ac6549a4'

		fetch(api)
		.then(res => res.json())
		.then(res => {
			dispatch({
				type: SOURCE_NEWS,
				payload: res.articles 
			})
			dispatch({
				type: CURRENT_SOURCE,
				payload: source
			})
		})

	}
}