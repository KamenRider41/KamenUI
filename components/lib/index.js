/*
 * @Author: 41
 * @Date: 2022-05-03 20:21:26
 * @LastEditors: 41
 * @LastEditTime: 2022-05-10 19:20:13
 * @Description: 
 */
import Demo from './demo'
import Card from './card'
import Button from './button'

const components = {
  Demo,
  Card,
  Button
}

const install = function (Vue) {
  if (install.installed) return  // 避免重复安装
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

const API = {
  install,
  ...components
}

export default API