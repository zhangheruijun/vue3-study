<template>
  <ul @click="reactFun">
    <li>
      点击触发-------------------------shallowReactive-----------------------------
    </li>
    <li>{{ reactiveState.name }}</li>
    <li>{{ reactiveState.list.status }}</li>
    <li>{{ reactiveState.list.content.text }}</li>
  </ul>
  <div style="padding: 20px"></div>
  <ul @click="reactFunRef">
    <li>
      点击触发-------------------------shallowRef-----------------------------
    </li>
    <li>{{ refContent.name }}</li>
    <li>{{ refContent.list.status }}</li>
    <!-- <li>{{ refContent.list.content.text }}</li> -->
    <input type="text" v-model="refContent.list.status" />
  </ul>
</template>
<script lang="ts">
import { defineComponent, shallowRef, shallowReactive, triggerRef } from 'vue';
/*
ref()与reactive()都是递归监听,内容有多深就监听到哪一层
shallowRef,shallowReactive都是都是递归监听;非递归监听是用于深层数据的响应带来的性能优化，不用每层都去创建Proxy一般用在数据多、层次深的时候用
1.shallowReactive：监听的是shallowReactive(10)->shallowReactive({value:10});只监听.value变化,value才是第一层,当第一层变化后子层才会变化
2.shallowRef:监听的是.value的变化(并不是第一层),要直接整个改变;如果只想改变么某一层的的数据,就得引入triggerRef;真个只能提供shallowRef的方法
*/
export default defineComponent({
  name: 'shallowReactive_shallowRef',
  // props: {
  //   modelValue: String,
  // },
  setup() {
    //----------------------------------------shallowReactive------------------------------------------
    const reactiveState = shallowReactive({
      name: '张三',
      list: {
        status: false,
        content: {
          text: '内容',
        },
      },
    });
    const reactFun = () => {
      reactiveState.name = '李四'; //只当第一层发生改变时,才更新视图，那么子集层就会更新，子元素不会双向绑定
      reactiveState.list.status = true;
      reactiveState.list.content.text = '内容改变了';
      console.log(reactiveState); //Proxy{name: "李四", list: {…}};只有这一层才会有Proxy
      console.log(reactiveState.list); //{status: true, content: {…}}
      console.log(reactiveState.list.content); //{text: "内容改变了"}
    };
    //----------------------------------------shallowRef------------------------------------------
    const refContent = shallowRef({
      name: '李四',
      list: {
        status: false,
        content: {
          text: '内容李世荣',
        },
      },
    });
    const reactFunRef = () => {
      refContent.value.list.status = true;
      triggerRef(refContent); //triggerRef做深层的改变;
      //或者做整个重新渲染;reactFunRef.value = {...} //这样才会更新视图
      // refContent.value = {
      //   name: "张三",
      //   list: {
      //     status: true,
      //     content: {
      //       text: "内容",
      //     },
      //   },
      // };
    };
    return {
      reactiveState,
      reactFun,
      refContent,
      reactFunRef,
    };
  },
});
</script>
