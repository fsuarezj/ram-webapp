// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

var locales = {
  en: {
    common: {
      ramName: 'Rapid Assessment for Markets'
    }
  },
  es: {
    common: {
      ramName: 'Evaluación Rápida de Mercados'
    }
  }
}

Vue.use(VueI18n)

Vue.config.lang = 'es'

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
