<template>
<router-link class="todo-link" :to="{ name: 'TodoDetails', params: {id: todo.id}}">
    <section class="todo-card">
        <h3>{{ todo.name }}</h3>
    </section>
</router-link>
</template>

<script>
export default {
    name: 'TodoCard',
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    computed: {
        todoStatus() {
            if (this.todo.isComplete) {
                return 'Yes';
            }
            return 'No';
        }
    }
}
</script>

<style scoped>
.todo-link {
  color: #2c3e50;
  text-decoration: none;
}

.todo-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
}

.todo-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
