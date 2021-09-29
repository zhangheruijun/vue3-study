<template>
  <div @click="custCommit">左边{{ count }}</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: '',
  setup() {
    const totStore: any = useStore();
    // console.log(totStore.state.user);
    console.log(totStore);
    const custCommit = () => {
      totStore.commit('user/increment', '左边改变user');
    };
    return {
      custCommit,
      // 在 computed 函数中访问 state
      count: computed(() => totStore.state.user),
    };
  },
});
</script>
<style lang="scss" scoped></style>
