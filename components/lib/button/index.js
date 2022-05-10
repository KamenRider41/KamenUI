/*
 * @Author: 41
 * @Date: 2022-05-10 14:36:09
 * @LastEditors: 41
 * @LastEditTime: 2022-05-10 18:21:50
 * @Description: 
 */
import Button from './src/main.vue'

Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}

export default Button