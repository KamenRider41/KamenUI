<!--
 * @Author: 41
 * @Date: 2022-05-03 09:37:22
 * @LastEditors: 41
 * @LastEditTime: 2022-05-03 11:00:31
 * @Description: 
-->
- 1.`src`改为`examples`后，因为默认在`src/main.js`的更页面的入口，所以更新报错，无法运行
  - 所以，我们需要改变一下vue配置，告诉项目，我们的入口`vue.config.js`文件里
```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
})
```

- 2.scss-loader not Found
  - `npm i sass-loader -D`安装loader即可
  - `npm i sass -D`

- 3.直接use会报错，要用component来注册组件

  