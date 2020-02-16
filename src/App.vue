<template>
  <div id="app">
    <Nav class="mobile-display-none"/>
    <Hamburger class="mobile-display-only"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import Hamburger from './components/Hamburger.vue'
export default {
  name: 'App',
  components: {
    Hamburger,
    HelloWorld,
    Nav
  }
}
</script>

<style>
.mobile-display-only {
  display: none!important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
body{
  margin: 0px;
  padding: 0px;
}

@media screen and (max-width: 600px) {
  .mobile-display-none {
    display: none!important;
  }
  .mobile-display-only {
    display: block!important;
  }
}
</style>
