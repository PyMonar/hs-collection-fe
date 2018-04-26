<template>
  <div id="app">
    <header id="header">HearthStone Collection</header>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
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
import './assets/styles/common.css'

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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #b7bac0;
}

#header {
  font-size: 60px;
  font-family: 'Nowayround';
  font-weight: 600;
  line-height: 1.4;
}
</style>
