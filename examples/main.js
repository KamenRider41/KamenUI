/*
 * @Author: 41
 * @Date: 2022-05-02 20:27:48
 * @LastEditors: 41
 * @LastEditTime: 2022-05-04 16:51:05
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import Demo from '../components/lib/demo/index'
// import Card from '../components/lib/card/index'
import 'kamen-ui-test/dist/css/index.css'
import KUI from 'kamen-ui-test'
let Vue = createApp(App)
Vue.use(KUI)
// Vue.use(Demo)
// Vue.use(Card)
Vue.mount('#app')
