<!--
 * @Author: 41
 * @Date: 2022-05-02 20:27:48
 * @LastEditors: 41
 * @LastEditTime: 2022-05-04 10:29:45
 * @Description: 
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Demo />
  <m-card imgSrc="touxiang2.jpg" summary="间谍过家家！" :width="170" />
  <br>
  <m-card imgSrc="touxiang.png" summary="国王排名" :width="170">
    <template v-slot:footer>
      <div class="footer">
        <div class="level">100人追番</div>
        <div class="price">烂尾番</div>
      </div>
    </template>
  </m-card>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
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

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}

.price {
  color: #F01414;
}
</style>
