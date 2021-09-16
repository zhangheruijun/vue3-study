<template>
  <div @click="fun">子元素点击：{{ msg }}</div>
  <!-- <div @click="$emit('update:msg', 25)">子元素点击{{ msg }}</div> -->
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
    msg: {
      type: Number,
      default: 4,
    },
    pro: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { attrs, slots, emit }) {
    // const { msg, pro } = toRefs(props);
    // console.log(msg.value, pro.value.h); //steup中查看props得用.value

    // -----------------------------------子组件.sync用法--------------------------------------
    const fun = () => {
      emit('update:msg', 25);
    };
    return { fun };
  },
});
</script>
<style lang="scss" scoped></style>
