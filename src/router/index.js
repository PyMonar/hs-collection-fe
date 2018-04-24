import Vue from 'vue'
import Router from 'vue-router'

import Collection from '@/components/Collection'
import Achievement from '@/components/Achievement'
import Summary from '@/components/Summary'
import Deck from '@/components/Deck'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/achievement',
      name: 'Achievement',
      component: Achievement
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    },
    {
      path: '/deck',
      name: 'Deck',
      component: Deck
    }
  ]
})
