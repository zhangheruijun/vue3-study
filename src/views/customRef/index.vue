<template>
  <div>
    customRef创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制
  </div>
  <input type="text" v-model="datas" />
  <p>{{ datas }}</p>
</template>

<script lang="ts">
import { defineComponent, customRef } from 'vue';
//实现函数防抖的自定义ref;
function custFun<T>(value: T, delay: number) {
  let timeout: number;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue: T) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
export default defineComponent({
  name: '',
  setup() {
    const datas = custFun('初始值', 700);
    return {
      datas,
    };
  },
});
</script>
<style lang="scss" scoped></style>
