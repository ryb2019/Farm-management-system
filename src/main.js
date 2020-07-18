// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import ElementUI from 'element-ui'
import  VueQuillEditor from 'vue-quill-editor'
import router from './router'
import VueCookies from 'vue-cookies'
// import './assets/css/f.css';
// import s from 'https://widget.heweather.net/standard/static/js/he-standard-common.js?v=1.1'
import 'element-ui/lib/theme-chalk/index.css'
// import 'swiper/dist/css/swiper.css'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

// 引用公共js
import utils from './common/utils.js'

// 引用axios，并设置基础URL为后端服务api地址
var axios = require('axios')
axios.defaults.baseURL = "http://127.0.0.1:8080"
axios.defaults.headers.post['Content-Type']='application/json;charset=UTF-8';
//设置全局，每次ajax请求携带cookies
// axios.defaults.withCredentials = true
// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.utils = utils

Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.use(VueCookies)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
})
