// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Progress,Steps,Pagination } from 'element-ui'
import  "./public/less/normalize.less" //引用公共样式
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Progress);
Vue.use(Steps);
Vue.use(Pagination);
/* eslint-disable no-new */
import store from './store/store'

import axios from 'axios' //引入axios
Vue.prototype.$axios = axios;
// axios.defaults.baseURL = 'http://www.wwtliu.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
