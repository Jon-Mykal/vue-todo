<template>
    <section>
            <h1>All Your Todos</h1>
    <TodoCard v-for="todo in todos" :key="todo.id" :todo="todo" />
    </section>
</template>

<script>
import TodoCard  from "@/components/TodoCard.vue";
import { mapActions, mapState } from "vuex";
export default {
    name: 'Todos',
    components: {
        TodoCard
    },
    created() {
        this.fetchTodos();
    },
    computed: {
        ...mapState('todoMdl', ['todos'])
    },
    methods: {
        ...mapActions('todoMdl', ['fetchTodos'])
    }
}
</script>