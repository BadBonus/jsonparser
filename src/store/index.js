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
    deleteLastStringfromArray(state, payload) {
      let newArray = [...state.data[payload.name].data];
      newArray.length = newArray.length - 1;
      console.log('newArray');
      console.log(newArray);
      state.data[payload.name].data = newArray;
    },
    addSelectiveData(state, {name, data}) {

      state.data[name].data = [...state.data[name].data, data];
    },
    initialData(state, payload) {
      state.data = payload;
    },
    updateJson(state, payload) {
      state.json = payload;
    }

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
