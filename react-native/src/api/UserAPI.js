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