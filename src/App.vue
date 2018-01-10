<template>
  <div id="app">
   	<m-header></m-header>
   	<tap></tap>
    <keep-alive>
    <router-view></router-view> 
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import mHeader from 'components/m-header/m-header'
import Tap from 'components/tap/tap'

export default {
  name: 'app',
  components: {
    mHeader,
    Tap
  }
}
</script>

<style lang="less">
@import "common/less/index.less";
// #app{
//   color:@color-theme;
// }
</style>