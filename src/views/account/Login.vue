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
import { useRoute, useRouter } from 'vue-router'

    export default {
        setup(props, context) {
            // Access both route and router this way with composition api
            const router = useRouter();
            const route = useRoute();
            let redirectPath = route.query.redirectPath;
            let email = ref("");
            let password = ref("");


            console.log(route.query);
            const store = useStore();
            let loginUser = () => {
                // Call Vuex action.
                store.dispatch('authMdl/login', {
                    email: email.value,
                    password: password.value
                }).then(() => {
                    router.push({ path: redirectPath });
                });
            }

            return { email, password, loginUser};
        }
    }
</script>

<style scoped>

</style>