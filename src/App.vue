<template>
  <div id="app">
    <!-- 路由的出口 -->
    <router-view />
    <h3>123</h3>
    <i class="toutiao toutiao-lishi"></i>
    <i class="toutiao toutiao-shanchu"></i>
    <van-button type="primary">主要按钮</van-button>
    <div class="box"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.box {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
