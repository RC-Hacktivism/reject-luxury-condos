<template>
    <section class="imageBackground">
        <div class='overlay'></div>
        <a>
            <font-awesome-icon class="footerIcons" :icon="{ prefix: 'fas', iconName: 'times' }"/>
        </a>
        <ul>
            <li>Name</li>
            <li>NeigborHood</li>
            <li>Category</li>
        </ul>
        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim officiis eveniet, voluptatem nemo quia facere temporibus nesciunt explicabo quis corrupti magnam natus ducimus incidunt placeat vitae praesentium cumque reprehenderit? Maiores?"</p>
    </section>
</template>

<script>
export default {
    name: 'Testimony'
}
</script>

<style>
    .imageBackground {
        background-image: url('../assets/osman-rana-xJueGJJHnWs-unsplash.jpg');
        padding: 2%;
        border-radius: 12%;
        margin: 2%;
        box-shadow: 0px 5px whitesmoke;
        background-size: cover;
        position: relative;
        height: 300px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width:25%;
    }
    .overlay {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgb(255, 255, 255, .6);
    }

    section a  {
        position: relative;
        flex: 1 1 10%;

    }

        section ul {
        position: relative;
        flex: 1 1 90%;
        list-style: none;
        text-align: right;
        list-style: none;
        text-align: right;
        margin-bottom: 11%;
    }

        section p {
        position: relative;
        flex: 1 1 100%;
    }

    @media (max-width: 400px){
            .imageBackground {
        background-image: url('../assets/osman-rana-xJueGJJHnWs-unsplash.jpg');
        padding: 7%;
        border-radius: 12%;
        margin: 2%;
        box-shadow: 0px 5px whitesmoke;
        background-size: cover;
        position: relative;
        height: 300px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width:100%;
    }
    .overlay {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgb(255, 255, 255, .6);
    }

    section a  {
        position: relative;
        flex: 1 1 10%;

    }

        section ul {
        position: relative;
        flex: 1 1 90%;
        list-style: none;
        text-align: right;
        list-style: none;
        text-align: right;
        margin-bottom: 0;
        
    }

        section p {
        position: relative;
        flex: 1 1 100%;
        text-align:center;

    }
    }
</style>