/*
 * @Author: 41
 * @Date: 2022-05-03 20:21:26
 * @LastEditors: 41
 * @LastEditTime: 2022-05-03 20:24:05
 * @Description: 
 */
import Demo from './demo'
import Card from './card'


const components = {
  Demo,
  Card
}

const install = function (Vue) {
  if (install.installed) return  // 避免重复安装
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

const API = {
  install
}

export default API