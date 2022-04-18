import { request } from "./request";

export function getWen() {
    return request({
        url: "/wenzhang"
    })
}

export function getUser() {
    return request({
        url: "/user"
    })
}
export function addUser(id,data){
    return request({
        method:'post',
        url:"/user?id="+id,
        data
    })
}
export function delUser(id){
    return request({
        method:"delete",
        url:"/user/"+id
    })
}
export function changeUser(id, canshu) {
    let data = {
        username: canshu.username,
        password: canshu.password,
        token:canshu.token
    }
    console.log(data);
    return request({
        method: "put",
        url: "/user/" + id,
        data
    })
}