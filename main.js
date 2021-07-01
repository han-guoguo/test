import Vue from 'vue'
import App from './App'
import { req } from './utils/server.js'
import config from './config.js'

Vue.config.productionTip = false
Vue.prototype.$req = req
Vue.prototype.$config = config

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()