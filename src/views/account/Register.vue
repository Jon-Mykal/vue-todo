<template>
    <div>
        <form action="">
            <section class="form-group">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" v-model="email">
            </section>
            <section class="form-group">
                <label for="password">Password</label>
                <input type="text" name="password" id="password" v-model="password">
            </section>
        </form>
    </div>
</template>

<script>
import { ref, watch } from "vue"
    export default {
        setup() {
            let email = ref("");
            let password = ref("")

            watch(() => {
                console.log(email);
            });

            return { email, password};
        }
    }
</script>

<style scoped>

</style>