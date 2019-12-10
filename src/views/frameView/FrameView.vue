<template>
    <!-- 布局 -->
    <section class="yl-layout yl-clearfloat">
        <nav class="yl-nav">
            <yl-nav></yl-nav>
        </nav>
        <main class="yl-container">
            <!-- <header class="yl-header">头部</header> -->
            <main class="yl-container">
                <router-view></router-view>
            </main>
        </main>
    </section>
    
</template>
<script>
import {ylNav} from './components'
export default {
    name:'FrameView',
    components:{
        ylNav
    }
}
</script>