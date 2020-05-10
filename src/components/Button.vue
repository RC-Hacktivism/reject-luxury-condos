<template>
  <div class="container">
    <a class='btn btn-white' href="#">Hacktivism</a>
  </div> 
</template>

<script>

  export default {
    name: 'Button'

  }
</script>

<style>
.btn:link, .btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 40px;
    display: inline-block;
    border-radius: 100px;
    /* not specified */
    transition: all .2s;
}

.btn:hover {
    transform: translateY(-3px);
    /* x, epsilon, blur */
    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
}

.btn:active{
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
}

.btn-white {
    background-color: #fff;
    color: #777;
}
</style>