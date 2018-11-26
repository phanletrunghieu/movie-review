import config from '../config'
import {getHeaders} from '../utils/common'
export function getHomeGenres(){
    return new Promise((resolve, reject)=>{
        getHeaders()
        .then(headers=>{
            return fetch(config.api_url + '/genres/home', {headers})
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.status==0){
                return reject(res.error)
            }

            resolve(res.result)
        })
        .catch(reject)
    })
}
