<template>

  <div class="wrapper-add">
    <div class="shelter">
      <div class="form">
        <div class="inner-form loan-form">
          <div>
            <p class="title">Loan this book to: </p>
          </div>
          <div class="profile">
            <img src="../../../assets/images/book.png" width="80px;" alt="Book Image">
            <p class="book-name">{{ loanBook.title }}</p>
          </div>
          <div class="name">
            <input type="text" placeholder="Create by barcode"
              v-model="userId">
          </div>
          <div class="buttons">
            <button class="submit" @click="submitLoan">Submit</button>
            <button class="cancel" @click="cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    data() {
      return {
        userId: '',
        due: {
          dueDate: this.createDueDate()
        }
      }
    },
    computed: {
      ...mapState(['loanBook', 'succeedAlert', 'allUserData', 'failedTypeAlert'])
    },
    methods: {
      ...mapMutations(['showLoanForm']),
      ...mapActions(['getBookList']),
      // Borrowing time is a month
      createDueDate() {
        let nowdate = new Date();
        let y = nowdate.getFullYear(),
            m = nowdate.getMonth() - 2,
            d = nowdate.getDate();
        return y + ''+ m + '-' + d;
      },
      submitLoan() {
        // Matching member barcode and id to create a loan
        if(!Number.isNaN(Number(this.userId)) && this.userId != '') {
          this.allUserData.forEach(user => {
            if(this.userId == user.barcode) {
              this.userId = user.id;
              this.$api.post('/users/'+this.userId+'/loans/'+this.loanBook.id+'', this.due, _ => {
                this.showLoanForm(false);
              });
            }
          });
          this.$api.put('/books/loanUpdate/'+this.loanBook.id+'', null, _ => {
            this.getBookList();
            this.$alert(this.succeedAlert);
          });      
        } else {
          this.$alert(this.failedTypeAlert);
        }
      },
      cancel() {
        this.showLoanForm(false);
      }
    }
  }

</script>

<style lang="less">
  input::-webkit-input-placeholder {
    color: #bbb;
  }
  .loan-form {
    color: #4c4357;
    .title {
      font-weight: bold;
    }
    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      .book-name {
        margin-top: 20px;
      }
    }
  }

</style>