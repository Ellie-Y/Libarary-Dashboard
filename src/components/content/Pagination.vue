<template>

  <div class="block">
    <el-pagination 
      v-if="this.$route.path == '/user'"
      layout="prev, pager, next" :page-count="page.totalPage"
      :current-page.sync="page.curPage"
      @current-change="userPageChange">
    </el-pagination>
    
    <el-pagination 
      v-if="this.$route.path == '/book'"
      layout="prev, pager, next" :page-count="page.totalPage"
      :current-page.sync="page.curPage"
      @current-change="bookPageChange">
    </el-pagination>
    
  </div>

</template>

<script>

  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState(['page'])
    },
    methods: {
      ...mapActions(['getUserList', 'getBookList']),
      userPageChange(page) {
        //pass the current page number when page changed
        this.getUserList(page);
      },
      bookPageChange(page) {
        this.getBookList(page)
      }
    }
  }

</script>

<style>
  .el-pagination {
    position: fixed;
    right: 30px;
    bottom: 20px;
  }
</style>