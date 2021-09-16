<template>
  <div class="parent">
    <span>我是父组件</span>
    <Child />
  </div>
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
import Child from './piece/child.vue';
export default defineComponent({
  name: '',
  components: { Child },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.parent {
  position: relative;
  height: 300px;
}
</style>
