<template>
  <div id="app">
    <Home/>
    <Button/>
    <HacktivismFooter />
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Button from './components/Button.vue';
import HacktivismFooter from './components/HacktivismFooter.vue';

export default {
  name: 'App',
  components: {
    Home,
    HacktivismFooter,
    Button,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
