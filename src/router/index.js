// 配置路由信息
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
const Home = () => import('../views/home/home')
const Cart = () => import('../views/cart/cart')
const Fenlei = () => import('../views/fenlei/fenlei')
const Profile = () => import('../views/profile/geren.vue')
// const About = () => import('../components/About')
// const User = () => import('../components/User')
// const Homenews = () => import('../components/Homenews')
// const Homemessage = () => import('../components/Homemessage')
// 通过vue 使用路由插件
Vue.use(VueRouter)
// 创建routes 对象
const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    meta:{
      title:'主页'
    },
    component: Home,
  },
  {
    path: '/cart',
    meta:{
      title:'购物车'
    },
    component: Cart,
  },
  {
    path: '/profile',
    meta:{
      title:'个人'
    },
    component: Profile,
  },
  {
    path: '/fenlei',
    meta:{
      title:'分类'
    },
    component: Fenlei
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
// 实例
const router = new VueRouter({
  routes,
  // 模式切换
  mode:'history',
})

router.beforeEach(( to , from , next ) =>{

  // console.log(to)
  document.title = to.matched[0].meta.title
  next()
})
router.afterEach(( to , from , next ) => {

})
// 抛出
export default router
