
import axios from 'axios'
import API from '../api'

function getCity(){
    return new Promise ((resolve,reject)=>{
        axios.get(`${API.cityApi}?__t=${new Date().getTime()}`)
        .then((res)=>{
            
            resolve(res.data.data.cities)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}


export default{
    getCity
}























































