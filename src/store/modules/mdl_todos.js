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
    },
    SET_TODO(state, todo) {
        state.todo = todo;
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
    },
    fetchTodo({ commit, dispatch, getters }, id) {
        let todo = getters.getTodoById(id);

        if (todo) {
            commit('SET_TODO', todo);
        }
        else {
            return TodoService.getTodo(id)
            .then(response => {
                commit('SET_TODO', response.data)
            })
            .catch(error => {
                const notification = {
                    type: 'error',
                    message: `There was a problem getting that todo: ${error.message}`
                };
                dispatch('notificationMdl/add', notification, { root: true });
            })
        }

    }
}

export const getters = {
    getTodoById: state => id => {
        return state.todos.find(todo => todo.id === id);
    }
}