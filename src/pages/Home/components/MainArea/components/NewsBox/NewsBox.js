import React from 'react'
import { useState, useEffect } from 'react'
import './NewsBox.css'

//redux
import { useDispatch, useSelector } from 'react-redux'

//actions
import { modifyFavorite } from '../../../../../../Action/app.js'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

//media
import img1 from '../../../../../../assets/noContent.png'
import img2 from '../../../../../../assets/loading.jpg'

//component
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Loading from '../../../../../../ToolBox/Loading/Loading.js'
import 'react-lazy-load-image-component/src/effects/blur.css';
import FavoriteToggle from '../../../../../../ToolBox/FavoriteToggle/FavoriteToggle.js'

const NewsBox = (props) => {

	const dispatch = useDispatch()
	const app = useSelector((state) => state.app)
	const [favorite, setFavorite] = useState(false)
	useEffect(() => {
		if(props.data != null) {
			let status = app.favorite.find(({title}) => title === props.data.title)
			if(status != undefined) {
				setFavorite(true)
			} else {
				setFavorite(false)
			}
		}
	}, [props.data, app])

	if(props.data === null) {
		return (
			<div className="home--mainArea--newsBox--container">
				<div className="home--mainArea--newsBox--null">
					<img src={img1} />
					<p>Select a news to preview</p>
				</div>
			</div>	
		)
	}
	else {
		return (
			<div className="home--mainArea--newsBox--container">
				<div className="home--mainArea--newsBox--head">
					<div className="home--mainArea--newsBox--heading--container">
						<h1>{props.data.title}</h1>
					</div>
					<div className="home--mainArea--newsBox--image--container">
						{(props.data.urlToImage) ? (
							<LazyLoadImage
								alt={img2}
								effect="blur"
								src={props.data.urlToImage} 
							/>						
						) : <img src={img2} />}
					</div>
					<div className="home--mainArea--newsBox--action--container">
						<FontAwesomeIcon 
							icon={faExternalLinkAlt}
							className="home--mainArea--newsBox--action--icon"
							onClick={e => window.open(props.data.url, '_blank')}
						/>		
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
				<div className="home--mainArea--newsBox--body">
					<div className="home--mainArea--newsBox--details--container">
						<h6>Source: {props.data.source.name}</h6>
						<h6>Published: {props.data.publishedAt.substr(0, 10)}</h6>
					</div>
					<div className="home--mainArea--newsBox--desc--container">
						<p>{props.data.description}</p>
					</div>
				</div>
			</div>
		)
	}

} 

export default NewsBox