<template>
  <div @click="onPanFun">{{info.name}}</div>
  <Add list-map='我是setup语法糖传过来的' @parent-fun='onCustFun' ref='addRef' />
</template>

<script setup lang="ts">
import { ref,reactive,toRef } from 'vue';
import Add from './piece/add.vue'
const info = reactive({name:'张何最实际啊'});
const addRef = ref<InstanceType<typeof Add>>()
function onCustFun(s:string){
  console.log(s);
}
//
function onPanFun(){
  console.log(addRef.value.comName);
  
}
</script>
<style lang="scss" scoped></style>
