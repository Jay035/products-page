import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Products from '../views/Products.vue';

const routes = [
    {
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/register',
    name: 'Register',
    component: Register
},
{
    path: '/',
    name: 'Products',
    component: Products
}
]


const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router     