import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created(){
    // Get initital fetch from Jexia
    this.$store.dispatch('init')
  },
  render: h => h(App)
}).$mount('#app')
