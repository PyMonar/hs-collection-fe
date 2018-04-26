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
    <footer id="footer">
      <span>{{curYear}}</span>
      <span>@</span>
      <span>Monar</span>
    </footer>
  </div>
</template>

<script>
import './assets/styles/common.css'

export default {
  name: 'App',
  data () {
    return {
      selectedMenu: 1,
      curYear: 0
    }
  },
  methods: {
    changeMenu (index, route) {
      this.selectedMenu = index
      this.$router.push({
        path: route
      })
    }
  },
  created () {
    let now = new Date()
    this.curYear = now.getFullYear()
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #b7bac0;
  font-family: 'Nowayround';
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
  margin: 20px 120px 0 120px;
  min-height: 300px;
}

#footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 80px;
  line-height: 80px;
  text-align: center;
  color: #E6A23C;
  box-shadow: 0px -1px 3px rgba(26,26,26,.1);
}
</style>
