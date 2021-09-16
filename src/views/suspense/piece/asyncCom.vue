<template>
  <div>我是异步组件{{ tot }}---{{ $custType }}</div>
  <div id="red" v-bind="{ id: 'blue' }">5555</div>
</template>

<script lang="ts">
import { defineComponent, nextTick, getCurrentInstance } from 'vue';
export default defineComponent({
  name: 'asyncCom',
  async setup(_, { emit }) {
    const tot = await listFun();
    function listFun() {
      return Promise.resolve('我是延迟组件');
    }
    return {
      tot,
    };
  },
});
</script>
<style lang="scss" scoped></style>
