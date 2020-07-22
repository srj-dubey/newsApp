import React from 'react'
import { useState, useEffect } from 'react'
import './Actual.css'

//redux
import { useDispatch, useSelector } from 'react-redux'

//action
import { topNews } from '../../../../../Action/news.js'

//components
import SourceBox from '../../MainArea/components/SourceBox/SourceBox.js'
import NewsBox from '../../MainArea/components/NewsBox/NewsBox.js'
import NewsAvtaar from '../../MainArea/components/NewsAvtaar/NewsAvtaar.js'

const Actual = (props) => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(topNews())
	}, [])

	const [currentNews, setCurrentNews] = useState(null)
	const app = useSelector((state) => state.app)

	if(props.currentWindow === 'source-list') {
		return (
			<props.sideBar />
		)
	}

	if(props.currentWindow === 'news-list') {
		return (
			<div className="home--actual--M mobile">
				<SourceBox
					component = {NewsAvtaar}
					setCurrentNews = {setCurrentNews}
					setCurrentWindow = {props.setCurrentWindow}			
				/>
			</div>
		)
	}

	if(props.currentWindow === 'news-box') {
		return (
			<div className="home--actual--M mobile">
				<NewsBox
					data = {currentNews}
					currentNews = {currentNews}
				/>
			</div>
		)
	}

}

export default Actual