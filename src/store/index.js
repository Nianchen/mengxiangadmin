
import { defineStore } from "pinia"
export const userTextStore = defineStore({
    id:"user",
    state(){
        return {
            username:"",
            password:"",
            status:false,
        }
    },
    getters:{
        GetUser(){
            return this.username
        }
    },
    setter:{
        SetStatus(test){
            this.status=test
        }
    }
})