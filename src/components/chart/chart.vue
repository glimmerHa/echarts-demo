<template>
    <div :style="{height:height,width:width}"></div>
</template>
<script>
import echarts from 'echarts'
import mixinchart from './mixin.js'
export default {
    name:'ylChart',
    mixins: [mixinchart],
    props:{
        chartOptions:{
            type: Object,
            required: true
        }
    },
    watch:{
        chartOptions:{
            deep:true,
            handler:function(){
                this.initChartObj()
            }
        }
    },
    methods:{
         __resizeHandler(){
            // console.log('监听到了呀~')
            return this.debounce(() => {
                this.initChart()
            }, 100)()
        },
        initChart(){
            this.getStyle()
            if (this.chart) {
                this.$nextTick(()=>{
                    this.chart.resize()
                })
            }else{
                this.initChartObj()
            }
        },
        getStyle(){
            if(!this.parent){
                this.parent  = this.$el.parentNode
            }
            this.width= `${this.parent.clientWidth - parseFloat(this.getPStyle(this.parent, 'paddingLeft')) - parseFloat(this.getPStyle(this.parent, 'paddingRight'))}px`
            this.height= `${this.parent.clientHeight}px`
        },
        setOptions(){
            this.chart.setOption(this.chartOptions)
        },
        initChartObj(){
            this.$nextTick(()=>{
                if(this.chart){
                    this.chart.clear()
                }
                this.chart = echarts.init(this.$el)
                
                this.setOptions()
            })
        },
    }
}
</script>