<template>
    <div>
        <span>{{ randomNumber }}</span>
        <button @click="getRandomNumber" id="btnGen">Generate Random Number</button>
        <button v-show="loggedIn" id="btnLog">Logout</button>
    </div>
</template>

<script>
import { ref} from 'vue'
export default {
    props: {
        min: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: 10
        }
    },
    data() {
        let loggedIn = false;
        let randomNumber = 0;
        return {
            loggedIn,
            randomNumber
        }
    },
    methods: {
        getRandomNumber() {
            this.randomNumber =
                Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        }
    }
}
</script>

<style>

</style>