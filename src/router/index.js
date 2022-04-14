import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        redirect:'Yibiao'
    },
  
    {
        path:'/home/Yibiao',
        component:()=> import('../views/YiBiao.vue')
    },
    {
        path:"/home/User",
        component:()=>import("../views/User.vue")
    },
    {
        path:"/home/Aricle",
        component:()=>import("../views/Aricle.vue")
    },
    {
        path:"/home/Notice",
        component:()=>import("../views/Notice.vue")
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router