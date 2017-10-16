import Vue from 'vue'
import Offers from './Offers.vue'
import BootstrapVue from 'bootstrap-vue'

new Vue({
  el: '#app',
  render: h => h(Offers)
})

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
