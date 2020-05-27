<template>
  <div class="container">
   <HeroBanner/>
    <section class="main_body">

    <section class="aboutUsHome">

      <section class="AbLeftHome">

        <section class="photoAboutLeft">


          <img class="imageAbout" src="https://images.pexels.com/photos/54276/pexels-photo-54276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">


        </section>

        <section class="photoAboutRight">

          <img class="imageAbout" src="https://images.pexels.com/photos/54276/pexels-photo-54276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">


          <img class="imageAbout" src="https://images.pexels.com/photos/54276/pexels-photo-54276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">

        </section>

      </section>

      <section class="AbRightHome">

        <h2>Movement</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>

      </section>

    </section>

  </section>


  </div> 
</template>

<script>
import HeroBanner from './HeroBanner.vue';
  export default {
    name: 'Home',
    components: {
    HeroBanner
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  h3 {
    margin-bottom: 5%;
  }

  .main_body {

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;

}

.aboutUsHome {
  display: flex;
flex-flow: row nowrap;
height: 100vh;
width: 100vw;
}

.AbLeftHome {
  display: flex;
  flex-basis: 66.66%;
}

.photoAboutLeft {

  flex-basis: 50%;
  display: flex;
justify-content: center;
align-items: center;

}

.photoAboutRight{

  display: flex;
  flex-basis: 50%;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;

}

.imageAbout {
  height: 250px
}


.AbRightHome {

  display: flex;
  flex-basis: 33.33%;
  justify-content: center;
  flex-flow: column;
  align-items: center

}

.AbRightHome p {
padding: 0 22%;
}


.backgroundBlack {
  background-color: black;
  flex-basis: 75%;
}

.square25 {
  flex-basis: 25%;
}
</style>