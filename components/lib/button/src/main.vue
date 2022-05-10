<!--
 * @Author: 41
 * @Date: 2022-05-10 14:36:19
 * @LastEditors: 41
 * @LastEditTime: 2022-05-10 20:05:47
 * @Description: 
-->
<template>
  <button @click="emitClick" :class="['m-button', `btn-${type}`, btnShadow ? 'btn-shadow' : '']">
    {{ text }}
  </button>

</template>

<script>
const typeMap = [
  'default',
  'primary',
  'success',
  'danger',
  'warning'
]

export default {
  name: 'm-button',
  emits: ['click'],
  props: {
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return typeMap.includes(value)
      }
    },
    btnShadow: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: '按钮'
    }
  },
  methods: {
    emitClick (ev) {
      this.$emit('click', ev)
    },
  },

}
</script>