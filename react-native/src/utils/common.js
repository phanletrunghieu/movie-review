import { AsyncStorage } from 'react-native'

export function getHeaders(token) {
    return new Promise((resolve, reject) => {
        let p;
        if (token) {
            p = new Promise((resolve, reject) => {resolve(token)})
        } else {
            p = AsyncStorage.getItem("userToken")
        }

        p.then(token=>{
            if (!token) {
                return reject("Login again")
            }

            var headers = new Headers({
                // "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                // "Accept": "application/json",
            });
            headers.append('x-access-token', token);
            resolve(headers)
        })
        .catch(reject)
    })
}