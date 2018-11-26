import config from '../config'
import { AsyncStorage } from 'react-native'

export function CheckToken(token) {
    return new Promise((resolve, reject)=>{
        fetch(config.api_url + '/auth/verify_token', {
            method: "POST",
            body: JSON.stringify({token})
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.status==0){
                return reject(res.error)
            }

            let userData = JSON.stringify(res.result)
            return AsyncStorage.setItem('userData', userData)
        })
        .then(()=>resolve(true))
        .catch(reject)
    })
}

export function Signin(username, password) {
    return new Promise((resolve, reject)=>{
        fetch(config.api_url + '/auth/signin', {
            method: "POST",
            body: JSON.stringify({username, password})
        })
        .then(res=>res.json())
        .then(async (res)=>{
            if(res.status==0){
                return reject(res.error)
            }

            let token = res.result.token
            return AsyncStorage.setItem('userToken', token);
        })
        .then(()=>resolve(true))
        .catch(err=>{
            console.log(err);
            reject(err)
        })
    })
}

export function listLikeFilm(){
    return new Promise((resolve, reject)=>{
        Promise.all([
            AsyncStorage.getItem('userData'),
            getHeaders()
        ])
        .then(results=>{
            userData = JSON.parse(results[0])
            headers = results[1]
            return fetch(config.api_url + '/users/' + userData._id + '/like_film', {
                method: "GET",
                headers,
            })
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

export function likeFilm(film_id){
    return new Promise((resolve, reject)=>{
        Promise.all([
            AsyncStorage.getItem('userData'),
            getHeaders()
        ])
        .then(results=>{
            userData = JSON.parse(results[0])
            headers = results[1]
            return fetch(config.api_url + '/users/' + userData._id + '/like_film', {
                method: "POST",
                headers,
                body: JSON.stringify({film_id})
            })
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

export function unlikeFilm(film_id){
    return new Promise((resolve, reject)=>{
        Promise.all([
            AsyncStorage.getItem('userData'),
            getHeaders()
        ])
        .then(results=>{
            userData = JSON.parse(results[0])
            headers = results[1]
            return fetch(config.api_url + '/users/' + userData._id + '/like_film', {
                method: "DELETE",
                headers,
                body: JSON.stringify({film_id})
            })
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