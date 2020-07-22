import React from 'react'
import { useState, useEffect } from 'react'
import './SourceList.css'

const SourceList = (props) => {

	let filteredList = props.data
	filteredList = props.data.filter(source => source.name.toLowerCase().startsWith(props.searchValue.toLowerCase()))

	const sourceList = filteredList.map((value, index) => {
		return (
			<props.component 
				key={value.id}
				data={value}
			/>
		)
	}) 

	return (
		<div className="home--sideBar--sourceList--container">
			{sourceList}
		</div>
	)

}

export default SourceList