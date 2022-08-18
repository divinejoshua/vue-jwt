import { createStore } from "vuex";


export const store = createStore({
  // State 
  state: {
    access_token: '',
  },

  // Mutations
  mutations: {
    setToken (state, access_token) {
      state.access_token = access_token
  },

  },


//Actions 
  actions: {

    // Set user token
    async SET_ACCESS_TOKEN ({ commit }, access_token) {
        commit('setToken', access_token)
      },

  },


//Modules 

  modules: {
  }
})
