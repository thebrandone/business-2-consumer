import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
