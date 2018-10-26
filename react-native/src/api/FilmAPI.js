import config from '../config'
export function getTopFilms(){
    return new Promise((resolve, reject)=>{
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

export function getFilmsByGenreID(genre_id){
    return new Promise((resolve, reject)=>{
        fetch(config.api_url + '/films/by-genre/' + genre_id)
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
