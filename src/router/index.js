import Vue from 'vue'
import Router from 'vue-router'
import StakeDapp from '@/components/stake-dapp'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'stake-dapp',
    component: StakeDapp
  }]
})
