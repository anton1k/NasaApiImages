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
import Home from './views/Home.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/nasaimages',
      redirect: {name: 'home'}
    },
    {
      path: '/',
      redirect: {name: 'home'}
    },
    {
      path: '/nasaimages/home',
      name: 'home',
      component: Home
    },
    {
      path: '/nasaimages/original',
      name: 'original',
      component: Original
    },
    {
      path: '/nasaimages/galaxies',
      name: 'galaxies',
      component: Galaxies
    },
    {
      path: '/nasaimages/sun',
      name: 'sun',
      component: Sun
    },
    {
      path: '/nasaimages/earth',
      name: 'earth',
      component: Earth
    },
    {
      path: '/nasaimages/mercury',
      name: 'mercury',
      component: Mercury
    },
    {
      path: '/nasaimages/venus',
      name: 'venus',
      component: Venus
    },
    {
      path: '/nasaimages/mars',
      name: 'mars',
      component: Mars
    },
    {
      path: '/nasaimages/jupiter',
      name: 'jupiter',
      component: Jupiter
    },
    {
      path: '/nasaimages/saturn',
      name: 'saturn',
      component: Saturn
    },
    {
      path: '/nasaimages/uranus',
      name: 'uranus',
      component: Uranus
    },
    {
      path: '/nasaimages/neptune',
      name: 'neptune',
      component: Neptune
    },
    {
      path: '/nasaimages/pluto',
      name: 'pluto',
      component: Pluto
    }
  ]
})
