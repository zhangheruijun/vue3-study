<template>
  <div @click="parentEmit">我是子组件:{{listMap}}</div>
</template>

<script setup lang="ts">
import { ref, reactive, toRef } from "vue";
const props = defineProps({
  listMap: {
    type: String, //(string也可以是其他你自定义的接口)
    default: '属性',
  },
});
const comName = ref('我是京津');
const def = defineEmits(['parentFun'])
const parentEmit = () => {
  def('parentFun','子传父')
}
defineExpose({comName})  
</script>
<style lang="scss" scoped></style>
