<template>
  <div id="collection">
    <!-- <div id="search-panel">
      Search Bar
    </div> -->
    <div id="cards-panel">
      <div class="cards-set">
        <div class="set-year">
          <span class="cn-year">渡鸦年</span>
          <span class="en-year">Raven</span>
          <div class="set-expansion">
            <span class="cn-expansion">女巫森林</span>
            <span class="en-expansion">Delve Into The Witchwood</span>
            <div class="set-main">
              <el-tabs v-model="activeClass" @tab-click="changeClass">
                <el-tab-pane name="zs">
                  <span slot="label" class="zs-color">
                    战士
                  </span>
                  0
                </el-tab-pane>
                <el-tab-pane name="lr">
                  <span slot="label" class="lr-color">
                    猎人
                  </span>
                  1
                </el-tab-pane>
                <el-tab-pane name="sm">
                  <span slot="label" class="sm-color">
                    萨满
                  </span>
                  2
                </el-tab-pane>
                <el-tab-pane name="dz">
                  <span slot="label" class="dz-color">
                    盗贼
                  </span>
                  3
                </el-tab-pane>
                <el-tab-pane name="fs">
                  <span slot="label" class="fs-color">
                    法师
                  </span>
                  4
                </el-tab-pane>
                <el-tab-pane name="xd">
                  <span slot="label" class="xd-color">
                    德鲁伊
                  </span>
                  5
                </el-tab-pane>
                <el-tab-pane name="qs">
                  <span slot="label" class="qs-color">
                    骑士
                  </span>
                  6
                </el-tab-pane>
                <el-tab-pane name="ms">
                  <span slot="label" class="ms-color">
                    牧师
                  </span>
                  7
                </el-tab-pane>
                <el-tab-pane name="ss">
                  <span slot="label" class="ss-color">
                    术士
                  </span>
                  8
                </el-tab-pane>
                <el-tab-pane name="zl">
                  <span slot="label" class="zl-color">
                    中立
                  </span>
                  9
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
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
      activeClass: 'dz'
    }
  },
  methods: {
    load () {
      console.log('load cards')
    },
    changeClass () {

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
  font-family: 'benmo';

  .set-year {
    padding-top: 10px;
    margin-bottom: 10px;
    height: 40px;
    line-height: 40px;
    font-size: 25px;
    color: #48d436;
    border-bottom: 1px solid;

    .en-year {
      font-size: 15px;
    }

    .set-expansion {
      margin-top: 10px;
      padding: 10px;
      height: 25px;
      line-height: 25px;
      font-size: 18px;
      color: mediumpurple;

      .en-expansion {
        font-size: 10px;
      }

      .set-main {
        color: #b7bac0;
        margin-top: 10px;
      }
    }
  }
}

#search-panel {
  border: 1px solid rgb(238, 200, 144);
}
</style>
