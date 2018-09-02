import Vue from 'vue'
import VueScrollTo from 'vue-scrollto';
import VueRouter from 'vue-router';
import App from './App.vue'
import Card from './components/bingoCard';
import LandingPage from './components/landingPage';

Vue.use(VueScrollTo);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: LandingPage },
    { path: '/bingo', component: Card }
  ]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
