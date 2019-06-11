import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio'
import Stocks from './components/stocks/Stocks'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/stocks',
            name: 'stocks',
            component: Stocks
        }
    ]

    
})