<template>
  <div class="home">
    <h1>Welcome</h1>
    <div>
      To use this app you'll need to
      <router-link to="/account/login">
        Login
      </router-link>
      or
      <router-link to="/account/register">
        Register
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
