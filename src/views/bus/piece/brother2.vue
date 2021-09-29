<template>
  <div>我是兄弟2</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  toRefs,
} from 'vue';
import $busMitt from '@/unils/bus';

export default defineComponent({
  name: '',
  setup() {
    const testFuns = () => {
      $busMitt.on('brotherFun', (data) => {
        console.log(data);
      });
    };
    onMounted(() => {
      testFuns();
    });
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
