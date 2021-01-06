<template>
<Navbar />
<router-view v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
    </transition>
</router-view>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'Layout',
    components: {
        Navbar
    }
};
</script>

<style scoped>
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
