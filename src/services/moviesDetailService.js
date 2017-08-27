import axios from 'axios'
import API from '../api'

function getMoviesDetail(id){
    // console.log(id)
    return new Promise ((resolve,reject)=>{
        axios.get(`${API.moviesDetail}${id}?__t=${new Date().getTime()}`)
        .then((res)=>{   
            var item = res.data.data.film;  
            var obj = {};
            // console.log(res)
            obj.img_path = item.cover.origin;//图片
            obj.director = item.director;//导演
            var arr = [];
            item.actors.map((items)=>{//主演
                arr.push(items.name);
            });
            var str = arr.join("|")
            obj.actors = str;
            obj.id = item.id;//id
            obj.category = item.category;//影片类型
            obj.intro = item.intro;//影片描述
            obj.nation = item.nation;//地区
            obj.language = item.language;//语言
            var date = new Date(item.premiereAt);
            obj.Month = date.getMonth()+1;//获取月份
            obj.Date = date.getDate();//获取日
            obj.synopsis = item.synopsis;//剧情介绍
            obj.id = item.id;
            resolve(obj)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}


export default{
    getMoviesDetail
}