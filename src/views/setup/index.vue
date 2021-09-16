<template>
  <div>
    <emit @parent="custParent" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Emit from './piece/emit.vue';

export default defineComponent({
  name: '',
  components: { Emit },
  setup() {
    const custParent = () => {
      console.log('子传父组件过来了');
    };
    return { custParent };
  },
});
</script>
<style lang="scss" scoped></style>
