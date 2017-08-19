import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../css/city.css'
export default class SilderBar extends Component {
	constructor({history}){
		super();
		this.state = {
			className : '',
			history
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
					<button onClick={this.changeCity.bind(this,'北京')}>北京</button>
					<button onClick={this.changeCity.bind(this,'上海')}>上海</button>
					<button onClick={this.changeCity.bind(this,'广州')}>广州</button>
					<button onClick={this.changeCity.bind(this,'深圳')}>深圳</button>
				</div>
			</ReactCSSTransitionGroup>
		)
	}
	
	changeCity(city){	
		this.setState({className:'leave'});
		console.log(this.state.className)

		setTimeout(()=>{
			this.state.history.goBack();
		},300)
	}



	
}























