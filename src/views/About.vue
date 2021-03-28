<template>
  <div class="about">
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
    <input v-model="name" type="text"/>
    <p>
      {{ name }}
    </p>
    <button @click="increaseCapacity">Increase Capacity</button>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated, reactive, toRefs, ref, watch, watchEffect } from 'vue'
export default {
    setup() {
      // Two methods of using reactivity.
      const attending = ref(["Tim", "Bob", "Joe"]);
      const name = ref("");
      const event = reactive({
        capacity: 4,
        spacesLeft: computed(() => { return event.capacity - attending.value.length; })
      });

      function increaseCapacity() {
        event.capacity++;
      }

      watchEffect(() => {
        console.log(name.value);
      });
      // Lifecycle hooks
      onMounted(() => {
        console.log("On Mounted");
      });

      onUpdated(() => {
        console.log("On Updated");
      });

      onUnmounted(() => {
        console.log("On Unmounted");
      });

      return { ...toRefs(event), attending,  name, increaseCapacity };
    }
}
</script>
