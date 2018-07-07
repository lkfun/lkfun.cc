import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import guoguo from '@/components/guoguo'
import transform from '@/components/transform'
import mc from '@/components/mc'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/guoguo',
      name: 'guoguo',
      component: guoguo
    },
    {
      path: '/mc',
      name: 'mc',
      component: mc
    },
    {
      path: '/transform',
      name: 'transform',
      component: transform
    }
  ]
})
