<template>
  <input type="text" v-model="datas.sex" />
</template>

<script lang="ts">
import {
  defineComponent,
  ref, //基础类型
  reactive, //引用类型
  toRefs,
} from 'vue';

export default defineComponent({
  props: {
    cai: {
      type: Object,
      default: () => ({}),
    },
    //datas属性没写，就会在attrs中
  },
  setup(props, { attrs, slots, emit }) {
    const show = () => {
      console.log('父元素触发子元素的方法');
    };
    return { ...attrs, show };
  },
});
</script>
<style lang="scss" scoped></style>
