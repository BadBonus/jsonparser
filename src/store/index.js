import Vue from 'vue'
import Vuex from 'vuex'
import json from '../create-doc.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    json
  },
  mutations: {
    updateJson(state, payload) {
      state.json = payload;
    }
  },
  getters: {
    json(state) {
      return state.json;
    }
  }
})

