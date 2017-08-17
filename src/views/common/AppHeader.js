import React, {Component} from 'react'
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
				<div class="header-l">
					<span class="icon-sandaogangwutianchong iconfont disIn"></span>
					<h1>卖座电影</h1>
				</div>
				<div class="header-r">
					<span class="icon-xiasanjiao-copy iconfont">深圳</span>
					<span class="icon-anonymity iconfont"></span>
				</div>
				
			</header>
		)
	}
}






























