<template>
  <div style="padding: 20px">
    -----------------------------------------markRaw阻止响应追踪---------------------------------------------
  </div>
  <div @click="onFun">{{ list.name }}</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, markRaw, toRefs } from 'vue';

export default defineComponent({
  name: 'markRaw',
  setup() {
    // markRaw：标记一个对象，使其永远不会转换为代理。返回对象本身,不会变成响应式数据
    const obj = { name: '张三' };
    const markRawData = markRaw(obj);
    const list = reactive(markRawData); //此时list不能代理成proxy对象
    const onFun = () => {
      list.name = '撒打算';
      console.log(markRawData);
      console.log(list);
      console.log(obj);
    };
    return { list, onFun };
  },
});
</script>
<style lang="scss" scoped></style>
