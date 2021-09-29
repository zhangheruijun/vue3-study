<template>
  <div>
    <brother1 />
  </div>
  <div style="padding-top: 20px">
    <brother2 />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import brother1 from './piece/brother1.vue';
import brother2 from './piece/brother2.vue';
export default defineComponent({
  name: 'bus',
  components: { brother1, brother2 },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
