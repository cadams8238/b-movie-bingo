import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Card from './components/bingoCard';
import LandingPage from './components/landingPage';


Vue.use(VueRouter);

const router = new VueRouter({
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
