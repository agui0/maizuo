import React, {Component} from 'react'
import '../css/card.css'


export default class Card extends Component {
	constructor(){
		super();
		this.state = {
			isShow1:true,
			isShow2:false
		}
	}
	
	render(){
		
		return (
			<div class="page">
				<div class="card_tabs">
					<div class={this.state.isShow1?"card_left_active":"card_left"} onClick={this.tabs1.bind(this)}>卖座卡</div>
					<div class={this.state.isShow2?"card_right_active":"card_right"} onClick={this.tabs2.bind(this)}>电子卖座卡</div>
				</div>

				<div class="card_page" style={this.state.isShow1?{display:"block"}:{display:"none"}} >
					<div class="ipt_box">
						<div class="border_l"></div>
						<div class="border_r"></div>
						卡号：<input type="text" placeholder="输入手机号/邮箱"/>
					</div>
					<div class="ipt_box">
						<div class="border_l"></div>
						<div class="border_r"></div>
						密码：<input type="password" placeholder="输入密码/验证码"/>
					</div>
					<div class="login_btn">查询</div>
				</div>

				<div class="card_page" style={this.state.isShow2?{display:"block"}:{display:"none"}}>
					<div class="ipt_box">
						<div class="border_l"></div>
						<div class="border_r"></div>
						卡号：<input type="text" placeholder="请输入15位电子卖座卡号"/>
					</div>
					<div class="login_btn">查询</div>
				</div>

				<div>
					<div>
						<img src="" />
						<div>
							
						</div>
					</div>	
				</div>
			</div>
			
		)
	}

	tabs1(){
		this.setState({isShow1:true})
		this.setState({isShow2:false})
	}

	tabs2(){
		this.setState({isShow1:false})
		this.setState({isShow2:true})
	}

	
	
}























