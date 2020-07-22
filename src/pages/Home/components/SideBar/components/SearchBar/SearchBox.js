import React from 'react'
import { useState } from 'react'
import './SearchBox.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = (props) => {

	return (
		<div className="home--sideBar--searchBox--container">
			<div className="home--sideBar--searchBox--input--container">
				<input 
					type="text" 
					placeholder="Search"
					name="search"
					onChange = {e => props.setSearchValue(e.target.value)}
				/>
			</div>
			<div className="home--sideBar--searchBox--icon--container">
				<FontAwesomeIcon 
					icon={faSearch}
					className="home--sideBar--searchBox--input--icon"
				/>
			</div>
		</div>
	)

}

export default SearchBox