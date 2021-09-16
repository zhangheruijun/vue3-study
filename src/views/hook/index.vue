<template>
  <div>-----用hook来获取鼠标点击屏幕------</div>
  <div>x:{{ x }}</div>
  <div>y:{{ y }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useMousePosition from '@/hooks/useMousePosition';
export default defineComponent({
  name: 'hook',
  setup() {
    const { x, y } = useMousePosition();
    return { x, y };
  },
});
</script>
<style lang="scss" scoped></style>
