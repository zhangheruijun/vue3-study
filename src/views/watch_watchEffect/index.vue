<template>
  <input type="text" v-model="watchRef" />
  <input type="text" v-model="changs" />
</template>

<script lang="ts">
import {
  defineComponent,
  ref, //基础类型
  reactive, //引用类型
  watchEffect,
  watch,
  toRefs,
} from 'vue';

export default defineComponent({
  setup() {
    const watchRef = ref<string | number>('23');
    const watchReactive = reactive({
      changs: 23,
    });
    watch(
      //监听多个属性
      [watchRef, () => watchReactive.changs],
      ([newWatchRef, newReactive], [oldWatchRef, oldReactive]) => {
        console.log(newWatchRef, 'watch监听');
      },
      {
        immediate: true, //初始值会执行一次
        deep: true, //深度监听
      }
    );
    const stop = watchEffect((onInvalidate) => {
      /*不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据默认初始时就会执行第一次, 
      从而可以收集需要监视的数据监视数据发生变化时回调*/
      console.log(watchReactive.changs, 'watchEffect监听,在onMounted之前调用');
      onInvalidate(()=>{
        // 在这里面清理副作用
      })
    },{
     onTrigger(e){
       console.log(e,77);
     }
    });
    setTimeout(()=>{
      watchReactive.changs  = 20;
      watchReactive.changs  = 27;
      watchReactive.changs  = 10;
    },1000);
    // stop() // 停止监听
    return { watchRef, ...toRefs(watchReactive) };
  },
});
</script>
<style lang="scss" scoped></style>
