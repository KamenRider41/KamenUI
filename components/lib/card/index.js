/*
 * @Author: 41
 * @Date: 2022-05-03 15:12:50
 * @LastEditors: 41
 * @LastEditTime: 2022-05-03 15:35:12
 * @Description: 
 */
import Card from './src/main.vue'

Card.install = function (Vue) {
  Vue.component(Card.name, Card)
}

export default Card