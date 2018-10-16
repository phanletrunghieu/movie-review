import { AsyncStorage } from 'react-native'

export function CheckToken(token) {
    return new Promise((resolve, reject)=>{
        resolve()
    })
}

export function Login(username, password) {
    return new Promise(async (resolve, reject)=>{
        let token = "abc"
        await AsyncStorage.setItem('userToken', token);
        resolve(token)
    })
}