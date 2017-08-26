import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../css/AppHeader.css'
import store from'../../store'

export default class AppHeader extends Component{
	constructor(){
		super();
	
		this.state = store.getState()

	}

	render(){
		return(
			<header class="header">
				<div class="header-l" onClick={this.menuActive.bind(this)}>
					<span class="icon-sandaogangwutianchong iconfont disIn"></span>
					<h3>{this.props.title}</h3>
				</div>
				<div class="header-r">
					<Link to="/city"><span onClick={this.changeAddress.bind(this)} class="icon-xiasanjiao-copy iconfont">{this.state.address}</span></Link>
					<Link to="/me"><span class="icon-anonymity iconfont"></span></Link>
				</div>
				
			</header>
		)
	}
	
	menuActive(){
		this.props.menuHandle();//
	}
	
	changeAddress(){
		this.props.City()//跳转到城市列表页
	}

	conpomentWillMount(){
		store.subscribe(()=>{//监听store中state的变化，如果这个函数调用了说明state发生变化了,调用监听的方法会返回一个移除监听的方法unsubscribe()
			this.setState({address:store.getState().address})//调用setState（），就会触发render，更新dom
		})
	}

	
}






























