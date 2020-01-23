import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import modules from './modules'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'mkt-manager',
  storage: window.localStorage,
  supportCircular: true
})

export const store = new Vuex.Store({
  modules,
  plugins: [vuexLocalStorage.plugin]
})

