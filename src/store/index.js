import { createStore } from 'vuex'
import * as todoMdl from '@/store/modules/mdl_todos.js'
import * as notificationMdl from '@/store/modules/mdl_notifications.js'
import * as authMdl from '@/store/modules/mdl_auth.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todoMdl,
    notificationMdl,
    authMdl
  }
})
