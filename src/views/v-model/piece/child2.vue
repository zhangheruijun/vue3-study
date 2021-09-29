<template>
  <input type="text" v-model="datas.sex" />
  <!-- $attrs:继续往下传递 -->
  <child2c v-bind="$attrs" />
</template>

<script lang="ts">
import {
  defineComponent,
  ref, //基础类型
  reactive, //引用类型
  toRefs,
} from 'vue';
import Child2c from './child2-0.vue';

export default defineComponent({
  components: { Child2c },
  props: {
    cai: {
      type: Object,
      default: () => ({}),
    },
    //datas属性没写，就会在attrs中
  },
  setup(props, { attrs, slots, emit }) {
    console.log(attrs, 5);
    const show = () => {
      console.log('父元素触发子元素的方法');
    };
    return { ...attrs, show };
  },
});
</script>
<style lang="scss" scoped></style>
