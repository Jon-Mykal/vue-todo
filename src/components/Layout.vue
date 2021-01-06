<template>
  <Navbar />
  <router-view />
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