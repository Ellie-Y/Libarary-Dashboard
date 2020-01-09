<template>

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

</template>

<script>

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
    }
  }

</script>

<style>

</style>