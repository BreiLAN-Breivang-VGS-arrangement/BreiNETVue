import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Crewpanel from './components/Crewpanel.vue';
import Login from './components/Login.vue';
import Tournaments from './components/Tournaments.vue';
import Register from './components/Register.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Tournaments',
        name: 'Tournaments',
        component: Tournaments
    },
    {
        path: '/Crewpanel',
        name: 'Crewpanel',
        component: Crewpanel
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;