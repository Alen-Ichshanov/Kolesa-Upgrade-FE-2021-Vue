import Vue from 'vue';
import App from './App.vue';
import theme from './assets/css/style.scss';
import router from './router';
import store from './store';

Vue.use(theme);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
