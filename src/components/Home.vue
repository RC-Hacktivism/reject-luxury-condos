<template>
  <div class="container">
   <HeroBanner/>
  </div> 
</template>

<script>
import HeroBanner from './HeroBanner.vue';
  export default {
    name: 'Home',
    components: {
    HeroBanner
    }, 
    props: {
      text: ""
    }
  }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>