<template>
  <div @click="fun">{{ refCon }}</div>
</template>
<script lang="ts">
import { defineComponent, ref, toRef, toRefs } from 'vue';
export default defineComponent({
  name: 'markRaw',
  setup() {
    /**
     * 1.ref会将每一对象的值变成响应式数据，而且修改响应式不会影响到原始数据
     * 2.toRef会将每一对象的数据变成非响应式的数据，而且修改响应式会影响到原始数据,ui界面也不会更新
     * 3.toRefs是toRef的一个复写
     * 一般运用在js层面
     */
    const obj = { name: 'toRef', age: 18 };
    // const refCon = ref(obj.name);  //属于拷贝数据,不会影响原始数据
    // const refCon = toRef(obj, "name");
    const refCon = toRefs(obj);
    const fun = () => {
      refCon.name.value = 'toRef的改变';
      refCon.age.value = 12;
      console.log(refCon);
      console.log(obj);
    };
    return { refCon, fun };
  },
});
</script>
