<template>
    <section>
        <p>Complete: {{ todoStatus }}</p>
    </section>
</template>

<script>
export default {
    props: ['todo'],
    computed: {
        todoStatus() {
            if (this.todo.isComplete) {
                return 'Yes';
            }
            return 'No';
        }
    }
}
</script>