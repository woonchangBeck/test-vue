import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0,
//    title: this.$t('message.hello'),
    auther: 'Wonchang Beck',
    dataForAuther: [
      {
        'age': 37,
        'title': 'Sr.Front end Engineer',
        'employer': 'Nexon Global'
      }
    ]
  },
  getters: {
    getCounter: function (state) {
      return state.counter
    }
  },
  mutations: {
    addCounter: function (state, payload) {
      state.counter = payload.value
    }
  },
  actions: {
    addCounter: function (context) {
      return context.commit('addCounter')
    }
  }
})
