
import axios from 'axios'
import API from '../api'

function getCinemaData(){
    return new Promise ((resolve,reject)=>{
        axios.get(`${API.cinema}${new Date().getTime()}`)
        .then((res)=>{
            var arr = res.data.data.cinemas;
            var obj = {};
            var arr1 = []
            
            arr.map((item)=>{
                var obj2 = {};
                obj2.name = item.name;//影院名字
                obj2.address = item.address;//地址
                obj2.district = item.district.name;//所属区
                obj2.latitude = item.geocode.latitude;//纬度
                obj2.longitude = item.geocode.longitude;//经度度
                obj2.id = item.id;
                obj2.minimumPrice = item.minimumPrice;//最低价
                obj2.labels = item.labels;//活动

                if(obj[item.district.name]){                   
                    obj[item.district.name].push(obj2);
                }else{
                    obj[item.district.name] = [];
                    obj[item.district.name].push(obj2);
                }    
            })
            for(var key in obj){
                var obj3 = {};
                obj3.name = key;
                obj3.isShow = false;
                obj3.list = obj[key];
                arr1.push(obj3)
            }

            resolve(arr1)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}

function getCinemaDetail(id){
    return new Promise ((resolve,reject)=>{
        axios.get(`${API.cinemaDetail}${id}?__t=${new Date().getTime()}`)
        .then((res)=>{
            var obj = res.data.data.cinema;
            var item = {};
            item.name = obj.name;
            item.address = obj.address;
            item.bus = obj.bus;
            item.telephones = obj.telephones[0];//电话
            item.name = obj.name;
            resolve(item)
        })
        .catch((error)=>{
            console.log(error)
        })
    })    
}   


export default{
    getCinemaData,
    getCinemaDetail
}