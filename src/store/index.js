import Vue from 'vue'
import Vuex from 'vuex'
import json from '../create-doc.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    data:{
    },
    json
  },
  mutations: {
    updateSelectiveData(state, payload) {
      state.data[payload.name] = payload.data;
    },
    addSelectiveData(state, {name, data}) {

      state.data[name] = [...state.data[name].data, data];
    },
    initialData(state, payload) {
      state.data = payload;
    },
  },
  getters: {
    getDataFrom:(state) =>(name) =>{
      return state.data[name].data;
    },
    json(state){
      return state.json
    }
  },

})
