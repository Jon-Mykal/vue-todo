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
    fetchTodos({ commit }) {
       return TodoService.getTodos()
            .then(response => {
                commit('SET_TODOS', response.data)
            })
            .catch(error => {
                console.log(`There was an error: ${error.response}`);
            })
    }
}