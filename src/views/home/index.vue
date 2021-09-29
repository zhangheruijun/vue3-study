<template>
  <div class="logout" @click="logoutFun">退出登录</div>
  <div>我是home----父页面</div>
  <router-view class="child"></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: '',
  setup() {
    const router = useRouter();
    const logoutFun = () => {
      sessionStorage.clear();
      // router.removeRoute('home'); //删除路由
      router.push('/');
    };
    return { logoutFun };
  },
});
</script>
<style lang="scss" scoped>
.logout {
  text-align: right;
}
.child {
  // background: red;
}
</style>
