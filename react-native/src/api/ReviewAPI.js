import config from '../config'
import {getHeaders} from '../utils/common'
import { AsyncStorage } from 'react-native'

export function getReviews(film_id){
    return new Promise((resolve, reject)=>{
        getHeaders()
        .then(headers=>{
            return fetch(config.api_url + '/comments/' + film_id, {headers})
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

export function createReview(comment, rating, owner, onModel = "Film"){
    return new Promise((resolve, reject)=>{
        let userData = {}

        Promise.all([
            AsyncStorage.getItem('userData'),
            getHeaders()
        ])
        .then(results=>{
            userData = JSON.parse(results[0])
            let headers = results[1]

            return fetch(config.api_url + '/comments', {
                method: "POST",
                headers,
                body: JSON.stringify({
                    comment,
                    star: rating,
                    owner,
                    onModel
                })
            })
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.status==0){
                return reject(res.error)
            }

            res.result.user = {
                _id: res.result.user,
                full_name: userData.full_name
            }

            resolve(res.result)
        })
        .catch(reject)
    })
}

export function deleteReview(review_id){
    return new Promise((resolve, reject)=>{
        getHeaders()
        .then(headers=>{
            return fetch(config.api_url + '/comments/' + review_id, {
                method: "DELETE",
                headers
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

export function updateReview(comment_id, new_comment, new_rating){
    return new Promise((resolve, reject)=>{
        let userData = {}

        Promise.all([
            AsyncStorage.getItem('userData'),
            getHeaders()
        ])
        .then(results=>{
            userData = JSON.parse(results[0])
            let headers = results[1]
            return fetch(config.api_url + '/comments/' + comment_id, {
                method: "PUT",
                headers,
                body: JSON.stringify({
                    comment: {
                        body: new_comment,
                        star: new_rating
                    }
                })
            })
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.status==0){
                return reject(res.error)
            }

            res.result.user = {
                _id: res.result.user,
                full_name: userData.full_name
            }

            resolve(res.result)
        })
        .catch(reject)
    })
}