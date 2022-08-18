import { createStore } from "vuex";


export const store = createStore({
  // State 
  state: {
    access_token: '',
  },

  // Mutations
  mutations: {
    setUserDetials (state, access_token) {
      state.access_token = access_token
  },

  },


//Actions 
  actions: {

    // Set user token
    async SET_ACCESS_TOKEN ({ commit }, access_token) {
        commit('setUserDetials', access_token)
        console.log("yoo")
      },

  },


//Modules 

  modules: {
  }
})
