export default {
  namespaced: true,
  state: {
    sex:'1'
  },
  getters: { },
  mutations: {
    increment(state: any, params:any) {
      // 变更状态
      state.userName = params
    },
  },
  actions: {},
}
