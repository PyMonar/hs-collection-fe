<template>
  <div id="app">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true">
      <el-menu-item index="1" route="/collection">收藏</el-menu-item>
      <el-menu-item index="2" route="/achievement">成就</el-menu-item>
      <el-menu-item index="3" route="/summary">心得</el-menu-item>
      <el-menu-item index="4" route="/deck">套牌</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleSelect () {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
