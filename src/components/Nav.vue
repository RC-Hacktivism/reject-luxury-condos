<template>
  <div class="hello">
    <div class="navbar mobile-display-none d-flex align-items-stretch flex-row justify-content-between background-blue padding-0.5">
      <div class="Title padding-left-1" >
            <h2 class="text-white">Title</h2>
      </div>
      <div class="home border-left-white padding-1" >
            <a v-bind:href="home" class="text-white">Home</a>
      </div>
      <div class="about border-left-white padding-1" >
            <a v-bind:href="url" class="text-white">About</a>
      </div>
      <div class="campaign border-left-white padding-1" >
            <a v-bind:href="home" class="text-white">Campaign</a>
      </div>
      <div class="voices border-left-white padding-1" >
            <a a-bind:href="home" class="text-white">Voices</a>
      </div>
      <div class="act border-left-white padding-1" >
            <button class=" background-pink border-radius-25 padding-0.5 text-white text-decoration-none">Take back your home</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mobile-display-only {
  display: none!important;
}

.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.align-items-stretch {
  align-items:stretch;
}
.flex-row {
  flex-direction: row;
}
.justify-content-between {
  justify-content: space-between;
}

.background-blue {
  background: #1e3059;
}
.background-pink {
  background: #ff3265;
}
.border-radius-25 {
  border: none;
  border-radius: 2em;
}
.border-left-white {
  border-left: 0.05em solid #FFF7F7;
}
.padding-0.5 {
  padding: 0.5em;
}
.padding-1 {
  padding: 1em;
}
.padding-left-1 {
  padding-left: 1em;
}
.text-decoration-none {
  text-decoration: none;
}
.text-white {
  color: white;
}


ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
