<template>
    <section>
            <h1>All Your Todos</h1>
    <TodoCard v-for="todo in todos" :key="todo.id" :todo="todo" />

    <NotificationContainer />
    </section>
</template>

<script>
import TodoCard  from "@/components/TodoCard.vue";
import NotificationContainer from '@/components/NotificationContainer.vue'

import { mapActions, mapState } from "vuex";
export default {
    name: 'Todos',
    components: {
        TodoCard,
        NotificationContainer
    },
    created() {
        this.fetchTodos();
    },
    beforeUnmount() {
       this.reset();
    },
    computed: {
        ...mapState('todoMdl', ['todos'])
    },
    methods: {
        ...mapActions('todoMdl', ['fetchTodos']),
        ...mapActions('notificationMdl', ['reset'])
    }
}
</script>