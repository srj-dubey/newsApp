import React from 'react'
import { useState, useEffect } from 'react'
import './NewsAvtaar.css'

//redux
import { useDispatch, useSelector } from 'react-redux'

//action
import { modifyFavorite } from '../../../../../../Action/app.js'

//components
import FavoriteToggle from '../.././../../../../ToolBox/FavoriteToggle/FavoriteToggle.js'

const SmallNews = (props) => {

	const dispatch = useDispatch()
	const app = useSelector((state) => state.app)
	const [favorite, setFavorite] = useState(false)
	useEffect(() => {
		let status = app.favorite.find(({title}) => title === props.data.title)
		if(status != undefined) {
			setFavorite(true)
		} else {
			setFavorite(false)
		}
	}, [app])
	return (
		<div className="home--mainArea--smallNews--container"
			onClick={e => {
				props.setCurrentNews(props.data);
				dispatch({
					type: 'CURRENT_WINDOW',
					payload: 'news-box'
				})
			}}
		>
			<div className="home--mainArea--smallNews--heading--container">
				<div className="home--mainArea--smallNews--heading">
					<h1>{props.data.title.substr(0, 60)}...</h1>
				</div>
				<div className="home--mainArea--smallNews--favoriteToggle--wrap">
					<FavoriteToggle 
						favorite={favorite}
						setFavorite = {setFavorite}
						dispatch = {dispatch}
						data={props.data} 
						favoriteList = {app.favorite}
						modifyFavorite = {modifyFavorite}
					/>
				</div>
			</div>
			<div className="home--mainArea--smallNews--details--container">
				<h6>{props.data.publishedAt.substr(0,9)}</h6>
				<h6>{props.data.source.name}</h6>
			</div>
		</div>
	)

}

export default SmallNews