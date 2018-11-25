import config from '../config'
export function getHomeGenres(){
    return new Promise((resolve, reject)=>{
        fetch(config.api_url + '/genres/home')
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
