<template>
    <section class="todo-card">
        <span>{{ todo.name }}</span>
        <h4>Complete: {{ todo.isDone}}</h4>
    </section>
</template>

<script>
export default {
    name: 'TodoCard',
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
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