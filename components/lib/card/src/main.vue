<!--
 * @Author: 41
 * @Date: 2022-05-03 15:12:59
 * @LastEditors: 41
 * @LastEditTime: 2022-05-10 18:59:54
 * @Description: 
-->
<template>
  <div class="m-card" :style="width ? { width: width + 'px' } : {}">
    <div class="m-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="m-card-summary">
      {{ summary }}
    </div>
    <div class="footer">
      <div class="level">{{ level }}</div>
      <div class="price">{{ price }}</div>
    </div>
  </div>
</template>


<script>
import { defineComponent } from 'vue'
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'm-card',
  props: {
    width: {   // 卡片宽度
      type: Number,
      default: 0
    },
    imgSrc: {  // 卡片图片资源地址
      type: String,
      default: ''
    },
    imgHeight: {  // 卡片图片的高度
      type: Number,
      default: 0
    },
    summary: {   // 卡片的概要
      type: String,
      default: ''
    },
    level: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    }
  },
  setup () {

  }
})
</script>