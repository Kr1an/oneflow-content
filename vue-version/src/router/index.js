import Vue from 'vue'
import Router from 'vue-router'
import EpisodesRepository from '../components/EpisodesRepository'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/episodes',
      name: 'Episodes',
      component: EpisodesRepository
    },
    {
      path: '/*',
      redirect: '/episodes'
    }
  ]
})
