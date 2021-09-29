<template>
  <div>我是store父元素</div>
  <div class="store-wrap">
    <left class="left" />
    <right />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Left from './piece/left.vue';
import Right from './piece/right.vue';
export default defineComponent({
  name: '',
  components: { Left, Right },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.store-wrap {
  display: flex;
  justify-content: center;
  .left {
    padding-right: 30px;
  }
}
</style>
