import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import Es6Promise from 'es6-promise'
import VueLazyLoad from 'vue-lazyload'

Es6Promise.polyfill()
Vue.config.productionTip = false

fastclick.attach(document.body)

/* eslint-disable no-new */

Vue.use(VueLazyLoad,{
	loading: require('common/image/default.png')
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
