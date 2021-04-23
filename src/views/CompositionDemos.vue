<template>
    <div>
     <CompositionApi @capacityChanged="onCapacityChanged()"/>    
        <SimpleForm />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import CompositionApi from '@/components/CompositionApi.vue';
import SimpleForm from '@/components/SimpleForm.vue';
import { ref } from 'vue';
    export default {
        name: 'CompositionDemos',
        components: {
            CompositionApi,
            SimpleForm
        },
        setup() {
            const message = ref("");
            // Handle capacity changed event
            let onCapacityChanged = () => {
                message.value = "Capacity has changed!";
                setTimeout(() => {
                    message.value = '';
                }, 2500);
            };

            return { message, onCapacityChanged };
        }
    }
</script>

<style scoped>

</style>