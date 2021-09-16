<template>
  <teleport to="body">
    <div class="child">我是teleport</div>
  </teleport>
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
.child {
  position: absolute;
  left: 20px;
  bottom: 60px;
}
</style>
