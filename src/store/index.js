import { createStore } from "vuex";
import axios from 'axios'


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
    async commitAccessToken ({ commit }, access_token) {
        commit('SET_ACCESS_TOKEN', access_token)
    },


    // Get and commit a new access token on every page hard reload
    async getAccessToken({ commit }){
 
      try{
          // let response = await axios.post('accounts/auth/token/refresh/', {'refresh': localStorage.getItem('refresh')})
          let response = await axios.post('accounts/auth/token/refresh/')
          commit('SET_ACCESS_TOKEN', response.data.access)

      } catch(e){
        //
      }
    },



  },


//Modules 

  modules: {
  }
})
