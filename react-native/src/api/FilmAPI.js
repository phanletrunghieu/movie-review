import config from '../config'
import {getHeaders} from '../utils/common'

export function getTopFilms(){
    return new Promise((resolve, reject)=>{
        getHeaders()
        .then(headers=>{
            return fetch(config.api_url + '/films/top', {headers})
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

export function getFilmsByGenreID(genre_id){
    return new Promise((resolve, reject)=>{
        getHeaders()
        .then(headers=>{
            return fetch(config.api_url + '/films/by-genre/' + genre_id, {headers})
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
