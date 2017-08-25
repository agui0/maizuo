import React, {Component} from 'react'
import '../css/me.css'
export default class Me extends Component {
	constructor(){
		super();
		this.state = {
			
		}
	}
	
	render(){
		
		return (
			<div class="page">
				<div class="me_page" >
					<div class="ipt_box">
						<div class="border_l"></div>
						<div class="border_r"></div>
						<input type="text" placeholder="输入手机号/邮箱"/>
					</div>
					<div class="ipt_box">
						<div class="border_l"></div>
						<div class="border_r"></div>
						<input type="password" placeholder="输入密码/验证码"/>
					</div>
					<div class="login_btn">登录</div>
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
	
	
}























