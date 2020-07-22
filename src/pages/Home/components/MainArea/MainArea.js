import React from 'react'
import { useState, useEffect } from 'react'
import './MainArea.css'

//redux
import { useDispatch, useSelector } from 'react-redux'

//actions
import { topNews } from '../../../../Action/news.js'

//components
import SourceBox from './components/SourceBox/SourceBox.js'
import NewsBox from './components/NewsBox/NewsBox.js'
import NewsAvtaar from './components/NewsAvtaar/NewsAvtaar.js'

const MainArea = (props) => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(topNews())
	}, [])

	const [currentNews, setCurrentNews] = useState(null)
	const app = useSelector((state) => state.app)

	return (
		<div className="home--mainArea--container">
			<div className="home--mainArea--sourceBox--wrap">
				<SourceBox
					component = {NewsAvtaar}
					setCurrentNews = {setCurrentNews}
				/>
			</div>
			<div className="home--mainArea--newsBox--wrap">
				<NewsBox
					data = {currentNews}
					currentNews = {currentNews}
				/>
			</div>
		</div>
	)

}

export default MainArea