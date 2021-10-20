import Vue from 'vue';
import App from './App.vue';
import theme from './assets/css/style.scss';

Vue.use(theme);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
