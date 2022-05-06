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
export function addUser(id, newUser) {
    let data = {
        username: newUser.username,
        password: newUser.password,
        id
    }
    return request({
        method: 'post',
        url: "/user?id=" + id,
        data
    })
}
export function delUser(id) {
    return request({
        method: "delete",
        url: "/user/" + id
    })
}

export function changeUser(id,canshu) {
    console.log(canshu);
    let data = {
        username: canshu.username,
        password: canshu.password,
        token: canshu.token
    }
    return request({
        method: "put",
        url: "/user/" + id,
        data
    })
}

export function Login(name) {
  
    return request({
        method: "get",
        url: "/user?username=" + name
    })
}