// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vuex
import store from '@/store'

import tableComponent from '@/components/Table'

// import cloneDeep from 'lodash/cloneDeep'
Vue.use(ElementUI)
Vue.component('table-component', tableComponent)
Vue.config.productionTip = false

// 保存整站vuex本地储存初始状态
// window.SITE_CONFIG['storeState'] = cloneDeep(store.state)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
