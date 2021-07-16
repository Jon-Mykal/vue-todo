<template>
    <div>
        <p style="color: red;">
       <slot>
           
       </slot>
        </p>
        <article>
            <slot name="page">Default content</slot>
        </article>
    </div>
</template>

<script>

    export default {
        name: "SimplePropComp",
        props: {
            image: {
                type: String,
                default: require('../assets/images/placeholder.png'),
                validator: propValue => {
                    const hasImagesDirectory = propValue.indexOf('/images/') > -1;
                    const isPNG = propValue.endsWith('.png');
                    const isJPEG = propValue.endsWith('.jpeg') || propValue.endsWith('.jpg');
                    const hasValidExtension = isPNG || isJPEG;
                    const name = require('../assets/images/placeholder.png');
                    console.log(name);
                    return hasImagesDirectory && hasValidExtension;
                }
            }
        }
    }
</script>

<style scoped>

</style>