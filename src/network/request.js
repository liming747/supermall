import axios from 'axios'

export function request(config) {
    // 1创建axios实例
    const instanse = axios.create({
      baseURL: 'http://zcsc.bjlitian.com:8716',
      timeout: 5000
    })
    // 2axios 拦截
    instanse.interceptors.request.use(config=>{
      console.log(config);

      // 加动画
      return config
    },err =>{
      console.log(err)
    })
    instanse.interceptors.response.use(res =>{
      console.log(res)
      return res
    },err =>{
      console.log(err)
    })
    // 3发送请求
    return instanse(config)    
}



// export function request(config) {

//   return new Promise((resolve, reject) => {
//     // 创建axios实例
//     const instanse = axios.create({
//       baseURL: 'http://zcsc.bjlitian.com:8716',
//       timeout: 5000
//     })

//     instanse(config)
//       .then(res => {
//        resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }
