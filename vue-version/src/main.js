// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import request from './utils/request'
import VuexSaga, { call, put } from 'vuex-saga'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: null,
    error: null,
    title: null,
    season: null,
    episodes: null
  },
  mutations: {
    loadEpisodes (state, payload) {
      state.loading = true
      state.error = null
    },
    loadEpisodesError (state, payload) {
      state.loading = null
      state.error = payload
      state.episodes = null
    },
    loadEpisodesSuccess (state, payload) {
      state.loading = null
      state.error = null
      state.episodes = payload
    },
    setTitle (state, payload) {
      state.title = payload
    },
    setSeason (state, payload) {
      state.season = payload
    }
  },
  actions: {
    *loadEpisodes (store, payload) {
      yield put('loadEpisodes')
      try {
        const res = yield call(request, `/api/episods${payload ? `?season=${payload}` : ''}`)
        yield put('loadEpisodesSuccess', res)
      } catch (e) {
        yield put('loadEpisodesSuccess', [])
      }
    },
    *loadEpisodesError (store, payload) {
      yield put('loadEpisodesError')
    },
    *loadEpisodesSuccess (store, payload) {
      yield put('loadEpisodesSuccess')
    },
    *setTitle (store, payload) {
      yield put('setTitle', payload)
    },
    *setSeason (store, payload) {
      yield put('setSeason', payload)
    }
  }
})

Vue.use(VuexSaga, { store: store })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
