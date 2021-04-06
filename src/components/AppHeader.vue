<template>
    <div>
        <button v-show="loggedIn">Logout</button>
    </div>
</template>

<script>
import { ref} from 'vue'
export default {
    data() {
        let loggedIn = false ;
        return {
            loggedIn
        }
    }
}
</script>

<style>

</style>