import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:"http://localhost:3000",
        timeout:1000
    })

    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        console.log(err);
    })
    instance.interceptors.response.use(config=>{
        return config
    },err=>{
        console.log(err);
    })
    return instance(config)
}