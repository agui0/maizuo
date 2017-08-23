import React, {Component} from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import cinemaService from '../services/cinemaService.js'
import '../css/cinema.css'
export default class SilderBar extends Component {
	constructor(){
		super();
		// console.log(match)
		this.state = {
			data:[],
			index:'0'
		}
	}
	
	render(){
		
		return (
			<div class="page cinema">
				{
					this.state.data.map((item,index)=>{
						return(
						<div key={index} class="district">
							<h3 class="title" onClick={this.listIsShow.bind(this,index)}>{item.name}</h3>
							<ul style={this.state.index==index?{display:"block"}:{display:"none"}}>
								{
									item.list.map((item2,index2)=>{
										return(
											<Link to={'/cinemaDetail/'+item2.id}  key={index2}>
												<li key={index2} onClick={this.goMoviesDetail.bind(this)}>
													<h4>{item2.name}<span>&gt;</span></h4>
													<p style={item2.labels.length>0?{display:"block"}:{display:"none"}}>
													{
														item2.labels.map((item3,index3)=>{
															return(															
																<span class={item3.type} key={index3} style={item3.type?{display:"inline-block"}:{display:"none"}}>{item3.name}</span>	
															)	
														})
													}
													</p>
													<p>{item2.address}</p>
													<p>距离未知</p>
												</li>
											</Link>	
										)
									})
								}
								
							</ul>
						</div>
						)
					})
				}
			</div>
			
		)
	}
	

	componentWillMount(){
		cinemaService.getCinemaData()
		.then((data)=>{
			this.setState({data})
			// console.log(data)
		})
	}

	listIsShow(index){
		if(index==this.state.index){
			this.setState({index:'-1'})			
		}else{
			this.setState({index})
		}		
	}
	goMoviesDetail(){

	}
	
}























