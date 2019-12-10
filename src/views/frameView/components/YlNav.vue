<template>
    <div>
        <a-menu
        @click="handleClick"
        :defaultSelectedKeys="['1']"
        :openKeys.sync="openKeys"
        mode="inline">
    <a-sub-menu key="echarts" @titleClick="titleClick">
        <span slot="title"><a-icon type="area-chart" /><span>echarts</span></span>
        <a-menu-item-group key="g1">
        <template slot="title"><span>折线图</span></template>
        <a-menu-item key="line">折线图</a-menu-item>
        <!-- <a-menu-item key="2">Option 2</a-menu-item> -->
      </a-menu-item-group>
      <!-- <a-menu-item-group key="g2" title="Item 2">
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
      </a-menu-item-group> -->
    </a-sub-menu>
    <a-sub-menu key="sub2" @titleClick="titleClick">
      <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-sub-menu key="sub3" title="Submenu">
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="sub4">
      <span slot="title"><a-icon type="setting" /><span>Navigation Three</span></span>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
      <a-menu-item key="11">Option 11</a-menu-item>
      <a-menu-item key="12">Option 12</a-menu-item>
    </a-sub-menu>
  </a-menu>
    </div>
</template>
<script>
export default {
    name:'YlNav',
    data () {
    return {
      current: ['mail'],
      openKeys: ['echarts'],
    }
  },
  methods: {
    // 点击
    handleClick (e) {
    //   console.log('click', e.keyPath, e.keyPath.reverse().join('/'))
      // 切换路由
      this.$router.push(e.keyPath.reverse().join('/'));
    },
    // 一级导航栏点击
    titleClick (e) {
      console.log('titleClick', e)
    },
  },
  watch: {
    openKeys (val) {
      console.log('openKeys', val)
    },
  },
}
</script>