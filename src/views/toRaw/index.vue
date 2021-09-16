<template>
  <div style="padding: 20px">
    -----------------------------------------reactive---------------------------------------------
  </div>
  <div @click="onFun">{{ name }}</div>
  <div style="padding: 20px">
    -----------------------------------------用过ref获取页面中的元素---------------------------------------------
  </div>
  <div @click="refFun">{{ refState.sex }}</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, toRaw } from 'vue';
export default defineComponent({
  name: 'toRaw',
  setup() {
    /**
     * toRaw:这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发界面更新
     */
    // -----------------------------------------reactive中获取原始数据------------------------------------------
    const state = reactive({ name: 'jack', sex: '男' });
    const onFun = () => {
      const raw = toRaw(state); //本质就是获取该响应数据的原始数据,本例中是是获取state的原始数据也就是state
      raw.name = '李素'; //界面不会更新,用此方法优化性能
      console.log(state);
      console.log(raw);
    };

    // -----------------------------------------ref中获取原始数据------------------------------------------
    const refState = ref({ sex: '男' });
    const refFun = () => {
      const refData = toRaw(refState.value); //ref获取原始数据要加.value
      refData.sex = '女'; //界面不会更新
      console.log(refData); //{sex: "女"}
      console.log(refState); //RefImpl{_rawValue: {…}, _shallow: false, __v_isRef: true, _value: Proxy}
    };
    return { onFun, refFun, ...toRefs(state), refState };
  },
});
</script>
<style lang="scss" scoped></style>
