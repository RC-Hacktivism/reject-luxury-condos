<template>
    <header class='header'>
        <div class='logo-box'>
               <!-- <span>@Hactivism</span> -->
               <img class="logo" alt="Vue logo" src="../assets/Microphone_in_fist.svg.png">
        </div>
        <div class='text-box'>
            <h1 class='heading-primary'>
                <span class="heading-primary-main">Boston</span>
               <span class="heading-primary-main">Homes in Crisis</span>
               <span class="heading-primary-sub">#Hacktivism</span>
            </h1>
            <!-- <a class='btn btn-white btn-animated' href="#">discover our toors</a> -->
        </div>
    </header>
</template>

<script>

  export default {
    name: 'HeroBanner'
  }
</script>

<style>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* set font into Body Parent, good practice to set in body, children inherit this font */

body {
    font-family: "Lato";
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: #777;
    padding: 30px;
}

/* position determines cropping
 */

.header {
    height: 95vh;
    background-image: linear-gradient(to right bottom, 
        rgba(76, 23, 111, 0.801),
        rgba(255, 120, 111, 0.801)),
    url('../assets/osman-rana-xJueGJJHnWs-unsplash.jpg');
    background-size: cover;
    background-position: top;
/* https://bennettfeely.com/clippy/ */
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    /* defined for children that will use abs path */
    position: relative;
}

.logo-box {
position: absolute;
top: 40px;
left: 40px;
}

.logo {
height: 35px;
}

.text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    /* shift element within its position */
    transform: translate(-50%, -50%);
    text-align: center;

}

.heading-primary {
color: #fff;
text-transform: uppercase;
/* hide back part of el, stop raising of animation */
backface-visibility: hidden;
margin-bottom: 60px;
}

.heading-primary-main {
    display: block;
    font-size: 35px;
    font-weight: 400;
    letter-spacing: 5px;
    -webkit-animation-name: moveInLeft;
    animation-name: moveInLeft;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;

}

.heading-primary-sub {
     display: block;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 13.4px;
    -webkit-animation: moveInRight 1s ease-out;
    animation: moveInRight 1s ease-out;
}

@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }

    80% {
        transform: translateX(10px);
    }

    100% {
        opacity: 1;
        transform: translateX(0px);
    }
}

@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }

    80% {
        transform: translateX(-10px);
    }

    100% {
        opacity: 1;
        transform: translate(0px);
    }
}
</style>