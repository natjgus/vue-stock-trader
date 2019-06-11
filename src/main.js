import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store/store'

Vue.config.productionTip = true;

axios.defaults.baseURL = 'https://vuejs-stock-trader-88aaa.firebaseio.com';

Vue.filter( 'currency', (value) => {
  return '$' + value.toLocaleString();
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
