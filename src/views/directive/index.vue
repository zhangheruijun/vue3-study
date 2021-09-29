<template>
  <div class="parent">
    <div v-custInst:zhang.j="'add'" class="ceshi">测试自定义指令</div>
  </div>
  <!-- 键盘事件 -->
  <input @keyup.enter.q="keyFun" />
</template>

<script lang="ts">
import { defineComponent, resolveDirective } from 'vue';

export default defineComponent({
  name: '',
  setup() {
    const fun = (value: any) => {
      console.log(value);
    };
    // 按键事件
    const keyFun = () => {
      console.log('键盘事件');
    };
    const custInstDirective = resolveDirective('custInst');
    console.log(custInstDirective);
    return { fun, keyFun };
  },
});
</script>
<style lang="scss" scoped></style>
