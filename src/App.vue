<template>
<section id="app">
    <Navbar />
    <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        Navbar
    }
};
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

/*** TRANSITIONS ***/
.slide-fade-enter {
    transform: translateX(10px);
    opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all .25s ease;
}

.slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
}
</style>
