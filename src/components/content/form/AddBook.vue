<template>

  <div class="wrapper-add">
    <div class="shelter">
      <div class="form">
        <div class="inner-form">
          <div class="title">
            <p>New Book</p>
          </div>
          <div class="name">
            <label for="">Title: </label>
            <input type="text" v-model="book.title">
          </div>
          <div class="id">
            <label for="">ISBN: </label>
            <input type="text" v-model="book.isbn">
          </div>
          <div class="buttons">
            <button class="submit" @click="newBook">Submit</button>
            <button class="cancel" @click="hide">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import { mapMutations, mapActions } from 'vuex'

  export default {
    data() {
      return {
        book: {
          title: '',
          isbn: ''
        }
      }
    },
    methods: {
      ...mapMutations(['showAddForm']),
      ...mapActions(['getBookList']),
      hide() {
        this.showAddForm(false);
      },
      newBook() {
        // Only ISBN and title can be added in here, author can be added when update this book
        // ISBN must be a number and input area cannot be empty to prevent bug
        if (!Number.isNaN(Number(this.book.isbn)) && this.book.title != '' && this.book.isbn != '') {
          this.$api.post('/books', this.book, data => {
            this.showAddForm(false);
            this.$alert(this.$store.state.succeedAlert);
            this.getBookList();
          })
        } else {
          this.$alert(this.$store.state.failedTypeAlert);
        }
      }
    }
  }

</script>

<style>


</style>