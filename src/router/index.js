import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        redirect:'Yibiao'
    },
    {
        path:'/Yibiao',
        component:()=> import('../views/YiBiao.vue')
    },
    {
        path:"/User",
        component:()=>import("../views/User.vue")
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router