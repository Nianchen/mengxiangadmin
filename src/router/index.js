import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: "/login",
        component: () => import('../views/Login.vue')
    },
    {
        path: "/home",
        component: () => import("../views/home.vue"),
        children: [{
            path: '/home/Yibiao',
            component: () => import('../views/YiBiao.vue')
        },
        {
            path: "/home/User",
            component: () => import("../views/User.vue")
        },
        {
            path: "/home/Aricle",
            component: () => import("../views/Aricle.vue")
        },
        {
            path: "/home/Notice",
            component: () => import("../views/Notice.vue")
        }]
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next)=>{
    if (to.meta.title) {
      document.title = `${to.meta.title}`;
    }
    next()
  })
export default router