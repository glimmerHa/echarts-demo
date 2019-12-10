import FrameView from '@/views/frameView/FrameView.vue'

const chartRoute ={
    path:'/echarts',
    name:'FrameView',
    component:FrameView,
    children:[
        {
            path:'line',
            name:'Line',
            component:()=>import('@/views/chartLine/Line.vue'),
        }
    ]
}

export default chartRoute