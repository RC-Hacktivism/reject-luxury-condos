<template>
<section class='grid-container'>
    <testimony/>
     <testimony/>
     <testimony/>
     <testimony/>
     <testimony/>
     <testimony/>
     <testimony/>
     <testimony/>
     <testimony/>
</section>

</template>

<script>
import Testimony from './Testimony.vue'
export default {
    name: 'TestimonyList',
    components : {
        Testimony
    }
}
</script>

<style>

.grid-container {
    display: grid;
    column-gap: 1;
    row-gap: 1;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 30% 30% 30%;
}

</style>