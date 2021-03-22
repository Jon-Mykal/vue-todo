<template>
    <div>
        <form action="" @submit.prevent="loginUser">
            <section class="form-group">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" v-model="email">
            </section>
            <section class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="password">
            </section>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import { ref, watchEffect } from "vue"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

    export default {
        setup(props, { }) {
            const router = useRouter();
            let email = ref("");
            let password = ref("");

            const store = useStore();
            let loginUser = () => {
                // Call Vuex action.
                store.dispatch('authMdl/login', {
                    email: email.value,
                    password: password.value
                }).then(() => {
                    router.push({ name: 'Todos'});
                });
            }

            return { email, password, loginUser};
        }
    }
</script>

<style scoped>

</style>