import { ref, computed } from "vue"

export function useEventSpace(ctx) {
    const capacity = ref(3);
    const attending = ref(["Gregg", "John", "Michael"]);
    const spacesLeft = computed(() => {
        return capacity.value - attending.value.length;
    });
    let increaseCapacity = () => {
        capacity.value++;
        // Publish capacity changed event
        ctx.emit('capacityChanged');
    }

    let decreaseCapacity = () => {
        capacity.value--;
        // Publish capacity changed event
        ctx.emit('capacityChanged');
    }
    
    return { capacity, increaseCapacity, decreaseCapacity, attending, spacesLeft};
}

export function useMapping() {
    const name = ref("");
    return { name };
}