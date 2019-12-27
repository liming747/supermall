import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const modulesA = {
  state:{
    name:"yizeruier"
  },
  getters:{
    // rootstate
  },
  actions:{
   
  }
}
export default new Vuex.Store({
  state: {
    abc: 1000,
    students: [
      { id: 1, name: 'liming', age: 20 },
      { id: 1, name: 'liming1', age: 30 },
      { id: 1, name: 'liming2', age: 10 },
      { id: 1, name: 'liming3', age: 50 },
      { id: 1, name: 'limin4', age: 120 }
    ],
    info: {
      name: 'liming',
      age: 20,
      height: 100
    }
  },
  mutations: {
    add(state) {
      state.abc++
    },
    der(state) {
      state.abc--
    },
    addcout(state, count) {
      state.abc += count
    },
    tianjiaxuesheng(state, stu) {
      state.students.push(stu)
    },
    gaibian(state) {
      state.info.name = 'hahaha'
    },
  },
  getters: {
    dayu20(state) {
      return state.students.filter(s => s.age > 20)
    },
    dayu20length(state, getters) {
      return getters.dayu20.length
    },
    // dayu20tu(state){
    //   return function(age){
    //       return state.students.filter(s => s.age > age)
    //   }
    // },
    dayu20tu(state) {
      return age => {
        return state.students.filter(s => s.age > age)
      }
    },

  },
  actions: {
    // context  == store 
    agaibian: function (context, paylode) {
      console.log(context)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('gaibian')
          console.log(paylode)
          resolve('11111')
        }, 1000);
      })
    }

  },
  modules: {
    a:modulesA
  }
})
