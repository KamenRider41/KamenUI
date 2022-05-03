/*
 * @Author: 41
 * @Date: 2022-05-02 20:27:48
 * @LastEditors: 41
 * @LastEditTime: 2022-05-03 15:42:12
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import '../components/css/demo.scss'
import '../components/css/card.scss'
import Demo from '../components/lib/demo/index'
import Card from '../components/lib/card/index'
let Vue = createApp(App)
Vue.use(Demo)
Vue.use(Card)
Vue.mount('#app')
