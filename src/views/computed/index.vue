<template>
  <input type="text" v-model="user" />
  <div>{{ cont }}</div>
  <div>{{ changNum(4) }}</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref, //基础类型
  reactive, //引用类型
  computed,
  toRefs,
} from 'vue';

export default defineComponent({
  setup() {
    const user = ref(2);
    const changes = reactive({
      cont: computed(() => user.value * 2), //纯get
      changNum: (v: number) => {
        return v * user.value;
      },
    });
    return { user, ...toRefs(changes) };
  },
});
</script>
<style lang="scss" scoped></style>
