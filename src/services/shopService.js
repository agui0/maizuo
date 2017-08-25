import axios from 'axios'
import API from '../api'


function getShopList(){  
    return new Promise ((resolve,reject)=>{   
        axios.get(API.shopList)
        .then((res)=>{
            console.log(res)
            var arr = res.data.data;
            var arr2 = [];
            arr2.push(arr.slice(8,10));
            arr2.push(arr.slice(0,8));
            arr2.push(arr.slice(10,12));
            arr2.push(arr.slice(12));
            resolve(arr2)
        })
        .catch((error)=>{
            resolve(error)
        })
    })
}

//好货精选
function getSiftList(page=page||1){  
    return new Promise ((resolve,reject)=>{   
        axios.get(`${API.shopSift}${page}&num=20`)
        .then((res)=>{
            if(res.data.data.list){
                var arr = res.data.data.list.map((item)=>{
                    var obj = {};
                    obj.id = item.id;
                    obj.name = item.masterName;//名称
                    obj.displaySalesCount = item.displaySalesCount;//销量
                    obj.image = item.skuList[0].image;//图片
                    obj.price = item.skuList[0].price;//价格  
                    return obj;          
                });  
            }
                     
            resolve(arr)
        })
        .catch((error)=>{
            resolve(error)
        })
    })
}




export default{
    getShopList,
    getSiftList
}









