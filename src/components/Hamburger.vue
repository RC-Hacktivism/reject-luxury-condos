<template>
  <div class="hello">
    <div class="navbar mobile-display-only">
      <div class="Title d-flex align-items-center justify-content-center flex-row background-blue padding-left-1" >
        <Slide class="text-white">
          <a id="home" href="#">
            <span>Home</span>
          </a>
          <a id="about" href="#">
            <span>About</span>
          </a>
          <a id="campaign" href="#">
            <span>Campaign</span>
          </a>
          <a id="voices" href="#">
            <span>Voices</span>
          </a>
          <div id="act">
            <button class="background-pink border-radius-25 padding-1 text-white text-decoration-none">Take back your home</button>
          </div>
        </Slide>
        <h2 class="text-white">Title</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: 'Hamburger',
  props: {
    msg: String
  },
  components: {
    Slide
  }
}
</script>

<style>
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
.justify-content-center {
  justify-content: center;
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
.text-align-center {
  text-align: center;
}
.text-white {
  color: #FFF7F7;
}
.bm-menu {
  background: #405179!important;
}
span.bm-burger-bars.line-style {
  background-color: #FFF7F7!important;
}
.bm-burger-button {
  height: 1em!important;
  width: 1em!important;
  top: 25px!important;
}
.bm-cross {
 background: white!important;
}

#about {
  border-top: 0.05em solid #FFF7F7;
}

#campaign {
  border-top: 0.05em solid #FFF7F7;
}

#voices {
  border-top: 0.05em solid #FFF7F7;
}

#act {
  border-top: 0.05em solid #FFF7F7;
}

</style>
