<template>
<nav class="navbar">
    <ul class="nav">
        <li class="nav-item">
            <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'Todos' }">Todos</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'About' }">About</router-link>
        </li>
    </ul>
</nav>
</template>

<style scoped>
.navbar {
    width: 100%;
    background-color: #74EBD5;
    background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);

}

.nav {
    display: flex;
    margin: 0;
    padding: .5em 1em;
}

.nav-item {
    list-style: none;
    padding: 0 .5em;
}

.nav-item a {
    font-weight: bold;
    color: #2c3e50;
}

.nav-item a.router-link-exact-active {
    color: #42b983;
}
</style>
