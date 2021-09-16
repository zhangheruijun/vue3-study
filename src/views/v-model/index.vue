<template>
  <div style="padding-top: 20px">
    <div style="font-size: 14px">----------------去掉.sync---------------</div>
    <div>父页面user变化---：{{ user }}</div>
    <child1 v-model:msg="user" :pro="{ h: '品牌' }" />
  </div>

  <div style="padding-top: 20px">
    <div style="font-size: 14px">
      -------------steup中的attrs(包含没有在props配置中声明的属性的对象, 相当于
      this.$attrs)子组件可以改变父组件的值-------------
    </div>
    <div>父页面parent变化(通过attrs改变父组件)---：{{ obj.sex }}</div>
    <child2 :datas="obj" :cai="{ chang: '属性' }" ref="child2Ref" />
    <div @click="onParentCHiildren">父组件点击子组件里面的值</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref, //基础类型
  reactive, //引用类型
  toRefs,
} from 'vue';
import Child1 from './piece/child1.vue';
import Child2 from './piece/child2.vue';

export default defineComponent({
  components: { Child1, Child2 },
  setup() {
    const user = ref(2);
    const child2Ref = ref(Child2); //父组件点击子组件里面的函数ref
    const obj = reactive({
      sex: 'attrs变换',
    });
    const onParentCHiildren = () => {
      child2Ref?.value.show();
    };
    return { user, obj, child2Ref, onParentCHiildren };
  },
});
</script>
<style lang="scss" scoped></style>
