<template>
  <div>右边---{{ count.userName }}</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: '',
  setup() {
    const totStore: any = useStore();
    return {
      count: computed(() => totStore.state.about),
    };
  },
});
</script>
<style lang="scss" scoped></style>
