import {createRouter, createWebHashHistory} from 'vue-router'

import Home from './Home'
import About from './About'

export default createRouter ({
    // Hash(createWebHashHistory()), History(createWebHistory())
    // https://google.com/#/login => Hash
    // https://google.com/login => History
    history: createWebHashHistory(),
    routes:[
        {
            path : "/", // https://google.com 메인
            component: Home
        },
        {
            path : "/about", // https://google.com/about
            component: About
        },
    ]
})