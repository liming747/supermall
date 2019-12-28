import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import  './components/element-#111212/index.css'
//产品提示信息👇
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,

  // render:function(h){
  //   return h(app)
  // }
  render: h => h(App)
}).$mount('#app')
// axios.defaults.baseURL = 'http://zcsc.bjlitian.com:8716';
// axios.defaults.timeout = 5000;
import {request} from './network/request'
request({
  url: '/system/orderConfirm',
  method: 'post',
  params: {
    is_true: 1,
    menu: 2
  },
}).then(res =>{
  console.log(res)
})
axios.all([
  request({
    url:'/system/orderConfirm',
    method:'post',
    params:{
      is_true: 1,
    menu: 2
    }
  }),
  request({
    url:'/system/orderExpire',
    method:'post',
    params:{
      status:1,
      type:2,
      expire:12
    }
  })
]).then(res => {
  console.log(res)
})