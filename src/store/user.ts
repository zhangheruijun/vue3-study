export default {
  namespaced: true,
  state: {
    userName:'张三',
    sex:'阿萨德'
  },
  mutations: {
    increment(state: any, params:any) {
      // 变更状态
      state.userName = params.changName
    },
    custState(state: any, params:any) {
      state.userName = params
    },
  },
  actions: {},
}
