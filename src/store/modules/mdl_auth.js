import AuthService from '@/services/AuthService.js'

export const namespaced = true;
export const state = {
    user: null
}

export const mutations = {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      AuthService.apiClient.defaults.headers.common['Authorization'] = `Bearer ${
        userData.accessToken
      }`
    }
}

export const actions = {
    async register({ commit }, userCreds) {
      // commit("");
      try{
        let res = await AuthService.register(userCreds);
        commit('SET_USER_DATA', res.data)
      }
      catch(e) {
        console.log(`Something went wrong ${e}`);
      }
      
    
    },
    login({ commit }, userCreds) {
      console.log(userCreds);
    }
}

export const getters = {
    
}