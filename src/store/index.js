import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a: 123
  },
  getters: {
    getA: state => state.a
  },
  actions: {

  },
  mutations: {

  }
})
