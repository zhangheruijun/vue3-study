<template>
  <div class="exs">404未找到该页面</div>
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

export default defineComponent({
  name: '',
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.exs {
  margin: 40px;
  height: 400px;
  border: 1px solid red;
}
</style>
