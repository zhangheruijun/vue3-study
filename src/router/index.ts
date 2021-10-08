import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/user/login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: Login,
    meta:{ show: true }
  },
  {
    path: "/store",
    name: "store",
    component: () =>
      import( "@/views/store/index.vue"),
  },
  // {
  //   path: "/home",
  //   name: "home",
  //   redirect:'/home/about',
  //   component: () =>
  //     import( "@/views/home/index.vue"),
  //   children:[
  //     {
  //       path: "about",
  //       name: "about",
  //       component: () => import( "@/views/home/piece/about.vue"),
  //     },
  //   ]  
  // },
  // {
  //   path: "/ref_reactive",
  //   name: "ref_reactive",
  //   component: () =>
  //     import( "@/views/ref_reactive/index.vue"),
  // },
  // {
  //   path: "/watch_watchEffect",
  //   name: "watch_watchEffect",
  //   component: () =>
  //     import( "@/views/watch_watchEffect/index.vue"),
  // },
  // {
  //   path: "/computed/:ids",
  //   name: "computed",
  //   component: () =>
  //     import( "@/views/computed/index.vue"),
  //     meta: {name:'张三'},
  //     props: true  
  // },
  // {
  //   path: "/v-model",
  //   name: "v-model",
  //   component: () =>
  //     import( "@/views/v-model/index.vue"),
  // },
  // {
  //   path: "/shallowRef_shallowReactive",
  //   name: "shallowReactive",
  //   component: () =>
  //     import( "@/views/shallowRef_shallowReactive/index.vue"),
  // },
  // {
  //   path: "/toRaw",
  //   name: "toRaw",
  //   component: () =>
  //     import( "@/views/toRaw/index.vue"),
  // },
  // {
  //   path: "/markRaw",
  //   name: "markRaw",
  //   component: () =>
  //     import( "@/views/markRaw/index.vue"),
  // },
  // {
  //   path: "/toRef",
  //   name: "toRef",
  //   component: () =>
  //     import( "@/views/toRef/index.vue"),
  // },
  // {
  //   path: "/customRef",
  //   name: "customRef",
  //   component: () =>
  //     import( "@/views/customRef/index.vue"),
  // },
  // {
  //   path: "/hook",
  //   name: "hook",
  //   component: () =>
  //     import( "@/views/hook/index.vue"),
  // },
  // {
  //   path: "/teleport",
  //   name: "hook",
  //   component: () =>
  //     import( "@/views/teleport/index.vue"),
  // },
  // {
  //   path: "/suspense",
  //   name: "suspense",
  //   component: () =>
  //     import( "@/views/suspense/index.vue"),
  // },
  // {
  //   path: "/setup",
  //   name: "setup",
  //   component: () =>
  //     import( "@/views/setup/index.vue"),
  // },
  // {
  //   path: "/directive",
  //   name: "directive",
  //   component: () =>
  //     import( "@/views/directive/index.vue"),
  // },
  // {
  //   path: "/bus",
  //   name: "bus",
  //   component: () =>
  //     import( "@/views/bus/index.vue"),
  // },
  // {
  //   path: "/globalApi",
  //   name: "globalApi",
  //   component: () =>
  //     import( "@/views/globalApi/index.vue"),
  // },
  // {
  //   path: "/transition",
  //   name: "transition",
  //   component: () =>
  //     import( "@/views/transition/index.vue"),
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
console.log(4444);
let dayRouterLoading = true;  //判断页面是否刷新
let addListRouter = () => {
  console.log('暂无');
};  //冬天添加的函数(删除时候好用)
const dayRouter = {
  path: '/home',
  name: 'home',
  redirect: '/home/about',
  component: () => import('@/views/home/index.vue'),
  meta:{ show: 'home' },
  children: [
    {
      path: 'about',
      name: 'about',
      component: () => import('@/views/home/piece/about.vue'),
      meta:{ show: 'about' }
    },
    {
      path: 'list',
      name: 'list',
      component: () => import('@/views/home/piece/list.vue'),
      meta:{ show: 'list' }
    },
    {
      path: '404',
      name: '404',
      component: () => import('@/views/404.vue'),
      meta:{ show: '404' }
    },
  ],
};

router.beforeEach((to, from, next)=>{
  const token = sessionStorage.getItem('token')
  if(token){
    if(dayRouterLoading){
      addListRouter = router.addRoute(dayRouter);
      if(to.name == 'login'){
        next({ path:'/home' })
      }else{
        console.log(to,from);
        const routerAll = router.getRoutes().map(item => item.path);
        if(routerAll.includes(to.fullPath)){
          // 如果你决定在导航守卫内部添加或删除路由，你不应该调用 router.replace()，而是通过返回新的位置来触发重定向
          next({ path:to.fullPath })
          // next({ ...to, replace: true }) // 路由里面有重定向，所以要指定跳转路径
        }else{
          next( { path:'/home/404',replace: true })
        }
      }
      dayRouterLoading = false      
    }else{
      if(to.path == '/'){
        next({ path:'/home' })
      }else{
        next()
      }
    }
  }else{
    // addListRouter()
    if(router.hasRoute('home')){
      router.removeRoute('home'); //删除路由
    }
    if(to.path == '/'){
      next()
    }else{
      next({path:'/'})
    }
    dayRouterLoading = true
  }
})
router.onError(( error,to, from )=>{
  console.log(error);
})
export default router;
