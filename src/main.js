import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import JsonEditor from 'vue-json-edit'
import router from './router'
import Vuex from 'vuex';
import { store } from './store'
import VJsoneditor from 'v-jsoneditor'

Vue.use(VJsoneditor)
Vue.use(Vuex);
Vue.use(JsonEditor)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
