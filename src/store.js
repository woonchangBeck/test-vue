// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0,
    auther: 'Wonchang Beck',
    dataForAuther: [
      {
        'age': 37,
        'title': 'Sr.Front end Engineer',
        'employer': 'Nexon Global'
      }
    ]
  }
})
