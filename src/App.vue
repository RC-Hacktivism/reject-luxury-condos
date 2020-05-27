<template>
  <div id="app">
    <Home/>
    <HacktivismFooter />
  </div>
</template>

<script>
import Home from './components/Home.vue';
import HacktivismFooter from './components/HacktivismFooter.vue';

export default {
  name: 'App',
  components: {
    Home,
    HacktivismFooter,
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
