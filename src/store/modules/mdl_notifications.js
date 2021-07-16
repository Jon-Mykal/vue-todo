export const namespaced = true;
let nextId = 1

export const state = {
    notifications: []
}

export const mutations = {
    PUSH(state, notification) {
        state.notifications.push({
            ...notification,
            id: nextId++
        })
    },
    DELETE(state, notificationToRemove) {
        state.notifications = state.notifications.filter(
            notification => notification.id !== notificationToRemove.id
        )
    },
    CLEAR(state) {
        state.notifications = [];
    }
}

export const actions = {
    add({ commit }, notification) {
      commit('PUSH', notification)
    },
    remove({ commit }, notificationToRemove) {
      commit('DELETE', notificationToRemove)
    },
    reset({ commit }) {
        commit('CLEAR');
    }
  }