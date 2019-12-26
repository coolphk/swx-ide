import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    files: []
  },
  mutations: {
    ADD_FILE(state, file) {
      state.files
    }
  },
  actions: {},
  modules: {}
})
