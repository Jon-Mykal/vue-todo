<template>
    <div>
        <p>
            Capacity: {{ capacity }}
        </p>
        <button @click="increaseCapacity()">Increase Capacity</button>
        <button @click="decreaseCapacity()">Decrease Capacity</button>
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        setup(props, ctx) {
            const capacity = ref(3);

            let increaseCapacity = () => {
                capacity.value++;
                ctx.emit('capacityChanged');
            }

            let decreaseCapacity = () => {
                capacity.value--;
                ctx.emit('capacityChanged');
            }
            
            return { capacity, increaseCapacity, decreaseCapacity };
        }
    }
</script>

<style scoped>

</style>