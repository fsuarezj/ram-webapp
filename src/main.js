// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueI18n)
Vue.config.productionTip = false

Vue.use(BootstrapVue)

const i18n = new VueI18n({
  locale: 'es',
  messages: {
    en: {
      ramName: 'Rapid Assessment for Markets'
    },
    es: {
      ramName: 'Evaluación Rápida de Mercados'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App }
})
