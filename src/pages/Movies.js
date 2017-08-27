import React, {Component} from 'react'
import homeService from '../services/homeService.js'
import '../css/movices.css'

let moviesScroll = null;
let num1 = 1 ,num2 = 1 ;
export default class Movices extends Component{
	constructor({history,match}){
		super();
		this.state = {
			isShow:true,
			hotMovieData:[],
			soonPlayingData:[],
			history,
			match
		
		}
	}
	
	render(){
	
		let data =[];
		{this.state.isShow?data=this.state.hotMovieData:data=this.state.soonPlayingData}
		return (
			
			<div id="movies" ref="movies" class="page">
				<div class="movicesContent">
					<header class="movicesTabs">
						<a ref="nowHot" class={this.state.isShow?'Active':null} onClick={this.nowActive.bind(this)}>正在热映</a>
						<a ref="soon" class={!this.state.isShow?'Active':null} onClick={this.soonActive.bind(this)}>即将上映</a>
					</header>
					<div class="movicesList">
						<ul>
							{
								data.map((item,index)=>{
									return(
										<li key={index} onClick={this.goDetail.bind(this,item.id)}>
											<div class="img_box">
												<img src={item.poster} alt="点击进入详情"/>
											</div>
											<div class="txt_box">
												<h3>
													{item.name}
													<span>></span>
													<strong style={this.state.isShow?{display:"block"}:{display:"none"}}>{item.grade}</strong>
												</h3>
												<p>{item.intro}</p>
												<p style={this.state.isShow?{display:"block"}:{display:"none"}}><span>{item.cinemaCount}</span>家影院上映<span class="padding_span">{item.watchCount}</span>人购票</p>
												<p style={!this.state.isShow?{display:"block"}:{display:"none"}} class="color_orange">{item.premiereMonth}月{item.premiereData}日上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.getDay}</p>
											</div>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
			
		)
	}
	
	nowActive(){
		this.setState({isShow:true})
	}

	soonActive(){
		this.setState({isShow:false})
	}

	goDetail(id){
		// console.log(this.props.location)
		this.state.history.push('/detial/'+id);
	}

	componentWillMount(){		
		if(this.state.match.params.active=="soon"){
			this.setState({isShow:false})
		}
		//请求热映中电影列表
		homeService.getHomeMovie(num1,7)
		.then((data)=>{
			// console.log(data);
			// console.log(88888888)
			this.setState({hotMovieData:data})
		})
		
		//请求即将上映电影列表
		homeService.getSoonPlaying(num2,7)
		.then((data)=>{
			// console.log(data);
			this.setState({soonPlayingData:data})
		})
		// this.setState({isShow:this.match.params.active})

	}
	componentDidMount(){		
		moviesScroll = new IScroll(this.refs.movies,{
			probeType:3
		});
		moviesScroll.on('scrollEnd',()=>{
			if((this.state.isShow)&&Math.floor(moviesScroll.y)==Math.floor(moviesScroll.maxScrollY)){
				num1+=1;

				//请求热映中电影列表
				homeService.getHomeMovie(num1,7)
				.then((data)=>{
					// console.log(88888888)
					this.setState({hotMovieData:this.state.hotMovieData.concat(data)})
				})			
				// console.log('加载更多');				
			}else if((!this.state.isShow)&&Math.floor(moviesScroll.y)==Math.floor(moviesScroll.maxScrollY)){
				num2+=1;
				//请求即将上映电影列表
				
				homeService.getSoonPlaying(num2,7)
				.then((data)=>{
					// console.log(1111);
					this.setState({soonPlayingData:this.state.soonPlayingData.concat(data)})
				})
			}
			moviesScroll.refresh();
			// console.log(moviesScroll.y);
			
		})
	
	}

	componentDidUpdate(){
		
			
	}
	shouldComponentUpdate(){
		return true;
	}
	
}























