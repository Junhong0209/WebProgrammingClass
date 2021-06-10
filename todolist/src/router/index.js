import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/Todo',
        name: 'Todo',
        component: Todo
    },
    {
        path: '/',
        name: 'Main',
        component: Main
    }
]

const router = new VueRouter({
    routes
})

export default router
