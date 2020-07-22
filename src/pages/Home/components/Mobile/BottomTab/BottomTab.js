import React from 'react'
import './BottomTab.css'

//redux
import { useDispatch } from 'react-redux'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faListUl, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const BottomTab = (props) => {

	const dispatch = useDispatch()

	return (
		<div className="home--bottomTab--M mobile">
			<div className="home--bottomTab--icon--container--M mobile">
				<FontAwesomeIcon 
					icon={faSearch}
					className="home--bottomTab--icon--M mobile"
					onClick={e => dispatch({
						type: 'CURRENT_WINDOW',
						payload: 'source-list'
					})}
				/>
			</div>
			<div className="home--bottomTab--icon--container--M mobile">
				<FontAwesomeIcon 
					icon={faListUl}
					className="home--bottomTab--icon--M mobile"
					onClick={e => dispatch({
						type: 'CURRENT_WINDOW',
						payload: 'news-list'
					})}
				/>
			</div>
			<div className="home--bottomTab--icon--container--M mobile">
				<FontAwesomeIcon 
					icon={faNewspaper}
					className="home--bottomTab--icon--M mobile"
					onClick={e => dispatch({
						type: 'CURRENT_WINDOW',
						payload: 'news-box'
					})}
				/>
			</div>
		</div>
	)

}

export default BottomTab