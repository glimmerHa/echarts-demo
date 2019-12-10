import Vue from 'vue'
import Router from 'vue-router'

import FrameView from '@/views/frameView/FrameView.vue'

import chartRoute from './modules/chart'

Vue.use(Router)

const constRoutes =[
    {
        path:'/',
        name:'FrameView',
        component:FrameView,
        redirect:'/document',
        children:[
            {
                path:'document',
                name:'Document',
                component:()=>import('@/views/document/Document.vue'),
            }
        ]
    },
    chartRoute
]

// const routes = _.concat(constRoutes)
const router = new Router({
    mode: 'history',
    routes: constRoutes
})



export default router