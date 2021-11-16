<template>
  <div @click="parentEmit">我是子组件:{{ listMap }}</div>
  <a-button type="primary">Primary Button</a-button>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, watchEffect } from 'vue';
defineProps({
  listMap: {
    type: String, //(string也可以是其他你自定义的接口)
    default: '属性',
  },
});
onMounted(() => {
  console.log('挂在后');
});
const injectData = inject('provide_ceshi');
const comName = ref('我是京津');
const def = defineEmits(['parentFun']);
const parentEmit = () => {
  def('parentFun', '子传父');
};

watchEffect(() => {
  console.log(injectData?.name);
});
defineExpose({ comName });
</script>
<style lang="scss" scoped></style>
