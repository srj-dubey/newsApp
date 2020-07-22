import React from 'react'
import { useState } from 'react'
import './SourceBox.css'

//redux
import { useDispatch } from 'react-redux'

//actions
import { sourceNews } from '../../../../../../Action/news.js'

//components
import ReactCountryFlag from "react-country-flag"

const SourceBox = (props) => {

	const dispatch = useDispatch()

	return (
		<div 
			className="home--sideBar--sourceBox--container"
			onClick={e => {
				dispatch({
					type: 'CURRENT_WINDOW',
					payload: 'news-list'
				})
				dispatch(sourceNews(props.data))
			}}
		>
			<div className="home--sideBar--sourceBox--heading--container">
				<h1>{props.data.name}</h1>
				<p>{props.data.category}</p>
			</div>
			<div className="home--sideBar--sourceBox--country--container">
				<ReactCountryFlag 
					className="home--sideBar--sourceBox--country--icon"
					countryCode={props.data.country} 
					svg
				/>
			</div>
		</div>
	)

}

export default SourceBox