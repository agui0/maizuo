import React, {Component} from 'react'
import shopService from '../services/shopService.js'
import '../css/shop.css'
let shopBannerSwiper = null;
let shopsScroll = null;
export default class Shop extends Component {
	constructor(){
		super();
		this.state = {
			bannerData:[],
			aListData:[],
			recommendData:[],
			classifyData:[],
			siftData:[]
		}
	}
	
	render(){
		
		return (
			<div class="page" ref="shopScroll">
				<div id="shop" >
					<div ref="shopBanner" class="swiper-container">
						<div class="swiper-wrapper">
							{
								this.state.bannerData.map((item,index)=>{
									return(
										<div key={index} class="swiper-slide">
											<img src={item.imageSrc} />
										</div>
									)
								})
							}												
						</div>
						<div class="swiper-pagination"></div>
					</div>

					<div class="aList">
						<ul>
							{
								this.state.aListData.map((item,index)=>{
									return(
										<li key={index}>
											<a href="#">
												<img src={item.imageSrc} />
											</a>
											<div>{item.name}</div>
										</li>
									)
								})
							}
						</ul>
					</div>
					
					<div class="recommend">
						{
							this.state.recommendData.map((item,index)=>{
								return(
									<div key={index} class="recommend_list">
										<img src={item.imageSrc} />
									</div>
								)
							})
						}
					</div>

					<div>
						{
							this.state.classifyData.map((item,index)=>{
								return(
									<div key={index} class="list_detail">
										<div class="header_img">
											<img src={item.imageSrc} />
										</div>
										<div class="list_detail_a">
											{
												item.products?item.products.map((val,index2)=>{
													return(
														<div key={index2} class="detail_img_box">
															<img src={val.image} />
															<p>{val.name}</p>
															<p class="mar-top0"><strong>￥{val.price}</strong></p>
														</div>
													)
													
												}):null
											}
											<div></div>
										</div>
									</div>
								)
							})
						}
					</div>	
					
					<div class="sift_box">
						<h3>-- 好货精选 --</h3>
						<div class="sift">
							{
								this.state.siftData?this.state.siftData.map((item,index)=>{
									return(
										<div key={index} class="siftItem">
											<img src={item.image} />
											<div class="color_333">{item.name}</div>
											<div class="pad-b-10"><span class="color_f40">￥{item.price}</span><span class="color_666">已售{item.displaySalesCount}</span></div>
										</div>
									)
								}):null
							}
						</div>

					</div>
				
				</div>
			</div>
			
		)
	}
	
	componentWillMount(){//组件创建前
		//获取banner数据
		shopService.getShopList()
		.then((data)=>{
			this.setState({bannerData:data[0]});
			shopBannerSwiper.update();
			this.setState({aListData:data[1]});
			this.setState({recommendData:data[2]});
			this.setState({classifyData:data[3]},()=>{
				shopsScroll.refresh();
			});
		})		
		.catch((error)=>{
			console.log(error)
		})

		//获取好货精选数据
		shopService.getSiftList()
		.then((data)=>{
			console.log(data)
			this.setState({siftData:data})
		})		
		.catch((error)=>{
			console.log(error)
		})
	}

	componentDidMount(){//	创建好dom节点
		
		shopBannerSwiper = new Swiper (this.refs.shopBanner, {//初始化轮播图
			pagination: '.swiper-pagination'
		});
		shopsScroll = new IScroll(this.refs.shopScroll,{//初始化滚动视图
			probeType:3
		});
		shopsScroll.refresh();
		var page = 1;
		shopsScroll.on('scrollEnd',()=>{ //到底了
			if(Math.floor(shopsScroll.y)==Math.floor(shopsScroll.maxScrollY)){
				page+=1;

				//请求更多数据
				shopService.getSiftList(page)
				.then((data)=>{
					this.setState({siftData:this.state.siftData.concat(data)})
				})						
			}
			shopsScroll.refresh();
			
		})




	}	

	
}























