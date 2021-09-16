<template>
  <suspense>
    <template #default>
      <async-com />
    </template>
    <template #fallback>
      <span>loading</span>
    </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'suspense',
  components: {
    AsyncCom: defineAsyncComponent(() => import('./piece/asyncCom.vue')),
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
