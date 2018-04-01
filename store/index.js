import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    state: {
      albums: []
    },
    mutations: {
        add (state, payload) {
            state.albums = payload
        }
    }
  })
}

export default createStore
