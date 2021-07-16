<template>
    <div>
        <form action="" @submit.prevent="registerUser">
            <section class="form-group">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" v-model="email">
            </section>
            <section class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="password">
            </section>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import { ref, watchEffect } from "vue"
import { useStore } from 'vuex'
    export default {
        setup(props, { }) {
            let email = ref("");
            let password = ref("");

            const store = useStore();
            let registerUser = () => {
                // Call Vuex action.
                store.dispatch('authMdl/register', {
                    email: email.value,
                    password: password.value
                });
            }

            return { email, password, registerUser};
        }
    }
</script>

<style scoped>

</style>