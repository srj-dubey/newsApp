import React from 'react'
import { useState, useEffect } from 'react'
import './SourceBox.css'

//redux
import { useSelector } from 'react-redux'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

//components
import SourceHeader from '../SourceHeader/SourceHeader.js'
import LoadingList from '../../../SideBar/components/LoadingList/LoadingList.js'

const SourceBox = (props) => {

	const app = useSelector((state) => state.app)
	const news = useSelector((state) => state.news)

	const [currentType, setCurrentType] = useState('top-news')

	return (
		<div className="home--mainArea--sourceBox--container">
			<div className="home--mainArea--sourceBox--sourceHeader--wrap">
				<SourceHeader 
					data={app.current}
					currentType = {currentType}
					setCurrentType = {setCurrentType}
				/>
			</div>
			<div className="home--mainArea--sourceBox--newsAvtaar--wrap">
				<NewsList
					type = {currentType}
					component = {props.component}
					setCurrentNews = {props.setCurrentNews}
					setCurrentWindow = {props.setCurrentWindow}
				/>
			</div>
		</div>
	)

} 

const NewsList = (props) => {

	const app = useSelector((state) => state.app)
	const news = useSelector((state) => state.news)

	if(props.type === 'source-news' && news.sourceNews.length > 0) {
		return (
			news.sourceNews.map((value, index) => {
				return (
					<props.component 
						data = {value}
						key = {value.title}
						setCurrentNews = {props.setCurrentNews}
					/>
				)
			})
		)
	}

	if(props.type === 'top-news' && news.topNews.length > 0) {
		return (
			news.topNews.map((value, index) => {
				return (
					<props.component 
						data = {value}
						key = {value.title}
						setCurrentNews = {props.setCurrentNews}
					/>
				)
			})
		)
	}

	if(props.type === 'favorite-news' && app.favorite.length > 0) {
		return (
			app.favorite.map((value, index) => {
				return (
					<props.component 
						data = {value}
						key = {value.title}
						setCurrentNews = {props.setCurrentNews}
					/>
				)
			})
		)
	}

	if(props.type === 'favorite-news' && app.favorite.length === 0) {
		return (
			<div className="home--mainArea--sourceBox--null--container">
				<FontAwesomeIcon 
					icon={faBookmark}
					className="home--mainArea--sourceBox--null--icon"
				/>
				Empty list
			</div>
		)
	}

	else {
		return (
			<LoadingList />
		)
	}
}

export default SourceBox