import React, {Component} from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import homeService from '../services/homeService.js'
import ReactSwipe from 'react-swipe';
import '../css/home.css'

let bannerSwiper = null;
let myScroll = null;
export default class Home extends Component{
	constructor(){
		super();
		this.state = {
			bannerData:[],
			homeMovieData:[],
			soonPlayingData:[]
			
		}
	}

	render(){
		return(
			<div id="home" class="page">
				<div>	
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

					<div class="homeMovie">
						<ul>
							{
								this.state.homeMovieData.map((item,index)=>{
									return(
										<li key={index} >
											<div class="img_box">
												<img src={item.img_path} />
											</div>
											<div class="txt_box">
												<div class="txt_box_l">
													<h4>{item.name}</h4>
													<p>{item.cinemaCount}家影院上线 {item.watchCount}人购票</p>
												</div>
												<div class="txt_box_r">
													{item.grade}
												</div>
											</div>
										</li>
									)
								})
							}
						</ul>
						
						<div class="more_hot">
							<span onClick={this.getMore_Hot.bind(this)}>更多热映电影</span>
						</div>	
					</div>

					<div class="soonPlaying">
						<div class="soonPlayingLabel">即将上映</div>
						<ul>
							{
								this.state.soonPlayingData.map((item,index)=>{
									return(
										<li key={index}>
											<div class="img_box">
												<img src={item.img_path} />
											</div>
											<div class="txt_box">
												<div class="txt_box_l">{item.name}</div>
												<div class="txt_box_r">{item.premiereMonth}月{item.premiereDate}日上映</div>
											</div>
										</li>
									)
								})
							}
						</ul>
						<div class="more_soonPlaying" onClick={this.getMore_soonPlaying.bind(this)}>
							更多即将上映电影
						</div>
					
					</div>			




				</div>	
			</div>
		)
	}
	

	getMore_Hot(){
		
	}
	getMore_soonPlaying(){
		
	}

	componentWillMount(){
		//请求轮播数据
		homeService.getHomeBanner()
		.then((data)=>{
			// console.log(data)
			if(data){
				this.setState({bannerData:data});
				bannerSwiper.update();
			}
			
		})
		.catch((error)=>{
			console.log(error);
		})

		//请求热映中电影列表
		homeService.getHomeMovie()
		.then((data)=>{
			// console.log(data);
			this.setState({homeMovieData:data})
		})
		
		//请求即将上映电影列表
		homeService.getSoonPlaying()
		.then((data)=>{
			// console.log(data);
			this.setState({soonPlayingData:data})
		})

	}

	componentDidMount(){
		// console.log(this.state.bannerData.length)
		bannerSwiper = new Swiper (this.refs.banner, {}) 
		myScroll = new IScroll("#home",{
			probeType:3
		});
	  
	}
	componentDidUpdate(){
		setTimeout(()=>{
			myScroll.refresh();
		},800)
		
	}



}































