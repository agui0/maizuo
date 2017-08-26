import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import cityService from '../services/cityService.js'
import '../css/city.css'
import store from'../store'
let city_scroll_view = null;
export default class City extends Component {
	constructor({history}){
		super();
		this.state = {
			className : '',
			history,
			data:[]
		}
	}
	
	render(){
		
		return (
			
			<ReactCSSTransitionGroup
				transitionName="SlideInDown"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={false}
				transitionLeave={false}
			>
			<div  id="city" class={'page '+this.state.className}>
				{/* <button onClick={this.changeCity.bind(this,'北京')}>北京</button>
				<button onClick={this.changeCity.bind(this,'上海')}>上海</button>
				<button onClick={this.changeCity.bind(this,'广州')}>广州</button>
				<button onClick={this.changeCity.bind(this,'深圳')}>深圳</button> */}
				<div class="city_all">
					<div class="header_height">
						<div class="position_city">
							<h3>GPS定位你所在的城市</h3>
							<ul>
								<li class="active">深圳</li>
							</ul>
						</div>
						<div class="hot_city">
							<h3>热门城市</h3>
							<ul>
								<li class="active">北京</li>
								<li class="active">上海</li>
								<li class="active">广州</li>
								<li class="active">深圳</li>
							</ul>
						</div>
						<div>
							<h3>按字母排序</h3>
							<ul>
								{
									this.state.data.map((item,index)=>{
										return(
											<li onClick={this.goStart.bind(this,index)} key={index} style={item.List.length>=1?{display:"block"}:{display:"none"}}>
												{item.Start}
											</li>
										)
									})
								}
								
							</ul>							
						</div>
					</div>
					<div class="content_height">
						{
							this.state.data.map((item,index)=>{
								return(
									<div class="box-height" key={index}>
										<h3 style={item.List.length>=1?{display:"block"}:{display:"none"}}>{item.Start}</h3>
										<ul>
											{
												item.List.map((item2,index2)=>{
													return(
														<li onClick={this.changeCity.bind(this,item2.name)} key={index2} style={item.List.length>=1?{display:"block"}:{display:"none"}}>
															{item2.name}
														</li>
													)
												})
											}
										</ul>
									</div>
								)
							})
						}
					</div>
				</div>	

			</div>
				
			</ReactCSSTransitionGroup>
		)
	}
	
	changeCity(city){	
		this.setState({className:'leave'});
		// console.log(this.state.className)
		store.dispatch({			//修改全局数据
			type:'changeCity',
			val:city
		})

		setTimeout(()=>{
			this.state.history.goBack();
		},300)

		
	}

	componentWillMount(){//组件创建前
		cityService.getCity()//请求城市数据
		.then((data)=>{
			// console.log(data)
			this.setState({data});
			city_scroll_view.refresh();
		})
		.catch((error)=>{
			console.log(error)
		})
	}

	componentDidMount(){//组件创建完
		city_scroll_view = new IScroll('#city',{});
		city_scroll_view.refresh();
		
	}
	goStart(index){//点击字母跳转到相应字母开头的城市

		// let header_height = document.querySelector(".header_height")//
		// let allBox = document.querySelectorAll(".box-height");
		// let scrollHeight = header_height.offsetHeight;
		// for(var i=0;i<index;i++){
		// 	scrollHeight+=allBox[i].offsetHeight;
		// }
		// city_scroll_view.scrollTo(0, -scrollHeight, 200);

		let allBox = document.querySelectorAll(".box-height")[index];
		city_scroll_view.scrollTo(0, -allBox.offsetTop, 200);//点击的字母的城市滚动到视窗顶部
	}
}























