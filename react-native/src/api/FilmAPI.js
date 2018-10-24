import config from '../config'
export function getTopFilms(){
    return new Promise((resolve, reject)=>{
        console.log(config.api_url)
        fetch(config.api_url + '/films/top')
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
