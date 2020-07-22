import React from 'react'
import { useState } from 'react'
import './Home.css'

//actions
import { sourceList } from '../../Action/news.js'

//components
import SideBar from './components/SideBar/SideBar.js'
import MainArea from './components/MainArea/MainArea.js'
import MediaQuery from "react-responsive"
import BottomTab from './components/Mobile/BottomTab/BottomTab.js'
import Actual from './components/Mobile/Actual/Actual.js'

import { useSelector } from 'react-redux' 

const Home = (props) => {

	const app = useSelector((state) => state.app)
	console.log(app.currentWindow)

	return (
		<div className="home--container">
			<MediaQuery query='(min-width: 1024px)' >
				<div className="home--sideBar--wrap">
					<SideBar />
				</div>
				<div className="home--mainArea--wrap">
					<MainArea />
				</div>
			</MediaQuery>
			<MediaQuery query='(max-width: 600px)' >
				<div className="home--container--M mobile">
					<div className="home--actual--container--M mobile">
						<Actual 
							currentWindow={app.currentWindow}
							sideBar={SideBar}
							mainArea={MainArea}
						/>
					</div>
					<BottomTab />
				</div>
			</MediaQuery>
		</div>
	)

}

export default Home