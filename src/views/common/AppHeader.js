import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../css/AppHeader.css'


export default class AppHeader extends Component{
	constructor(){
		super();
		this.state = {
			
		}
	}
	render(){
		return(
			<header class="header">
				<div class="header-l" onClick={this.menuActive.bind(this)}>
					<span class="icon-sandaogangwutianchong iconfont disIn"></span>
					<h1>{this.props.title}</h1>
				</div>
				<div class="header-r">
					<Link to="/city"><span onClick={this.changeAddress.bind(this)} class="icon-xiasanjiao-copy iconfont">深圳</span></Link>
					<Link to="/me"><span class="icon-anonymity iconfont"></span></Link>
				</div>
				
			</header>
		)
	}
	
	menuActive(){
		this.props.menuHandle();
	}
	
	changeAddress(){
		this.props.City()
	}
	
	
}






























