import {AuthService as authSvc}  from '@/services/AuthService.js'

export const namespaced = true;
export const state = {
    user: null
}

export const mutations = {
    
}

export const actions = {
    register({ commit }, userCreds) {
      // commit("");
      console.log(userCreds);
    },
    login({ commit }, userCreds) {
      console.log(userCreds);
    }
}

export const getters = {
    
}