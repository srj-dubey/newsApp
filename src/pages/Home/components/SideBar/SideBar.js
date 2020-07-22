import React from 'react'
import { useState, useEffect } from 'react'
import './SideBar.css'

//redux
import { useDispatch, useSelector } from 'react-redux'

//actions
import { sourceList } from '../../../../Action/news.js'

//components
import SearchBox from './components/SearchBar/SearchBox.js'
import SourceList  from './components/SourceList/SourceList.js'
import SourceBox from './components/SourceBox/SourceBox.js'
import LoadingList from './components/LoadingList/LoadingList.js'

const SideBar = (props) => {

	const news = useSelector((state) => state.news)
	const [searchValue, setSearchValue] = useState('')	

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(sourceList())
	}, [])

	console.log(searchValue)

	return (
		<div className="home--sideBar--container">
			<div className="home--sideBar--serchBox--wrap">
				<SearchBox 
					setSearchValue = {setSearchValue}
				/>
			</div>
			<div className="home--sideBar--sourceList--wrap">
				{(news.source.length > 0) ? (
					<SourceList 
						data = {news.source}
						component = {SourceBox}
						searchValue = {searchValue}
					/>
				) : (<LoadingList />)}
			</div>

		</div>
	)

}

export default SideBar