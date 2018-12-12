import config from '../config'
import {getHeaders} from '../utils/common'
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

            // let userData = JSON.stringify(res.result)

            // return AsyncStorage.setItem('userData', userData)
            resolve(true)
        })
        .catch(reject)
    })
}

export function Signin(username, password) {
    return new Promise((resolve, reject)=>{
        let token;

        fetch(config.api_url + '/auth/signin', {
            method: "POST",
            body: JSON.stringify({username, password})
        })
        .then(res=>res.json())
        .then(async (res)=>{
            if(res.status==0){
                return reject(res.error)
            }
            
            token = res.result.token
            return AsyncStorage.setItem('userData', JSON.stringify(res.result))
        })
        .then(()=>{
            AsyncStorage.setItem('userToken', token)
        })
        .then(()=>resolve(true))
        .catch(err=>{
            reject(err)
        })
    })
}

export function Signup(username, full_name, password) {
    return new Promise((resolve, reject)=>{
        fetch(config.api_url + '/auth/signup', {
            method: "POST",
            body: JSON.stringify({user: {username, full_name, password}})
        })
        .then(res=>res.json())
        .then(async (res)=>{
            if(res.status==0){
                return reject(res.error)
            }
            resolve(true)
        })
        .catch(err=>{
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
            let userData = JSON.parse(results[0])
            let headers = results[1]
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
            let userData = JSON.parse(results[0])
            let headers = results[1]
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
            let userData = JSON.parse(results[0])
            let headers = results[1]
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

export function listFavoriteFilm(){
    return new Promise((resolve, reject)=>{
        Promise.all([
            AsyncStorage.getItem('userData'),
            getHeaders()
        ])
        .then(results=>{
            let userData = JSON.parse(results[0])
            let headers = results[1]
            return fetch(config.api_url + '/users/' + userData._id + '/favorite_film', {
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

export function favoriteFilm(film_id){
    return new Promise((resolve, reject)=>{
        Promise.all([
            AsyncStorage.getItem('userData'),
            getHeaders()
        ])
        .then(results=>{
            let userData = JSON.parse(results[0])
            let headers = results[1]
            return fetch(config.api_url + '/users/' + userData._id + '/favorite_film', {
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

export function unfavoriteFilm(film_id){
    return new Promise((resolve, reject)=>{
        Promise.all([
            AsyncStorage.getItem('userData'),
            getHeaders()
        ])
        .then(results=>{
            let userData = JSON.parse(results[0])
            let headers = results[1]
            return fetch(config.api_url + '/users/' + userData._id + '/favorite_film', {
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

export function uploadAvatar(image) {
	return new Promise(function(resolve, reject) {
        getHeaders()
        .then(headers=>{
            headers.set("Content-Type", "multipart/form-data")

			var data= new FormData();
			data.append('avatar', {
				uri: image.uri,
				name: image.fileName,
				type: image.type,
			});

			return fetch(config.api_url + '/users/upload-avatar', {
				method: 'POST',
				headers,
				body: data,
			});
		})
		.then(res => res.json())
		.then(res => {
            if(res.status==0){
                return reject(res.error)
            }

			resolve(res.result);
		})
        .catch(err=>reject(err));
	});
}

export function updateUser(new_user){
    return new Promise((resolve, reject)=>{
        let userData = {}

        Promise.all([
            AsyncStorage.getItem('userData'),
            getHeaders()
        ])
        .then(results=>{
            userData = JSON.parse(results[0])
            let headers = results[1]
            return fetch(config.api_url + '/users/' + userData._id, {
                method: "PUT",
                headers,
                body: JSON.stringify({
                    user: new_user
                })
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

export function changePassword(oldPassword, newPassword){
    return new Promise((resolve, reject)=>{
        let userData = {}

        Promise.all([
            AsyncStorage.getItem('userData'),
            getHeaders()
        ])
        .then(results=>{
            userData = JSON.parse(results[0])
            let headers = results[1]
            return fetch(config.api_url + '/users/' + userData._id + "/change-password", {
                method: "PUT",
                headers,
                body: JSON.stringify({oldPassword, newPassword})
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