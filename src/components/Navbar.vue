<template>
  <nav class="navbar">
    <ul class="nav">
      <li class="nav-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>

      <li class="nav-item" v-if="!loggedIn">
        <router-link :to="{ name: 'Register' }">Register</router-link>
      </li>
      <li class="nav-item" v-if="!loggedIn">
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </li>
      <li class="nav-item" v-if="loggedIn">
        <button @click="logout()">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { authComputed } from '../store/helpers'
export default {
    computed: {
        ...authComputed
    },
    methods: {
        logout() {
            this.$store.dispatch("authMdl/logout");
        }
    }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: #74ebd5;
  background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
}

.nav {
  display: flex;
  margin: 0;
  padding: 0.5em 1em;
}

.nav-item {
  list-style: none;
  padding: 0 0.5em;
}

.nav-item a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-item a.router-link-exact-active {
  color: #42b983;
}
</style>
