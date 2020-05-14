//router 

import Router from "vue-router"; 
import Home from "../src/views/Home.vue";
import About from "../src/views/About.vue"; 

export const routerConfiguration = {
    mode: "history", 
    base: process.env.BASE_URL, 
    ScrollBehavior(){
        return {x:0, y: 0}; 
    }, 
    routes: [
        {
            path:"/", 
            name: "home", 
            component: Home, 
        }, 
        {
            path:"/about", 
            name: "about", 
            component: About, 
        }
    ]
}


const router = new Router(routerConfiguration)
configureRouter(router); 

export default router; 