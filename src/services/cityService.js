
import axios from 'axios'
import API from '../api'

function getCity(){
    return new Promise ((resolve,reject)=>{
        axios.get(`${API.cityApi}?__t=${new Date().getTime()}`)
        .then((res)=>{
            // console.log(res)
            var arr = res.data.data.cities;
            var arrStart = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","P","W","X","Y","Z"]
            var newArr = arrStart.map((item)=>{
                var obj1 = {};
                obj1.Start = item;//标记A
                obj1.List = [];
                arr.map((item1)=>{
                    if(item1.pinyin.substring(0,1) == item){   //A的所有开头
                        obj1.List.push(item1);
                    }
                })
                return obj1;
            })
            resolve(newArr)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}


export default{
    getCity
}























































