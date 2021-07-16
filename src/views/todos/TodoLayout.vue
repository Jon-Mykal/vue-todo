<template>
  <section v-if="todo">
    <h1>{{ todo.name }}</h1>
    <router-view :todo="todo" />
    <section class="todo-links">
      <router-link :to="{ name: 'TodoDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'TodoEdit' }">Edit</router-link>
    </section>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["id"],
  created() {
    this.fetchTodo(this.id);
  },
  methods: {
    ...mapActions("todoMdl", ["fetchTodo"])
  },
  computed: {
    ...mapState("todoMdl", ["todo"])
  }
};
</script>
