<template>
  <div @click="fun">子组件---->父组件</div>
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
  setup(_, { emit }) {
    const fun = () => {
      emit('parent');
    };
    return { fun };
  },
});
</script>
<style lang="scss" scoped></style>
