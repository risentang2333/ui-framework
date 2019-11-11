<template>
  <el-container>
    <el-header>
      <div class="brand">
        <img style="width: 60px;height: 60px;" src="../assets/logo.png" alt="">
        <div>商标</div>
      </div>
      <slot name="header"></slot>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <slot name="aside"></slot>
      </el-aside>
      <el-container :style="{minHeight: siteContentViewHeight + 'px'}">
        <el-main :style="{minHeight: siteTableViewHeight + 'px'}">
          <slot name="main"></slot>
        </el-main>
        <el-footer>
          <slot name="footer"></slot>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
    }
  },
  computed: {
    documentClientHeight: {
      get () { return this.$store.state.common.documentClientHeight },
      set (val) {
        this.$store.commit('common/updateDocumentClientHeight', val)
      }
    },
    siteContentViewHeight () {
      return this.documentClientHeight - 60
    },
    siteTableViewHeight () {
      return this.documentClientHeight - 60 - 60
    }
  },
  methods: {
    // 重置窗口可视高度
    resetDocumentClientHeight () {
      this.documentClientHeight = document.documentElement['clientHeight']
      window.onresize = () => {
        this.documentClientHeight = document.documentElement['clientHeight']
      }
    }
  },
  mounted () {
    this.resetDocumentClientHeight()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.brand {
  display: flex;
  background: #0BB2D4;
  float: left;
  width: 200px;
  height: 100%;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
