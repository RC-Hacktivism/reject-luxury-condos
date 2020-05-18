<template>
  <div class="container">

    <div class="ContentRow">
     
      <div class="blockQuote">
        <img src="https://ssir.org/images/blog/iStockmachinelearning592x333.jpg" alt="">
        <p>"Lorem ipsum sum yodel yodel yodel Lorem ipsum dolor sit amet, sodal"</p>
      </div>

      <p>"Lorem ipsum dolor sit amet, sodales amet felis tincidunt ac, in tincidunt in nonummy sed. Purus cras massa, suspendisse et in diam, tortor ut amet sed sagittis, tempor vitae eleifend at dui. At viverra et nunc ultricies."</p>
      <Button/>
    </div>
    
  </div> 
</template>

<script>
import Button from './Button.vue';
  export default {
    name: 'HomePageContentRow',
    components: {
    Button
    }
  }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
  .ContentRow{
    width: 100%; 
    overflow:auto;
    display: flex;
    flex-flow:column wrap; 
    align-items: center;
    margin: 0 0 50px 0; 
  }
  .ContentRow img{
    width: 45%; 
    height: 160px;
    overflow: auto;  
  } 
  .blockQuote{
    margin: 0 0 15px 0;
  }
  .blockQuote p{
    background: #405178; 
    color: white; 
    border-top-right-radius: 30px;
    padding:10px; 
    margin: 40px 0 0 0;
    width:55%;
  }
  .ContentRow div{ 
    display:flex; 
  }
  .ContentRow Button{
    align-items: center; 
  }
  .blockQuote{
    flex-direction: row; 
    width: 100%; 
  }



</style>