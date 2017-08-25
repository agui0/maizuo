import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import cityService from '../services/cityService.js'
import '../css/city.css'
export default class SilderBar extends Component {
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
											<li key={index} style={item.List.length>=1?{display:"block"}:{display:"none"}}>
												{item.Start}
											</li>
										)
									})
								}
								
							</ul>
							{
								this.state.data.map((item,index)=>{
									return(
										<div key={index}>
											<h3 style={item.List.length>=1?{display:"block"}:{display:"none"}}>{item.Start}</h3>
											<ul>
												{
													item.List.map((item2,index2)=>{
														return(
															<li key={index2} style={item.List.length>=1?{display:"block"}:{display:"none"}}>
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

		setTimeout(()=>{
			this.state.history.goBack();
		},300)

		
	}

	componentWillMount(){//组件创建前
		cityService.getCity()//请求城市数据
		.then((data)=>{
			console.log(data)
			this.setState({data});
		})
		.catch((error)=>{
			console.log(error)
		})
	}

	
}























