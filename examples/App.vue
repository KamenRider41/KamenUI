<!--
 * @Author: 41
 * @Date: 2022-05-02 20:27:48
 * @LastEditors: 41
 * @LastEditTime: 2022-05-10 19:56:04
 * @Description: 
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <m-button type="success">456</m-button>
  <Demo />
  <m-card imgSrc="touxiang.png" summary="国王排名" :width="170" level="烂尾番" price="100人追番"></m-card>

  <br>
  <m-card imgSrc="touxiang2.jpg" summary="间谍过家家！" :width="170" />
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
