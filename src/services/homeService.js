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



    
  
export default{
    getHomeBanner
}    






