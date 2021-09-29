<template>
  <div>child2-0</div>
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
  setup(_, { attrs }) {
    console.log(attrs);
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
