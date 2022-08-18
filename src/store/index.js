import { createStore } from "vuex";


export const store = createStore({
  // State 
  state: {
    access_token: '',
  },

  // Mutations
  mutations: {
    SET_ACCESS_TOKEN (state, access_token) {
      state.access_token = access_token
  },

  },


//Actions 
  actions: {

    // Set user token
    async COMMIT_ACCESS_TOKEN ({ commit }, access_token) {
        commit('SET_ACCESS_TOKEN', access_token)
      },

  },


//Modules 

  modules: {
  }
})
