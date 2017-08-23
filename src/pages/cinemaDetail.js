import React, {Component} from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import cinemaService from '../services/cinemaService.js'
import '../css/cinemaDetail.css'


export default class cinemaDetail extends Component {
	constructor({match}){
        super();	
        console.log(88)	
		this.state = {
            id:match.params.id,
            data:{}
		}
	}
	
	render(){
        return(
            <div class="page cinemaDatail">
                <div class="img_box">
                    <img src="../../static/images/img1.png" />
                </div>
                <div class="content">
                    <dl>
                        <dt><i class="icon-dianyingpiao1 iconfont"></i></dt>
                        <dd>
                            <h4>订座票<span>立即订座</span></h4>
                            <p>选好场次及座位，到影院自助机取票</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt><i class="icon-dianyingpiao1 iconfont"></i></dt>
                        <dd>
                            <h4>通兑票<span class="active">立即订座</span></h4>
                            <p>有效期内到影院前台兑换影票</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt><i class="icon-cocktail31 iconfont"></i></dt>
                        <dd>
                            <h4>小卖部<span>购买</span></h4>
                           
                        </dd>
                    </dl>
                    <dl>
                        <dt><i class="icon-dingwei iconfont"></i></dt>
                        <dd>
                            
                            <p>{this.state.data.address}</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt><i class="icon-dianhua iconfont"></i></dt>
                        <dd>
                            
                            <p>{this.state.data.telephones}</p>
                        </dd>
                    </dl>
                </div>
                <footer>
                    <ul>
                        <li><span class="iconfont icon-piao"></span><i>取票</i></li>
                        <li><span class="iconfont icon-yanjing"></span><i>3D</i></li>
                        <li><span class="iconfont icon-tingche"></span><i>停车</i></li>
                        <li><span class="iconfont icon-youhui"></span><i>优惠</i></li>
                        <li><span class="iconfont icon-bus"></span><i>交通</i></li>                       
                    </ul>
                </footer>



            </div>
        )
    }

    componentWillMount(){
        console.log(this.state.id)
        cinemaService.getCinemaDetail(this.state.id)
        .then((data)=>{
            console.log(888)
           this.setState({data})
        })


    }

}    	