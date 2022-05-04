/*
 * @Author: 41
 * @Date: 2022-05-03 19:38:49
 * @LastEditors: 41
 * @LastEditTime: 2022-05-04 16:27:18
 * @Description: 
 */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const glob = require('glob')
const list = {}
async function makeList (dirPash, list) {
  const files = glob.sync(`${dirPash}/**/index.js`) //获取文件下的所有文件路径
  // console.log('files:', files);
  for (let file of files) {
    const component = file.split(/[/.]/)[2]  // 取出组件名
    // console.log(component);
    list[component] = `./${file}`            // 组件名-组件路径的赋值
  }
}
makeList('components/lib', list)
// console.log(list);
module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js',  // 使用umd模块 card.umd.js
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  }
}