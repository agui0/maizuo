import React,{Component} from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import AppHeader from './views/common/AppHeader.js'
import SilderBar from './views/common/SilderBar.js'

import Home from './pages/Home.js'
import Cinema from './pages/Cinema.js'
import City from './pages/City.js'
import Me from './pages/Me.js'
import Movies from './pages/Movies.js'
import Card from './pages/Card.js'
import Shop from './pages/Shop.js'


import './css/App.css'





export default class App extends Component{
	constructor(){
		super();
		this.state = {
			showBar:false,
			headerTitle:'卖座电影'
		}
	}
	
	render(){
		
		return(
			<Router>
				<div>
					<AppHeader title={this.state.headerTitle} menuHandle={this.menuHandle.bind(this)} City={this.changeCity.bind(this)}/>
					<Route path='/' render = {({history,location})=>{
						console.log(location)
						return <SilderBar history = {history} 
										  show = {this.state.showBar}
										  pathname = {location.pathname}
										  hideHandle = {this.menuHandle.bind(this)} />
					}} />  
					<Route path="/" exact component={Home} />
					<Route path="/movies" component={Movies} />
					<Route path="/cinema" component={Cinema} />
					<Route path="/shop" component={Shop} />
					<Route path="/city" component={City} />
					<Route path="/card" component={Card} />
					<Route path="/me" component={Me} />
					
				</div>
			</Router>	
		)
	}
	
	menuHandle(headerTitle){
		
		console.log(headerTitle)
		this.setState({showBar:!this.state.showBar})
		if(headerTitle){
			this.setState({headerTitle})
		}
	}
		

	
	changeCity(){
		
	}
	
}










