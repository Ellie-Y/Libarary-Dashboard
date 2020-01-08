<template>

  <div class="user-content">
    <div class="user-card" v-for="book in bookData" :key="book.id">
      <template v-if="!book.loaned">
        <div class="icon" @click="loanBook(book)">
          <i class="el-icon-user"></i>
        </div>
      </template>
      <template v-for="user in userData" v-if="book.loaned">
        <!-- By matching loan.bookId and book.id to determine whether this book has been borrowed -->
        <div class="loan" v-for="loan in loanData" v-if="loan.BookId == book.id ? true : false">
          <p v-if="loan.UserId == user.id" :key="loan.id">
            Loaned by: {{ user.barcode }} <br>
            Due: {{ loan.dueDate.slice(0, 10) }}
          </p>
        </div>
      </template>
      <div class="profile">
        <img src="../../assets/images/book.png" alt="Book Image">
        <p class="name">{{ book.title }}</p>
        <!-- Loop book.Authors to display the author name(s) -->
        <p class="id author" v-for="author in book.Authors" :key="author.id">
          [{{ author.name }}]
        </p>
        <p class="id isbn">ISBN: {{ book.isbn }}</p>
      </div>
      <div class="operate-card">
        <div class="update">
          <p @click="update(book)">Update</p>
        </div>
        <div class="delete">
          <p @click="deleteBook(book.id)">Remove</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    created() {
      //initialize book data to display
      this.getBookList(1)
    },
    computed: {
      ...mapState(['userData', 'loanData', 'bookData', 'succeedAlert', 'page'])
    },
    methods: {
      ...mapMutations(['showUpdateForm', 'setBookData', 'setEditBook', 'showLoanForm', 'setLoanBook']),
      ...mapActions(['getBookList']),
      update(book) {
        this.showUpdateForm(true)
        this.setEditBook(book)
      },
      deleteBook(bookId) {
        const flag = confirm('Are you sure to delete it?')
        if (flag) {
          this.$api.delete('/books/' + bookId + '', null, _ => {
            // If only one data left on current page, jump to previous page after deleted. 
            if (this.page.curPage > Math.ceil((this.page.totalCount - 1) / 8)) {
              this.getBookList(this.page.curPage - 1)
            } else {
              this.getBookList()
            }
            this.$alert(this.succeedAlert)
          })
        }
      },
      loanBook(book) {
        // pass the current book data to loanTo component
        this.showLoanForm(true)
        this.setLoanBook(book)
      }
    }
  }

</script>

<style>

  .icon {
    position: absolute;
    right: 20px;
    top: 12px;
    cursor: pointer;
  }
  .el-icon-user {
    font-size: 22px;
    color: #4c4357;
  }

</style>