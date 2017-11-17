// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { store } from './store'
import VueI18n from 'vue-i18n'
import enUs from './locale/en-us.json'
import koKr from './locale/ko-kr.json'

Vue.use(VueI18n)
Vue.prototype.$http = axios
Vue.config.productionTip = true

const locale = 'en'
const i18n = new VueI18n({
  locale,
  messages: {
    'en': enUs,
    'ko': koKr
  }
})

Vue.mixin({
  props: {
    locale: {
      type: String
    }
  },
  created () {
    if (this.locale) {
      this.$i18n.locale = this.locale
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<App/>',
  components: { App }
})
