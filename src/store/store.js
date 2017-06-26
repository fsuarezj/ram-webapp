import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    locale: 'es'
  },
  getters: {
    locale: state => {
      return state.locale
    }
  },
  mutations: {
    setLocale: (state, newLocale) => {
      state.locale = newLocale
    }
  },
  actions: {
    setLocale: ({commit}, newLocale) => {
      commit('setLocale', newLocale)
    }
  }
})
