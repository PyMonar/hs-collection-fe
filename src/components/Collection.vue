<template>
  <div id="collection">
    <div id="search-panel">
      Search Bar
    </div>
    <div id="cards-panel">
      <div class="cards-set">
        <div class="set-year">
          <span class="cn-year">渡鸦年</span>
          <span class="en-year">Raven</span>
        </div>
        <div class="set-expansion">
          <span class="cn-expansion">女巫森林</span>
          <span class="en-expansion">Delve Into The Witchwood</span>
        </div>
        <div class="set-main">
          <!-- tab? -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collection',
  data () {
    return {

    }
  },
  methods: {
    load () {
      console.log('load cards')
    }
  },
  created () {
    this.load()
  }
}
</script>

<style scoped lang="less">
#collection {
  min-height: 500px;
}

#cards-panel {
  margin-top: 20px;
}

#search-panel {
  border: 1px solid rgb(238, 200, 144);
}
</style>
