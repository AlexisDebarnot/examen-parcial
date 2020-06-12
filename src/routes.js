import Vue from  'vue'
import VueRouter from 'vue-router'

import Tareas from "./components/Tareas.vue";
import Login from "./components/Login.vue";

Vue.use(VueRouter)

//export const router = new VueRouter({
export default new VueRouter({
    mode: 'history',
    routes: [
	{path: '/', redirect: '/Login'},
      {path: '/Tareas', component: Tareas},
      {path: '/Login', component: Login},
    ]
})

  