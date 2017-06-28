import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentStep: 3
  },
  getters: {
    currentStep: state => {
      return state.currentStep
    }
  },
  mutations: {
    setCurrentStep: (state, currentStep) => {
      state.currentStep = currentStep
    }
  },
  actions: {
    setCurrentStep: ({commit}, currentStep) => {
      commit('setCurrentStep', currentStep)
    }
  }
})
