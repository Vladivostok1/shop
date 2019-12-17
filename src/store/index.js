import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{

    }
  },
  //不能处理异步操作
  mutations: {
    changeLogin(state,status){
      state.userInfo = status;
    }
  },
  //可以做异步操作,但是不能直接改变state中的值
  actions: {
    loginAction({commit},user){
      commit('changeLogin',user);
    }
  },
  modules: {
  }
})
