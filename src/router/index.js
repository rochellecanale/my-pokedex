import Vue from 'vue'
import VueRouter from 'vue-router'
import Pokedex from '../views/Pokedex.vue'
import ViewPokemon from '../views/ViewPokemon'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pokedex',
    component: Pokedex
  },
  {
    path: '/view-pokemon/:id',
    name: 'ViewPokemon',
    component: ViewPokemon
  }
]

const router = new VueRouter({
  routes
})

export default router
