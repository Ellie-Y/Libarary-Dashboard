import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Find the index.js file by default
import api from './api'
import alert from './tools/alert/index.js'
// Element UI
import { Pagination, RadioGroup, RadioButton, Icon, Dropdown, DropdownItem, DropdownMenu } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Echarts
import echarts from 'echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

Vue.config.productionTip = false
// Defind as VUE prototype
Vue.prototype.$api = api
Vue.prototype.$alert = alert
Vue.prototype.$echarts = echarts 

// Use element-ui 
Vue.use(Pagination)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Icon)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')