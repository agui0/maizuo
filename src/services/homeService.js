import axios from 'axios'
import API from '../api'

function getHomeBanner(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeBannerApi}?__t=${new Date().getTime()}`)
        .then((res)=>{
            let arr = res.data.data.billboards;
            resolve(arr)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}

function getHomeMovie(m=m||1,n=n||5){//获取热映中电影
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeMovieApi}?__t=${new Date().getTime()}&page=${m}&count=${n}`)
        .then((res)=>{
            console.log(res);
            var newArr = res.data.data.films.map((item)=>{
                var obj = {};
                obj.name = item.name;
                obj.id = item.id;
                obj.intro = item.intro;//影片描述
                obj.isNowPlaying = item.isNowPlaying;//是否热映中
                obj.img_path = item.cover.origin; //影片预览图
                obj.grade = item.grade; //影片评分
                obj.cinemaCount = item.cinemaCount;//影院数量
                obj.watchCount = item.watchCount; //购票数量
                obj.poster = item.poster.origin//movices页面影片预览图
                return obj
            })
            resolve(newArr)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}

function getSoonPlaying(m=m||1,n=n||7){ //获取即将上映电影
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeSoonPlayingApi}?__t=${new Date().getTime()}&page=${m}&count=${n}`)
        .then((res)=>{
            console.log(res);
            var newArr = res.data.data.films.map((item)=>{
                var obj = {};
                obj.name = item.name;
                obj.id = item.id;
                obj.intro = item.intro;//影片描述
                obj.isComingSoon = item.isComingSoon;//是否即将上映
                obj.img_path = item.cover.origin; //影片预览图
                obj.grade = item.grade; //影片评分
                var myDate = new Date(item.premiereAt)
                obj.premiereMonth = myDate.getMonth() +1//上映月份
                obj.premiereData = myDate.getDate()//上映日
                var Day = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六',]
                obj.getDay = Day[myDate.getDay()]//星期几
                obj.cinemaCount = item.cinemaCount;//影院数量
                obj.watchCount = item.watchCount; //购票数量
                obj.poster = item.poster.origin//movices页面影片预览图
                return obj
            })
            resolve(newArr)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}




    
  
export default{
    getHomeBanner,
    getHomeMovie,
    getSoonPlaying
}    






