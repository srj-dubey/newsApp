import React from 'react'
import './SourceHeader.css'

//redux
import { useDispatch, useSelector } from 'react-redux'

//actions
import { topNews } from '../../../../../../Action/news.js'

//components
import ReactCountryFlag from "react-country-flag"

const SourceHeader = (props) => {

	const dispatch = useDispatch()
	const app = useSelector((state) => state.app)

	return (
		<div className="home--mainArea--sourceHeader--container">
			{(props.data != null) ? (
				<div className="home--mainArea--sourceHeader--source--container">
					<div className="home--mainArea--sourceHeader--heading--container">
						<h1>{props.data.name}</h1>
						<h6>{props.data.category}</h6>
					</div>
					<div className="home--mainArea--sourceHeader--icon--container">
						<ReactCountryFlag 
							className="home--sideBar--sourceBox--country--icon"
							countryCode={props.data.country} 	
							svg
						/>
					</div>
				</div>
			) : (
				<div className="home--mainArea--sourceHeader--source--container">
					<div className="home--mainArea--sourceHeader--heading--container">
						<h1>{(props.currentType === 'top-news') ? (
							'Top Headlines'
						) : ('Favorite Headlines')}</h1>
					</div>
				</div>
			)}
			<div className="home--mainArea--sourceHeader--action--container">
				<button
					onClick={e => {dispatch(topNews()); props.setCurrentType('top-news')}}
				>
					View all
				</button>
				<button 
					className="home--mainArea--sourceHeader--action--active"
					onClick={e => props.setCurrentType('favorite-news')}
				>
					Favorite
					<span>
						{app.favorite.length}
					</span>
				</button>
			</div>
		</div>
	)

}

export default SourceHeader