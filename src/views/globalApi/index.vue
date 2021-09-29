<template>
  <!-- <div :class="$style['global-api']">全局api</div> -->
  <div class="global-api">全局api</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
  name: '',
  setup() {
    const { proxy }: any = getCurrentInstance();
    console.log(proxy.$custType);
    return {};
  },
});
</script>
<style lang="scss" scoped>
.global-api {
  color: blue;
}
</style>
