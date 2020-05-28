<template>
  <div id="app">
    <Home/>
   <HomePageContentRow v-for="article in articles" :key = "article">
    <p>{{article.title}}</p>
    </HomePageContentRow>
  </div>
</template>

<script>
import Home from './components/Home.vue';
// import HacktivismFooter from './components/HacktivismFooter.vue';
import HomePageContentRow from './components/HomePageContentRow.vue'
// import rowContent from './modules/rowContent.json'

export default {
  name: 'App',
  components: {
    Home,
    // HacktivismFooter,
    HomePageContentRow
  }, 
  data: ()=> {
    return{
        articles: [
        {
            title: 'I SCREAM INTO THE VOIIIIIDOIDOIDOIOIDOID'
        }
    ]
    }
},
  props: {
    article: undefined
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
