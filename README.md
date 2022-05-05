# Kamen-UI
![](https://img.shields.io/badge/npm-0.1.1-orange)

[文档地址](https://kamenrider41.github.io/KamenUI-docs/)

[仓库地址](https://github.com/KamenRider41/KamenUI)

仓库说明:
- 看开发过程记录文档
- 看bug回忆录
***
### 快速开始
#### 1.安装组件库
```bash
npm i kamen-ui
```
#### 2.引用组件库
> 在`main.js`中引用组件库
```js
// 全部引入
import { createApp } from 'vue'
import 'kamen-ui/dist/css/index.css'
import KUI from 'kamen-ui'
let Vue = createApp(App)
Vue.use(KUI)

// 按需引用
import { createApp } from 'vue'
import 'kamen-ui/dist/css/demo.css'
import {Demo} from 'kamen-ui'
let Vue = createApp(App)
Vue.use(Demo)
```

## KamenUI目标
从零完成自己的Vue组件库:blush::blush::blush:

和你一起还原代码现场！:kissing_heart:

让我们康康如何编写组件库+发布npm+写组件文档吧！:heart_eyes:

- 学习组件库思想老少皆宜，我们点到为止，康康整个开发过程，做一个有灵魂的people
- 为以后发表震惊世界的插件做准备，因为你将从开发文档看到一个著名程序员的早期成长经历
- 也算是巩固Vue吧，写完你可以说你学过Vue了，哈哈哈:wink::wink::wink:

## 为什么要写Vue组件库
就是避免重复造轮子，有朝一日也让后浪康康我的代码！
在前端历史上留下一些拙劣的痕迹！！！:wink::wink::wink:

然后有一点工程化的感觉吧！
