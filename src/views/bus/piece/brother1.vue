<template>
  <div @click="custEmit">我是兄弟1</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import $busMitt from '@/unils/bus';
export default defineComponent({
  name: '',
  setup() {
    const custEmit = () => {
      $busMitt.emit('brotherFun', { name: '1传入2' });
    };
    return { custEmit };
  },
});
</script>
<style lang="scss" scoped></style>
