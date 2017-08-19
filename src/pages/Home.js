import React, {Component} from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import homeService from '../services/homeService.js'
import ReactSwipe from 'react-swipe';
import '../css/home.css'

let bannerSwiper = null;

export default class Home extends Component{
	constructor(){
		super();
		this.state = {
			bannerData:[]
			
		}
	}

	render(){
		return(
			<div id="home" class="page">
				<div ref="banner" class="swiper-container home-banner">
					<div class="swiper-wrapper">
						{
							this.state.bannerData.map((item,index)=>{
								return(
									<div key={index} class="swiper-slide">
										<img src={item.imageUrl} />
									</div>
								)
							})
						}
						
						
					</div>
					
				</div>
				
			</div>
		)
	}
	
	componentWillMount(){
		//请求轮播数据
		homeService.getHomeBanner()
		.then((data)=>{
			console.log(data)
			this.setState({bannerData:data});
			bannerSwiper.update();
		})
		.catch((error)=>{
			console.log(error);
		})
	}

	componentDidMount(){
		console.log(this.state.bannerData.length)
		bannerSwiper = new Swiper (this.refs.banner, {}) 
		  
	}



}































