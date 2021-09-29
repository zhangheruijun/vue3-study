<template>
  <!-- <p v-if="show">hello</p> -->
  <div class="wrap">
    <transition name="fade">
      <div class="wrap-left" v-if="show">sfdfffdsfsdf</div>
    </transition>
    <div class="wrap-btn" @click="show = !show">按钮</div>
  </div>

  <div class="totRight" :class="{ 'cust-tot': showRight }">
    <div class="wrap-left">
      <transition name="fadeRight">
        <div v-if="showRight">水电费费</div>
      </transition>
    </div>
    <div class="wrap-btn" @click="showRight = !showRight">按钮</div>
  </div>

  <div id="demo">
    <transition name="mode-fade" mode="out-in">
      <button v-if="on" key="on" @click="on = false">on</button>
      <button v-else key="off" @click="on = true">off</button>
    </transition>
  </div>

  <div id="flip-list-demo">
    <button @click="shuffle">Shuffle</button>
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in items" :key="item" class="flipsss">
        {{ item }}
      </li>
    </transition-group>
  </div>
  <!--  @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled" -->
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  toRefs,
} from 'vue';

export default defineComponent({
  name: '',
  setup() {
    const show = ref(false);
    const showRight = ref(false);
    const on = ref(false);
    // --------------------进入--------------------
    const beforeEnter = (el: any) => {
      console.log(el, 'beforeEnter');
    };
    const enter = (el: any, done: any) => {
      console.log(el, 'enter');
      // done();
    };
    const afterEnter = (el: any) => {
      console.log(el, 'afterEnter');
    };
    const enterCancelled = (el: any) => {
      console.log(el, 'enterCancelled');
    };
    // --------------------离开-----------------------
    const beforeLeave = (el: any) => {
      console.log(el, 'beforeLeave');
    };
    const leave = (el: any, done: any) => {
      console.log(el, 'leave');
      // done();
    };
    const afterLeave = (el: any) => {
      console.log(el, 'afterLeave');
    };
    const leaveCancelled = (el: any) => {
      console.log(el, 'leaveCancelled');
    };

    const items = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const shuffle = () => {
      const num = items[Math.floor(Math.random() * items.length)];
      const num3 = items[3];
      items[3] = num;
      items[num] = num3;
    };
    return {
      show,
      showRight,
      on,
      items,
      shuffle,
      beforeEnter,
      enter,
      afterEnter,
      enterCancelled,
      beforeLeave,
      leave,
      afterLeave,
      leaveCancelled,
    };
  },
});
</script>
<style lang="scss" scoped>
.wrap {
  display: flex;
  align-items: center;
  height: 50vh;
  .wrap-left {
    width: 100px;
    height: 100%;
    background: red;
  }
  .wrap-btn {
    background: red;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    transform: translateX(-100px);
  }
}

.totRight {
  display: flex;
  align-items: center;
  height: 50vh;
  transform: translateX(-100px);
  transition: all 3s ease;
  &.cust-tot {
    transform: translateX(0);
  }
  .wrap-left {
    width: 100px;
    height: 100%;
    background: blue;
  }
  .wrap-btn {
    background: blue;
  }
  .fadeRight-enter-active,
  .fadeRight-leave-active {
    transition: all 2s ease;
  }
  .fadeRight-enter-from,
  .fadeRight-leave-to {
    opacity: 0;
  }
}

#demo {
  .mode-fade-enter-active,
  .mode-fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .mode-fade-enter-from,
  .mode-fade-leave-to {
    opacity: 0;
  }
  button {
    background: #05ae7f;
    border-radius: 4px;
    display: inline-block;
    border: none;
    padding: 0.5rem 0.75rem;
    text-decoration: none;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
}

#flip-list-demo {
  // .flip-list-move {
  //   transition: transform 0.8s ease;
  // }
  .flipsss {
    display: inline-block;
    margin-right: 10px;
    transition: all 0.8s ease;
  }
  .flip-list-enter-from,
  .flip-list-leave-to {
    opacity: 0;
    // transform: translateY(30px);
  }

  .flip-list-leave-active {
    position: absolute;
  }
}
</style>
