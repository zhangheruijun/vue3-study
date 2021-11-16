import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const app = createApp(App)
import { Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
app.config.globalProperties.$custType = 'ddd';  //页面中直接使用
//全局指令
app.directive('custInst', {
  // created(){}, // 新增！在元素的 attribute 或事件监听器被应用之前调用
	beforeMount(el, binding, vnode, prevVnode) {    //指令绑定到元素后调用。只调用一次
		el.style.background = 'red'
		console.log(el);  //代表这个元素
    console.log(binding);
    console.log(vnode)
    console.log(prevVnode)
    console.log(binding.value);
    setTimeout(()=>{
      if(binding.value == 'add'){
        el.remove()
      }
    },2000)
		// el.addEventListener('click', () => {
		// 	console.log('老惦记我');
		// 	binding.value('蒹葭苍苍')
		// })
	},
	// mounted() { }, // 元素插入父 DOM 后调用
	// beforeUpdate() { }, // 新增！在元素本身被更新之前调用，与组件的生命周期钩子十分相似
	// updated() { },  // 一旦组件和子级被更新，就会调用这个钩子
	// beforeUnmount() { }, // 新增！与组件的生命周期钩子类似，它将在元素被卸载之前调用。
	// unmounted() { }  //一旦指令被移除，就会调用这个钩子。也只调用一次。
})
console.log(app.version);
app.use(store).use(Button).use(router).mount("#app");
