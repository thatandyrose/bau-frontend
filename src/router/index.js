import Vue from 'vue'
import Router from 'vue-router'
import RotasIndex from '@/components/rotas/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RotasIndex',
      component: RotasIndex
    }
  ]
})
