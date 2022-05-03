/*
 * @Author: 41
 * @Date: 2022-05-03 10:51:43
 * @LastEditors: 41
 * @LastEditTime: 2022-05-03 10:52:51
 * @Description: 
 */
import Demo from './src/main.vue'

Demo.install = function (Vue) {
  Vue.component(Demo.name, Demo)
}

export default Demo