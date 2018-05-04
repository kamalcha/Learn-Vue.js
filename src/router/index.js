import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Projects from '@/pages/Projects'
import NUP from '@/pages/NUP'
import Users from '@/pages/User'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/nup',
            component: NUP
        },
        {
            path: '/users',
            name: 'User',
            component: Users
        },
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
    ]
})