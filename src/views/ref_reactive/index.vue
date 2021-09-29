<template>
  <div>
    -----------------------------------------ref---------------------------------------------
  </div>
  <div class="t-name">{{ name }}</div>
  <div @click="onRefFun" style="padding: 10px">给ref赋值的特殊性</div>
  <div style="padding: 20px">
    -----------------------------------------reactive---------------------------------------------
  </div>
  <div>对象-----{{ title }}</div>
  <div>数组-----{{ arr }}</div>
  <div @click="onReactiveFun">给reactive赋值</div>
  <div style="padding: 20px">
    -----------------------------------------用过ref获取页面中的元素---------------------------------------------
  </div>
  <div ref="ele" style="height: 30px">ref获取元素</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref, //基础类型
  reactive, //引用类型
  toRefs, //转化为响应式
  isRef, //判断是不是ref类型
  isReactive, //判断是不是reactive类型
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
interface UserData {
  title: string;
  test?: string;
  // [prop: string]: any;
}

export default defineComponent({
  name: 'Ref_reactive',
  /**
   * data computed methods
   */
  setup() {
    // ----------------------------------变量-----------------------------------
    const name = ref('22'); //ref:底层的本质也是reactive。ref(10) 调用时会调用reactive({value:10}),所以在js中修改获取要用.value
    const ele = ref<HTMLElement | null>(null); //ref获取元素，名字要与ref一样
    const obj = reactive<UserData>({
      //reactive对象
      title: 'reactive_名字',
    });
    const arr = reactive([2, 3, 4]); //reactive数组
    const color = 'blue'; //与style绑定
    // -----------------------------------------------函数-----------------------------------------
    onMounted(() => {
      console.log(ele.value);
    });
    const onRefFun = () => {
      name.value = 'ref赋值';
      obj.test = '44'; //动态添加的数据，返回中return不能用toRefs(结构)
      console.log('判断类型ref:', isRef(name));
      // name.value++
    };
    const onReactiveFun = () => {
      obj.title = 'reactive赋值对象';
      arr[0]++;
      console.log('判断类型reactive:', isReactive(obj));
    };
    return {
      //周期函数不用暴露
      name,
      ...toRefs(obj), //reactive的数据是响应式的，但是用解构运算符的就不是响应式的，必须用toRefs()转化
      arr,
      onRefFun,
      onReactiveFun,
      color,
      ele,
    };
  },
});
</script>
<style lang="scss" scoped>
.t-name {
  color: v-bind('color');
}
// >>>和/deep/已弃用。
// /deep/ .ant-input {
//   color: red;
// }
:deep(.ant-input) {
  color: red;
}
:global(.foo) {
}
</style>
