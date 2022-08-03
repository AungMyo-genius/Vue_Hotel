import { createStore } from 'vuex'



export default createStore({
  state: {
    searchTitle:'',
    results:[]
  },
  getters: {
  },
  mutations: {
    SEARCH_TITLE(state,value){
      state.searchTitle = value
    },
    GET_RESULTS(state,value){
      state.results.push(value)
    }
  },
  actions: {
    
  },
  modules: {
  }
})
