<template>
    <div>
        <section class="form-group" :class="{ 'form-group--error': v$.name.$error }">
            <input v-model="name">
            <p>{{ v$.name.$error }}</p>
            <section v-if='v$.name.$error' class="input-errors" v-for="error of v$.name.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </section>
        </section>
    </div>
</template>

<script>
import { required, email, minLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { ref, reactive, toRefs, computed } from 'vue'
export default {
    name: 'SimpleForm',
    setup () {
        // Reactive References mode
      const name = ref('');
      const requiredNameLength = ref(2);
      const rules = computed(() => ({
          name: {
              required,
              minLength: minLength(requiredNameLength.value),
              $autoDirty: true
          }
      }));

        // const state = reactive({
        //     firstName: '',
        //     lastName: '',
        //     contact: {
        //         email: ''
        //     }
        // });

        // const rules = {
        //     firstName: { required },
        //     lastName: { required },
        //     contact: {
        //         email: { required, email }
        //     }
        // }

        const v$ = useVuelidate(rules, { name });
        return { name, requiredNameLength, v$ };
    }
    // },
    // data() {
    //     return {
    //         firstName: ''
    //     }
    // },
    // validations() {
    //     return {
    //         name: { required }
    //     }
    // }
}
</script>

<style scoped>
.error-msg {
    color: red;
}
</style>