<!--
 * @Author: 41
 * @Date: 2022-05-03 09:37:22
 * @LastEditors: 41
 * @LastEditTime: 2022-05-04 11:17:50
 * @Description: 
-->
[toc]
# 1.`src`改为`examples`后，因为默认在`src/main.js`的更页面的入口，所以更新报错，无法运行
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

# 2.scss-loader not Found
  - `npm i sass-loader -D`安装loader即可
  - `npm i sass -D`

# 3.直接use会报错，要用component来注册组件

# 4.configuration.output.path: The provided value "dist" is not an absolute path!未使用绝对路径！

# 5.The following tasks did not complete: sass Did you forget to signal async completion? 

# 6.组件库发布后，card组件无法正常使用

# 7.warning package.json: No license field
`“license”: “ISC”,`package 添加

# 8.vue@3.2.33 和vue-server-renderer版本不匹配
`npm install vue@2.6.14 --save`vue降低版本

# 9.Vuepress乱码，进去改变编码为utf-8