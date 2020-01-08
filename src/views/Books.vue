<template>
<<<<<<< HEAD
  <!-- inner-content 这个 div不会被显示，只是包裹里面的 dom元素 -->
  <!-- template 下面只有有一层子元素 -->
  <div class="inner-content">
    <div class="topArea">
      <!-- 分成四个小组件：搜索，分类，添加，展示 -->
      <search />
      <sort />
      <add />
    </div>
    <!-- 书本内容的展示 -->
    <display />
  </div>
 
=======

  <div class="inner-content">
    <div class="topArea">
      <!-- Book router separates to four components, display, search, sort and add -->
      <search :placeholder="placeholder" />
      <sort-book />
      <add />
    </div>
    <display-book />
    <update-book v-if="showForm" />
    <add-book-form v-if="addForm" />
    <loan-form v-if="loanForm" />
    <pagination />
  </div>

>>>>>>> final
</template>

<script>

<<<<<<< HEAD
 import Search from '../components/content/Search.vue'
 import Sort from '../components/content/Sort.vue'
 import Add from '../components/content/Add.vue'
 import Display from '../components/content/Display.vue'

 export default {
   components: {
     Search,
     Sort,
     Add,
     Display
   }
 }
=======
  import Search from '../components/content/Search.vue'
  import Add from '../components/content/Add.vue'
  import SortBook from '../components/content/SortBook.vue'
  import DisplayBook from '../components/content/DisplayBook.vue'
  import UpdateBook from '../components/content/form/UpdateBook.vue'
  import AddBookForm from '../components/content/form/AddBook.vue'
  import LoanForm from '../components/content/form/LoanTo.vue'
  import Pagination from '../components/content/Pagination.vue'

  import { mapState, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        placeholder: 'Search books via title or author (Enter)',
        type: 'book'
      }
    },
    components: {
      Search,
      Add,
      SortBook,
      DisplayBook,
      UpdateBook,
      AddBookForm,
      LoanForm,
      Pagination
    },
    computed: {
      ...mapState(['showForm', 'addForm', 'loanForm', 'allBookData'])
    },
    methods: {
      ...mapMutations(['setAllBookData'])
    },
    created() {
      this.$api.get('/books', null, data => {
        this.setAllBookData(data.data);
      })
    }
  }
>>>>>>> final

</script>

<style>

</style>