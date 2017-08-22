import React, {Component} from 'react'
import cinemaService from '../services/cinemaService.js'
export default class SilderBar extends Component {
	constructor(){
		super();
		// console.log(match)
		this.state = {
		}
	}
	
	render(){
		
		return (
			<div class="page">
				影院
			</div>
			
		)
	}
	

	componentWillMount(){
		cinemaService.getCinemaData()
		.then((data)=>{
			console.log(data)
		})
	}


	
}























