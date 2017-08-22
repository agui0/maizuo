
import axios from 'axios'
import API from '../api'

function getCinemaData(){
    return new Promise ((resolve,reject)=>{
        axios.get(`${API.cinema}${new Date().getTime()}`)
        .then((res)=>{
            var arr = res.data.data.cinemas;
            console.log(arr)
            var obj = {};
            arr.map((item)=>{
                if(Object.keys(obj).length>0){
                    for(var key in obj){
                        if(item.district.name == key){
                            obj[key].push(item);        
                        }else{
                            obj[item.district.name] = [];
                            obj[item.district.name].push(item);
                        }
                    }
                }else{                  
                    obj[item.district.name] = [];
                    obj[item.district.name].push(item);
                }    
            })
            resolve(obj)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}


export default{
    getCinemaData
}