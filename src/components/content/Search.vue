<template>

  <div class="search">
    <span class="search-icon"></span>
    <!-- Search users -->
    <input type="text"
           :placeholder="placeholder"
           v-if="this.$route.path == '/user'"
           v-model="keyword"
           @keyup.enter="searchUser">
    
    <!-- Search books -->
    <input type="text"
           :placeholder="placeholder"
           v-if="this.$route.path == '/book'"
           v-model="keyword"
           @keyup.enter="searchBook">
  </div>

</template>

<script>

  import { mapMutations, mapActions } from 'vuex'

  export default {
    props: {
      placeholder: {
        default: 'Search users via name or barcode (Enter)'
      }
    },
    data() {
      return {
        //record search keyword
        keyword: '',
        searchByBar: {
          type: 'user',
          barcode: null
        },
        searchByName: {
          type: 'user',
          name: ''
        },
        searchByTitle: {
          type: 'book',
          title: ''
        },
        searchByAuthorName: {
          type: 'author',
          name: ''
        }
      }
    },
    methods: {
      ...mapMutations(['setUserData', 'setBookData', 'setCount']),
      ...mapActions(['getUserList', 'getBookList']),
      //search when the rounter is user
      searchUser() {
        //Different search types determined by using number or string
        if (this.keyword != '' && !isNaN(this.keyword) == true) {
          this.searchByBar.barcode = this.keyword;
          this.$api.get('/search', this.searchByBar, data => {
            this.setUserData(data.data);
            this.setCount(data.data.length);
          })
        } else if (this.keyword != '' && typeof this.keyword === 'string') {
          this.searchByName.name = this.keyword
          this.$api.get('/search', this.searchByName, data => {
            this.setUserData(data.data);
            this.setCount(data.data.length);
          })
        } else if (this.keyword == '') {
          this.getUserList(1);
        }
      },
      //search when the rounter is book
      searchBook() {
        this.searchByTitle.title = this.keyword;
        this.searchByAuthorName.name = this.keyword;
        if (this.keyword == '') {
          this.getBookList(1);
        } else {
          this.$api.get('/search', this.searchByTitle, data => {
            this.setBookData(data.data);
            this.setCount(data.data.length);
          });
          this.$api.get('/search', this.searchByAuthorName, data => {
            // Modified search server in order to find books here
            // No return value from API means searching via title, then do nothing 
            if (data.data.length == 0) {
              return;
            } else {
              let books = data.data[0].Books;
              this.setBookData(books);
              this.setCount(data.data.length);
            }
          });
        }
      }
    }
  }

</script>

<style>

</style>