<template>
    <form action="" @submit.prevent="onSubmit">
        <!-- Added data-testid to retrieve DOM elements during testing -->
        <input data-testid="name-input" type="text" v-model="name">
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    data () {
        let name = '';
        return {
            name
        }
    },
    methods: {
        onSubmit() {
            this.$emit('formSubmitted', { name: this.name });
        }
    }
}
</script>

<style lang="css" scoped>

</style>