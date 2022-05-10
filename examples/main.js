/*
 * @Author: 41
 * @Date: 2022-05-02 20:27:48
 * @LastEditors: 41
 * @LastEditTime: 2022-05-10 20:18:21
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'

import KUI from 'kamen-ui-test'
import 'kamen-ui-test/dist/css/index.css'
let Vue = createApp(App)
Vue.use(KUI)


// import KUI from '../components/lib/index'
// import '../components/css/index.scss'
// let Vue = createApp(App)
// Vue.use(KUI)

Vue.mount('#app')
