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

export function getHighRateFilms(){
    return new Promise((resolve, reject)=>{
        getHeaders()
        .then(headers=>{
            return fetch(config.api_url + '/films/high-rate', {headers})
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

export function search(keyword){
    return new Promise((resolve, reject)=>{
        getHeaders()
        .then(headers=>{
            return fetch(config.api_url + '/films/search?s=' + keyword, {headers})
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

export function findById(filmId){
    return new Promise((resolve, reject)=>{
        getHeaders()
        .then(headers=>{
            return fetch(config.api_url + '/films/' + filmId, {headers})
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