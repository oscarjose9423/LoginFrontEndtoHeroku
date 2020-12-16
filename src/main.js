import Vue from 'vue'
import App from './App.vue'
import router from './router'

// axios para crear una constante para hacer peticiones

import axios from 'axios'


const base = axios.create({
  baseURL: 'https://fast-escarpment-28519.herokuapp.com'
  // baseURL: 'http://localhost:3000' // <- local
  // baseURL: 'https://glacial-everglades-74306.herokuapp.com' <- del profe
})

Vue.config.productionTip = false

// linea indica o crea una abreviación para la baseURL y no escribirla completa en  
// el codigo más adelante
Vue.prototype.$http= base;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
