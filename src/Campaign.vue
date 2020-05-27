<template>
  <div id="campaign">
    <HeroBanner/>
    <span class="page">Campaigns</span>
    <CampaignPost/>
    <CampaignPost/>
    <CampaignPost/> 
    <HacktivismFooter />
  </div>
</template>

<script>
import HeroBanner from './components/HeroBanner.vue';
import HacktivismFooter from './components/HacktivismFooter.vue';
import CampaignPost from './components/CampaignPost.vue';

export default {
  name: 'App',
  components: {
    HacktivismFooter,
    HeroBanner,
    CampaignPost
  }
}
</script>

<style>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#campaign {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page {
      position: absolute;
    top: 45%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    font-size: 24px;
    border-bottom: solid 0.25px;
    padding: 0 11px;

    animation-name: moveInPage;
    animation-duration: 1s;
    animation-timing-function: ease-out;
}

/* @keyframes moveInPage {
    0% {
        opacity: 0;
        transform: translateX(0px);
    }

    80% {
        transform: translateX(0px);
    }

    100% {
        opacity: 1;
        transform: translate(0px);
    }
} */
</style>