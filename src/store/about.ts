export default {
  namespaced: true,
  state: {
    sex:'1'
  },
  getters: { },
  mutations: {
    increment(state: any, params:any) {
      // εζ΄ηΆζ
      state.userName = params.changName
    },
  },
  actions: {
    custActions({commit,rootState}: any,actParams: any ){
      commit('increment',actParams)
    }
  },
}
