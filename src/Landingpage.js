import React, { Component } from 'react'
import * as appConstans from './appConstants'
import {NavLink} from 'react-router-dom'
 

export class Landingpage extends Component {

	redirectToOrigin = (val) => {
		window.location.href = appConstans.REDIRECT_URL
	  }


	render() {
		return (
			<div>
				<h1>Landingpage</h1>
				<NavLink to="/Mainpages">Demo</NavLink>
				 
			</div>
		)
	}
}

export default Landingpage
