<template>
  <div class="home">
    <h1>Welcome</h1>
    <div v-if="!loggedIn">
      To use this app you'll need to
      <router-link :to="{ name: 'Login'}">
        Login
      </router-link>
      or
      <router-link :to="{name: 'Register'}">
        Register
      </router-link>
    </div>
    <div v-else>
        <router-link :to="{name: 'Todos'}">
          View Todos
        </router-link>
    </div>
  </div>
</template>

<script>
import { authComputed } from '../store/helpers'
// @ is an alias to /src

export default {
  name: 'Home',
  computed: {
    ...authComputed
  }
}
</script>
