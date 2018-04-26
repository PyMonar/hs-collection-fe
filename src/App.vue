<template>
  <div id="app">
    <nav id="nav">
      <header id="header" @click="changeMenu(1, '/collection')">HearthStone Collection</header>
      <ul id="menu">
        <li>
          <span :class="{'selected': selectedMenu === 1}" @click="changeMenu(1, '/collection')"><i class="el-icon-star-on"></i>收藏</span>
        </li>
        <li>
          <span :class="{'selected': selectedMenu === 2}" @click="changeMenu(2, '/achievement')"><i class="el-icon-picture"></i>成就</span>
        </li>
        <li>
          <span :class="{'selected': selectedMenu === 3}" @click="changeMenu(3, '/summary')"><i class="el-icon-document"></i>心得</span>
        </li>
        <li>
          <span :class="{'selected': selectedMenu === 4}" @click="changeMenu(4, '/deck')"><i class="el-icon-menu"></i>套牌</span>
        </li>
      </ul>
    </nav>
    <main id="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import './assets/styles/common.css'

export default {
  name: 'App',
  data () {
    return {
      selectedMenu: 1
    }
  },
  methods: {
    changeMenu (index, route) {
      this.selectedMenu = index
      this.$router.push({
        path: route
      })
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

#nav {
  height: 80px;
  padding: 0 100px;
  min-width: 1000px;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  background-clip: content-box;
}

#header {
  float: left;
  font-size: 30px;
  font-family: 'Nowayround';
  line-height: 80px;
  padding: 0 20px;
  color: #E6A23C;
  cursor: pointer;
}

ul#menu {
  float: right;
  overflow: hidden;
  line-height: 80px;
}

ul#menu li {
  float: left;
  display: block;
  width: 100px;
  text-align: center;
  font-size: 17px;
}

ul#menu li i {
  padding-right: 7px;
}

ul#menu li span {
  cursor: pointer;
  transition:color .5s;
}

ul#menu li span:hover {
  color: #545557;
}

ul#menu li span.selected {
  color: #E6A23C;
}

#content {
  padding: 20px 100px 0 100px;
}
</style>
