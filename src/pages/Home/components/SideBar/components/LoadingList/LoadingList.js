import React from 'react'
import './LoadingList.css'

//components
import Loading from '../../../../../../ToolBox/Loading/Loading.js'

const LoadingList = (props) => {

	const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	const loadingList = list.map((value, index) => {
		return (
			<div className="home--sideBar--loadingList--container" key={index}>
				<div className="home--sideBar--loadingList--heading--container">
					<div className="home--sideBar--loadingList--name">
						<Loading />
					</div>
					<div className="home--sideBar--loadingList--category">
						<Loading />
					</div>
				</div>
				<div className="home--sideBar--loadingList--icon">
					<Loading />
				</div>
			</div>
		)
	})

	return (loadingList)

}

export default LoadingList