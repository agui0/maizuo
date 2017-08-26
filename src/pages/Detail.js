import React, {Component} from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import moviesDetailService from '../services/moviesDetailService.js'
import '../css/detail.css'

export default class Detail extends Component{
    constructor({match}){
        super();
        // console.log(match)
        this.state = {
            id:match.params.id,
            data:{}
        }
    }

    render(){
        return(
            <div id="detail" class="page">
                <div class="box">
                    <div class="img_box">
                        <img src={this.state.data.img_path}/>
                    </div>
                    <div class="content_box">
                        <h3>影片简介</h3>
                        <div class="txt_box">
                            <p>导&nbsp;&nbsp;&nbsp;演：{this.state.data.director}</p>
                            <p>主&nbsp;&nbsp;&nbsp;演：{this.state.data.actors}</p>                           
                            <p>地区语言：{this.state.data.nation}({this.state.data.language})</p>
                            <p>类&nbsp;&nbsp;&nbsp;型：{this.state.data.category}</p>
                            <p>上映时间：{this.state.data.Month}月{this.state.data.Date}日上映</p>
                            <p>导&nbsp;&nbsp;&nbsp;演：{this.state.data.synopsis}</p>
                        </div>
                    </div>
                    <Link to={'/cinema/'+this.state.id}><div class="Ticket_btn" onClick={this.goCinema.bind(this)}>立即购票</div></Link>
                </div>
            </div>
        )

    }
    componentWillMount(){
        
        moviesDetailService.getMoviesDetail(this.state.id)
        .then((data)=>{
            this.setState({data:data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    goCinema(){
        
    }

}








































