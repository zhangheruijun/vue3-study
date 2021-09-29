<template>
  <input type="text" v-model="user" />
  <div>{{ cont }}</div>
  <div>{{ changNum(4) }}</div>
  <div>{{ ids }}</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref, //基础类型
  reactive, //引用类型
  computed,
  toRefs,
  watch,
} from 'vue';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
export default defineComponent({
  props: ['ids'],
  beforeRouteEnter(to, from) {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
  },
  setup() {
    const route = useRoute(); //访问路由信息
    const router = useRouter(); //路由跳转信息
    console.log(route.meta);
    const user = ref(2);
    const changes = reactive({
      cont: computed(() => user.value * 2), //纯get
      changNum: (v: number) => {
        return v * user.value;
      },
    });
    watch(
      //监听单个属性
      () => route.params,
      (newParams) => {
        console.log(newParams);
      },
      {
        immediate: true, //初始值会执行一次
        deep: true, //深度监听
      }
    );
    return { user, ...toRefs(changes) };
  },
});
</script>
<style lang="scss" scoped></style>
