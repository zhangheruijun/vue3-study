<template>
  <div>--------------登录页面----------------</div>
  <div @click="onAddRouter" class="cust-btns">点击生成动态路由</div>
  <div @click="lookRouterFun">点击查看现在的路由</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'login',
  setup() {
    const router = useRouter();
    const onAddRouter = () => {
      sessionStorage.setItem('token', '123456');
      router.push({ path: '/home' });
    };
    const lookRouterFun = () => {
      console.log(router.getRoutes(), router.hasRoute('home'));
    };
    return { onAddRouter, lookRouterFun };
  },
});
</script>
<style lang="scss" scoped>
.cust-btns {
  cursor: pointer;
}
</style>
