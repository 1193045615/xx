import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Layout from '../views/layout/index.vue'

// 建立vue与路由的关系
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
	redirect:"home",
	children:[
		{path:"/home",
		name:"Home",
		component:Home}
	]
  },
  {
     path: '/login',
     name: 'Login',
     component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
   },
   {
      path: '*',
      name: 'Error',
      component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
    }
]

const router = new VueRouter({
  routes
})

// 这里使用export default ruoter  导出当前文件里面的router对象
// 在另一个文件里面就可以使用import 随便一个名字 from 上面的文件（文件)
export default router
