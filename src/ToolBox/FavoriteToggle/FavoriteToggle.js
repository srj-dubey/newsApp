import React from 'react'
import './FavoriteToggle.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const FavoriteToggle = (props) => {

	return (
		<div className="common--favoriteToggle--container">
			{(props.favorite === true) ? (
				<FontAwesomeIcon 
					icon={faBookmark}
					className="common--favoriteToggle--icon--active"
					onClick={e => {
						props.dispatch(props.modifyFavorite('remove-news', props.favoriteList, props.data))
						props.setFavorite(false)	
					}}
				/>
			) : (
				<FontAwesomeIcon 
					icon={faBookmark}
					className="common--favoriteToggle--icon"
					onClick={e => {
						props.dispatch(props.modifyFavorite('add-news', props.favoriteList, props.data))
						props.setFavorite(true)	
					}}
				/>
			)}
		</div>
	)

}

export default FavoriteToggle