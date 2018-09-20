import Vue from 'vue'
import Router from 'vue-router'

import Earth from './views/Earth.vue'
import Sun from './views/Sun.vue'
import Mercury from './views/Mercury.vue'
import Venus from './views/Venus.vue'
import Mars from './views/Mars.vue'
import Jupiter from './views/Jupiter.vue'
import Saturn from './views/Saturn.vue'
import Uranus from './views/Uranus.vue'
import Neptune from './views/Neptune.vue'
import Pluto from './views/Pluto.vue'
import Galaxies from './views/Galaxies.vue'
import Original from './views/Original.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'galaxies'}
    },
    {
      path: '*',
      redirect: {name: 'galaxies'}
    },
    {
      path: '/original',
      name: 'original',
      component: Original
    },
    {
      path: '/original/:id',
      name: 'original',
      component: Original
    },
    {
      path: '/galaxies',
      name: 'galaxies',
      component: Galaxies
    },
    {
      path: '/sun',
      name: 'sun',
      component: Sun
    },
    {
      path: '/earth',
      name: 'earth',
      component: Earth
    },
    {
      path: '/mercury',
      name: 'mercury',
      component: Mercury
    },
    {
      path: '/venus',
      name: 'venus',
      component: Venus
    },
    {
      path: '/mars',
      name: 'mars',
      component: Mars
    },
    {
      path: '/jupiter',
      name: 'jupiter',
      component: Jupiter
    },
    {
      path: '/saturn',
      name: 'saturn',
      component: Saturn
    },
    {
      path: '/uranus',
      name: 'uranus',
      component: Uranus
    },
    {
      path: '/neptune',
      name: 'neptune',
      component: Neptune
    },
    {
      path: '/pluto',
      name: 'pluto',
      component: Pluto
    }
  ]
})
