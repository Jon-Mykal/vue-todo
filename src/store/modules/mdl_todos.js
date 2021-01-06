import TodoService from '@/services/TodoService.js'

export const namespaced = true;
export const state = {
    todos: [],
    todosTotal: 0,
    todo: {}
}

export const mutations = {
    SET_TODOS(state, todos) {
        state.todos = todos;
    }
}

export const actions = {
    fetchTodos({ commit, dispatch }) {
        return TodoService.getTodos()
            .then(response => {
                commit('SET_TODOS', response.data)
            })
            .catch(error => {
                const notification = {
                    type: 'error',
                    message: `There was a problem getting todos: ${error.message}`
                };
                dispatch('notificationMdl/add', notification, { root: true });
            })
    }
}