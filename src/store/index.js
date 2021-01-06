import { createStore } from 'vuex'
import * as todoMdl from '@/store/modules/mdl_todos.js'
import * as notificationMdl from '@/store/modules/mdl_notifications.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todoMdl,
    notificationMdl
  }
})
