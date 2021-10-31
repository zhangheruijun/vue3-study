<template>
  <div v-if="visibled" @click="close">子元素：emits 类似.sync 这种方式</div>
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
  name: 'emits',
  emits: {
    //可以拦截emit传参函数, 尽量自定义事件不要与原生事件重名
    'close-parent': (payload: any) => {
      if (payload) {
        return true;
      } else {
        console.warn(`Invalid submit event payload!`);
        return false;
      }
    },
  },
  props: {
    visibled: {
      default: false,
      type: Boolean,
    },
  },
  setup(_, { emit }) {
    const close = () => {
      emit('close-parent', undefined);
    };
    return { close };
  },
});
</script>
<style lang="scss" scoped></style>
