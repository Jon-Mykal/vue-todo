<template>
    <div>
        <CompositionApi @capacityChanged="onCapacityChanged()"/>
        <p>{{ message }}</p>
    </div>
</template>

<script>
import CompositionApi from '@/components/CompositionApi.vue';
import { ref } from 'vue';
    export default {
        name: 'CompositionDemos',
        components: {
            CompositionApi
        },
        setup() {
            const message = ref("");
            let onCapacityChanged = () => {
                message.value = "Capacity has changed!";
            };

            return { message, onCapacityChanged };
        }
    }
</script>

<style scoped>

</style>