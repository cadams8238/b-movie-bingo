import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Card from './components/bingoCard';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/bingo', component: Card }
  ]
})


new Vue({
  el: '#app',
  render: h => h(App)
})
