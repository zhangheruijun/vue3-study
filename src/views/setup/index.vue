<template>
  <div>
    <span>这是emit: 子传父</span>
    <emit @parent="custParent" />
  </div>
  <div>
    <span @click="visibled = true">这是emits：点击打开子元素</span>
    <Emits :visibled="visibled" @close-parent="visibled = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Emit from './piece/emit.vue';
import Emits from './piece/emits.vue';
export default defineComponent({
  name: '',
  components: { Emit, Emits },
  setup() {
    // ------------------------emit---------------------------------
    const custParent = () => {
      console.log('子传父组件过来了');
    };

    // ------------------------emits---------------------------------
    const visibled = ref(false);
    return { custParent, visibled };
  },
});
</script>
<style lang="scss" scoped></style>
