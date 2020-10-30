import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用来存储当前登录信息(token等数据)
    user: null
  },
  mutations: {
    setUser(state, data) {
      state.user = data
    }
  },
  actions: {
  },
  modules: {
  }
})
