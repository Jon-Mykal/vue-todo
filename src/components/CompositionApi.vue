<template>
    <div>
        <p>
            Spaces left: {{ spacesLeft }} out of {{ capacity }}
        </p>
        <button @click="increaseCapacity()">Increase Capacity</button>
        <button @click="decreaseCapacity()">Decrease Capacity</button>
        <h2>Attending</h2>
        <ul>
            <li v-for="(firstName, index) in attending" :key="index">
                {{ firstName }}
            </li>
        </ul>

        <input type="text" v-model="name">
        <p>{{ name }}</p>
        <p>{{ letterCount }}</p>
    </div>
</template>

<script>
import { useEventSpace, useMapping, addDelay } from '@/use/event-space.js'
import { ref, watch, watchEffect } from 'vue'
    export default {
        setup(props, ctx) {
            const { capacity, spacesLeft, increaseCapacity, decreaseCapacity, attending } = useEventSpace(ctx);
            const { name } = useMapping();
           // await addDelay();
            const letterCount = ref(0);

            // Watch syntax (source, fn, options?)
            // Use Watch for specific properties to be watched
            // watch(name, () => {
            //     console.log("Gregg");
            // });

            // return { capacity };
            return { capacity, spacesLeft, increaseCapacity, decreaseCapacity, name, attending, letterCount };
        }
    }
</script>

<style scoped>

</style>